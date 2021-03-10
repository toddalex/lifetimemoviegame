import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { 
  AppBar,
  Button, 
  Toolbar, 
  Typography, 
  IconButton, 
  MenuItem, 
  Menu } from '@material-ui/core';

import { ProfileStateType } from '../../models';

interface Props {
  signOut: () => void;
  user: ProfileStateType;
};

const NavBar: React.FC<Props> = React.memo(({ signOut, user }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Lifetime Movie Game
          </Typography>
          {user ? (
            <>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <hr></hr>
                <MenuItem onClick={signOut}>Sign Out</MenuItem>
              </Menu>
            </>
          ) : <Button color="inherit" href="#/auth">Login</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default NavBar;


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);