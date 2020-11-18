import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Snackbar } from "@material-ui/core";
import {showToast}  from "../redux/action/toastActions";

class ToastCard extends Component {
  handleSnackClose = () => {
    this.props.showToast("");
  };
  render() {
    const { isErrorbarOpen, errorMessage } = this.props;
    return (
      <div>
        <Snackbar open={isErrorbarOpen} message={<span>{errorMessage}</span>} />
      </div>
    );
  }
}

ToastCard.propTypes = {
  isErrorbarOpen: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  showToast: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isErrorbarOpen: state.toastReducer.isErrorbarOpen,
  errorMessage: state.toastReducer.errorText
});

export default connect(
  mapStateToProps,
  { showToast }
)(ToastCard);
