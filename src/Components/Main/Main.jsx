import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = (props) => {

    const starship = props.getStarship(props.match.params.idx);

    return (
        <div className='StarshipPage'>
            {starship ?
                <div className='StarshipPage-starship'>
                    <span>Name:</span>
                    <span>{starship.name}</span>
                    <span>Model:</span>
                    <span>{starship.model}</span>
                    <Link to='/'>Return</Link>
                </div>
                :
                <h3>Loading...</h3>
            }

        </div>

    );
};


export default Main