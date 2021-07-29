import React, {useState} from "react";
import ImageContainerDiv from "../resultContainer/ImageContainerDiv";
import CodeCopier from "../codearea/CodeArea";
const VALID_IMAGE_TYPES = ['image/jpeg', 'image/png'];

function Uploader() {
    const [isLoading, setIsLoading] = useState(false);
    const [finalImage, setFinalImage] = useState("");
    const [codeBase, setCodeBase] = useState("");
    
    function handleChange(event){
        if(event.target.files[0]){
            changeLoadingState(); 
            createCanvas(URL.createObjectURL(event.target.files[0]));
        }
    }

    function changeLoadingState(){
        setIsLoading(prevIsLoading => !prevIsLoading);
    }

    function createCanvas(source){

        let canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        let context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.height, canvas.width); // clear canvas every time an image is loaded
        let img = new Image();
        img.src = source;
        img.onload = () => {
            canvas.height = img.height;
            canvas.width = img.width;
            context.drawImage(img, 0, 0);

            const data = context.getImageData(0, 0, img.width, img.height).data;

            let pixels = [];
            let code = `<div style="display: grid; grid-template-rows: repeat(${img.height}, 1px); grid-template-columns: repeat(${img.width}, 1px);">\n`;
            for(let i = 0; i < data.length; i += 4){
                const colors = data[i]   // r
                    + ", " + data[i + 1] // g
                    + ", " + data[i + 2] // b
                    + ", " + data[i + 3] // a
                    ;
                const el = <div key={i/4} style={{backgroundColor: `rgba(${colors})`}}></div>;
                code += `\t\t<div key=${i/4} style="background-color: rgba(${colors})"></div>\n`
                pixels.push(el);
            }    
            code += "\t</div>";
            setFinalImage(<ImageContainerDiv rows={img.height} columns={img.width}>{pixels}</ImageContainerDiv>);
            setCodeBase(code);
            changeLoadingState();
            document.body.removeChild(canvas);
        }
    }


    return (
        <div className="body-container">
            
            
            <input type="file" onChange={(event) => {handleChange(event);}} accept={VALID_IMAGE_TYPES.join(",")}/>

            <p className="description">I spent way too much time thinking if I could<br/>and not enough time thinking if I should</p>
            
            <div id="div-image-container">
                {isLoading ? <img src="/loading-buffering.gif" alt="loading"/> : finalImage}
            </div>
            
            
            <CodeCopier codeBase={codeBase}/>
        </div>
    );
    
}

export default Uploader;
