import React, { Component } from 'react';
import Header from './Componets/Header/Header';
import Movies from './Componets/Movies/Movies';
import Pagination from './Componets/Pagination/Pagination';
import Favourites from './Componets/Favourites/Favourites';
import MoviePage from './Componets/MoviePage/MoviePage';
import axios from "axios";
import { API_KEY, API_LINK } from './API/secrets';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  state = {
    animeData: []
  }
  async componentDidMount() {
    let data2 = await axios.get(`https://api.aniapi.com/v1/anime?genres=Ninja`)

    let animeData = data2.data.data.documents;

    this.setState({
      animeData: animeData
    });

  }
  setMovies = async (newMovieName) => {
    let data2 = await axios.get(`https://api.aniapi.com/v1/anime?genres=${newMovieName}`);

    let animeData = data2.data.data.documents;

    this.setState({
      animeData: animeData
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header setMovies={this.setMovies}></Header>
          <Switch>
            <Route path="/" exact>
              {this.state.animeData.length ?
                (<React.Fragment>
                  <Movies movies={this.state.animeData}></Movies>
                </React.Fragment>
                ) : (
                  <h1>Loading...</h1>
                )
              }
            </Route>
            <Route path="/moviepage" exact component={MoviePage}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;