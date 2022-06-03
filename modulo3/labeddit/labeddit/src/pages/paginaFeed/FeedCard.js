import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AddCommentIcon from '@material-ui/icons/AddComment';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';

const FeedCard = (props) => {

  // const { username, title, body, id } = props.post;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" component="main">
        <Card>
            <Typography variant="subtitle1" align="center" >
              Enviado por: {props.username}
            </Typography>
          <CardContent>
            <Typography variant="subtitle1" align="center" >
              {props.title}
            </Typography>

            <Typography variant="subtitle1" align="center" >
              {props.body}
            </Typography>
          </CardContent>
          <CardActions>
            <ThumbUpAltIcon onClick={props.like} variant={"contained"} color="action">Like </ThumbUpAltIcon>
            <Typography variant="subtitle1">{props.voteSum}</Typography>
            <ThumbDownAltIcon onClick={props.deslike} variant={"contained"} color="action">Deslike </ThumbDownAltIcon>
            <AddCommentIcon onClick={props.goToComentario} variant={"contained"} color="action"></AddCommentIcon>
            <Typography variant="subtitle1">{props.commentCount}</Typography>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default FeedCard