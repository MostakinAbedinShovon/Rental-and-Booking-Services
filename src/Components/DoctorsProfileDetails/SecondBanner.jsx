import React from 'react';
import AvailableDay from '../AvailableDay';

const SecondBanner = ({SingleData}) => {
    return (
        <div className='bg-[#EFEFEF] px-10 lg:px-40 pb-8'>
            <section className='p-14 flex flex-col sm:flex-row gap-6 bg-white rounded-3xl'>
                <img className='rounded-2xl w-[340px] h-auto' src={SingleData.profile_image} alt="" />
                <div className='w-full'>
                    <h1 className='pjseb text-2xl sm:text-[32px]'>{SingleData.name}</h1>
                    <p className=' flex flex-col pjsm text-sm
                     sm:text-lg/relaxed my-3 text-[#0f0f0f9c]'>
                        {SingleData.skill}
                    </p>
                    <p className='text-md sm:text-xl/loose flex flex-col'>
                        <span className='pjsm text-[#0f0f0f9c]'>Working at </span>
                        <span className='pjsb'>{SingleData.working_at}</span>
                    </p>
                    <hr className='border-1 border-dashed border-[#0f0f0f1a] my-4' />
                    <p className='flex items-center mb-4'>
                        <span className='text-2xl sm:text-3xl text-[#0f0f0f90] mr-2 sm:mr-3'>Ⓡ</span>
                        <span className='pjsm text-md sm:text-lg text-[#0f0f0fa3]'>Reg No: {SingleData.registration_number}</span>
                    </p>
                    <hr className='border-1 border-dashed border-[#0f0f0f1a] my-4' />
                    <div className='flex items-center gap-4 mb-4'>
                        <p className='pjsb text-[12px] sm:text-base'>Availability</p>
                        <div className='flex items-center gap-2'>
                            {
                                SingleData.availability.map((availableDay, index) => <AvailableDay key={index} availableDay={availableDay}></AvailableDay>)
                            }
                        </div>
                    </div>
                    <p className='flex pjs text-sm sm:text-base gap-2'>
                        <span className='pjsb'>Consultation Fee:</span>
                        <span className='pjssb text-[#176AE5]'>Taka : {SingleData.fee}</span>
                        <span className='pjsm text-[#14141486]'>(incl. Vat)</span>
                        <span className='pjssb text-[#176AE5]'>Per booking</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SecondBanner;