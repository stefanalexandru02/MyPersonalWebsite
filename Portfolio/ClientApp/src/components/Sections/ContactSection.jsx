import React from "react";

export default function ContactSection() {
    return (
        <div>
            <h1 className="text-center">Contact</h1>
            <br/>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="form-group" data-aos="fade-up" data-aos-delay="150">
                        <label>Name:</label>
                        <input className="form-control form-control-transparent text-light no-outline" placeholder="Name"></input>
                    </div>            
                    <div className="form-group" data-aos="fade-up" data-aos-delay="150">
                        <label>Email:</label>
                        <input className="form-control form-control-transparent text-light no-outline" placeholder="Email"></input>
                    </div>            
                    <div className="form-group" data-aos="fade-up" data-aos-delay="150">
                        <label>Message:</label>
                        <textarea className="form-control form-control-transparent text-light no-outline" placeholder="Message" rows={5}></textarea>
                    </div>   
                    <br/>
                    <div className="text-center">
                        <button className="btn btn-outline-primary no-outline hvr-wobble-horizontal">
                            <span>Send message</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>    
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            <br/>
        </div>
    );
}