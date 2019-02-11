import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import FavBox from "../components/favBox";
import React from "react";
import axios from "axios";
import { Jumbotron, Container } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Favouties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: undefined
        };
    }

    componentDidMount() {
        console.log("Component mount called");
        axios.get("http://localhost:8000/get").then(result => {
            console.log("From state", result);
            this.setState({ results: result.data.data });
        });
    }

    handleChange = data => {
        this.setState({ results: data });
    };

    render() {
        return (
            <Layout>
                <div>
                    <Jumbotron fluid>
                        <Container fluid>
                            <FavBox
                                resultList={this.state.results}
                                onResultChange={this.handleChange}
                            />
                        </Container>
                    </Jumbotron>
                </div>
            </Layout>
        );
    }
}

export default Favouties;
