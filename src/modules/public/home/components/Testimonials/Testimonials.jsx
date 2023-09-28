import React, { useState } from 'react';

import profileImage1 from '../../../assets/joro.jpg';
import profileImage2 from '../../../assets/marto.jpg';
import profileImage3 from '../../../assets/orlin.jpg';
import profileImage4 from '../../../assets/zlati.jpg';
import profileImage5 from '../../../assets/tisho.jpg';

const TestimonialsComponent = () => {
    const userData = [
        {
            id: 0,
            userName: 'Zlatomir Radev',
            userStatus: 'Salesman',
            userReview:
                'I listed my home for sale on this platform, and I was amazed by the response. Within a week, I had multiple offers, and my property was sold at a great price. Thank you for making the selling process so smooth!',
            userProfileIcon: profileImage4,
        },

        {
            id: 1,
            userName: 'Orlin Petkov',
            userStatus: 'Buyer',
            userReview:
                'Finding the perfect home was a breeze with this website. The search filters made it easy to narrow down our options, and we found our dream home in no time. Highly recommend!',
            userProfileIcon: profileImage3,
        },
        {
            id: 2,
            userName: 'Martin Donchev',
            userStatus: 'Rentee',
            userReview:
                "I recently moved to a new city and needed a place to rent. This website helped me find a comfortable apartment in a great neighborhood. The application process was straightforward, and I'm loving my new place!",
            userProfileIcon: profileImage2,
        },
        {
            id: 3,
            userName: 'Georgi Kirov',
            userStatus: 'Agent',
            userReview:
                'As a real estate agent, this platform has been a game-changer for my business. The tools for managing listings, connecting with clients, and closing deals are top-notch. It has significantly boosted my productivity.',
            userProfileIcon: profileImage1,
        },
        {
            id: 4,
            userName: 'Tihomir Doktorov',
            userStatus: 'Salesman',
            userReview:
                "I've sold multiple properties using this platform, and it continues to impress me. The exposure my listings get and the ease of managing them have made it my go-to choice for selling real estate.",
            userProfileIcon: profileImage5,
        },
    ];

    const [currentUser, setCurrentUser] = useState(userData[0]);

    const handleClick = (user) => {
        setCurrentUser(user);
    };

    return (
        <div>
            <div className="mt-20 mb-5 text-4xl font-bold">Testimonials</div>
            <div className="text-gray-500 mx-auto text-center mb-[60px] w-[30%]">
                See what our property managers, landlords, and tenants have to
                say
            </div>
            <div className="w-[45%] mx-auto text-center mb-10">
                "{currentUser.userReview}"
            </div>
            <div className="mb-[50px]">
                <div className="font-bold inline">{currentUser.userName}, </div>
                <div className="inline text-gray-500">
                    {currentUser.userStatus}
                </div>
            </div>
            <div className="flex mb-[100px] w-[600px] justify-evenly mx-auto">
                {userData.slice(0, 5).map((item, index) => (
                    <img
                        key={item.id}
                        onClick={() => handleClick(item)}
                        className={`rounded-full w-[60px] h-[60px] ${
                            item.id == currentUser.id
                                ? 'border-indigo-400'
                                : `border dark:border-slate-600`
                        } transition-all hover:cursor-pointer hover:border-indigo-400 p-[2px] border-solid border-2 focus:border-indigo-400`}
                        src={item.userProfileIcon}
                        alt="Profile Picture"
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsComponent;
