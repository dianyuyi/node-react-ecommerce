import React from "react";
import { AppBar } from "@material-ui/core";
import useStyles from "../styles/footer";

const Footer = () => {
  const classes = useStyles();
  return <footer className={classes.footer}>All right reserved.</footer>;
};

export default Footer;
