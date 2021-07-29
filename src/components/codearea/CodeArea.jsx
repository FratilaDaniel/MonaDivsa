import "./codeArea.css";

const CODE_TEMPLATE = (content) =>`
<!DOCTYPE HTML>
<HTML>
    <HEAD> <META charset="utf-8"/> <TITLE>Mona DIVsa</TITLE> </HEAD>

    <BODY>
        ${content}
    </BODY>
</HTML>
`;

function CodeCopier({codeBase}){

    const FORMATTED_CODE = CODE_TEMPLATE(codeBase);

    function copyCodeToClipboard(){
        var copyText = document.createElement("textarea");
        document.body.appendChild(copyText);
        copyText.value = FORMATTED_CODE;
        copyText.select();
        document.execCommand("copy");
        document.body.removeChild(copyText);
    }

    return (
        codeBase?
            <div>
                <p>You can share this result with your friends, just copy the following code and insert it in a file called "index.html"</p>
                <div id="code-container">
                    <button onClick={copyCodeToClipboard}>Copy code</button>
                    <pre>
                        <code>
                            {FORMATTED_CODE}
                        </code>
                    </pre>
                </div>
            </div>
            :null
    );
}

export default CodeCopier;
