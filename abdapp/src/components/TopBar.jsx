import React from "react";
import Logo from '../components/Logo.jsx'
import { Link } from 'react-router-dom';


function TopBar(){
    return(
        <header className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white ">
            <div className="flex flex-grow basis-0">
                <Logo />
            </div>
            <nav>
                <ul className="flex text-sm">
                    <li className="py-4 px-2 inline-block"> <a>Create </a> </li>
                    <li className="py-4 px-2 inline-block"> <Link to="/Update">Update </Link> </li>
                    <li className="py-4 px-2 inline-block"> <a>Show </a> </li>
                    <li className="py-4 px-2 inline-block"> <a>Delete </a> </li>
                </ul>
            </nav>
            <nav className="flex flex-grow justify-end basis-0 mr-3">
                <ul className="flex text-sm">
                    <li className="py-4 px-2 inline-block"> <Link to="/townhall"> Townhall </Link>  </li>
                    <li className="py-4 px-2 inline-block"> <Link to="/language">Language </Link> </li>
                    <li className="py-4 px-2 inline-block"> <Link to="/countryl">Country Language </Link> </li>
                    <li className="py-4 px-2 inline-block"> <Link to="/country">Country </Link> </li>
                    <li className="py-4 px-2 inline-block"> <Link to="/city">City </Link> </li>
                </ul>
            </nav>
        </header>
    )
}


export default TopBar