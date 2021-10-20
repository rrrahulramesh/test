import { TableBody } from "@material-ui/core";
import React, { Component, useState } from "react";

function Table({ data }) {
  const [rows, setData] = useState(data);
  const [order, setOrder] = useState("ASC");

  const search = (rows, query) => {
    //setQuery(query);
    console.log(query);
    const searched = [...data].filter(
      (row) =>
        row.fname.toLowerCase().indexOf(query) > -1 ||
        row.lname.toLowerCase().indexOf(query) > -1 ||
        row.email.toLowerCase().indexOf(query) > -1
    );
    setData(searched);
  };

  const sorting = (column) => {
    if (order === "ASC") {
      const sorted = [...rows].sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...rows].sort((a, b) =>
        a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div>
      <table cellPadding={4} cellSpacing={4}>
        <thead>
          <tr>
            <th onClick={() => sorting("fname")}>First Name</th>
            <th onClick={() => sorting("lname")}>Last Name</th>
            <th onClick={() => sorting("email")}>Email</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.email}>
              <td>{row.fname}</td>
              <td>{row.lname}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="text"
        id="header-search"
        placeholder="Search Name/Email"
        // onChange={() => search(rows, query)}
        onChange={(evt) => search(rows, evt.target.value)}
      />
    </div>
  );
}

export default Table;
