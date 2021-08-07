import {EventEmitter} from "events";

class DivCreatorModel extends EventEmitter{
    constructor(props){
        super(props);
        this.state = {
            rows: 0,
            cols: 0,
            textCode: "",
            jsCode: "",
            imageObject: ""
        };
        this.canvas = null;
        this.canvasContext = null;
    }

    setImage(image){
        this.state.imageObject = image; 
    }

    createCanvas(){
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.canvasContext = this.canvas.getContext("2d");
        // context.clearRect(0, 0, this.canvas.height, this.canvas.width); // clear canvas every time an image is loaded
    }

    loadImage(){
        
        this.emit("loadStart");
        let img = new Image();
        img.src = this.state.imageObject;
        img.onload = async () => {
            let [width, height] = [img.width, img.height];
            this.canvas.height = height;
            this.canvas.width = width;
            this.canvasContext.drawImage(img, 0, 0);
            const data = this.canvasContext.getImageData(0, 0, width, height).data;
            
            let pixels = [];
            let code = `<div style="display: grid; grid-template-rows: repeat(${height}, 1px); grid-template-columns: repeat(${width}, 1px);">\n`;
            for(let i = 0; i < data.length; i += 4){
                const colors = data[i]   // r
                    + ", " + data[i + 1] // g
                    + ", " + data[i + 2] // b
                    + ", " + data[i + 3] // a
                    ;
                const el = <div key={i/4} style={{backgroundColor: `rgba(${colors})`}}></div>;
                pixels.push(el);
                code += `\t\t<div key=${i/4} style="background-color: rgba(${colors})"></div>\n`;
            }    
            code += "\t</div>";
            this.state = {
                rows: img.height,
                cols: img.width,
                textCode: code,
                jsCode: pixels
            };
            this.emit("imageProcessFinish", this.state);
            this.emit("loadEnd");
        }
    }

    removeCanvas(){

        document.body.removeChild(this.canvas);
    }
}

const divCreatorModel = new DivCreatorModel();
export default divCreatorModel;
