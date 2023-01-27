import React, { useEffect } from "react";
import { Fragment } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
// const dummyData = [
//     {id:"q1", author:"krishna", text:"React is great"},
//     {id:"q2", author:"Narina", text:"React is very difficult to learn"}
// ]

const QuoteDetails = () => {
    const {sendRequest, data:quoteData, error, status} = useHttp(getSingleQuote, true)
    const params = useParams();
    const match = useRouteMatch();
    const {quoteId} = params;

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])

    // let quote = dummyData.find(quote => {
    //     return quote.id === params.quoteId;
    // })
    // if(!quote){
    //     quote = {text:"unable to find the quote", author:"-"}
    // }

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

    if (!quoteData.text){
        return <h1 className="centered focussed">No quote Found!</h1>
    }

    // if (status === "completed" && (!quoteData || loadedData.length === 0)){
    //     return (
    //         <NoQuotesFound />
    //     )
    // }

    return (
        <Fragment>
            <HighlightedQuote text={quoteData.text} author={quoteData.author}/>
            <Route path={match.path} exact>
                <div className = "centered">
                    <Link className="btn--flat" to = {`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path = {`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
    
}


export default QuoteDetails;