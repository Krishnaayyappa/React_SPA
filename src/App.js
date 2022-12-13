import {Route, Switch, Redirect} from "react-router-dom"
import Quotes from "./pages/quotes";
import NewQuote from "./pages/newquote";
import QuoteDetails from "./pages/quotedetails";
import Layout from "./components/layout/layout";
import PageNotFound from "./pages/pagenotfound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path = "/" exact>
          <Redirect to = "/quotes" />
        </Route>
        <Route path = "/quotes" exact>
          <Quotes />
        </Route>
        <Route path = "/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path = "/newquote">
          <NewQuote />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
