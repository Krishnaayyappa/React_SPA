import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";


const NewQuote = () => {

    const history = useHistory();

    const addQuoteHandler = () => {
        console.log("sent the quote")
        history.push("/quotes");
    }

    return <QuoteForm onAddQuote = {addQuoteHandler}/>
}

export default NewQuote;