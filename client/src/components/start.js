import React from "react";

export default class Start extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:8080/")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
            
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() {
        
        
        return(
            <p>{this.state.apiResponse}</p>
        );
    }

}