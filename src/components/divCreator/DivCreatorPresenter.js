import loadAnimationModel from "../loadAnimation/loadAnimationModel";
import divCreatorModel from "./DivCreatorModel";

class DivCreatorPresenter{
    getFinalImage(imageSource){
        loadAnimationModel.startAnimation();
        divCreatorModel.setImage(imageSource);
        divCreatorModel.createCanvas();
        divCreatorModel.loadImage();
        divCreatorModel.removeCanvas();
    }
}

const divCreatorPresenter = new DivCreatorPresenter();
export default divCreatorPresenter;
