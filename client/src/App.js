import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

import IssueList from "./components/issue-list.component";
import EditIssue from "./components/edit-issue.component";
import CreateIssue from "./components/create-issue.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-student"} className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateStudent} />
                <Route path="/create-student" component={CreateStudent} />
                <Route path="/edit-student/:id" component={EditStudent} />
                <Route path="/student-list" component={StudentList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>

      <footer className="App-footer">
      <Navbar bg="dark" variant="dark">


        <Container>

          <Navbar.Brand>
            <Link to={"/create-issue"} className="nav-link">
              React MERN Stack App
            </Link>
          </Navbar.Brand>

          <Nav className="justify-content-end">
            <Nav>
              <Link to={"/create-issue"} className="nav-link">
                Create issue
              </Link>
            </Nav>

            {/* <Nav>
              <Link to={"/edit-student/:id"} className="nav-link">
                Edit Student
              </Link>
            </Nav> */}

            <Nav>
              <Link to={"/issues-list"} className="nav-link">
                issues List
              </Link>
            </Nav>
          </Nav>

        </Container>
      </Navbar>
    </footer>

    <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateIssue} />
                <Route path="/create-issue" component={CreateIssue} />
                <Route path="/edit-issue/:id" component={EditIssue} />
                <Route path="/issue-list" component={IssueList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
