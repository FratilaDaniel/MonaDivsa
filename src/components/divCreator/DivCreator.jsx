import React from "react";
import styled from "styled-components";
import divCreatorModel from "./DivCreatorModel";

const ImageContainerDiv = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.rows}, 1px);
    grid-template-columns: repeat(${props => props.cols}, 1px);
    box-shadow: 2px 3px 2px teal;
`;

const mapStateToProps = (state) =>{
    return {
        rows: state.rows,
        cols: state.cols,
        elements: state.jsCode
    };
}

class DivCreator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rows: 0,
            cols: 0,
            elements: []
        };
        divCreatorModel.addListener("imageProcessFinish", () => this.listener());
    }

    listener(){
        this.setState(mapStateToProps(divCreatorModel.state));
    }

    componentWillUnmount(){
        divCreatorModel.removeListener("imageProcessFinish", this.listener);
    }

    render(){
        return (
            <ImageContainerDiv rows={this.state.rows} cols={this.state.cols}>{this.state.elements}</ImageContainerDiv>
        );
    }
}

export default DivCreator;
