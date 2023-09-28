import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <div className="dark:bg-slate-800 dark:text-white transition-all">
            <div className="flex space-x-[100px] justify-center pt-[100px] pb-[40px]">
                <div>
                    <ul className="flex pt-[20px] cursor-pointer">
                        <li className="text-[20px] font-bold mr-[5px]">
                            Skyline
                        </li>
                        <li className="text-[20px] text-indigo-400 font-bold">
                            Estate
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <ul className="font-normal text-gray-400 mt-[20px] mb-[40px]">
                            <li className="flex text-black dark:text-white transition-all font-bold mb-[20px]">
                                <Link to="/private/create">SELL A HOME</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/private/create">
                                    Request an offer
                                </Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/private/create">Pricing</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/private/create">Reviews</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/private/create">Stories</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className="font-normal text-gray-400 mt-[20px] mb-[40px]">
                            <li className="flex text-black dark:text-white transition-all font-bold mb-[20px]">
                                <Link to="/for-sale">BUY A HOME</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/for-sale"> Buy</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/for-sale"> Finance</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <ul className="font-normal text-gray-400 mt-[20px] mb-[40px]">
                            <li className="flex text-black dark:text-white transition-all font-bold mb-[20px]">
                                <Link to="/for-rent">RENT A HOME</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/for-rent">
                                    Buy and sell properties
                                </Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/for-rent"> Rent home</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/for-rent">Builder trade-up</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="font-normal text-gray-400 mt-[20px] mb-[40px]">
                            <li className="flex text-black dark:text-white transition-all font-bold mb-[20px]">
                                TERMS & PRIVACY
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                Trust & Safety
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                Terms of Service
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                Privacy Policy
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <ul className="font-normal text-gray-400 mt-[20px] mb-[40px]">
                            <li className="flex text-black dark:text-white transition-all font-bold mb-[20px]">
                                <Link to="/about-us">ABOUT</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/about-us">Company</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/about-us">How it works</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/about-us">Contacts</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/about-us">Investors</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="font-normal text-gray-400 mt-[20px] mb-[40px]">
                            <li className="flex text-black dark:text-white transition-all font-bold mb-[20px]">
                                <Link to="/contacts">RESOURCES</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/contacts">Blog</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/contacts">Guides</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/contacts">FAQ</Link>
                            </li>
                            <li className="flex mb-[5px] cursor-pointer">
                                <Link to="/contacts">Help Center</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-center space-x-[400px] text-gray-400 py-[20px]">
                <div className="text-[15px]">
                    &copy;2023Skyline Estate. All rights reserved
                </div>
                <div>
                    <Link to="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f text-gray-400 mr-[30px] cursor-pointer"></i>
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank">
                        {' '}
                        <i className="fab fa-instagram text-gray-400 mr-[30px] cursor-pointer"></i>
                    </Link>
                    <Link to="https://www.twitter.com/" target="_blank">
                        {' '}
                        <i className="fab fa-twitter text-gray-400 mr-[30px] cursor-pointer"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/" target="_blank">
                        {' '}
                        <i className="fab fa-linkedin text-gray-400 mr-[30px] cursor-pointer"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
