import loadAnimationModel from "../loadAnimation/loadAnimationModel";
import divCreatorModel from "./DivCreatorModel";

class DivCreatorPresenter{
    getFinalImage(imageSource){
        loadAnimationModel.startAnimation();
        setTimeout(() => {
            divCreatorModel.setImage(imageSource);
            divCreatorModel.createCanvas();
            divCreatorModel.loadImage();
            divCreatorModel.removeCanvas();
            loadAnimationModel.endAnimation();
        }, 100);
    }
}

const divCreatorPresenter = new DivCreatorPresenter();
export default divCreatorPresenter;
