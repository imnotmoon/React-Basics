import React from 'react'
import { MovieType } from './App';
import { motion } from 'framer-motion';


type MoviesProp = {
	movie: MovieType
}

const Movie: React.FC<MoviesProp> = ({ movie }) => {
	return (
		<motion.div
			layout
			animate={{ opacity: 1 }}
			initial={{ opacity : 0 }}
			exit={{ opacity: 0 }}
		>
			<h2>{movie.title}</h2>
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
				alt={movie.title}
			/>
		</motion.div>
	)
}

export default Movie
