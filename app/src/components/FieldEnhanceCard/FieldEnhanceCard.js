import React, {Component} from 'react';
import './FieldEnhanceCard.css';
import {Card, CardHeader, CardBody, Button, Label, Input, Form, FormGroup, Col} from "reactstrap";
import {getVehicleRecalls, postVehicleRecalls, searchVehicleRecalls} from "../../actions";

class FieldEnhanceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            baseUrl: '',
        };
    }

    render() {
        return (
            <Card>
                <CardHeader>{this.props.title}</CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup row>
                            <Col>
                                <Button color="primary"
                                        onClick={(e) => {e.preventDefault();this.props.handleAddField(this.props.baseUrl);}}>Add Field</Button>
                            </Col>
                            <Col>
                                <Button color="primary"
                                        onClick={(e) => {e.preventDefault();this.props.handleGetList(this.props.baseUrl);}}>Reload Json</Button>
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
