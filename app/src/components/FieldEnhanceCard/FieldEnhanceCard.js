import React, {Component} from 'react';
import './FieldEnhanceCard.css';
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Label,
    Input,
    Form,
    FormGroup,
    Col,
    InputGroup,
    InputGroupText, FormText
} from "reactstrap";
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
            <Card className="fieldEnhanceCard">
                <CardHeader>{this.props.title}</CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup row>
                            <Col className="left-align">
                                <Button color="primary" className="button"
                                        onClick={(e) => {e.preventDefault();this.props.handleAddField(this.props.baseUrl);}}>
                                    Add Field
                                </Button>
                                <Button color="primary" className="button"
                                        onClick={(e) => {e.preventDefault();this.props.handleGetList(this.props.baseUrl);}}>
                                    Reload Json
                                </Button>
                            </Col>
                            <Col>
                                <InputGroup>
                                <Input
                                    id="searchField"
                                    name="searchField"
                                    type="text"
                                />
                                <Button color="primary"
                                        onClick={(e) => {e.preventDefault();this.props.handleAddField(this.props.baseUrl);}}>
                                    Search
                                </Button>

                                </InputGroup>
                                <FormText>
                                    Search {this.props.title}
                                </FormText>
                            </Col>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}

export default FieldEnhanceCard;
