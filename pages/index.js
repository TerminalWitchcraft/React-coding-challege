import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout'
import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Home = () => (
    <Layout>
        <div>
            <Jumbotron fluid>
                <Container fluid>
                <h1 className="display-3">Welcome to the Demo!</h1>
                    <p className="lead">Search below to get started!</p>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleSearch" className="mr-sm-2">Enter your search:</Label>
                  <Input
                    type="search"
                    name="search_location"
                    id="exampleSearch"
                    placeholder="Type..."
                  />
                </FormGroup>
                <Button color="primary" >Search!</Button>
                </Form>
                </Container>
            </Jumbotron>
        </div>
    </Layout>
)

export default Home
