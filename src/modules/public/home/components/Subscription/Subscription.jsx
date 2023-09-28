import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Subscription = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_e9jqw2z',
                'template_vi858s5',
                form.current,
                'x5KiRwPzBG9lIsHti'
            )
            // TODO - check if then is necessary below
            .then((res) => {
                console.log(res.text);
            }),
            (error) => {
                console.log(error.text);
            };
    };

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedValue, setSubmittedValue] = useState('');
    const [displayedValue, setDisplayedValue] = useState('');

    const onEmailSubmitHandler = (e) => {
        e.preventDefault();
        if (submittedValue.trim().length === 0) {
            return;
        }
        sendEmail(e);
        setIsSubmitted(true);
        setDisplayedValue(submittedValue);
        setSubmittedValue('');

        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    const onSubmitClick = (e) => {
        const email = e.target.value;
        setSubmittedValue(email);
    };

    const submittedMessage =
        isSubmitted > 0
            ? `${displayedValue} has been subscribed`
            : 'Join 10, 000+ other landlords in our estatery community';

    return (
        <div className="h-full p-8 py-10 relative bg-blue-950">
            <div className="backdrop-blur-xl bg-blue-950 rounded-lg md:p20 p-10">
                <h2 className="text-center text-blue-500 font-bold text-2xl mb-2">
                    No Spam Promise
                </h2>
                <h1 className="text-center text-white font-bold text-3xl mb-2">
                    Are you a landlord?
                </h1>
                <p className="text-center text-white text-l mb-5 mx-auto max-w-full">
                    Discover ways to increase your home's value and get listed.
                    No Spam.
                </p>
                <form
                    ref={form}
                    className="flex items-center relative"
                    onSubmit={onEmailSubmitHandler}
                >
                    <label htmlFor="email"></label>
                    <div className="relative w-[70%] mx-auto">
                        <input
                            name="user_email"
                            type="email"
                            id="email"
                            placeholder="Enter your email address"
                            className="placeholder:text-gray-700 w-full bg-white text-black focus:outline-indigo-500 p-4 rounded -md"
                            onChange={onSubmitClick}
                            value={submittedValue}
                        />
                        <button className="font-semibold px-4 py-2 rounded-md text-white bg-indigo-400 hover:bg-indigo-500 transition-all active:scale-95 absolute right-4 top-[50%] translate-y-[-50%]">
                            Submit
                        </button>
                    </div>
                </form>
                <p className="text-center text-white text-sm my-5 mx-auto max-w-full">
                    {submittedMessage}
                </p>
            </div>
        </div>
    );
};

export default Subscription;
