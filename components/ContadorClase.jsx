import React,{Component} from "react";

class ContadorClase extends Component {
    constructor(props){
        super(props);
        this.state = {
            conteo: 0,
        };

    }

    incrementar = () => {
        this.setState((prevState) => ({ conteo: prevState.conteo + 1}));
    };

    reducir = () => {
        this.setState((prevState) => ({ conteo: prevState.conteo - 1}));
    };

    render(){

    }
}