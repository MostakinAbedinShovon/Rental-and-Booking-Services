import React, { useContext, useEffect, useState } from 'react';
import FirstBanner from '../DoctorsProfileDetails/FirstBanner';
import SecondBanner from '../DoctorsProfileDetails/SecondBanner';
import ThirdBanner from '../DoctorsProfileDetails/ThirdBanner';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const DoctorsProfileDetails = () => {
    const professionalData = useLoaderData();
    console.log(professionalData)
    return (
        <div>
            <FirstBanner professionalData={professionalData}></FirstBanner>
            <SecondBanner professionalData={professionalData}></SecondBanner>
            {
                professionalData.role != "Professional-rental" && <ThirdBanner professionalData={professionalData}></ThirdBanner>
            }
        </div>
    );
};

export default DoctorsProfileDetails;