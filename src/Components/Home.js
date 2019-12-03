import React, { Component } from 'react';
import IMAGES from '../Assets/ImageFiles'
import { Link } from 'react-scroll'
import '../App.css';
import '../css/Home.css';

class Home extends Component {

    constructor(props){
        super(props)
    };

    render() { 

        return ( 
            <div > 
                <div className="introduction"
                     > 
                    <div className="info">                    
                        <div> 
                            <h1>Alex Ren</h1>
                        </div>
                        <div> 
                            <h2>Full-Stack Web Developer</h2>
                        </div>
                        <div> 
                            <Link
                                activeClass="active"
                                to="my-projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >
                            <button className={"home-button"}>View My Work</button>
                            </Link>
                        </div>
                        <div className="photos-section"> 
                            <a 
                                href="https://www.linkedin.com/in/alexhren/"
                                target="_blank"
                                >
                                <img src={require('../Assets/'+IMAGES.linkedin_logo)}/>
                            </a>
                            <a 
                                href="https://github.com/able-leopard/"
                                target="_blank"
                                >
                                <img src={require('../Assets/'+IMAGES.github_logo)}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

         );
    }
}
 
export default Home;