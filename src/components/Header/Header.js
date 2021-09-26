import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="p-11 text-center bg-purple-200 mb-10 rounded-b-2xl w-10/12 mx-auto ring-8 ring-purple-400">
            <h1 className="text-5xl p-4 font-extrabold text-indigo-400">Choose Your Own Singers To See The Best Performance</h1>
            <h3 className="text-3xl font-serif p-4 text-gray-600">Music Can Make You Move, Live Performance is the BEST</h3>
            <h1 > <span className="text-gray-700 text-3xl font-mono"> Total Budget:</span>  <span className="font-extrabold text-4xl text-blue-700">300 Million</span></h1>
        </div>
    );
};

export default Header;