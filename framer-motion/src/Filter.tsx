import React, { useEffect } from 'react'
import { MovieType } from './App'

type FilterProps = {
	popular: MovieType[],
	setFiltered: React.Dispatch<React.SetStateAction<never[]>>
}

const Filter: React.FC<FilterProps> = ({ popular, setFiltered }) => {
	return (
		<div className='filter-container'>
			<button>All</button>
			<button>Comedy</button>
			<button>Action</button>
		</div>
	)
}

export default Filter
