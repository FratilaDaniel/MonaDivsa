import React from "react";
import loadAnimationModel from "./loadAnimationModel";

class LoadAnimation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        };
        loadAnimationModel.addListener("startAnimation", () => this.listenerAnimationStart());
        loadAnimationModel.addListener("endAnimation", () => this.listenerAnimationEnd());
    }

    listenerAnimationStart(){
        this.setState({isLoading: true});
    }

    listenerAnimationEnd(){
        this.setState({isLoading: false});
    }

    componentWillUnmount(){
        loadAnimationModel.removeListener("startAnimation", this.listenerAnimationStart);
        loadAnimationModel.removeListener("endAnimation", this.listenerAnimationEnd);
    }

    render(){
        return(this.state.isLoading? <img src="/loading-buffering.gif" alt="loading"/> :null);
    }
}

export default LoadAnimation;
