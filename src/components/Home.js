import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from './Card';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: '#0f0f0f17',
  },
  heading: {
    color: theme.palette.text.secondary,
    marginTop: '2rem',
  },
  linkStyle: {
    display: 'block',
    textAlign: 'center',
  },
  routerLinkStyle: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth='lg'>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <div style={{ width: '100%', height: '100px' }}>
              <Typography
                variant='h2'
                component='h2'
                gutterBottom
                className={classes.heading}
                align='center'
              >
                <RouterLink to='html' className={classes.routerLinkStyle}>
                  HTML
                </RouterLink>
              </Typography>
            </div>
            <Typography
              align='center'
              variant='body2'
              color='textSecondary'
              paragraph={true}
            >
              HTML5 (Hypertext Markup Language revision 5) is a markup language
              used for structuring and presenting content on the World Wide Web.
            </Typography>
            <Link
              variant='body2'
              color='primary'
              paragraph={true}
              href='https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20is%20a%20markup%20language,Web%20Consortium%20(W3C)%20recommendation.&text=HTML5%20is%20intended%20to%20subsume,and%20DOM%20Level%202%20HTML.'
              target='_blank'
              className={classes.linkStyle}
            >
              Wikipedia
            </Link>
            <Grid container justify='center'>
              <Paper className={classes.control} square={true}>
                <Card
                  className={classes.paper}
                  category='VIDEOS'
                  title='YouTube Videos'
                  description='HTML tutorials from YouTube'
                  link='/html/videos'
                />
              </Paper>
              <Paper className={classes.control} square={true}>
                <Card
                  className={classes.paper}
                  category='ARTICLES'
                  title='Articles from the Web'
                  description='HTML articles from around the web'
                  link='/html/articles'
                />
              </Paper>
              <Paper className={classes.control} square={true}>
                <Card
                  className={classes.paper}
                  category='COURSES'
                  title='Free Courses'
                  description='HTML guided courses'
                  link='/html/courses'
                />
              </Paper>
            </Grid>
            <Typography
              variant='h2'
              component='h2'
              gutterBottom
              className={classes.heading}
              align='center'
            >
              CSS
            </Typography>
            <Typography
              align='center'
              variant='body2'
              color='textSecondary'
              paragraph={true}
            >
              CSS (Cascading Style Sheets) is a style sheet language used for
              describing the presentation of a document written in a markup
              language like HTML.
            </Typography>
            <Link
              variant='body2'
              color='primary'
              paragraph={true}
              href='https://en.wikipedia.org/wiki/Cascading_Style_Sheets'
              target='_blank'
              className={classes.linkStyle}
            >
              Wikipedia
            </Link>
            <Grid container justify='center'>
              <Paper className={classes.control} square={true}>
                <Card
                  className={classes.paper}
                  category='VIDEOS'
                  title='YouTube Videos'
                  description='CSS tutorials from YouTube'
                  link='/css/videos'
                />
              </Paper>
              <Paper className={classes.control} square={true}>
                <Card
                  className={classes.paper}
                  category='ARTICLES'
                  title='Articles from the Web'
                  description='CSS articles from around the web'
                  link='/css/articles'
                />
              </Paper>
              <Paper className={classes.control} square={true}>
                <Card
                  className={classes.paper}
                  category='COURSES'
                  title='Free Courses'
                  description='CSS guided courses'
                  link='/css/courses'
                />
              </Paper>
            </Grid>
            <Typography
              variant='h2'
              component='h2'
              gutterBottom
              className={classes.heading}
              align='center'
            >
              JavaScript
            </Typography>
            <Typography
              align='center'
              variant='body2'
              color='textSecondary'
              paragraph={true}
            >
              JavaScript is a scripting language that enables you to create
              dynamically updating content, control multimedia, animate images,
              and pretty much everything else.
            </Typography>
            <Link
              variant='body2'
              color='primary'
              paragraph={true}
              href='https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
              target='_blank'
              className={classes.linkStyle}
            >
              Mozilla
            </Link>
            <Grid container justify='center'>
              <Paper className={classes.control} square={true}>
                <Card
                  className={classes.paper}
                  category='VIDEOS'
                  title='YouTube Videos'
                  description='JavaScript tutorials from YouTube'
                  link='/javascript/videos'
                />
              </Paper>
              <Paper className={classes.control} square={true}>
                <Card
                  className={classes.paper}
                  category='ARTICLES'
                  title='Articles from the Web'
                  description='JavaScript articles from around the web'
                  link='/javascript/articles'
                />
              </Paper>
              <Paper className={classes.control} square={true}>
                <Card
                  className={classes.paper}
                  category='COURSES'
                  title='Free Courses'
                  description='JavaScript guided courses'
                  link='/javascript/courses'
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Home;
