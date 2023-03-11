import React, { createContext, useEffect} from 'react'
import { useState } from 'react';


export const store = createContext()

const Details = (props) => {
    const [details, setDetails] = useState([]);

    useEffect(()=>{
        let fetch_data=async ()=>{
            let fetch_url=await fetch('https://backend-api-ylfc.onrender.com')
            let fetch_json=await fetch_url.json()
            setDetails(fetch_json)
        }
        fetch_data()
    })
    return (
        <div>
            <store.Provider value={[details, setDetails]}>

                {props.children}


            </store.Provider>
        </div>
    )
}

export default Details;