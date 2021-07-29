
function LoadingAnimation({isLoading}){
    const display = isLoading? "inline" : "none"
    return (
        <img src="/loading-buffering.gif" alt="loading" style={{display: display}}/>
    );
}

export default LoadingAnimation;
