import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const AbortCont = new AbortController();

        fetch(url, {signal: AbortCont.signal})
            .then(res => {
                if (!res.ok) throw new Error("Can't get the data =(");
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
                setIsPending(false);
            })
            .catch(err => {
                if (err.name === "Abort") {
                    console.log("Fetch aborted");
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        return () => AbortCont.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;