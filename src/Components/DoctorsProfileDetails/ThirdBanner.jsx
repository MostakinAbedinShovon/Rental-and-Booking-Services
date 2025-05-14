import React, { useContext } from 'react';
import { Link } from 'react-router';
import { getData, setData } from '../../Utilities/LocalStorage';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';

const ThirdBanner = ({ SingleData }) => {
    const { User } = useContext(AuthContext);
    const GetItems = getData();
    const flag = GetItems.find((singleElement) => singleElement.id == SingleData.id);
    return (
        <div className='bg-[#EFEFEF] px-10 lg:px-40 pb-20'>
            <section className='flex rounded-2xl flex-col p-8 bg-white'>
                <h1 className='pjseb text-2xl/snug text-center mb-4'>Our Best Doctors</h1>
                <hr className='border-1 border-dashed border-[#0f0f0f1a] my-4' />
                <div className='flex justify-between items-center'>
                    <p className='pjsb text-md sm:text-lg'>Availability</p>
                    {
                        SingleData.available ? (<div className='px-3.5 py-1.5 rounded-full bg-[#09982f16] text-[#09982fd9] pjsm text-[12px] sm:text-sm text-center border-1 border-[#09982f2b]'>
                            <p>"{SingleData.name}" is Available Today</p>
                        </div>) : (<div className='px-3.5 py-1.5 rounded-full bg-[#ff000016] text-[#ff0000d9] pjsm text-[12px] sm:text-sm text-center border-1 border-[#ff00002b]'>
                            <p>"{SingleData.name}" is Unavailable Today</p>
                        </div>)
                    }
                </div>
                <hr className='border-1 border-dashed border-[#0f0f0f1a] my-4' />
                <div className='flex justify-center items-center p-6'>

                    {
                        SingleData.available && (
                            flag ? (
                                User ? (
                                    <Link onClick={() => {
                                        toast.error('Appointment already scheduled for today')
                                    }} className="inline-flex items-center justify-center w-full px-8 py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full hover:bg-[#1d5364d7] text-xl pjsb">
                                        Book Now
                                    </Link>
                                ) : (
                                    <Link to={'/Login'} className="inline-flex items-center justify-center w-full px-8 py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full hover:bg-[#1d5364d7] text-xl pjsb">
                                        Book Now
                                    </Link>
                                )
                            ) : (
                                User ? (
                                    <Link onClick={() => {
                                        setData(SingleData);
                                        window.scrollTo(0, 0)
                                        toast.success(`Appointment scheduled for ${SingleData.name} successfully`)
                                    }} to={'/My-Bookings'} className="inline-flex items-center justify-center w-full px-8 py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full hover:bg-[#1d5364d7] text-md sm:text-xl pjsb">
                                        Book Now
                                    </Link>
                                ) : (
                                    <Link to={'/Login'} className="inline-flex items-center justify-center w-full px-8 py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full hover:bg-[#1d5364d7] text-md sm:text-xl pjsb">
                                        Book Now
                                    </Link>
                                )
                            )
                        )
                    }


                </div>
            </section>
        </div>
    );
};

export default ThirdBanner;