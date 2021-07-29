import React, {useState} from "react";
import ImageContainerDiv from "./ImageContainerDiv";
import LoadingAnimation from "./LoadingAnimation";
import CodeCopier from "./codearea/CodeArea";
const VALID_IMAGE_TYPES = ['image/jpeg', 'image/png'];
const CODE_TEMPLATE = (content) =>`
<!DOCTYPE HTML>
<HTML>
    <HEAD> <META charset="utf-8"/> <TITLE>Mona DIVsa</TITLE> </HEAD>

    <BODY>
        ${content}
    </BODY>
</HTML>
`;


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
        console.log("ajuns")
        let canvas = document.getElementById("img-preview-canvas");
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
            setCodeBase(CODE_TEMPLATE(code));
            changeLoadingState();
        }
    }


    return (
        <div className="body-container">
            <h1>Mona DIVsa</h1>
            <div id="instructions-div">
                <p>This web app transform a normal image into a grid of DIV elements, each having the size of one pixel.</p>
                <p>For example, you can load a small image of Mona Lisa and the output will be an exact representation of that image, but in divs, hence Mona DIVsa.</p>
                <p>Please do not ask why I have created this web application, just feel free to use it anytime.</p>
                <p>Large images will take longer to be transformed into DIVs, images of 500x500 size or less are recommended.</p>  
            </div>
            <input type="file" onChange={(event) => {handleChange(event);}} accept={VALID_IMAGE_TYPES.join(",")}/>

            <p className="description">I spent way too much time thinking if I could<br/>and not enough time thinking if I should</p>
            
            <div id="div-image-container">
                <LoadingAnimation isLoading={isLoading}/>
                {finalImage}
            </div>
            
            
            <CodeCopier codeBase={codeBase}/>

            

            <canvas id="img-preview-canvas"></canvas>
        </div>
    );
    
}

export default Uploader;
