'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react'

function Facility() {
    const searchParams = useSearchParams();
    let slug = searchParams.get('slug')

    return (
        <div>Facility : {slug}</div>
    )
}

export default Facility