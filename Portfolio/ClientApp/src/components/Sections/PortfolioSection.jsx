import React from "react";

export default function PortfolioSection() {
    return (
        <div>
            <h1 className="text-center">Portfolio</h1>
            <br/>            
            <div className="row" data-aos="flip-left" data-aos-duration="1500">
                <div className="col-md-4">
                    <h4>eTomorrowSchool - eLearning Platform</h4>
                    <span class="badge badge-secondary">2019 - 2020</span>
                    <br/>                    
                    <p>
                        eTomorrowSchool is an A.I. based eLearning platform that helps students learn better, faster, and allows teachers to work with larger classes, easier.
                    </p>
                </div>
                <div className="col-md-8">

                </div>
            </div>
            <br/>
            <div className="row" data-aos="flip-right" data-aos-duration="1500">
                <div className="col-md-8">

                </div>
                <div className="col-md-4">
                    <h4>eTomorrowSchool - online library</h4>
                    <small class="badge badge-secondary">2019</small>
                    <br/>
                    <p>
                        eTomorrowSchool - online library is a SaaS application for school libraries, that makes managing books, lendings and students easier.
                    </p>
                </div>                
            </div>
            <br/>
            <div className="row" data-aos="flip-left" data-aos-duration="1500">
                <div className="col-md-4">
                    <h4>"Gheorghe Vranceanu" National College</h4>
                    <span class="badge badge-secondary">2017 - 2018</span>
                    <br/>
                    <p>
                    A custom CMS developed using ASP.NET Core MVC and SQLServer to build and manage "Gheorghe Vranceanu" National College website.
                    </p>
                </div>
                <div className="col-md-8">

                </div>
            </div>
            <div className="row" data-aos="flip-right" data-aos-duration="1500">
                <div className="col-md-8">

                </div>
                <div className="col-md-4">
                    <h4>Aerostar Visitors Management System</h4>
                    <span class="badge badge-secondary">2017</span>
                    <p>
                        Visitors management system that registers visitors securely, makes a better first immpression, handles all the paperwork, generates automatically reports, and notifies the company's assigned personnell when the visitors have arrived.
                    </p>
                </div>                
            </div>
            <br/>
        </div>
    );
}