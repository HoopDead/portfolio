import React, { Component } from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import DjangoIcon from "../assets/images/django.png";
import PythonIcon from "../assets/images/python.png";
import FigmaIcon from "../assets/images/figma.png"

class ProjectsSection extends Component {
    render() {
        return (
            <div>
            <MDBRow className = "pt-lg-5 justify-content-center" id = "projects-section">
                <MDBCol sm = "12" className = "projects-title text-center py-lg-5 py-3">My works</MDBCol>
                <MDBCol xl = "3" md = "5" xs = "12" className = "text-center mt-5 py-4 mx-auto mx-xl-5 my-xl-3 px-lg-5 projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "film"></MDBIcon>
                    <a href="https://filmbase.tv/" class="stretched-link"><p className = "projects-card-title">Filmbase</p></a>
                    <p className = "projects-card-description">Web application made for watching movies and series.</p>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        {/* <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon> */}
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                        <img src = {DjangoIcon} alt = ""></img>
                    </MDBRow>
                </MDBCol>
                <MDBCol xl = "3" md = "5" xs = "12" className = "text-center mt-5  py-4 mx-auto mx-xl-5 my-xl-3 px-lg-5 projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "code"></MDBIcon>
                    <a href="http://itdepartment.pl/" class="stretched-link"><p className = "projects-card-title">ITDepartment</p></a>
                    <p className = "projects-card-description">Static website made for IT company.</p>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                        <MDBIcon fab className = "projects-react projects-icon mx-3" icon = "react"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                    </MDBRow>
                </MDBCol>
                <MDBCol xl = "3" md = "5" xs = "12" className = "text-center mt-5  py-4 mx-auto mx-xl-5 my-xl-3 px-lg-5 projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "fish"></MDBIcon>
                    <a href="http://hoopdead.github.io/fishhub/" class="stretched-link"><p className = "projects-card-title">Fishhub</p></a>
                    <p className = "projects-card-description">Static, example website made for seafood restaurant.</p>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                    </MDBRow>
                </MDBCol>
                <MDBCol xl = "3" md = "5" xs = "12" className = "text-center mt-5  py-4 mx-auto mx-xl-5 my-xl-3 px-lg-5 projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "paste"></MDBIcon>
                    <a href="http://hoopdead.github.io/veqer_portfolio/" class="stretched-link"><p className = "projects-card-title">Veqer Portfolio</p></a>
                    <p className = "projects-card-description">My very first front-end project - portoflio for a friend.</p>
                    <MDBRow className = "justify-content-center">
                    <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                    </MDBRow>
                </MDBCol>
                <MDBCol xl = "3" md = "5" xs = "12" className = "text-center mt-5  py-4 mx-auto mx-xl-5 my-xl-3 px-lg-5  projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "calculator"></MDBIcon>
                    <a href="http://hoopdead.github.io/math_game/" class="stretched-link"><p className = "projects-card-title">Math Game</p></a>
                    <p className = "projects-card-description">Game where you have to solve as many equations as possible in time.</p>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                    </MDBRow>
                </MDBCol>
                <MDBCol xl = "3" md = "5" xs = "12" className = "text-center mt-5  py-4 mx-auto mx-xl-5 my-xl-3 px-lg-5 projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "border-all"></MDBIcon>
                    <a href="https://hoopdead.github.io/tic-tac-toe/" class="stretched-link"><p className = "projects-card-title">Tic tac toe</p></a>
                    <p className = "projects-card-description">An attempt to create tic tac toe in as few lines of code as possible.</p>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                    </MDBRow>
                </MDBCol>
                <MDBCol xl = "3" md = "5" xs = "12" className = "text-center mt-5  py-4 mx-auto mx-xl-5 my-xl-3 px-lg-5 projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "laptop-code"></MDBIcon>
                    <a href="https://hoopdead.github.io/tic-tac-toe/" class="stretched-link"><p className = "projects-card-title">Hackathon Project</p></a>
                    <p className = "projects-card-description">Attempt to create an application that follows progress in Fitness.</p>
                    <MDBRow className = "justify-content-center">
                    <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                    </MDBRow>
                </MDBCol>
                <MDBCol xl = "3" md = "5" xs = "12" className = "text-center mt-5  py-4 mx-auto mx-xl-5 my-xl-3 px-lg-5 projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "dollar-sign"></MDBIcon>
                    <a href="https://github.com/hoopdead/bank_system/" class="stretched-link"><p className = "projects-card-title">Bank System</p></a>
                    <p className = "projects-card-description">Simulation of customer panel system in bank.</p>
                    <MDBRow className = "justify-content-center">
                        <img src = {PythonIcon} alt = ""></img>
                    </MDBRow>
                </MDBCol>
                <MDBCol xl = "3" md = "5" xs = "12" className = "text-center mt-5  py-4 mx-auto mx-xl-5 my-xl-3 px-lg-5 projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "chess-board"></MDBIcon>
                    <a href="https://github.com/hoopdead/2048_player/" class="stretched-link"><p className = "projects-card-title">2048 Game Analyze</p></a>
                    <p className = "projects-card-description">Script that analyze what approach is the best for reaching highest score.</p>
                    <MDBRow className = "justify-content-center">
                        <img src = {PythonIcon} alt = ""></img>
                    </MDBRow>
                </MDBCol>
                <MDBCol xl = "3" md = "5" xs = "12" className = "text-center mt-5  py-4 mx-auto mx-xl-5 my-xl-3 px-lg-5 projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "newspaper"></MDBIcon>
                    <a href="https://github.com/hoopdead/pwjs/" class="stretched-link"><p className = "projects-card-title">Article Finder</p></a>
                    <p className = "projects-card-description">Web App that search for article with given keyword.</p>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        {/* <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon> */}
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                        <img src = {DjangoIcon} alt = ""></img>
                    </MDBRow>
                </MDBCol>
                <MDBCol xl = "3" md = "5" xs = "12" className = "text-center mt-5  py-4 mx-auto mx-xl-5 my-xl-3 px-lg-5 projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "list"></MDBIcon>
                    <a href="https://github.com/HoopDead/todo-react-app" class="stretched-link"><p className = "projects-card-title">Todo App</p></a>
                    <p className = "projects-card-description">Web App for things that you need to do.</p>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                        <MDBIcon fab className = "projects-react projects-icon mx-3" icon = "react"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                    </MDBRow>
                </MDBCol>
                <MDBCol xl = "3" md = "5" xs = "12" className = "text-center mt-5  py-4 mx-auto mx-xl-5 my-xl-3 px-lg-5 projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "crown"></MDBIcon>
                    <a href="https://www.figma.com/proto/i1wiknamzKunPxMY6zUY0n/Untitled?node-id=64%3A5&scaling=min-zoom" class="stretched-link"><p className = "projects-card-title">Miss Dress</p></a>
                    <p className = "projects-card-description">Example UI Project made in Figma for wedding dress salon.</p>
                    <MDBRow className = "justify-content-center">
                        <img src = {FigmaIcon} alt = ""></img>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            </div>
        );
    }
}

export default ProjectsSection;