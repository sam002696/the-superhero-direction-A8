import React from 'react';
import './Singers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const Singers = (props) => {
    const element = <FontAwesomeIcon icon={faMusic} size="2x" />
    const playCircle = <FontAwesomeIcon icon={faPlayCircle} size="2x" />
    const { img, name, famous_song, net_worth, per_show_salary, birth_date } = props.singer;
    return (
        <div className="bg-gray-200 border group hover:bg-white hover:border-transparent hover:shadow-lg m-4 ring-4 rounded singers text-center ring-gray-600">
            <div>
                <img className="p-6 rounded-full" src={img} alt="" />
                <div>
                    <h2 className="font-serif mb-2 text-2xl">Name : {name}</h2>
                    <h3 className="font-serif mb-2 text-2xl">Birth Date : {birth_date}</h3>
                    <h3 className="font-serif mb-2 text-2xl">Per Show Sallary : {per_show_salary}</h3>
                    <h3 className="font-serif mb-2 text-2xl">Famous Song : {famous_song}</h3>
                    <h3 className="font-serif mb-2 text-2xl">Net Worth : {net_worth}</h3>
                </div>
                {/* <button onClick={() => props.addToCart(props.singer)}>Add To Cart</button> */}
                <button onClick={() => props.addToCart(props.singer)}
                    type="submit"
                    className="group relative w-3/4 mx-auto m-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Add To Cart
                </button>
                <div className="mb-3 text-gray-500">
                    <span className="mx-10"> {element}</span> <span className="mx-10">{playCircle}</span>
                </div>
            </div>

        </div>
    );
};

export default Singers;