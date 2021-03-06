import React, { Component } from "../../node_modules/react";
import * as PartyServices from "../services/party-services";
import { Redirect } from "../../node_modules/react-router-dom";
import Background from "./Backgrounds";

class PlanEdit extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      date: "",
      time: "",
      address: "",
      imageUrl: "",
      guestList: "",
      redirectTo: null
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      title,
      description,
      address,
      imageUrl,
      guestList,
      date,
      time
    } = this.state;
    PartyServices.addService({
      title,
      description,
      address,
      imageUrl,
      guestList,
      date,
      time
    })
      .then(response => {
        this.setState({
          redirectTo: `/parties/${response._id}`
        });
        this.props.getParties();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container">
          <h1>Plan Your Fabulous Event</h1>
          <form>
            <div className="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Title for your party"
                value={this.state.title}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Address of your party"
                value={this.state.address}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="title">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="form-group col-md-6">
                <label for="time">Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="time"
                  name="time"
                  value={this.state.time}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                class="form-control"
                id="description"
                name="description"
                rows="5"
                value={this.state.description}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Complete and Share!
            </button>
          </form>
          <Background />
        </div>
      );
    }
  }
}

export default PlanEdit;
