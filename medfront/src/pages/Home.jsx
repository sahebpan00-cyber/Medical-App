import React from 'react'
import Slider from '../components/slider/Slider'
import Facilities from '../components/Statics/Facilities'
import Hero from '../components/Hero/Hero'
import MedicalInfo from '../components/MedicalInfo/MedicalInfo'

const Home = () => {
    return (
        <>
            <Slider />
            <Facilities />
            <MedicalInfo />
            <Hero />
        </>
    )
}

export default Home
