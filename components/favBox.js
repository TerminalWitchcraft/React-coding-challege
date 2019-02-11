import React from "react";
import axios from "axios";
import {
    Alert,
    PopoverHeader,
    PopoverBody,
    Container,
    Label,
    ListGroup,
    ListGroupItem,
    Form,
    FormGroup,
    CustomInput
} from "reactstrap";

class FavBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e, locationName) {
        let mark = false;
        if (e.target.checked === true) {
            mark = true;
        }
        axios
            .post("http://localhost:8000/update", {
                businessId: e.target.id,
                businessLocation: locationName,
                mark: mark
            })
            .then(data => {
                //
                axios.get("http://localhost:8000/get").then(result => {
                    this.props.onResultChange(result.data.data);
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        const results = this.props.resultList;
        if (results === undefined || results.length == 0) {
            return (
                <Alert color="info">
                    You do not have any favourites. Go ahead and add some!
                </Alert>
            );
        } else {
            return (
                <Form>
                    <ListGroup>
                        <FormGroup>
                            <Label for="exampleCheckbox">
                                Your favourites (Toggle switch to mark as
                                favourite){" "}
                            </Label>
                            {results.map(item => (
                                <ListGroupItem key={item.id}>
                                    <CustomInput
                                        type="switch"
                                        onChange={e =>
                                            this.handleToggle(
                                                e,
                                                item.businessLocation
                                            )
                                        }
                                        id={item.businessId}
                                        key={item.businessId}
                                        name="customSwitch"
                                        label={item.businessLocation}
                                        checked={item.businessId}
                                        onChange={e =>
                                            this.handleToggle(
                                                e,
                                                item.businessLocation
                                            )
                                        }
                                    />
                                </ListGroupItem>
                            ))}
                        </FormGroup>
                    </ListGroup>
                </Form>
            );
        }
    }
}

export default FavBox;
