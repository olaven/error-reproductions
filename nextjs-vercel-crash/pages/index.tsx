import { useState } from "react";

const Index = () => {

    const [value, setValue] = useState(null);
    const fetchEndpoint = async () => {

        const response = await fetch('/api/endpoint');
        if (response.status === 200) {

            const value = await response.text();
            setValue(value);
        }
    }
    return <>
        <button onClick={fetchEndpoint}>fetch endpoint</button>
        <div>{value ? `fetched value '${value}'` : ''}</div>
    </>
}

export default Index; 