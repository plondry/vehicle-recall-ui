import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FieldEnhanceCard.css';
import {Card, CardHeader, CardBody, Button, Label, Input, FormText, Form, FormGroup, Col} from "reactstrap";

//import {Card} from 'react-bootstrap'

class FieldEnhanceCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardHeader>{this.props.title}</CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup row>
                            <Col>
                                <Button color="primary">Add Field</Button>
                            </Col>
                            <Col>
                            </Col>
                            <Col>
                                <Label for="searchField">
                                    Search Field:
                                </Label>
                            </Col>
                            <Col>
                                <Input
                                    id="searchField"
                                    name="searchField"
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        )
    }


}

export default FieldEnhanceCard;
