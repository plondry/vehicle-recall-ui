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
import {setStage} from "../../actions";

class FieldEnhanceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldName: '',
            step: '',
            baseUrl: '',
            searchValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addField = this.addField.bind(this);
        this.getList = this.getList.bind(this);
        this.searchField = this.searchField.bind(this);
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }
    addField(e) {
        e.preventDefault();
        this.props.dispatch(setStage(this.props.stage));
        this.props.handleAddField(this.props.baseUrl);
    }
    getList(e) {
        e.preventDefault();
        this.props.dispatch(setStage(this.props.stage));
        this.props.handleGetList(this.props.baseUrl);
    }
    searchField(e) {
        e.preventDefault();
        this.props.dispatch(setStage(this.props.stage));
        this.props.handleSearchField(this.props.baseUrl, this.state.searchValue);
    }
    render() {
        return (
            <Card className="fieldEnhanceCard">
                <CardHeader className="left-align">STEP {this.props.step}: Load {this.props.fieldName} field</CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup row>
                            <Col className="left-align">
                                <Button color="primary" className="button"
                                        onClick={(e) => this.addField(e)}>
                                    Add Field
                                </Button>
                                <Button color="primary" className="button"
                                        onClick={(e) => this.getList(e)}>
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
                                        onClick={(e) => this.searchField(e)}>
                                    Search
                                </Button>

                                </InputGroup>
                                <FormText>
                                    Search {this.props.fieldName} - see results below
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
