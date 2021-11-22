import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singers from '../Singers/Singers';
import './Festival.css'


const Festival = () => {
    const [singers, setSingers] = useState([]);
    const [cartLength, setCart] = useState([]);
    const [name, setName] = useState([]);
    useEffect(() => {
        fetch('./fakedb.JSON')
            .then(res => res.json())
            .then(data => setSingers(data));
    }, [])
    const addToCart = (singer) => {
        const newCart = [...cartLength, singer]
        const newName = [...name, singer.name]
        setName(newName);
        setCart(newCart);
    }
    return (
        <div className="festival-container">
            <div className="p-10 singer-container">
                {
                    singers.map(singer => <Singers addToCart={addToCart} singer={singer} key={singer.name}></Singers>)
                }
            </div>
            <div className="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 border cart-container mt-14 rounded-2xl w-10/12 h-1/3 ring-4 ring-gray-600">
                {
                    <Cart cart={cartLength} name={name}></Cart>
                }
            </div>
        </div>
    );
};

export default Festival;