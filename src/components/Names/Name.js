import React from 'react';

const Name = (props) => {
    const { name } = props
    return (
        <div>
            <h3 className="border-2 border-gray-600 font-sans italic mt-12 mx-auto p-3 rounded-full text-3xl text-center text-gray-600 w-3/4">  {name} </h3>
        </div>
    );
};

export default Name;