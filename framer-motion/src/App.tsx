import React, { useEffect, useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';

import Movie from './Movie';
import Filter from './Filter';

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
	const [fitlered, setFiltered] = useState<MovieType[]>([]);
	const [activeGenre, setActiveGenre] = useState<number>(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(process.env.REACT_APP_TMDB_URL as string);
		const movies = await data.json();
		setPopular(movies.results);
		setFiltered(movies.results);
  }

  return (
    <div className="App">
			<Filter
				popular={popular}
				setFiltered={setFiltered}
				activeGenre={activeGenre}
				setActiveGenre={setActiveGenre}
			/>
			<motion.div
				layout
				className="popular-movies"
			>
				<AnimatePresence>
					{fitlered.map((movie: MovieType) => {
						return <Movie key={movie.id} movie={movie}/>
					})}
				</AnimatePresence>
			</motion.div>
    </div>
  );
}

export default App;
