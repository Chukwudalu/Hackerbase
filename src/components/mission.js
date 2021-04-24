import React from 'react';
import mission from '../img/mission.jpg'
import styled from 'styled-components';
import {Container, Words, Image} from '../styles/divStyles'

const Mission = () => (
    <StyledMission>
        <Image>
            <img src={mission} alt='identity'/>
        </Image>
        <StyledWords>
            <h2>Our <span>mission</span></h2>
            <p>Our mission is to provide world class developers<br/>capable
                of solving problems</p>
        </StyledWords>
    </StyledMission>
)


const StyledMission = styled(Container)``

const StyledWords = styled(Words)`
    padding-left: 50px;
`

export default Mission;