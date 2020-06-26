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
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
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
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
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
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
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
            <Grid container justify='center'>
              {/* Mozilla (MDN) */}
              <Paper className={classes.control} square={true}>
                <Link
                  href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics'
                  target='_blank'
                >
                  <img src='https://source.unsplash.com/275x200/?html' />
                </Link>
                <CourseCard
                  className={classes.paper}
                  category='ARTICLES'
                  title='HTML basics'
                  author='MDN web docs'
                  href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics'
                />
              </Paper>
              {/* W3Schools */}
              <Paper className={classes.control} square={true}>
                <Link
                  href='https://www.w3schools.com/html/default.asp'
                  target='_blank'
                >
                  <img src='https://source.unsplash.com/274x200/?html' />
                </Link>
                <CourseCard
                  className={classes.paper}
                  category='ARTICLES'
                  title='HTML Tutorial'
                  author='w3schools'
                  href='https://www.w3schools.com/html/default.asp'
                />
              </Paper>
              {/* GeeksforGeeks */}
              <Paper className={classes.control} square={true}>
                <Link
                  href='https://www.geeksforgeeks.org/html-basics/'
                  target='_blank'
                >
                  <img src='https://source.unsplash.com/275x201/?html' />
                </Link>
                <CourseCard
                  className={classes.paper}
                  category='ARTICLES'
                  title='HTML | Basics'
                  author='GeeksforGeeks'
                  href='https://www.geeksforgeeks.org/html-basics/'
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
              Semantic HTML
            </Typography>
            <Grid container justify='center'>
              {/* Net Ninja */}
              <Paper className={classes.control} square={true}>
                <iframe
                  width='275'
                  height='200'
                  src='https://www.youtube.com/embed/kGW8Al_cga4'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
                <CourseCard
                  className={classes.paper}
                  category='VIDEOS'
                  title='HTML & CSS Crash Course Tutorial #6 - HTML 5 Semantics'
                  author='The Net Ninja'
                  href='https://www.youtube.com/watch?v=kGW8Al_cga4'
                />
              </Paper>
              {/* W3Schools */}
              <Paper className={classes.control} square={true}>
                <Link
                  href='https://www.w3schools.com/html/html5_semantic_elements.asp'
                  target='_blank'
                >
                  <img src='https://source.unsplash.com/275x199/?html' />
                </Link>
                <CourseCard
                  className={classes.paper}
                  category='ARTICLES'
                  title='HTML Semantic Elements'
                  author='w3schools'
                  href='https://www.w3schools.com/html/html5_semantic_elements.asp'
                />
              </Paper>
              {/* BuildAModule */}
              <Paper className={classes.control} square={true}>
                <iframe
                  width='275'
                  height='200'
                  src='https://www.youtube.com/embed/z9_rdtdA2BQ'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
                <CourseCard
                  className={classes.paper}
                  category='VIDEOS'
                  title='Why to use meaningful HTML tags, aka semantic HTML'
                  author='BuildAModule'
                  href='https://www.youtube.com/watch?v=z9_rdtdA2BQ'
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
              Accessibility
            </Typography>
            <Grid container justify='center'>
              {/* codecademy */}
              <Paper className={classes.control} square={true}>
                <Link
                  href='https://www.codecademy.com/articles/ready-accessibility'
                  target='_blank'
                >
                  <img src='https://source.unsplash.com/275x200/?computer' />
                </Link>
                <CourseCard
                  className={classes.paper}
                  category='ARTICLES'
                  title='Accessibility and HTML'
                  author='codecademy'
                  href='https://www.codecademy.com/articles/ready-accessibility'
                />
              </Paper>
              {/* W3C Web Accessibility Initiative (WAI) */}
              <Paper className={classes.control} square={true}>
                <iframe
                  width='275'
                  height='200'
                  src='https://www.youtube.com/embed/20SHvU2PKsM'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
                <CourseCard
                  className={classes.paper}
                  category='VIDEOS'
                  title='Introduction to Web Accessibility and W3C Standards'
                  author='W3C Web Accessibility Initiative'
                  href='https://www.youtube.com/watch?time_continue=12&v=20SHvU2PKsM'
                />
              </Paper>
              {/* WebAIM */}
              <Paper className={classes.control} square={true}>
                <Link href='https://webaim.org/intro/' target='_blank'>
                  <img src='https://source.unsplash.com/274x200/?computer' />
                </Link>
                <CourseCard
                  className={classes.paper}
                  category='ARTICLES'
                  title='Introduction to Web Accessibility'
                  author='WebAIM'
                  href='https://webaim.org/intro/'
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
              Forms and Validation
            </Typography>
            <Grid container justify='center'>
              {/* w3schools */}
              <Paper className={classes.control} square={true}>
                <Link
                  href='https://www.w3schools.com/html/html_forms.asp'
                  target='_blank'
                >
                  <img src='https://source.unsplash.com/274x200/?email' />
                </Link>
                <CourseCard
                  className={classes.paper}
                  category='ARTICLES'
                  title='HTML Forms'
                  author='w3schools'
                  href='https://www.w3schools.com/html/html_forms.asp'
                />
              </Paper>
              {/* Web Dev Simplified */}
              <Paper className={classes.control} square={true}>
                <iframe
                  width='275'
                  height='200'
                  src='https://www.youtube.com/embed/fNcJuPIZ2WE'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
                <CourseCard
                  className={classes.paper}
                  category='VIDEOS'
                  title='Learn HTML Forms In 25 Minutes'
                  author='Web Dev Simplified'
                  href='https://www.youtube.com/watch?v=fNcJuPIZ2WE'
                />
              </Paper>
              {/* MDN */}
              <Paper className={classes.control} square={true}>
                <Link
                  href='https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation'
                  target='_blank'
                >
                  <img src='https://source.unsplash.com/275x200/?email' />
                </Link>
                <CourseCard
                  className={classes.paper}
                  category='ARTICLES'
                  title='Client-side form validation'
                  author='MDN Web Docs'
                  href='https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation'
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Html;
