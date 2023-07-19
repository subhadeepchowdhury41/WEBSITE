'use client'
import React from 'react';

const NamePage = ({ params }) => {
    return (
        <div>
            <h1>name: {params.name}</h1>
        </div>
    );
};

export default NamePage;
