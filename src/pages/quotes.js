import QuoteList from "../components/quotes/QuoteList";
const dummyData = [
    {id:"q1", author:"krishna", text:"React is great"},
    {id:"q2", author:"Narina", text:"React is very difficult to learn"}
]

const Quotes = () => {
    return <QuoteList quotes={dummyData}/>
}

export default Quotes;