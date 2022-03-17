import './App.css';
import FieldEnhanceCard from "./components/FieldEnhanceCard/FieldEnhanceCard";
import JsonDisplayCard from "./components/JsonDisplayCard/JsonDisplayCard";
import {
  Container,
  Row,
  Col,
  Input,
  Spinner,
  CardHeader, CardBody, Card
} from "reactstrap";
import {connect} from "react-redux";
import React, {Component} from "react";
import {
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

  loadFile = (e) => {    
    if (e?.target?.files.length > 0) {                 
      e.preventDefault();    
      this.props.dispatch(fetchVehicleRecallsFromFile(e.target.files[0]));
    }    
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
          {this.props.isLoading ?
              <Spinner animation="border" role="status" color="primary">
                <span className="visually-hidden">Loading...</span>
              </Spinner>:<span></span>}
          <Container>
            <Row>
              <Col>
                <Card className="fieldEnhanceCard">
                  <CardHeader className="left-align">STEP 1: Load Initial Json File - <span className="small-text">View JSON Below</span></CardHeader>
                  <CardBody>
                    <Input
                        id="jsonfile"
                        name="jsonfile"
                        type="file"
                        onChange={(e) => this.loadFile(e)}
                        onClick={(e) => e.target.value=''}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>

                <FieldEnhanceCard
                    step="2"
                    stage="API1"
                    fieldName="Manufacturer Recall No"
                    handleAddField={this.onAddFieldTask}
                    handleGetList={this.onGetListTask}
                    handleSearchField={this.onSearchListTask}
                    baseUrl="http://localhost:3001/v1/api/vehicle-recalls"
                    dispatch={this.props.dispatch}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FieldEnhanceCard
                    step="3"
                    stage="API2"
                    fieldName="Category"
                    handleAddField={this.onAddFieldTask}
                    handleGetList={this.onGetListTask}
                    handleSearchField={this.onSearchListTask}
                    baseUrl="http://localhost:3002/v1/api/vehicle-recalls"
                    dispatch={this.props.dispatch}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FieldEnhanceCard
                    step="4"
                    stage="API3"
                    fieldName="System Type"
                    handleAddField={this.onAddFieldTask}
                    handleGetList={this.onGetListTask}
                    handleSearchField={this.onSearchListTask}
                    baseUrl="http://localhost:3003/v1/api/vehicle-recalls"
                    dispatch={this.props.dispatch}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FieldEnhanceCard
                    step="5"
                    stage="API4"
                    fieldName="Notification Type"
                    handleAddField={this.onAddFieldTask}
                    handleGetList={this.onGetListTask}
                    handleSearchField={this.onSearchListTask}
                    baseUrl="http://localhost:3004/v1/api/vehicle-recalls"
                    dispatch={this.props.dispatch}
                />
              </Col>
            </Row>
              <Row>
                  <Col>
                      {this.props.isLoading ?
                          <Spinner animation="border" role="status"   color="primary">
                              <span className="visually-hidden">Loading...</span>
                          </Spinner>:<span></span>}

                  </Col>

              </Row>

            <Row>
              <Col>
                <JsonDisplayCard title="JSON"
                                 fileName={"vehicle-recalls-" + this.props.stage + ".json"}
                                 jsonData={this.props.vehicle_recalls}/>
              </Col>
              <Col>
                <JsonDisplayCard title="Search Results"
                                 fileName={"vh-search-results-" + this.props.stage + ".json"}
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
