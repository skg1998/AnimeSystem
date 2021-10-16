import axios from 'axios';
import React, { Component } from 'react';
import Youtube from "react-youtube";
import "./MoviePage.css"
import { API_KEY, API_LINK } from '../../API/secrets';
class MoviePage extends Component {
    state = { 
        videoObject:{},
     }
     async componentDidMount(){
  
     }
  
    render() {
        const opts = {
            height:"100%",
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          };
          console.log("checking: ",this.props.location.state); 
        return (
            
             <p>Hello</p>
            // <div className="movie-page">
            //     <div className="movie-page-poster">
            //         <img src={poster_path} alt="" />
            //     </div>
            //     <div className="movie-page-details">
            //         <div className="movie-title-info">
            //             <h1>
            //                 {title}<br></br>{vote_average} IMDB
            //             </h1>
            //             <span>{tagline}</span>
            //             <p>{overview}</p>
            //         </div>
            //     </div>
                
            // </div>
         );
    }
}
 
export default MoviePage;