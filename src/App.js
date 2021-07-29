import './App.css';
import Uploader from './components/Uploader';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app">
            <Uploader/>
            <div id="reasoning-div">
                <p>If you somehow find this page useful, please contact me and tell me in which context you used such an application.</p>
                <p>You can reach me via email: <span>danfratila1997@gmail.com</span></p>
            </div>
            <Contact/>
        </div>
    );
}

export default App;
