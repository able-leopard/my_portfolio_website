import React, { Component } from 'react';
import IMAGES from '../Assets/ImageFiles'
import CardItem from './CardItem'

import '../App.css';
import '../css/Projects.css';

class ProjectCardSection extends Component {

    constructor(props){
        super(props)
    };

    render() { 
        
        
        return ( 
            <div className='all-projects'>                      
                <CardItem 
                    title={"Tracy and Brian's Artwork"}
                    tech_1={"React"}
                    tech_2={"Django"}
                    tech_3={"Django REST Framework"}
                    tech_4={"PostgreSQL"}
                    img_url={require('../Assets/'+IMAGES.artwork)}
                    gif_demo={require('../Assets/'+IMAGES.artwork_demo)}
                    description={"Full-stack e-commerce website that is able to handle filter results, cart, secure payments, and database."}
                    hosted_version={"https://tracyandbrianart.com"}
                    github_link={"https://github.com/able-leopard/tracy_and_brian_website"}
                />
                <CardItem 
                    title={"Life on Mars"}
                    tech_1={"React"}
                    tech_2={"Javascript"}
                    tech_3={"CSS"}
                    tech_4={"HTML"}
                    img_url={require('../Assets/'+IMAGES.mars)}
                    gif_demo={require('../Assets/'+IMAGES.mars_demo)}
                    description={"A single page application that connects with the NASA API to retrieve photos taken by the Mars rovers"}
                    hosted_version={"https://a-day-in-life-on-mars.netlify.com"}
                    github_link={"https://github.com/able-leopard/a_day_in_the_life_on_mars"}
                />
                <CardItem 
                    title={"Recipe Scraper"}
                    tech_1={"Python"}
                    tech_2={"Beautiful Soup"}
                    tech_3={"Selenium"}
                    tech_4={"Docker"}
                    img_url={require('../Assets/'+IMAGES.recipe)}
                    gif_demo={require('../Assets/'+IMAGES.recipe_demo)}
                    description={"A web crawler that is able to scrape +10 recipe websites and retrieved ~200,000 recipes."}
                    github_link={"https://github.com/able-leopard/recipe_scraping"}            
                />
                
            </div>

         );
    }
}
 
export default ProjectCardSection;
