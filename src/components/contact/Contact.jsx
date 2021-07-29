import "./contact.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const ICON_STYLES = makeStyles(() => ({
    icon: {
        "& svg":{
            fontSize: 35
        }
    }
}));

function Contact(){
    return (
        <footer>
            <div id="reasoning-div">
                <p>If you somehow find this page useful, please contact me and tell me in which context you used such an application.</p>
                <p>You can reach me via email: <span>danfratila1997@gmail.com</span></p>
            </div>
            <div id="contact-links-container">
                <a href="https://github.com/FratilaDaniel/">
                    <IconButton className={ICON_STYLES().icon}>
                        <GitHubIcon/>
                    </IconButton>
                </a>
                <a href="https://www.linkedin.com/in/daniel-fratila-369910149/">
                    <IconButton className={ICON_STYLES().icon}>
                        <LinkedInIcon/>
                    </IconButton>
                </a>
            </div>
            ©{new Date().getFullYear()} Daniel Fratila
        </footer>
    );
}

export default Contact;
