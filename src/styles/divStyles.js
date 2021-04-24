import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 5rem 10rem;
    /* margin-bottom: 10rem; */
    min-height: 90vh;

    @media only screen and (max-width: 770px){
        display: block;
    }
`

export const Words = styled.div`
    flex: 1;
    flex-basis: 150px;
    color: white;
    
    h2{
        padding: 10px 0px 20px 0px;
    }

    p{
        padding: 15px 0;
    }

    button{
        margin: 20px 0 10px 0;
    }
`

export const Image = styled.div`
    flex: 1;
    flex-basis: 150px;
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
        @media only screen and (max-width: 770px){
            height: 500px;
            margin-top: 10px;
        }
    }
    
`