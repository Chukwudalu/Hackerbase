import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadData from '../actions/instructorAction'
import styled from 'styled-components';
import Instructor from './instructor';
import {useLocation} from 'react-router-dom'


const Instructors = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadData());
    }, [dispatch])
    const teachers = useSelector((state) => (state.instructors))
    return (
        <Cards>
            {
                teachers.map(({ id, name, position, former_job, email, image, biography }) =>
                (<Instructor
                    key={id}
                    id={id}
                    name={name}
                    position={position}
                    former_job={former_job}
                    image={image}
                />))
            }
        </Cards>
    )
    
}

const Cards = styled.div`
    padding: 10rem;
    max-height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 30px;
    grid-row-gap: 50px;
    z-index: 0;
    /* @media (max-width: 670px){
        max-height: 70vh;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    } */
`



export default Instructors