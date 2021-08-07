import EventEmitter from "events";

class LoadAnimationModel extends EventEmitter{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        };
    }

    startAnimation(){
        this.state = {
            isLoading: true
        };
        this.emit("startAnimation");
    }

    endAnimation(){
        this.state = {
            isLoading: false
        };
        this.emit("endAnimation");
    }
}

const loadAnimationModel = new LoadAnimationModel();
export default loadAnimationModel;
