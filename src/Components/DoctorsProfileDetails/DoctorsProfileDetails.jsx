import React from 'react';
import FirstBanner from '../DoctorsProfileDetails/FirstBanner';
import SecondBanner from '../DoctorsProfileDetails/SecondBanner';
import ThirdBanner from '../DoctorsProfileDetails/ThirdBanner';
import { useLoaderData, useParams } from 'react-router';

const DoctorsProfileDetails = () => {
    const DoctorsData = useLoaderData();
    const {id} = useParams();
    const SingleData = DoctorsData.find(DoctorsData => DoctorsData.id == id);
    return (
        <div>
            <FirstBanner SingleData={SingleData}></FirstBanner>
            <SecondBanner SingleData={SingleData}></SecondBanner>
            <ThirdBanner SingleData={SingleData}></ThirdBanner>
        </div>
    );
};

export default DoctorsProfileDetails;