import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5 shadow border-top border-secondary bg-light'>
            <footer className="container pt-3">
                <div>
                    <ul className="d-flex justify-content-center">
                        {/* facebook icon */}
                        <li className="px-3">
                            <a href="#">
                            Github
                            </a>
                        </li>
                        <li className="px-3">
                            <a href="#">
                                Facebook
                            </a>
                        </li>
                        <li className="px-3">
                            <a href="#">
                                Linkedin
                            </a>
                        </li>
                        <li className="px-3">
                            <a href="#">
                                Youtube
                            </a>
                        </li>
                        <li className="px-3">
                            <a href="#">
                            Twitter
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="px-3">
                        <small>
                            Copyright &copy; 2022 All Rights Reverved
                        </small>
                    </p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;