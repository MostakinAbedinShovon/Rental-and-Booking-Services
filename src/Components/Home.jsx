import React from 'react';
import Hero from '../Components/Hero';
import BestDoctors from '../Components/BestDoctors';
import MedicalServices from '../Components/MedicalServices';
import { useLoaderData } from 'react-router';

const Home = () => {
    const DoctorsData = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <BestDoctors DoctorsData={DoctorsData}></BestDoctors>
            <MedicalServices></MedicalServices>
        </div>
    );
};

export default Home;