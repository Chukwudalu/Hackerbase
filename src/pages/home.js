import React from 'react';
import Identity from '../components/identity';
import Instructors from '../components/instructors';
import Mission from '../components/mission';
import Footer from '../components/footer'
import { motion } from 'framer-motion';
import {pageAnimation} from '../animation'



const Home = () => {
    return (
        <motion.div variants={pageAnimation} initial='hide' animate='show'> 
            <Identity/>
            <Instructors/>
            <Mission />
            <Footer/>
        </motion.div>
    )
}

export default Home;