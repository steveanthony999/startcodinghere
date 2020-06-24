import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  buttonStyle: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
  },
  linkStyle: {
    textDecoration: 'none',
    width: '100%',
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {props.category}
        </Typography>
        <Typography variant='subtitle1' component='h2'>
          {props.title}
        </Typography>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
          variant='p'
        >
          {props.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='large'
          variant='outlined'
          color='primary'
          className={classes.buttonStyle}
          href={props.href}
          target='_blank'
        >
          Let's Go!
        </Button>
      </CardActions>
    </Card>
  );
}
