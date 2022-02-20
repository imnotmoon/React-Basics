import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';

export type MovieType = {
	id: number,
	backdrop_path: string,
	genre_ids: number[],
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	release_date: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number
}

function App() {

  const [popular, setPopular] = useState<MovieType[]>([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(process.env.REACT_APP_TMDB_URL as string);
		const movies = await data.json();
		setPopular(movies.results);
  }

  return (
    <div className="App">
			<div className="popular-movies">
				{popular.map((movie: MovieType) => {
					return <Movie key={movie.id} movie={movie}/>
				})}
			</div>
    </div>
  );
}

export default App;
