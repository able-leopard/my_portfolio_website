import React, { Component } from 'react';
import IMAGES from '../Assets/ImageFiles'

import '../App.css';
import '../css/Projects.css';
import ProjectCardSection from './ProjectCardSection'

class Projects extends Component {

    constructor(props){
        super(props)
    };

    render() { 
        
        console.log(IMAGES.recipe)
        
        return ( 
            <div> 
                <div className="projects"
                    style = {{height:"100vh"}}>  
                        <h1 id="my-projects">PROJECTS</h1>                   
                       <ProjectCardSection/>
                    </div>
            </div>

         );
    }
}
 
export default Projects;