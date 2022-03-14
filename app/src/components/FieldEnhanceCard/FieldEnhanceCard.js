import React, {Component} from 'react';
import './FieldEnhanceCard.css';
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Input,
    Form,
    FormGroup,
    Col,
    InputGroup,
    FormText
} from "reactstrap";

class FieldEnhanceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            baseUrl: '',
            searchValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
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
                                    id="searchValue"
                                    name="searchValue"
                                    type="text"
                                    value={ this.state.searchValue }
                                    onChange={ this.handleChange }
                                />
                                <Button color="primary"
                                        onClick={(e) => {e.preventDefault();this.props.handleSearchField(this.props.baseUrl, this.state.searchValue);}}>
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
