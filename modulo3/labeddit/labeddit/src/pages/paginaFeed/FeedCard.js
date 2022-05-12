import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AddCommentIcon from '@material-ui/icons/AddComment';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const FeedCard = (props) => {

  const { title, body, id } = props.post;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" component="main">
        <Card>
          <CardHeader>{title}</CardHeader> 
          <CardContent>
            <Typography variant="subtitle1" align="center" key={id}>
              {body}
            </Typography>
          </CardContent>
          <CardActions>
            <ThumbUpAltIcon variant={"contained"} color="action">Like</ThumbUpAltIcon>
            <ThumbDownAltIcon variant={"contained"} color="action">Deslike</ThumbDownAltIcon>
            <AddCommentIcon variant={"contained"} color="action"></AddCommentIcon>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default FeedCard