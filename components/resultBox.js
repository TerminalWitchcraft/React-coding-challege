import React from 'react';
import {UncontrolledPopover, PopoverHeader, PopoverBody, Container, Label, ListGroup, ListGroupItem, Form, FormGroup, CustomInput} from 'reactstrap';


class ResultBox extends React.Component {
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(e) {
        console.log(e.target.id)
        console.log(e.target.checked)
    }

    render() {
        const results = this.props.resultList;
        if (this.props.resultList === undefined){
            return (<h3> Nothing to show here </h3>)
        } else {
            return (
                    <Form >
                <ListGroup>
                    <FormGroup>
                        <Label for="exampleCheckbox">Showing {this.props.resultList.businesses.length} of {this.props.resultList.total} (Toggle switch to mark as favourite) </Label>
                        {this.props.resultList.businesses.map(item => 
                            <ListGroupItem>
                        <CustomInput type="switch" onChange={this.handleToggle} id={item.id} name="customSwitch" label={item.location.display_address.join(', ')} />
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
