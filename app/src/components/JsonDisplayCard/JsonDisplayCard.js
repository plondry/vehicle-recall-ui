import React from 'react';
import './JsonDisplayCard.css';
import {Button, Card, CardHeader, CardText} from "reactstrap";
import ReactJson from "react-json-view";
import {saveAs} from 'file-saver'

class JsonDisplayCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            jsonData: '',
            fileName:'vehicle-recalls.json'
        };

        this.saveFile = this.saveFile.bind(this);
    }

    saveFile = () => {
        let json = JSON.stringify(this.props.jsonData);
        console.log(json);
        let blob = new Blob([json], {type: "application/json; charset=utf-8"});
        saveAs(blob, this.props.fileName);
    }

    render() {
        return (
            <Card className="left-align jsonDisplayCard">
                <CardHeader>{this.props.title}</CardHeader>
                <CardText>
                    <div className="center-align">
                        <Button  color="primary"  className="button" onClick={() => this.saveFile()}>Download JSON</Button>

                    </div>
                    <ReactJson src={this.props.jsonData} />
                </CardText>
            </Card>
        )
    }


}

export default JsonDisplayCard;
