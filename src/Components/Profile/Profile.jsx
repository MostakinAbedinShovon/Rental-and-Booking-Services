import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import SavedData from './SavedData';

const Profile = () => {
    const { User, setUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [logedinUser, setLogedinUser] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => {
                setLogedinUser(data.find(single => single.email == User.email));
            })
    }, [User.email]);
    const navigate = useNavigate();
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const usersData = Object.fromEntries(formData.entries())
        setError("");
        updateUser({ displayName: usersData.name, photoURL: usersData.photoURL })
            .then((result) => {
                setUser({ ...result.user, displayName: usersData.name, photoURL: usersData.photoURL });
                navigate('/MyProfile');
            })
            .catch((error) => {
        })
        console.log(formData.entries());
    };
    return (
        <div className='w-screen px-40 py-6 flex flex-col justify-center gap-6'>
            <SavedData logedinUser={logedinUser}></SavedData>
            <div className='flex gap-8'>
                <div className='py-16 px-24 flex flex-col justify-center rounded-4xl bg-[#1d536416] w-2/3'>
                    <h1 className='pjseb text-4xl sm:text-5xl/snug text-center mb-2 md:mb-4 text-[#1d5364]'>Profile Details</h1>
                    <form onSubmit={handleUpdateProfile} className='grid grid-cols-2 gap-6'>
                        <input name='name' type="text" className="col-span-2 input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Name" />
                        <input name='phoneNumber' type="text" className="col-span-2 input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Phone Number" />
                        <input name='imageURL' type="text" className="col-span-2 input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Image URL" required />
                        <input name='currentlyWorking' type="text" className="col-span-2 input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Currently Working" />
                        <input name='presentAdd' type="text" className="col-span-2 input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Address" />
                        <div className="w-full pjsr flex flex-col pjsm">
                            <select
                                id="role"
                                name="availability"
                                className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                                required
                            >
                                <option value="">Skill</option>
                                <option value="one">Software Developer</option>
                                <option value="two">Graphics Designer</option>
                                <option value="three">Video Editor</option>
                                <option value="four">Black Smith</option>
                                <option value="five">Tailor</option>
                                <option value="six">Cobbler</option>
                                <option value="seven">Carpenter</option>
                                <option value="nine">Others</option>
                            </select>
                        </div>
                        <div className="w-full pjsr flex flex-col pjsm">
                            <select
                                id="role"
                                name="availability"
                                className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                                required
                            >
                                <option value="">Gender</option>
                                <option value="yes">Male</option>
                                <option value="no">Female</option>
                            </select>
                        </div>
                        <textarea id="review" name="Bio" rows="4" className="rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2 mt-1 block px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Bio" ></textarea>
                        <input name='confirmPassword' type="password" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="Confirm Password" />
                        <button type='submit' className="col-span-2 cursor-pointer inline-flex items-center justify-center w-auto px-4 py-3 sm:px-4 sm:py-3 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-2xl sm:w-auto hover:bg-[#1d5364d7] text-md sm:text-xl pjssb">
                            Save Changes
                        </button>
                    </form>
                </div>
                <div className='py-8 px-14 flex flex-col justify-center rounded-4xl bg-[#1d536416] h-1/12 w-1/3'>
                    <h1 className='pjseb text-4xl sm:text-3xl/snug text-center mb-2 md:mb-4 text-[#1d5364]'>Change Password</h1>
                    <form className='grid grid-cols-2 gap-6 mb-8'>
                        <input name='Password' type="password" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="Password" />
                        <input name='forConPass' type="password" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="Confirm Password" />
                        <button type='submit' className="col-span-2 cursor-pointer inline-flex items-center justify-center w-auto px-4 py-3 sm:px-4 sm:pt-3 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-2xl sm:w-auto hover:bg-[#1d5364d7] text-md sm:text-xl pjssb">
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;