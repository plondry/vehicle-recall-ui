import React from 'react';
import './JsonDisplayCard.css';
import {Card, CardBody, CardHeader, CardText} from "reactstrap";
import ReactJson from "react-json-view";

class JsonDisplayCard extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            title: '',
            jsonData: '',
        };
    }

    render() {
        return (
            <Card className="left-align">
                <CardHeader>{this.props.title}</CardHeader>
                <CardText>
                    <ReactJson src={this.props.jsonData} />
                </CardText>
            </Card>
        )
    }


}

export default JsonDisplayCard;
