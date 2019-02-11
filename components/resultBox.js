import React from 'react';
import axios from 'axios';
import {Alert, PopoverHeader, PopoverBody, Container, Label, ListGroup, ListGroupItem, Form, FormGroup, CustomInput} from 'reactstrap';


class ResultBox extends React.Component {
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(e, locationName) {
        // console.log(e.target.id)
        // console.log(e.target.checked)
        console.log(e.target)
        console.log(locationName)
        let mark = false
        if (e.target.checked === true) {
            mark = true
        }
        axios.post("http://localhost:8000/update", {
            businessId: e.target.id,
            businessLocation: locationName,
            mark: mark
        }).catch(err => console.log(err))

    }

    render() {
        const results = this.props.resultList;
        if (this.props.resultList === undefined){
            return (<Alert color="warning">
                Type search term and hit 'Enter' to display results
      </Alert>)
        } else {
            return (
                    <Form >
                <ListGroup>
                    <FormGroup>
                        <Label for="exampleCheckbox">Showing {this.props.resultList.businesses.length} of {this.props.resultList.total} (Toggle switch to mark as favourite) </Label>
                        {this.props.resultList.businesses.map(item => 
                            <ListGroupItem key={item.id}>
                        <CustomInput type="switch" onChange={(e) => this.handleToggle(e, item.location.display_address.join(', '))} id={item.id} name="customSwitch" label={item.location.display_address.join(', ')} />
                            </ListGroupItem>
                    )}
                    </FormGroup>
                </ListGroup>
                    </Form>
            )
        }
    }
}

export default ResultBox
