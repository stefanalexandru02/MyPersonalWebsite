import React from "react";

export default function PortfolioSection() {
    return (
        <div>
            <h1 className="text-center">Portfolio</h1>
            <br />
            <div className="row" data-aos="flip-left" data-aos-duration="1500">
                <div className="col-md-4">
                    <h4>eTomorrowSchool - eLearning Platform</h4>
                    <span className="badge badge-secondary">2019 - 2020</span>
                    <br />
                    <p>
                        eTomorrowSchool is an A.I. based eLearning platform that helps students learn better, faster, and allows teachers to work with larger classes, easier.
                    </p>
                    <br />
                    <button className="btn btn-outline-primary no-outline hvr-wobble-horizontal">
                        <span>View details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
                <div className="col-md-8">

                </div>
            </div>
            <br />
            <div className="row" data-aos="flip-right" data-aos-duration="1500">
                <div className="col-md-8">

                </div>
                <div className="col-md-4">
                    <h4>eTomorrowSchool - online library</h4>
                    <small className="badge badge-secondary">2019</small>
                    <br />
                    <p>
                        eTomorrowSchool - online library is a SaaS application for school libraries, that makes managing books, lendings and students easier.
                    </p>
                    <br />
                    <button className="btn btn-outline-primary no-outline hvr-wobble-horizontal">
                        <span>View details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
            </div>
            <br />
            <div className="row" data-aos="flip-left" data-aos-duration="1500">
                <div className="col-md-4">
                    <h4>"Gheorghe Vranceanu" National College</h4>
                    <span className="badge badge-secondary">2018</span>
                    <br />
                    <p>
                        A custom CMS developed using ASP.NET Core MVC and SQLServer to build and manage "Gheorghe Vranceanu" National College website.
                    </p>
                    <br />
                    <button className="btn btn-outline-primary no-outline hvr-wobble-horizontal">
                        <span>View details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
                <div className="col-md-8">

                </div>
            </div>
            <div className="row" data-aos="flip-right" data-aos-duration="1500">
                <div className="col-md-8">

                </div>
                <div className="col-md-4">
                    <h4>Aerostar Visitors Management System</h4>
                    <span className="badge badge-secondary">2017</span>
                    <p>
                        Visitors management system that registers visitors securely, makes a better first immpression, handles all the paperwork, generates automatically reports, prints visitor badges, and notifies the company's assigned personnell when the visitors have arrived.
                    </p>
                    <br />
                    <button className="btn btn-outline-primary no-outline hvr-wobble-horizontal">
                        <span>View details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
            </div>
            <br />
        </div>
    );
}