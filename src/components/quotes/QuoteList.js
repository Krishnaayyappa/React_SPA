import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

// we can sort using comparsion function inside of the sort() especially for numbers.

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history =  useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAscending = queryParams.get("sort") === "asc";

  const handleQueryParams = () => {
    history.push({
      pathname:location.pathname,
      search: `?sort=${(isAscending ? 'desc':'asc')}`
    });
  };

  const sortedQuotes = sortQuotes(props.quotes, isAscending);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={handleQueryParams}>Sort {isAscending ? "Descending":"Ascending"}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
