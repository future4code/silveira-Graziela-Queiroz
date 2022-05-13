import React from 'react'
import CommentsCard from './CommentsCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Botao from '../../components/Botao';
import useForm from '../../hooks/useForm';
import axios from 'axios';


const CommentsPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const [comentario, onChange, clear] = useForm({ body: '' })

  //Pega todos os posts da api
  const params = useParams();
  const commentList = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
  console.log(commentList)

  const commentsMap = commentList && commentList.map((comment) => {
    return (
      <div>
        <CommentsCard
          key={comment.id}
          username={comment.username}
          voteSum={comment.voteSum}
          body={comment.body}
        >
        </CommentsCard>
      </div>
    )
  })

   //Cria o post
   const createComentario = async () => {
    
    await axios.post(`${BASE_URL}/posts/${params.id}/comments`, comentario, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((res) => {
        console.log('comentario', res)
        alert("Comentario adicionado com Sucesso")
        clear()
      })
      .catch((err) => {
        console.log('erro', err)
        alert(err.response.data.message)
      })
  }

  //funcao que envia o post
  const onSubmitComentario = (event) => {
    event.preventDefault()
    createComentario()
    clear()
  }
   console.log(comentario)

  return (
    <div>
      <Container maxWidth="md" component="main">
        <form onSubmit={onSubmitComentario} >
          <TextField
            id="outlined-multiline"
            name={'body'}
            value={comentario.body}
            onChange={onChange}
            multiline
            minRows={4}
            variant="outlined"
            placeholder="Comentario....."
          />
          <Botao
            nome={'Comentar'}
            tipo={"submit"}
            cor={"secondary"}
          />
        </form>

        {commentsMap}
      </Container>
    </div>
  )
}

export default CommentsPage