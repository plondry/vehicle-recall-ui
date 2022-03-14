import logo from './logo.svg';
import './App.css';
import FieldEnhanceCard from "./components/FieldEnhanceCard/FieldEnhanceCard";
import JsonDisplayCard from "./components/JsonDisplayCard/JsonDisplayCard";
import {Container, Row, Col, Button, FormGroup, Label, Input, FormText} from "reactstrap";
import {connect} from "react-redux";
import {Component} from "react";
import {fetchInitialVehicleRecalls, getVehicleRecalls, postVehicleRecalls, searchVehicleRecalls} from "./actions";


class App extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.props.dispatch(fetchInitialVehicleRecalls());
  }

  onAddFieldTask = (baseUrl)  => {
    this.props.dispatch(postVehicleRecalls(baseUrl, this.props.vehicle_recalls));
  }
  onGetListTask = (baseUrl) => {
    this.props.dispatch(getVehicleRecalls(baseUrl));
  }
  onSearchListTask = (baseUrl, value) => {
    this.props.dispatch(searchVehicleRecalls(baseUrl,value));
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
                    Load initial json file
                  </FormText>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FieldEnhanceCard
                    title="Manufacturer Recall No"
                    handleAddField={this.onAddFieldTask}
                    handleGetList={this.onGetListTask}
                    handleSearchField={this.onSearchListTask}
                    baseUrl="http://localhost:8080/v1/api/vehicle-recalls"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FieldEnhanceCard
                    title="Category"
                    handleAddField={this.onAddFieldTask}
                    handleGetList={this.onGetListTask}
                    handleSearchField={this.onSearchListTask}
                    baseUrl="http://localhost:8080/v1/api/vehicle-recalls"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FieldEnhanceCard
                    title="System Types"
                    handleAddField={this.onAddFieldTask}
                    handleGetList={this.onGetListTask}
                    handleSearchField={this.onSearchListTask}
                    baseUrl="http://localhost:8080/v1/api/vehicle-recalls"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <JsonDisplayCard title="JSON" jsonData={this.props.vehicle_recalls}/>
              </Col>
              <Col>
                <JsonDisplayCard title="Search Results" jsonData={this.props.search_results}/>
              </Col>
            </Row>
          </Container>

        </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    vehicle_recalls: state.vehicle_recalls,
    search_results: state.search_results
  }
}

export default connect(mapStateToProps)(App);
