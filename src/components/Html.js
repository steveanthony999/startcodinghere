import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Link, Paper } from '@material-ui/core';
import CourseCard from './CourseCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    color: theme.palette.text.secondary,
    marginTop: '2rem',
  },
  linkStyle: {
    display: 'block',
    textAlign: 'center',
  },
  control: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: '#0f0f0f17',
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

const Html = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth='lg'>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant='h2'
              component='h2'
              gutterBottom
              className={classes.heading}
              align='center'
            >
              HTML
            </Typography>
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
            <Typography
              variant='h4'
              component='h2'
              gutterBottom
              className={classes.heading}
              align='center'
            >
              Crash Courses
            </Typography>
            <Grid container justify='center'>
              {/* Traversy */}
              <Paper className={classes.control} square={true}>
                <iframe
                  width='275'
                  height='200'
                  src='https://www.youtube.com/embed/UB1O30fR-EE'
                  frameborder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                  title='html crash course by brad traversy'
                ></iframe>
                <CourseCard
                  className={classes.paper}
                  category='VIDEOS'
                  title='HTML Crash Course For Absolute Beginners'
                  author='Brad Traversy'
                  href='https://youtu.be/UB1O30fR-EE'
                />
              </Paper>
              {/* codeSTACKr */}
              <Paper className={classes.control} square={true}>
                <iframe
                  width='275'
                  height='200'
                  src='https://www.youtube.com/embed/XiQ9rjaa2Ow'
                  frameborder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
                <CourseCard
                  className={classes.paper}
                  category='VIDEOS'
                  title='HTML Crash Course in 30 Minutes'
                  author='codeSTACKr'
                  href='https://youtu.be/XiQ9rjaa2Ow'
                />
              </Paper>
              {/* freeCodeCamp */}
              <Paper className={classes.control} square={true}>
                <iframe
                  width='275'
                  height='200'
                  src='https://www.youtube.com/embed/pQN-pnXPaVg'
                  frameborder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
                <CourseCard
                  className={classes.paper}
                  category='VIDEOS'
                  title='HTML Full Course - Build a Website Tutorial'
                  author='freeCodeCamp'
                  href='https://youtu.be/pQN-pnXPaVg'
                />
              </Paper>
            </Grid>
            <Typography
              variant='h4'
              component='h2'
              gutterBottom
              className={classes.heading}
              align='center'
            >
              The Basics of HTML
            </Typography>
            <Typography
              variant='h4'
              component='h2'
              gutterBottom
              className={classes.heading}
              align='center'
            >
              Semantic HTML
            </Typography>
            <Typography
              variant='h4'
              component='h2'
              gutterBottom
              className={classes.heading}
              align='center'
            >
              Accessibility
            </Typography>
            <Typography
              variant='h4'
              component='h2'
              gutterBottom
              className={classes.heading}
              align='center'
            >
              Forms and Validation
            </Typography>
            <Typography
              variant='h4'
              component='h2'
              gutterBottom
              className={classes.heading}
              align='center'
            >
              SEO Basics
            </Typography>
            <Typography
              variant='h4'
              component='h2'
              gutterBottom
              className={classes.heading}
              align='center'
            >
              Best Practices
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Html;
