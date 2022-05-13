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

const CommentsCard = (props) => {

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md" component="main">
          <Card>
            <Typography variant="subtitle1" align="center" >
              Comentado por: {props.username}
            </Typography>
            <CardContent>
              <Typography variant="subtitle1" align="center" >
                {props.body}
              </Typography>
            </CardContent>
            <CardActions>
              <ThumbUpAltIcon variant={"contained"} color="action">Like</ThumbUpAltIcon>
              <Typography variant="subtitle1">{props.voteSum}</Typography>
              <ThumbDownAltIcon variant={"contained"} color="action">Deslike</ThumbDownAltIcon>
            </CardActions>
          </Card>
        </Container>
      </React.Fragment>
    </div>

  )
}

export default CommentsCard