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
    Input,
    FormText
} from "reactstrap";

import Layout from "../components/layout";
import FavBox from "../components/favBox";

// Favourites page
class Favouties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // For conditional rendering based on results
            results: undefined
        };
    }

    componentDidMount() {
        // GET all the Favouties data when mounting component
        axios.get("http://localhost:8000/get").then(result => {
            this.setState({ results: result.data.data });
        });
    }

    // Used for sending data back to parent
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
