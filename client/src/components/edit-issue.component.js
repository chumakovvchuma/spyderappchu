// @ts-nocheck
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class IssueStudent extends Component {

  constructor(props) {
    super(props)

    this.onChangeIssueName = this.onChangeIssueName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      issue: ''
    }
  }

  componentDidMount() {
    axios.get(`/issues/edit-issue/` + this.props.match.params.id)
      .then(res => {
        this.setState({
          issue: res.data.issue
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeIssueName(e) {
    this.setState({ issue: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const issuesObject = {
      issue: this.state.issue,

    };

    axios.put(`/issues/update-issues/` + this.props.match.params.id, issuesObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/issues-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Issue">
          <Form.Label>key</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Issue
        </Button>
      </Form>
    </div>);
  }
}
