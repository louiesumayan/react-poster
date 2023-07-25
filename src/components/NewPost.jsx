import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost(props) {
  const [onBodyChanged, setOnBodyChanged] = useState('');
  const [onAuthor, setOnAuthor] = useState('');

  function onBodyChangedHandler(event) {
    setOnBodyChanged(event.target.value);
  }

  function onAuthorChangedHandler(event) {
    setOnAuthor(event.target.value);
  }

  function submitHandlder(event) {
    event.preventDefault();
    const postData = {
      body: onBodyChanged,
      author: onAuthor,
    };
    props.onAddPost(postData);
    props.onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandlder}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChangedHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={onAuthorChangedHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
