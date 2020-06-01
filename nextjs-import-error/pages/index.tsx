import React, { useState, useEffect } from "react";

const useData = () => {

    const [data, setData] = useState([]); 
    
    const fetchData = async () => {

        const response = await fetch("/api/data"); 
        if (response.status === 200) {

            const json = await response.json(); 
            setData(json);
        } else {

            console.warn(response);
            setData([]);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return data; 
}

export default () => {

    const data = useData(); 

    return <div>
        <p>Data: </p>
        <ul>
            {data.map(d => {
                <li>{d.key}</li>
            })}
        </ul>
    </div>
}