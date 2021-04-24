import React from 'react';
import identity1 from '../img/identity1.jpg'
import styled from 'styled-components';
import {Container, Words, Image} from '../styles/divStyles'


const Identity = () => (
    <StyledIdentity>
        <Words>
            <h2>Who <span>are</span> we</h2>
            <p>Hackerbase is a world class coding bootcamp <br/>for
                students interested in becoming superstars at coding</p>
            <p>Some of our students have gotten jobs and excelled in<br/> lots of tech
            companiesall over the world, while others<br/> have gone on to build their
            own start-ups
            </p>
            <p>
                We have been producing excellent students for twenty  <br/> years. Click the button
                 to find out more
            </p>
        </Words>
        <Image>
            <img src={identity1} alt='identity'/>
        </Image>
    </StyledIdentity>
)

const StyledIdentity = styled(Container)``


export default Identity;





