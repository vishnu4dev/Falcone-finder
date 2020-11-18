import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { Card, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";


const styles = () => ({
  vehicleList: {
    height: "auto",
  },
  formGroup: {
    display: "flex",
    background: " #f7721e",
    opacity: 0.9,
    fontVariant: "all-small-caps",
    fontWeight: 500,
  },
});

class PlanetShipSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlanet: "",
      selectedVehicle: this.props.currentVehicle,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentVehicle !== this.state.selectedVehicle) {
      this.setState({ selectedVehicle: nextProps.currentVehicle });
    }
  }

  onPlanetSelect = (e) => {
    const { onPlanetChange, combination, resetFilters } = this.props;
    //In case new planet is selected after vehicles have been selected
    if (this.state.selectedVehicle) {
      resetFilters(combination);
    }
    onPlanetChange(e, combination);
    this.setState({ selectedPlanet: e.value });
  };

  onVehicleSelect = (e) => {
    const { onVehicleCountUpdate, combination } = this.props;
    const prevSelectedVehicle =
      this.state.selectedVehicle !== e.target.name
        ? this.state.selectedVehicle
        : null;
    if (e.target.checked) {
      this.setState(
        { selectedVehicle: e.target.name },
        onVehicleCountUpdate(
          e.target.name,
          e.target.checked,
          prevSelectedVehicle,
          combination
        )
      );
    } else {
      this.setState(
        { selectedVehicle: "" },
        onVehicleCountUpdate(
          e.target.name,
          e.target.checked,
          prevSelectedVehicle,
          combination
        )
      );
    }
  };

  checkDistanceFeasibility = (vehicle) => {
    const selectedPlanetDetails = this.props.planets.filter(
      (planet) => planet.name === this.state.selectedPlanet
    );

    if (vehicle) {
      if (selectedPlanetDetails[0].distance > vehicle.max_distance) {
        return true;
      } else {
        return false;
      }
    }
  };

  render() {
    const {
      selectedPlanets,
      planets,
      vehicles,
      currentVehicle,
      classes,
    } = this.props;
    const { selectedPlanet, selectedVehicle } = this.state;
    const planetList = planets.filter(
      (planet) =>
        selectedPlanets &&
        selectedPlanets.length &&
        selectedPlanets.indexOf(planet.name) < 0
    ).length
      ? planets.filter(
          (planet) =>
            selectedPlanets &&
            selectedPlanets.length &&
            selectedPlanets.indexOf(planet.name) < 0
        )
      : planets;
    return (
      <div>
        <Select
          options={
            planetList &&
            planetList.map((planet) => ({
              value: planet.name,
              label: planet.name,
            }))
          }
          onChange={this.onPlanetSelect.bind(this)}
        />

        {selectedPlanet &&
          vehicles.map((vehicle) => (
            <div className={classes.formGroup}>
              <input
                type="checkbox"
                name={vehicle && vehicle.name}
                disabled={
                  this.checkDistanceFeasibility(vehicle) ||
                  (!this.checked &&
                    !vehicle.total_no &&
                    selectedVehicle !== vehicle.name)
                }
                checked={
                  currentVehicle !== "" && selectedVehicle === vehicle.name
                }
                onChange={this.onVehicleSelect.bind(this)}
              />
              <label>
             {vehicle.name} ({vehicle.total_no}) - {vehicle.max_distance}ly
                {/* {vehicle.name} ({vehicle.total_no}) [Max Distance : {vehicle.max_distance}] */}
              </label>{" "}
            </div>
          ))}
      </div>
    );
  }
}

PlanetShipSelection.propTypes = {
  planets: PropTypes.array.isRequired,
  vehicles: PropTypes.array.isRequired,
  currentVehicle: PropTypes.string.isRequired,
  selectedPlanets: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  planets: state.main.planets,
  vehicles: state.main.vehicles,
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(PlanetShipSelection));
