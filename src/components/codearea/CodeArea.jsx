import "./codeArea.css";
import React from "react";
import divCreatorModel from "../divCreator/DivCreatorModel";

const CODE_TEMPLATE = (content) =>`
<!DOCTYPE HTML>
<HTML>
    <HEAD> <META charset="utf-8"/> <TITLE>Mona DIVsa</TITLE> </HEAD>

    <BODY>
        ${content}
    </BODY>
</HTML>
`;

class CodeCopier extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            codebase: ""
        };
    }

    componentDidMount(){
        divCreatorModel.addListener("imageProcessFinish", () => this.listener());
    }

    listener(){
        this.setState({codebase: divCreatorModel.state.textCode});
    }

    componentWillUnmount(){
        divCreatorModel.removeListener("imageProcessFinish", this.listener);
    }

    copyCodeToClipboard(){
        var copyText = document.createElement("textarea");
        document.body.appendChild(copyText);
        copyText.value = CODE_TEMPLATE(this.state.codebase);
        copyText.select();
        document.execCommand("copy");
        document.body.removeChild(copyText);
    }

    render(){
        return (
            this.state.codebase?
                <div>
                    <p>You can share this result with your friends, just copy the following code:</p>
                    <div id="code-container">
                        <button onClick={() => this.copyCodeToClipboard()}>Copy code</button>
                        <hr/>
                        <pre>
                            <code>
                                {CODE_TEMPLATE(this.state.codebase)}
                            </code>
                        </pre>
                    </div>
                </div>
                :null
        );
    }
}

export default CodeCopier;
