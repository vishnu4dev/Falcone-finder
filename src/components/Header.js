import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TouchAppIcon from "@material-ui/icons/TouchApp";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    colorPrimary: "black",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  colorPrimary: {
    background: 'black'
  },
  tooltip:{
    position: "relative",
    display:" inline-block",
    borderBottom:" 1px dotted black", 
    '&:hover': {
      visibility: "visible",
    }
  },
  tooltiptext: {
    visibility: "hidden",
    width: "120px",
    backgroundColor: "black",
    color: "#fff",
    textAlign: "center",
    padding:" 5px 0",
    borderRadius: "6px",
    position: "absolute",
    zIndex: 1,
    '&:hover': {
      visibility: "visible",
    },
  }
  
});

class Header extends Component {

  geekTrust=()=>{
    window.open('https://www.geektrust.in/',"_blank")
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.colorPrimary}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            />
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Find The Falcone
            </Typography>
            <label htmlFor="icon-button-file" className={classes.tooltip}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={this.geekTrust}
              >
                <TouchAppIcon />
                <span className={classes.tooltiptext}>Geek Trust</span>
              </IconButton>
            </label>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), withRouter)(Header);
