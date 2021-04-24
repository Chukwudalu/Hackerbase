import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import loadData from '../actions/instructorAction';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {instructorAnimation} from '../animation'


const Detail = () => {
    const history = useHistory()
    const id = history.location.pathname.split('/')[2];
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadData())
    },[dispatch])
    const instructors = useSelector((state) => (state.instructors));
    const getInstructor = (instructor) => (instructor.id === id);
    const instructor = instructors.find(getInstructor);

    return (
        <>
            {instructor && (
                <StyledContainer>
                    <img src={instructor.image} alt='Image of the instructor'/>
                    <h2>Hey There!!!</h2>
                    <p>{instructor.biography}</p>
                </StyledContainer>
            )}
        </>
    )
}

const StyledContainer = styled(motion.div)`
    margin: 14rem 10rem;
    color: white;
    background-color: #4a4e69;
    text-align: center;
    padding: 10rem;
    position: relative;
    border-radius: 30px;

    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        position: absolute;
        top: -70px;
        left: 0px
    }

    h2{
        padding: 1rem;
    }

`

export default Detail;