import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Card from "../components/Card";
import Search from "../components/Search";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';




const Dashboard = (props) => {

  //functions, componentDidMounts go here
  
    const { user, isAuthenticated } = useAuth0();

    return (

      isAuthenticated &&

      <section className="My_List">
        <Container className="themed-container" fluid={true}>
        <Row className="justify-content-center m-3">
          <h1>My List Page</h1>
        </Row>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.sub}</p>
          <Search />
          <Card />
          </Container>
      </section>

    )
}


export default withAuthenticationRequired(Dashboard, {
  // Show a message while the user waits to be redirected to the next page.
  // this may be the login page, or it may just be react taking a minute to load the dashboard
  onRedirecting: () => {
    return (
      <h1>Redirecting...</h1>
    );
  },
});