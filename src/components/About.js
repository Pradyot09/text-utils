import React from 'react';
function About(props) {


    // useEffect(() => {
    //     if(props.mode === 'dark'){
    //         document.body.style.backgroundColor = '#042543';
    //         console.log("dark mode");
    //     }
    //     else{
    //         document.body.style.backgroundColor = 'white';
    //         console.log("light mode");
    //     }
    // },[props]);
    
  return (
    <>
    <div className="container" style={{border:'2px solid',borderRadius:'5px' ,borderColor: props.mode === 'dark' ? 'grey' : '#dee2e6'}}>
        <div className="container my-3">
        <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.title}</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    Text utils gives you a way to analyze your text quickly and efficiently.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Use for Free 
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    Text utils is a free character counter tool that provides instant character count & word count statistics for a given text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    All browser Compatible
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari.
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

About.defaultProps = {
    title : "About Us"
}

export default About
