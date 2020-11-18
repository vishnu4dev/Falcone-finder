import React from "react";
import { Paper, Grid,withStyles } from "@material-ui/core";

const styles = () => ({
  root: {
    height: "40px",
    overflow: "auto",
    background:'#FA741F'
  },
  footerText:{
    color: "#ff2011" 
  }
});
function Footer(props) {
  const {classes} = props;
  return (
    <div>
      <Paper  className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <h4 className={classes.footerText} align="center">
              Coding problem&nbsp; - &nbsp;
              <a href="https://www.geektrust.in/coding-problem/frontend/space">
                GeekTrust
              </a>
            </h4>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Footer);
