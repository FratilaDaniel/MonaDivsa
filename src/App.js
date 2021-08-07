import './App.css';
import Uploader from './components/uploader/Uploader';
import Contact from './components/contact/Contact';
import CodeCopier from './components/codearea/CodeArea';
import {useEffect, useState} from "react";
import DivCreator from "./components/divCreator/DivCreator"
import LoadAnimation from './components/loadAnimation/loadAnimation';

function App() {
    const [filename, setFilename] = useState("");

    useEffect(() => {
        setFilename(filename);
    }, [filename]);

    return (
        <div className="app">
            <h1>Mona <span>DIV</span>sa</h1>
            <div id="instructions-div">
                <p>This web app transform a normal image into a grid of DIV elements, each having the size of one pixel.</p>
                <p>For example, you can load a small image of Mona Lisa and the output will be an exact representation of that image, but in divs, hence Mona DIVsa.</p>
                <p>Please do not ask why I have created this web application, just feel free to use it anytime.</p>
                <p>Large images will take longer to be transformed into DIVs, images of 300x300 size or less are recommended.</p>  
            </div>
            <Uploader />
            <LoadAnimation/>
            <DivCreator/>
            <CodeCopier/>
            <Contact/>
        </div>
    );
}

export default App;
