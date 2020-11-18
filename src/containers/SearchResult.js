import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter, Link } from "react-router-dom";
import { Grid, Paper, withStyles, Card } from "@material-ui/core";
import PropTypes from "prop-types";
import cardBg from "../assets/searchResult.png";

const styles = () => ({
  root: {
    height: "inherit",
    overflow: "auto",
    background: "#ffe600",
    height: "84vh",
  },
  successCard: {
    height: "84vh",
    width: "100%",
    overflow: "auto",
    backgroundImage: "url(" + cardBg + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  successDetails: {
    height: "140px",
    width: "72%",
    position: "relative",
    top: "371px",
    background:'#2d2828',
  },
  totalTime: {
    fontSize:'24px',
    fontWeight:'500',
    padding:'10px',
    color: "rgb(134 163 174)",
  },
  resultTitle:{
      fontSize:'30px',
      fontWeight:'800',
      padding:'10px',
      color:'orange'
  },
  searchAgain:{
    color:'#ffe600',
    fontSize:'16px',
  },
});

class SearchResult extends Component {
  render() {
    const { classes, totalSearchTime, falconeSearchResult, token } = this.props;
    const { planet_name, status } = falconeSearchResult;
    return (
      <div>
        {token !== "" ? (
          <Paper classes={{ root: classes.root }}>
            {status === "success" ? (
              <Grid
                container
                justify="center"
                classes={{ root: classes.successCard }}
              >
                <Card classes={{ root: classes.successDetails }}>
                  <Grid container justify="center" alignItem="center">
                    <Grid item xs={12} className={classes.resultTitle}>
                        Falcone was found in {planet_name} planet. Great Job !!
                    </Grid>
                    <Grid item xs={12} className={classes.totalTime}>
                        Total time taken for expedition : {totalSearchTime}
                    </Grid>
                    <Grid item xs={12} className={classes.searchAgain}>
                        <Link to="/">Search Again</Link>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ) : (
              <Grid container justify="center">
                <Grid item xs={12}>
                  <h2 style={{ color: "white" }} align="center">
                    Failure! Unable to locate Falcone!
                  </h2>
                </Grid>
                <Grid item xs={12}>
                  <h2 style={{ color: "white" }} align="center">
                    <Link to="/">Search Again</Link>
                  </h2>
                </Grid>
              </Grid>
            )}
          </Paper>
        ) : (
          this.props.history.push("/")
        )}
      </div>
    );
  }
}

SearchResult.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  totalSearchTime: PropTypes.string.isRequired,
  falconeSearchResult: PropTypes.shape({
    planetFound: PropTypes.string.isRequired,
    searchStatus: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  totalSearchTime: state.searchTime.totalSearchTime,
  falconeSearchResult: state.main.findFalconeResult,
});

export default connect(mapStateToProps)(
  compose(withStyles(styles), withRouter)(SearchResult)
);
