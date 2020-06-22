import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <AppBar position='sticky' color='inherit'>
        <Toolbar variant='dense'>
          <Container maxWidth='xl'>
            <Typography variant='h6' color='inherit' noWrap>
              START CODING HERE
            </Typography>
          </Container>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <FontAwesomeIcon icon={faHtml5} />
            </ListItemIcon>
            <ListItemText primary='HTML5' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCss3Alt} />
            </ListItemIcon>
            <ListItemText primary='CSS3' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FontAwesomeIcon icon={faJsSquare} />
            </ListItemIcon>
            <ListItemText primary='JavaScript' />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Fragment>
  );
};

export default Navbar;
