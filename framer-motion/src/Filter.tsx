import React, { useEffect } from 'react'
import { MovieType } from './App'

type FilterProps = {
	popular: MovieType[],
	setFiltered: React.Dispatch<React.SetStateAction<MovieType[]>>
	activeGenre: number,
	setActiveGenre: React.Dispatch<React.SetStateAction<number>>,
}

const Filter: React.FC<FilterProps> = ({
	popular,
	setFiltered,
	activeGenre,
	setActiveGenre
}) => {

	useEffect(() => {
		if(activeGenre === 0) {
			setFiltered(popular);
		} else {
			setFiltered(popular.filter(movie => movie.genre_ids.includes(activeGenre)));
		}
	}, [activeGenre])

	return (
		<div className='filter-container'>
			<button
				onClick={() => { setActiveGenre(0) }}
				className={activeGenre === 0 ? "active" : ""}
			>
				All
			</button>
			<button
				onClick={() => { setActiveGenre(35) }}
				className={activeGenre === 35 ? "active" : ""}
			>
				Comedy
			</button>
			<button
				onClick={() => { setActiveGenre(28) }}
				className={activeGenre === 28 ? "active" : ""}
			>
				Action
			</button>
		</div>
	)
}

export default Filter
