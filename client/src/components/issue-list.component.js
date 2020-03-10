import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import IssuesTableRow from './IssuesTableRow';


export default class IssueList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      issues: []
    };
  }

  componentDidMount() {
    axios.get(`/issues/`)
      .then(res => {
        this.setState({
          issues: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.issues.map((res, i) => {
      return <IssuesTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}