import React, { Component } from 'react';


import '../App.css';
import '../css/Projects.css';

class CardItem extends Component {

    constructor(props){
        super(props)
         this.state = {
            clicked: false,
        }
    };

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
          });
    }

    render() { 
        

        const { title, tech_1, tech_2, tech_3, tech_4, 
                img_url, gif_demo, description, 
                hosted_version, github_link} = this.props
        
        console.log(this.state.clicked)

        if (this.state.clicked === false) {

        return ( 
            <div className={"inline-container"}>
                
                <div>              
                    <img src={img_url}/>                      
                    <h2>{title}</h2>
                    <p>{tech_1}</p>
                    <p>{tech_2}</p>   
                    <p>{tech_3}</p>
                    <p>{tech_4}</p>   
                </div>

                <button onClick={this.handleClick}>
                    View Demo
                </button>

            </div>

         );

        }

        else return (

 
            <div className={"expanded-card"}>
                <div>
                    <img src={gif_demo}/>
                </div>
                <div className={"expanded-card-info"}>  
                    <h2>{title}</h2>
                    <hr/>
                    <h4>{tech_1}, {tech_2}, {tech_3}, {tech_4}</h4>
                    <p>{description}</p>
                    <p> 
                        <a href={hosted_version} target="_blank">{hosted_version}</a>
                    </p>
                    <br/>
                    <br/>

                
                    <a  className={"a-tag-button"} 
                        href={github_link} 
                        target="_blank"
                    > 
                        View Source Code
                    </a>
                   
                </div>  
                <button onClick={this.handleClick}>X</button>   
            </div>
        )
    }
}
 
export default CardItem;

