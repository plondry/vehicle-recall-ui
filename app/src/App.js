import logo from './logo.svg';
import './App.css';
import FieldEnhanceCard from "./components/FieldEnhanceCard/FieldEnhanceCard";
import JsonDisplayCard from "./components/JsonDisplayCard/JsonDisplayCard";
import {Container, Row, Col, Button, FormGroup, Label, Input, FormText} from "reactstrap";
import {connect} from "react-redux";
import {Component} from "react";
import {fetchInitialVehicleRecalls} from "./actions";


class App extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.props.dispatch(fetchInitialVehicleRecalls());
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
                    This is some placeholder block-level help text for the above input. It's a bit lighter and easily
                    wraps to a new line.
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
                <JsonDisplayCard title="JSON" jsonData={this.props.vehicle_recalls}/>
              </Col>
              <Col>
                <JsonDisplayCard title="Search Results"/>
              </Col>
            </Row>
          </Container>

        </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    vehicle_recalls: state.vehicle_recalls
  }
}

export default connect(mapStateToProps)(App);
