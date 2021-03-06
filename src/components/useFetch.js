import {useState, useEffect} from "react";


const useFetch = (url) => {

    const abortCont = new AbortController();

    const[data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal })
            .then(response => {
                if(!response.ok){
                    throw Error("Could not fetch data for that resource");    
                }
                console.log(response.ok);
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(false);
            })
            .catch(err => {
                if(err.name === "AbortError") {
                    console.log("Fetch Aborted");
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            })
        }, 1000);

        return () => abortCont.abort();

    }, [url]);
    
    return {data, isPending, error};
}


export default useFetch;