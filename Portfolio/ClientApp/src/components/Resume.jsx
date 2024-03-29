import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Resume extends Component {
    static displayName = Resume.name;

    render() {
        return (
            <div className="container-fluid">
                {/*<br />*/}
                {/*<Link to='/' className="btn btn-outline-primary no-outline hvr-underline-from-right outline-dark">*/}
                {/*    <svg style={{ marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>*/}
                {/*    <span>Go back</span>*/}
                {/*</Link>*/}
                {/*<br />*/}
                {/*<br />*/}
                <div className="row resume">
                    <div className="col-md-4 leftBlock">
                        <h2>Virna Stefan Alexandru</h2>
                        <p>Software developer</p>
                        <hr />
                        <div className="contactInfo">
                            <svg className="float-left" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <a href="mailto:stefanalexandru02@gmail.com">stefanalexandru02@gmail.com</a>
                        </div>
                        <div className="contactInfo">
                            <svg className="float-left" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <a href="tel:+40755384649">+40 755 384 649</a>
                        </div>
                        <hr />
                        <h3>Education</h3>
                        <br />
                        <h5>Alexandru Ioan Cuza University - Computer Science (2021 - present)</h5>                                                
                        <br />
                        <h5>Gheorghe Vranceanu National College (2017 - 2021) - Mathematics & Computer Science</h5>
                        <p>Score 9.9 out of 10</p>
                        <p>Relevant coursework</p>
                        <ul>
                            <li>Computer Science</li>
                            <li>Mathematics</li>
                        </ul>
                        <p>Awards & Honors</p>
                        <ul>
                            <li>Second place and gold medal at C# National Olympics - 2019</li>
                            <li>First place at ProsoftNT International Projects Competition - 2019</li>
                            <li>First place at ITMarathon Hackathon - Web apps - 2018 & 2019</li>
                            <li>Fifth place and silver medal at C# National Olympics - 2018</li>
                            <li>Participated at C++ National Olympics - 2018</li>
                            <li>Second place at ITMarathon Hackathon - Desktop apps - 2018</li>
                            <li>Participated at Mathematics Olympics - 2017, 2018, 2019</li>
                        </ul>
                        <p>Extracurricular Activities</p>
                        <ul>
                            <li>Founded and taught at the college's C# programming club - 2019 - 2020</li>
                        </ul>
                        <hr />
                        <br /><br />
                        <h3>Skills and abilities</h3>
                        <br />
                        <p>C#, .NET, .NET Core, ASP.NET Core WebAPI and MVC, Python, Django, React, JavaScript, Android Java, Kotlin & Flutter</p>
                        <hr />
                        <h3>Portfolio</h3>
                        <p>To find out more about me and my projects, please visit my <a href="https://stefan.airproconsult.ro">portfolio here</a>.</p>
                    </div>
                    <div className="col-md-8 rightBlock">
                        <h2>CAREER OBJECTIVE</h2>
                        <hr />
                        <p>
                            Hard-working developer with 6 years of work experience and a proven knowledge of advanced technology, application development, and programming. Aiming to leverage my abilities to successfully fill the Software developer role at your company. Frequently praised as focused, adaptable and a fast learner by my peers, I can be relied upon to help your company achieve its goals.
                        </p>
                        <br />
                        <h2>PROFESSIONAL EXPERIENCE</h2>
                        <hr />
                        <div>
                            <h4>Full-stack software engineer (Remote)</h4>
                            <p>Ivanti / July 2021 - Present</p>
                            <ul>
                                <li>Fixed multiple security issues and vulnerabilities throught the application.</li>
                                <li>Took part in the conversion process from .Net Framework to .Net Core of the ITSM application</li>
                                <li>Used technologies: C#, ASP.NET MVC, ASP.NET Core, Angular, SQL Server, Kubernetes, Azure Cloud Services</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Full-stack Product Engineer (Remote)</h4>
                            <p>Bistrohub Technologies S.L. / July 2020 - July 2021</p>
                            <ul>
                                <li>Developed multiple parts of the system, from menu and orders management to analytics and various other modules.</li>
                                <li>Improved both the front-end UI and the backend architecture.</li>
                                <li>Started the transition to a microservice architecture, improved scalability and performance</li>
                                <li>Took part in the hiring and training process for new team members.</li>
                                <li>Used technologies: Python, Django, React, Express, PostgreSQL, Docker, Google Cloud</li>
                            </ul>
                        </div>
                        <br/>
                        <div>
                            <h4>Founder / Lead Software Developer</h4>
                            <p>eTomorrowSchool / October 2019 - June 2021</p>
                            <ul>
                                <li>Developed an A.I. based eLearning platform that helps students learn better, faster, and allows teachers to work with larger classes, easier and eTomorrowSchool - online library is a SaaS application for school libraries, that makes managing books, lendings and students easier.</li>
                                <li>Designing system and network architecture, verifying its stability, interoperability, portability, security, and scalability using microservices.</li>
                                <li>Used technologies: C#, ASP.NET Core API, React, SQL Server, Python, Tensorflow</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Software Developer</h4>
                            <p>Aerostar S.A. | Bacau, Bacau / September 2018 - Present</p>
                            <ul>
                                <li>Developed a fully working distributed visitors management system that registers visitors securely, handles all the paperwork, generates automatically reports, prints visitor badges, and notifies the company's assigned personnell when the visitors have arrived.</li>                                
                                <li>Communicate with staff and clients to understand specific system requirements.</li>
                                <li>Designing system architecture, verifying its stability, interoperability, portability, security, and scalability.</li>
                                <li>Document design specifications, installation instructions, and other system-related information.</li>
                                <li>Used technologies: C#, WPF and ASP.NET Core, Java, JavaScript, SqLite, Python</li>
                            </ul>
                        </div>
                        <div style={{marginTop: "20px"}}>
                            <br /><br /><br />
                            <h4>Software Developer</h4>
                            <p>Airpro Consult | Bacau, Bacau / August 2017 - Present</p>
                            <ul>
                                <li>Developing RPA software that integrates into the company's workflow using mainly C#.</li>
                                <li>Communicate with clients to understand specific system requirements.</li>
                                <li>Designing system architecture, verifying its stability, interoperability, portability, security, and scalability.</li>
                                <li>Used technologies: C#, WPF, SignalR, ASP.NET Core, React, PostgreSQL, Python, Sklearn</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Full stack developer</h4>
                            <p>Gheorghe Vranceanu National College | Bacau, Bacau / May 2018 - June 2021</p>
                            <ul>
                                <li>Created a CMS from skratch, developed using ASP.NET Core MVC for designing, building, and maintaining the web site. </li>
                                <li>Write, design, or edit web page content, or direct others producing content.</li>
                                <li>Perform or direct web site updates.</li>
                                <li>Communicate with clients to understand specific system requirements.</li>
                                <li>Used technologies: C# ASP.NET Core MVC, JavaScript, Razor, HTML & CSS, JQuerry, SQL Server.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
