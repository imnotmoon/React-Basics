import React, { Component } from 'react'
import axios from 'axios'
import Movie from './Movie'
import "./App.css"

export default class App extends Component {

  state = {
    isLoading : true,
    movies : []     // 미리 선언 안하고 나중에 추가해도 되긴 하는데 그냥 하는거.
  }

  // Movie App에서 사용할 Life Cycle 설계
  getMovies = async() => {
    const {data: {data : {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading:false })
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? <div className="loader"><span className="loader__text">
            Loading...
          </span></div> 
        : (
          <div className="movies">
            {movies.map(movie => (
              <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
            ))}
            </div>
        )}
      </section>
    )
  }
}