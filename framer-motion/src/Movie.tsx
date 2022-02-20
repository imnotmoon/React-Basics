import React from 'react'
import { MovieType } from './App';


type MoviesProp = {
	movie: MovieType
}

const Movie: React.FC<MoviesProp> = ({ movie }) => {
	return (
		<div>
			<h2>{movie.title}</h2>
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
				alt={movie.title}
			/>
		</div>
	)
}

export default Movie
