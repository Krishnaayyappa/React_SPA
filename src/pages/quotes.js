import { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

// const dummyData = [
//     {id:"q1", author:"krishna", text:"React is great"},
//     {id:"q2", author:"Narina", text:"React is very difficult to learn"}
// ]

const Quotes = () => {
    const {sendRequest, data:loadedData, error, status} = useHttp(getAllQuotes, true)

    useEffect(() => {
         sendRequest();
    },[sendRequest])

    if (status === "pending"){
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error){
        return <p className="centered focused">{error}</p>;
    }

    if (status === "completed" && (!loadedData || loadedData.length === 0)){
        return (
            <NoQuotesFound />
        )
    }

    return <QuoteList quotes={loadedData}/>
}

export default Quotes;