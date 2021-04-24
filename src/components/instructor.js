import React from 'react';
import styled from 'styled-components'
import { Link} from 'react-router-dom';



const Instructor = ({ id, name, image, email, position, former_job }) => {
    // const history = useHistory();
    // const handleClick = () => {
    //     history.push(`/instructor/${id}`)
    // }
    return (
        <Card>
            <Link to={`/instructor/${id}`}>
                <div className='image'>
                    <img src={image} alt='image' />
                </div>
                <div className='info'>
                    <h3>{name}</h3>
                    <p className='role'>{position}</p>
                    <p>{former_job}</p>
                </div>
            </Link> 
        </Card>
         
    )
}

const Card = styled.div`
    width: 350px;
    height: 60vh;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.9s ease-in-out;
    a{
        text-decoration: none;
    }
    
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        /* transform: scale(1.02); */
        transform:  translate3d(0,-40px,0)
    }

    .image{
        height: 60%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .info{
        height: 40%;
        background: #4a4e69;
        color: white;
        padding: 0rem 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3{
            padding-bottom: 1rem;
            font-family: 'Libre Baskerville', serif;
        }

        p{
            text-align: center;
            padding-bottom: 1rem;
            font-weight: bold;
            font-family: 'Libre Baskerville', serif;
        }

        p.role{
            font-family: 'Architects Daughter', cursive;
            font-weight: bold;
            color: #c9ada7;
            /* background: -webkit-linear-gradient(#380036, #0cbaba);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; */
        }

        
        
    }
`

export default Instructor;