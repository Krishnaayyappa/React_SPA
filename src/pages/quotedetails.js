import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const dummyData = [
    {id:"q1", author:"krishna", text:"React is great"},
    {id:"q2", author:"Narina", text:"React is very difficult to learn"}
]

const QuoteDetails = () => {
    const params = useParams();
    let quote = dummyData.find(quote => {
        return quote.id === params.quoteId;
    })
    if(!quote){
        quote = {text:"unable to find the quote", author:"-"}
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path = {`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
    
}

export default QuoteDetails;