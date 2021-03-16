import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu, ShoppingCart } from "@material-ui/icons";

import useStyles from "../styles/header";

const Header = () => {
  const classes = useStyles();

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          component={Link}
          to="/"
          color="inherit"
          aria-label="menu"
          onClick={openMenu}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Amazona
        </Typography>
        {/* <div className="brand">
          <button>&#9776;</button>
          <Link>amazona</Link>
        </div> */}
        <Button color="inherit">
          <ShoppingCart />
          Cart
        </Button>
        {/* <div className="header-links">
          <a href="cart.html">Cart</a>
          {userInfo ? (
            <Link to="/profile">{userInfo.name}</Link>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
          {userInfo && userInfo.isAdmin && (
            <div className="dropdown">
              <a href="#">Admin</a>
              <ul className="dropdown-content">
                <li>
                  <Link to="/orders">Orders</Link>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
          )}
        </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
