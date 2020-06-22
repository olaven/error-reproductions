// <3 
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
        <button onClick={fetchEndpoint}>fetch todo from JSONPlaceholder</button>
        <div>{value ? `fetched todo '${value}'` : ''}</div>
    </>
}

export default Index; 