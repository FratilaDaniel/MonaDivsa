import React from "react";
import uploaderModel from "./uploaderModel";
import divCreatorPresenter from "../divCreator/DivCreatorPresenter";
import loadAnimationModel from "../loadAnimation/loadAnimationModel";

const VALID_IMAGE_TYPES = ['image/jpeg', 'image/png'];

class Uploader extends React.Component{
    constructor(){
        super();
        uploaderModel.addListener("fileChosen", this.listener);
    }

    listener(){
        console.log("uploader event")
        divCreatorPresenter.getFinalImage(uploaderModel.state.fileObject);
    }

    componentWillUnmount(){
        uploaderModel.removeListener("fileChosen", this.listener);
    }

    render(){
        return (
            <div className="body-container">
                <input 
                    type="file" 
                    onChange={(event) => {
                        Promise.resolve().then(loadAnimationModel.startAnimation())
                        .then(uploaderModel.setFileObject(event.target.files[0]));
                    }} 
                    accept={VALID_IMAGE_TYPES.join(",")}/>
                <p className="description">I spent way too much time thinking if I could<br/>and not enough time thinking if I should</p>
            </div>
        );
    }    
}

export default Uploader;
