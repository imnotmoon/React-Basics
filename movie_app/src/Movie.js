import React from 'react'
import PropTypes from 'prop-types'
import "./Movie.css"

// state가 필요 없어서 function으로 사용
export default function Movie({year, title, summary, poster}) {
    return (
        <div className ="movies__movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie_data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,    
}
