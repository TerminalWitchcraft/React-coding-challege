import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout'
import ResultBox from '../components/resultBox'
import React from 'react'
import axios from 'axios'
import { Jumbotron, Container } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

axios.defaults.baseURL = 'https://api.yelp.com/v3/businesses/';
axios.defaults.headers.common['Authorization'] = "Bearer _Qs0d8E81UeQKoPO9iitNTSoggIqq0cj5MaWRurJANa_HntPResR9hNOKR2B3FAjxXX5o0jd182fn9m7gv3WclD0nW4jvDPAa78KFj8Eb1D7ujEsyjJYgRk1uGNeXHYx";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            input: "",
            results: undefined,
        };
    }

    handleChange(e) {
        this.setState({input: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const params = new URLSearchParams();
        params.append('location', this.state.input)
        axios.get("/search")
            .then(result => {console.log(result)
            this.setState({results: result.data})})
    }

    render() {
        return (<Layout>
                <div>
                    <Jumbotron fluid>
                        <Container fluid>
                        <h1 className="display-3">Welcome to the Demo!</h1>
                            <p className="lead">Search below to get started!</p>
                        <Form inline onSubmit={this.handleSubmit}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                          <Label for="exampleSearch" className="mr-sm-2">Enter your search:</Label>
                          <Input
                            type="search"
                            name="search_location"
                            id="search_location"
                            value={this.state.input}
                            onChange={this.handleChange}
                            placeholder="Type..."
                          />
                        </FormGroup>
                        <Button color="primary" >Search!</Button>
                        </Form>
                        </Container>
                    </Jumbotron>
                    <div>
                    <Jumbotron fluid>
                        <Container fluid>
                        <ResultBox resultList={this.state.results} />
                        </Container>
                    </Jumbotron>
                    </div>
                </div>
            </Layout>)
    }

}

export default Home
