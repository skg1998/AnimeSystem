import axios from 'axios';
import React, { Component } from 'react';
import { API_KEY, API_LINK, IMG_LINK } from '../../API/secrets';
import { Link } from 'react-router-dom';
import "./Movie.css";
class Movie extends Component {
    render() { 
       let {cover_image,titles,episodes_count, id}=this.props.movie;
        return ( 
           <div className="movie-item">
               <div className="movie-poster">
               <Link to={{pathname:"/moviepage", state:id}}>   
                 <img src={cover_image} alt=""/>
              </Link>
               </div>
               <div className="movie-info">
                   <div className="movie-title">{titles.en}</div>
                   <div className="movie-rating">{episodes_count}</div>
               </div>
           </div>
         );
    }
}
 
export default Movie;