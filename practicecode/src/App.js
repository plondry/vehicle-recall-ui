import React, {Component} from 'react'
import './App.css';
import Axios from 'axios';
import FieldEnhanceCard from "./components/FieldEnhanceCard/FieldEnhanceCard";
import {Container, Row, Col, Button, FormGroup, Label, Input, FormText} from "reactstrap";
import JsonDisplayCard from "./components/JsonDisplayCard/JsonDisplayCard";

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {vehicleRecalls:null};
  }

  componentDidMount() {
      Axios.get("http://localhost:3001/vehicle-recalls")
          .then( res => {
              console.log(res.data)
              this.setState({vehicleRecalls: res.data})
          })
          .catch(err => console.log(err));
  }

    render() {
      return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="jsonfile">
                                    JSON File
                                </Label>
                                <Input
                                    id="jsonfile"
                                    name="jsonfile"
                                    type="file"
                                />
                                <FormText>
                                    This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
                                </FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FieldEnhanceCard title="Manufacturer Recall No"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FieldEnhanceCard title="Category"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FieldEnhanceCard title="System Types"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <JsonDisplayCard title="JSON" jsonData={this.state.vehicleRecalls}/>
                        </Col>
                        <Col>
                            <JsonDisplayCard title="Search Results" />
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default App;
