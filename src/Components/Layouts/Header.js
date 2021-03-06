import React from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = props => (
    <AppBar position="static">
    <Toolbar>
      <IconButton  color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit">
        All Your Stuff
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>


)

export default Header