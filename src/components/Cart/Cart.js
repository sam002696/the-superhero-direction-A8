import React from 'react';
import Name from '../Names/Name';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const element = <FontAwesomeIcon icon={faUser} />
    const { cart, name } = props;
    const totalReducer = (previous, singer) => previous + singer.per_show_salary;
    const total = cart.reduce(totalReducer, 0);
    return (
        <div>
            <h3 className="p-10 text-3xl text-center text-gray-700 underline">   {element} Singers Added : {cart.length} </h3>
            <h3 className="p-10 text-3xl text-center text-gray-700 underline">Total Cost: {total}</h3>
            {
                name.map(name => <Name name={name} key={name}></Name>)
            }
        </div>
    );
};

export default Cart;