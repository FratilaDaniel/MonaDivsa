onmessage = function(e){
    this.postMessage(e);
    // let pixels = [];
    // let code = `<div style="display: grid; grid-template-rows: repeat(${height}, 1px); grid-template-columns: repeat(${width}, 1px);">\n`;
    // for(let i = 0; i < data.length; i += 4){
    //     const colors = data[i]   // r
    //         + ", " + data[i + 1] // g
    //         + ", " + data[i + 2] // b
    //         + ", " + data[i + 3] // a
    //         ;
    //     const el = <div key={i/4} style={{backgroundColor: `rgba(${colors})`}}></div>;
    //     pixels.push(el);
    //     code += `\t\t<div key=${i/4} style="background-color: rgba(${colors})"></div>\n`;
    // }    
    // code += "\t</div>";
    // postMessage()
}
