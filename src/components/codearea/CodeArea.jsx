import "./codeArea.css";

function CodeCopier({codeBase}){

    function copyCodeToClipboard(){
        var copyText = document.createElement("textarea");
        document.body.appendChild(copyText);
        copyText.value = codeBase;
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
                            {codeBase}
                        </code>
                    </pre>
                </div>
            </div>
            :null
    );
}

export default CodeCopier;
