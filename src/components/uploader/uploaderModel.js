import {EventEmitter} from "events";

class UploaderModel extends EventEmitter{
    constructor(){
        super();
        this.state = {
            fileObject: ""
        };
    }

    setFileObject(fileObject){
        if(fileObject){
            this.state = {
                fileObject: URL.createObjectURL(fileObject)
            }
            this.emit("fileChosen", this.state);
        }
    }
}

const uploaderModel = new UploaderModel();
export default uploaderModel;
