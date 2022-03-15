import logo from './logo.svg';
import './App.css';
import FieldEnhanceCard from "./components/FieldEnhanceCard/FieldEnhanceCard";
import JsonDisplayCard from "./components/JsonDisplayCard/JsonDisplayCard";
import {Container, Row, Col, Button, FormGroup, Label, Input, FormText, Spinner} from "reactstrap";
import {connect} from "react-redux";
import {Component} from "react";
import {
  fetchInitialVehicleRecalls,
  fetchVehicleRecallsFromFile,
  getVehicleRecalls,
  postVehicleRecalls,
  searchVehicleRecalls
} from "./actions";


class App extends Component {
  constructor(props) {
    super(props);
    this.onAddFieldTask = this.onAddFieldTask.bind(this)

  }
  componentDidMount() {
    console.log("componentDidMount");
   // this.props.dispatch(fetchInitialVehicleRecalls());
  }

  loadFile = (e) => {
    e.preventDefault();
    this.props.dispatch(fetchVehicleRecallsFromFile(e.target.files[0]));

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

    if (this.props.isLoading) {
      return (<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>);
    }

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
                      onChange={(e) => this.loadFile(e)}
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
                    baseUrl="http://localhost:3001/v1/api/vehicle-recalls"
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
                    baseUrl="http://localhost:3002/v1/api/vehicle-recalls"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FieldEnhanceCard
                    title="System Type"
                    handleAddField={this.onAddFieldTask}
                    handleGetList={this.onGetListTask}
                    handleSearchField={this.onSearchListTask}
                    baseUrl="http://localhost:3003/v1/api/vehicle-recalls"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FieldEnhanceCard
                    title="Notification Type"
                    handleAddField={this.onAddFieldTask}
                    handleGetList={this.onGetListTask}
                    handleSearchField={this.onSearchListTask}
                    baseUrl="http://localhost:3004/v1/api/vehicle-recalls"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <JsonDisplayCard title="JSON"
                                 fileName="vehicle-recalls.json"
                                 jsonData={this.props.vehicle_recalls}/>
              </Col>
              <Col>
                <JsonDisplayCard title="Search Results"
                                 fileName="vh-search-results.json"
                                 jsonData={this.props.search_results}/>
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
    search_results: state.search_results,
    isLoading: state.isLoading,
    stage: state.stage
  }
}

export default connect(mapStateToProps)(App);
