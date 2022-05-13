import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import FeedCard from './FeedCard'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Botao from '../../components/Botao';
import useForm from '../../hooks/useForm';
import { goToComentario } from '../../routes/coordinator';

const FeedPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const [post, onChange, clear] = useForm({ title: '', body: '' })
  // const [like, onChange, clear] = useForm({ direction: '' })

  //Pega todos os posts da api
  const feedList = useRequestData([], `${BASE_URL}/posts`)
  console.log(feedList)

  //ir para detalhe do post
  const onClickCard = (id) => {
    goToComentario(navigate, id)
  }

  //Da o like
  const onClickLike = (id) => {
    console.log('ID', id)
    const body = {direction: 1}
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((res) => {
        console.log('like', res)
        alert("Like adicionado com Sucesso")
        clear()
      })
      .catch((err) => {
        console.log('erro', err)
        alert(err.response.data.message)
      })
  }

  //Da o deslike
  const onClickDeslike = (id) => {
    const body = {direction: -1}
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((res) => {
        console.log('post', res)
        alert("Deslike realizado com Sucesso")
        clear()
      })
      .catch((err) => {
        console.log('erro', err)
        alert(err.response.data.message)
      })
  }

  //renderiza cada post em um card
  const cardFeed = feedList.map((feeds) => {
    return (
      <FeedCard
        key={feeds.id}
        goToComentario= {() => onClickCard(feeds.id)}
        username={feeds.username}
        title={feeds.title}
        body={feeds.body}
        voteSum={feeds.voteSum}
        commentCount={feeds.commentCount}
        id={feeds.id}
        like={() => onClickLike(feeds.id)}
        deslike={() => onClickDeslike(feeds.id)}
      />
    )
  })

  //Cria o post
  const createPost = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}/posts`, post, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((res) => {
        console.log('post', res)
        alert("Post adicionado com Sucesso")
        clear()
      })
      .catch((err) => {
        console.log('erro', err)
        alert(err.response.data.message)
      })
  }

  //funcao que envia o post
  const onSubmitPost = (event) => {
    event.preventDefault()
    createPost()
    clear()
  }

  return (
    <Container maxWidth="md" component="main">
      <form onSubmit={onSubmitPost}>
        <TextField
          id="outlined-multiline"
          name={'title'}
          value={post.title}
          onChange={onChange}
          multiline
          minRows={1}
          variant="outlined"
          placeholder="Titulo"
        />
        <TextField
          id="outlined-multiline"
          name={'body'}
          value={post.body}
          onChange={onChange}
          multiline
          minRows={4}
          variant="outlined"
          placeholder="No que você esta pensando?"
        />
        <Botao
          nome={'Postar'}
          tipo={"submit"}
          cor={"secondary"}
        />
      </form>

      <div>
        {cardFeed}
      </div>

    </Container>
  )
}

export default FeedPage