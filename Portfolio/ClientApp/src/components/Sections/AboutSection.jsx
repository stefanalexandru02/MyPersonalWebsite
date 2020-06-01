import React from "react";

import csharp_icon from '../../images/csharp_icon.png';
import react_icon from '../../images/react_icon.png';
import js_icon from '../../images/js_icon.png';
import angular_icon from '../../images/angular_icon.png';
import dotnetcore_icon from '../../images/dotnetcore_icon.png';
import dotnetcoreaspmvc_icon from '../../images/dotnetcoreaspmvc_icon.png';

// import bootstrap_icon from '../../images/bootstrap_icon.png';
// import flutter_icon from '../../images/flutter_icon.png';
// import cplusplus_icon from '../../images/cplusplus_icon.png';

export default function AboutSection() {

    let stack_array = [
        csharp_icon,
        dotnetcore_icon, 
        dotnetcoreaspmvc_icon, 
        react_icon, 
        angular_icon,
        js_icon
    ];

    return (
        <div>
            <h1 className="text-center">About</h1>
            <br/>            
            <div className="row">
                <div className="col-md-4" style={{marginBottom: '25px'}}>
                    <p>
                        I am a software developer with 4+ years of experiece, with various projects and technologies. Passionate about programming, problem solving and learning new technologies.
                    </p>                    
                </div>
                <div className="col-md-8">
                    <div className="languagesContainer row">
                    {
                        stack_array.map((img, i) => 
                            <div key={i} className="col-6 col-sm-2 hvr-pulse">
                                <img data-aos='fade-up' data-aos-delay={i+'00'} src={img} alt="Programming language icon"/>
                            </div>
                        )
                    }                
                    </div>
                </div>
            </div> 
        </div>
    );
}