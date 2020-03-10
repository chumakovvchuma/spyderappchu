// @ts-nocheck
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import JiraClient from "jira-connector";


export default class CreateIssue extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeIssueName = this.onChangeIssueName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      issue: '',
    }
  }

  onChangeIssueName(e) {
    this.setState({ issue: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const issueObject = {
      issue: this.state.issue,
    };

    let jira = new JiraClient({
        host: "sd.wct.com.ua",
        strictSSL: true // One of optional parameters
      });

      jira.issue.getIssue(
        {
          issueKey: `${issueObject.issue}`
        },
        function(error, issue) {
          console.log(issue.fields.summary);
          issue.fields.summary = issueObject.issue;
        }
      );
      const response = fetch('/issues/create-issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(issueObject.issue)
      });



        this.setState({
          issue: '',
        });
      }
  

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Issue">
          <Form.Label>key</Form.Label>
          <Form.Control type="text" value={this.state.issue} onChange={this.onChangeIssueName} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create issue
        </Button>
      </Form>
    </div>);
  }
}
