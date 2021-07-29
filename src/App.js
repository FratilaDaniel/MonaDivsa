import './App.css';
import Uploader from './components/Uploader';
import Contact from './components/contact/Contact';

function App() {
    return (
        <div className="app">
            <h1>Mona <span>DIV</span>sa</h1>
            <div id="instructions-div">
                <p>This web app transform a normal image into a grid of DIV elements, each having the size of one pixel.</p>
                <p>For example, you can load a small image of Mona Lisa and the output will be an exact representation of that image, but in divs, hence Mona DIVsa.</p>
                <p>Please do not ask why I have created this web application, just feel free to use it anytime.</p>
                <p>Large images will take longer to be transformed into DIVs, images of 500x500 size or less are recommended.</p>  
            </div>
            <Uploader/>
            <Contact/>
        </div>
    );
}

export default App;
