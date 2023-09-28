import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
    const [isValid, setIsValid] = useState(false);
    const [inputInfo, setInputInfo] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [name, setName] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (
            inputInfo.name == '' ||
            inputInfo.email == '' ||
            inputInfo.message == ''
        ) {
            return;
        }

        setIsValid(true);
        setName(inputInfo.name);
        setInputInfo({
            name: '',
            email: '',
            message: '',
        });

        setTimeout(() => {
            setIsValid(false);
            setName('');
        }, 3000);
    };

    const onChangeHandler = (e) => {
        if (e.target.name === 'name') {
            setInputInfo((state) => ({ ...state, name: e.target.value }));
        } else if (e.target.name === 'email') {
            setInputInfo((state) => ({ ...state, email: e.target.value }));
        } else if (e.target.name === 'message') {
            setInputInfo((state) => ({ ...state, message: e.target.value }));
        }
    };
    let submittedMessage = isValid
        ? `${name}, your message has been submitted!`
        : '';

    return (
        <div className="flex w-full min-h-screen justify-center items-center">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-indigo-400 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
                <div>
                    <div className="flex flex-col space-y-8 justify-between">
                        <h1 className="font-bold text-4xl tracking-wide">
                            Contact Us
                        </h1>
                        <p className="pt-2 text-indigo-100 text-xl pb-4">
                            We'd love to hear from you! Fill out the form to get
                            in touch with our team.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-6 text-xl">
                        <div className="inline-flex space-x-2 items-center">
                            <i className="fas fa-phone-alt"></i>
                            <span>+359 888 645 245</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                            <i className="fas fa-envelope"></i>
                            <span>skyline@estates.com</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>5th Ave, New York, NY 10019</span>
                        </div>
                    </div>
                    <div className="flex space-x-4 text-3xl pt-6">
                        <Link to="https://www.facebook.com" target="_blank">
                            <i className="fab fa-facebook pr-3"></i>
                        </Link>
                        <Link to="https://www.instagram.com" target="_blank">
                            <i className="fab fa-instagram pr-3"></i>
                        </Link>
                        <Link to="https://www.linkedin.com" target="_blank">
                            <i className="fab fa-linkedin pr-3"></i>
                        </Link>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                    <form
                        action=""
                        onSubmit={onSubmitHandler}
                        className="flex flex-col space-y-4"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-600"
                            >
                                Enter your name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John..."
                                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-indigo-400"
                                onChange={onChangeHandler}
                                value={inputInfo.name}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-600"
                            >
                                Enter your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="terry@gmail.com"
                                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-indigo-400"
                                onChange={onChangeHandler}
                                value={inputInfo.email}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="text-sm font-medium text-gray-600"
                            >
                                Enter your message
                            </label>
                            <textarea
                                type="text"
                                name="message"
                                placeholder="Hello! I have a question about..."
                                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 rows-4 outline-none focus:ring-2 focus:ring-indigo-400"
                                onChange={onChangeHandler}
                                value={inputInfo.message}
                            ></textarea>
                        </div>
                        <p className="text-l font-bold text-gray-400">
                            {submittedMessage}
                        </p>
                        <button className="inline-block self-end rounded-md bg-indigo-400 hover:bg-indigo-500 transition-all buttons active state - active: scale-95 text-white font-bold px-6 py-2 uppercase text-sm">
                            Submit Your Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
