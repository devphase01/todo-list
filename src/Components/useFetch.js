import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        const AbortCont = new AbortController();

        fetch(url, {signal: AbortCont.signal})
            .then(res => {
                if(!res.ok) throw new Error("Can't catch the data");
                return res.json();
            })
            .then(data => {
                setError(null);
                setIsPending(false);
                setData(data);
            })
            .catch(err => {
                if(err.message === "Abort") {
                    console.log("Fetch aborted");
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            })
        return () => AbortCont.abort();    
    }, [url]);

    return {data, isPending, error};
}

export default useFetch