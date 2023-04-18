import { useEffect, useState } from "react";
import { Post } from "../../pages";


export function useFetch (url: string){
    const [response, setResponse] = useState<Post[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await fetch(url);
            const posts = await res.json();
            console.log(res.status)
            setResponse(posts);
            
        } catch (error) {
            console.log(error)
            setError(error);
        }
        };
        fetchData();
    }, []);

    return { response, error };
};
    
