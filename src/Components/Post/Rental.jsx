import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Rental = () => {
    const { User, LogIn } = use(AuthContext);
    const handleProfessionalPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        let professionalData = Object.fromEntries(formData.entries());
        professionalData.email = User.email;
        LogIn(User.email, professionalData.confirmPassword)
            .then(result => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#1d5364",
                    cancelButtonColor: "#E0115F",
                    confirmButtonText: "Yes, post it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Posted!",
                            text: "Your ad has been posted.",
                            icon: "success"
                        });
                    }
                });
                fetch('http://localhost:3000/rentalProducts', {
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
                form.reset();
            })
            .catch(error => {
                alert("Password Incorrect");
            })
    }
    return (
        <div className='py-16 px-28 flex flex-col justify-center rounded-4xl bg-[#1d536416]'>
            <h1 className='pjseb text-4xl sm:text-5xl/snug text-center mb-2 md:mb-4 text-[#1d5364]'>Add Rental Product</h1>
            <p className='pjsm text-[12px] sm:text-lg text-center text-[#0f0f0f98] mb-4 md:mb-6'>Make your equipment work for you.
                By listing your rental items on our platform, you connect with professionals who need exactly what you offer—whether it’s event gear, tools, or creative equipment. Easy to manage, safe to share, and built to help you earn</p>
            <form onSubmit={handleProfessionalPost} className='grid grid-cols-2 gap-6'>
                <input name='productName' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Product Name" required />
                <input name='category' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Category" required />
                <input name='rentPrice' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Rent Price" required />
                <div className="w-full pjsr flex flex-col pjsm">
                    <select
                        id="role"
                        name="availability"
                        className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                        required
                    >
                        <option value="">Rent Duration</option>
                        <option value="perHour">Per Hour</option>
                        <option value="perDay">Per Day</option>
                        <option value="perWeek">Per Week</option>
                        <option value="perMonth">Per Month</option>
                    </select>
                </div>
                <input name='location' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Location" required />
                <input name='imageURL' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Image URL" required />
                <input name='description' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Description" required />
                <div className="w-full pjsr flex flex-col pjsm">
                    <select
                        id="role"
                        name="availability"
                        className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                        required
                    >
                        <option value="">Product Condition</option>
                        <option value="excellent">Excellent</option>
                        <option value="veryGood">Very Good</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                    </select>
                </div>
                <input name='confirmPassword' type="password" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="Confirm Password" required />
                <button type='submit' className="col-span-2 cursor-pointer inline-flex items-center justify-center w-auto px-4 py-3 sm:px-4 sm:py-3 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-2xl sm:w-auto hover:bg-[#1d5364d7] text-md sm:text-xl pjssb">
                    Post
                </button>
            </form>
        </div>
    );
};

export default Rental;