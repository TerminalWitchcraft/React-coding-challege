import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import axios from "axios";
import {
    Jumbotron,
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

import Layout from "../components/layout";
import Loader from "../components/spinner";
import ResultBox from "../components/resultBox";

// Home page
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            // For input text
            input: "",
            // For displaying results
            results: undefined,
            // For loading animation
            loading: false
        };
    }

    // Function to handle input change
    handleChange(e) {
        this.setState({ input: e.target.value });
    }

    // Function to execute when you hit 'Search'
    handleSubmit(e) {
        e.preventDefault();
        // if input empyt, dont show results
        if (this.state.input === "") {
            this.setState({ results: undefined });
        } else {
            // Prepare loading animation
            this.setState({ loading: true });
            axios
                .get("http://localhost:8000/fetch", {
                    params: { query: this.state.input }
                })
                .then(result => {
                    this.setState({ results: result.data, loading: false });
                });
        }
    }

    render() {
        return (
            <Layout>
                <div>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Welcome to the Demo!</h1>
                            <p className="lead">Search below to get started!</p>
                            <Form inline onSubmit={this.handleSubmit}>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label
                                        for="exampleSearch"
                                        className="mr-sm-2"
                                    >
                                        Enter your search:
                                    </Label>
                                    <Input
                                        type="search"
                                        name="search_location"
                                        id="search_location"
                                        value={this.state.input}
                                        onChange={this.handleChange}
                                        placeholder="Type..."
                                    />
                                </FormGroup>
                                <Button color="primary">Search</Button>
                            </Form>
                            <hr className="my-2" />
                            <div>
                                {this.state.loading && (
                                    <Loader loading={this.state.loading} />
                                )}
                                {!this.state.loading && (
                                    <ResultBox
                                        resultList={this.state.results}
                                    />
                                )}
                            </div>
                        </Container>
                    </Jumbotron>
                </div>
            </Layout>
        );
    }
}

export default Home;
