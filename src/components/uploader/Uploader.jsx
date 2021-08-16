import React from "react";
import uploaderModel from "./uploaderModel";
import divCreatorPresenter from "../divCreator/DivCreatorPresenter";
import loadAnimationModel from "../loadAnimation/loadAnimationModel";

const VALID_IMAGE_TYPES = ['image/jpeg', 'image/png'];

class Uploader extends React.Component{
    componentDidMount(){
        uploaderModel.addListener("fileChosen", this.listener);
    }

    listener(){
        divCreatorPresenter.getFinalImage(uploaderModel.state.fileObject);
    }

    componentWillUnmount(){
        uploaderModel.removeListener("fileChosen", this.listener);
    }

    handleChange(event){
        loadAnimationModel.startAnimation();
        setTimeout(() => {
            uploaderModel.setFileObject(event.target.files[0]);
            loadAnimationModel.endAnimation();
        }, 100);
    }

    render(){
        return (
            <div>
                <input 
                    type="file" 
                    onChange={(event) => this.handleChange(event)} 
                    accept={VALID_IMAGE_TYPES.join(",")}/>
                <p className="description">I spent way too much time thinking if I could<br/>and not enough time thinking if I should</p>
            </div>
        );
    }    
}

export default Uploader;
