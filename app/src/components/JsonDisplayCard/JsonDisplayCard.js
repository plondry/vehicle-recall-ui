import React from 'react';
import './JsonDisplayCard.css';
import {Card, CardBody, CardHeader} from "reactstrap";

class JsonDisplayCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...props}
    }

    render() {
        const jsonData = JSON.stringify(this.props.jsonData, null, 0)
        return (
            <Card>
                <CardHeader>{this.props.title}</CardHeader>
                <CardBody>
                    {jsonData}
                </CardBody>
            </Card>
        )
    }


}

export default JsonDisplayCard;
