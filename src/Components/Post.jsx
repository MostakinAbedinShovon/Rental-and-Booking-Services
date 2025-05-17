import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Post = () => {
    const { User, LogIn } = use(AuthContext);
    const handleProfessionalPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        let professionalData = Object.fromEntries(formData.entries());
        professionalData.email = User.email;
        LogIn(User.email, professionalData.confirmPassword)
            .then(result => {
                fetch('http://localhost:3000/professionals', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(professionalData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })
            .catch(error => {
                alert("Password Incorrect");
            })
    }
    return (
        <div className='py-12 px-72'>
            <div className='py-16 px-28 flex flex-col justify-center rounded-4xl bg-[#1d536416]'>
                <h1 className='pjseb text-4xl sm:text-5xl/snug text-center mb-2 md:mb-4 text-[#1d5364]'>Add New Product</h1>
                <p className='pjsm text-[12px] sm:text-lg text-center text-[#0f0f0f98] mb-4 md:mb-6'>Book professionals need more than visibility—they need the right tools <br /> Our platform connects authors, editors, and publishers with essential services and rental items, all in one streamlined space</p>
                <form onSubmit={handleProfessionalPost} className='grid grid-cols-2 gap-6'>
                    <input name='name' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Name" required />
                    <input name='skill' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Skill" required />
                    <input name='experience' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Experience" required />
                    <input name='imageURL' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Image URL" required />
                    <input name='currentlyWorking' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Currently Working" required />
                    <input name='fee' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Fee" required />
                    <input name='bio' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Bio" required />
                    <div className="w-full pjsr flex flex-col pjsm">
                        <select
                            id="role"
                            name="availability"
                            className="bg-gray-500 px-4 py-2 text-sm rounded-md w-full h-10 outline-none text-white"
                            required
                        >
                            <option value="">Select Availability</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <input name='confirmPassword' type="password" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="Confirm Password" required />
                    <button type='submit' className="col-span-2 cursor-pointer inline-flex items-center justify-center w-auto px-4 py-3 sm:px-4 sm:py-3 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-2xl sm:w-auto hover:bg-[#1d5364d7] text-md sm:text-xl pjssb">
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Post;