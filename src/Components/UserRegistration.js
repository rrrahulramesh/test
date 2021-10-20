import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import React, { Component, useState } from "react";
import Table from "./Table";

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        { fname: "hello", lname: "world", email: "abc@gmail.com" },
        { fname: "he", lname: "wo", email: "b@gmail.com" },
        { fname: "t", lname: "s", email: "c@gmail.com" },
        { fname: "q", lname: "z", email: "ac@gmail.com" },
        { fname: "m", lname: "n", email: "ab@gmail.com" },
      ],
      search: "",
      filteredData: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, email } = e.target.elements;

    let newTab = this.state.rows;
    newTab.push({
      fname: fname.value,
      lname: lname.value,
      email: email.value,
    });

    this.setState({ rows: newTab });
    e.target.reset();
  };

  handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.value;
    this.setState({ search: query });
  };

  render() {
    const useStyles = makeStyles({
      field: {
        marginTop: 20,
        marginBottom: 20,
        display: "block",
      },
    });
    return (
      <Container>
        <Typography
          variant="h6"
          color="textSecondary"
          components="h2"
          gutterBottom
        >
          New User Registration
        </Typography>

        <form onSubmit={this.handleSubmit}>
          <TextField
            className={useStyles.field}
            label="FirstName"
            id="fname"
            variant="outlined"
            color="primary"
            required
          />
          <TextField
            className={useStyles.field}
            label="LastName"
            id="lname"
            variant="outlined"
            color="primary"
            required
          />
          <br />
          <TextField
            className={useStyles.field}
            label="Email"
            id="email"
            variant="outlined"
            color="primary"
            required
          />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>

        <form className="table">
          <Table data={this.state.rows} />
        </form>
      </Container>
    );
  }
}

export default UserRegistration;
