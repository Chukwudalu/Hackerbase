import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'


const Contact = () => {
    return (
        <FormContainer variants={pageAnimation} initial='hide' animate='show'>
            <form>
                <div className='form-el'>
                    <label>Name</label>
                    <input required />
                </div>
                <div>
                    <label>Email</label>
                    <input required />
                </div>
                <div>
                    <label>Message</label>
                    <textarea/>
                </div>
                <button>Submit</button>
            </form>
        </FormContainer>
    )
}

const FormContainer = styled(motion.div)`
    width: 40%;
    height: 60vh;
    margin: 100px auto;
    background: #4a4e69;
    border-radius: 30px;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
       
    }

    form div{
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        font-size: 1.8rem;

        label{
            padding-bottom: 5px;
            font-family: 'Architects Daughter', cursive;
            color: #c9ada7; 
        }

        input, textarea{
            width: 30rem;
            border: none;
            border-bottom: 1px solid white;
            background: none;
            outline: none;
            color: white
        }
    }
`


export default Contact;



