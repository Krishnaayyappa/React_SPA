import { useRef } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { Fragment,useState } from 'react';

const QuoteForm = (props) => {
  const [isFocussed, setFocus] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const FocusHandler = () => {
    setFocus(true);
  }

  const removeFocusHandler = () => {
    setFocus(false);
  }
  
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Fragment>
      <Prompt when={isFocussed} message = {(location) => {
        return "Are you sure you want to leave the page. The data entered will be lost"
      }}/>
      <Card>
        <form onFocus = {FocusHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick = {removeFocusHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
