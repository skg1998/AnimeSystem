import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import "./Movies.css";
class Movies extends Component {
    state = {  }
    render() { 
       console.log("this.props.movies", this.props.movies);
        return ( 
            <div className="Movies">
                {   
                    this.props.movies.map((animeObject)=>{
                       return <Movie key={animeObject.id} movie={animeObject} />;
                    })
                }
            </div>
         );
    }
}
 
export default Movies;