import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const Profile = () => {
    const { User, setUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleUpdateProfile = (e) => {
        const name = e.target.name.value;
        const photo = e.target.photoURL.value;
        setError("");
        updateUser({ displayName: name, photoURL: photo })
            .then((result) => {
                setUser({ ...result.user, displayName: name, photoURL: photo });
                navigate('/MyProfile');
            })
            .catch((error) => {
            })
    };
    return (
        <div className='w-screen py-6 flex justify-center items-center'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={`${User.photoURL}`}
                        alt={`${User.photoURL}`} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title pjsm">Name: <span className='text-[#1d5364] pjsb'>{User.displayName}</span></h2>
                    <h2 className="card-title pjsm">Email: <span className='text-[#1d5364] pjsb'>{User.email}</span></h2>
                </div>

                <div className='flex justify-center items-center'>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pjsr">
                        <h2 className='text-2xl text-center pjsb'>Edit Profile</h2>
                        <form onSubmit={handleUpdateProfile} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input focus:outline-none" placeholder="Name" required />
                                <label className="label">Photo URL</label>
                                <input name='photoURL' type="text" className="input focus:outline-none" placeholder="Photo URL" />
                                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                                <button type='submit' className="btn btn-neutral mt-4 bg-[#1d5364] border-0 hover:bg-[#1d5364d7]">Save Changes</button>
                            </fieldset>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;