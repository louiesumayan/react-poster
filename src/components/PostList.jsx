import NewPost from './NewPost';
import Post from './Post';
import styles from './PostList.module.css';
import { useState } from 'react';
import Modal from './Modal';

function PostList({ isShowModal, onStopPosting }) {
  const [posts, setPost] = useState([]);

  function addPostHanlder(postData) {
    setPost((prevPosts) => [postData, ...prevPosts]);
  }
  return (
    <>
      {isShowModal && (
        <Modal hideHanlder={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHanlder} />
        </Modal>
      )}
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((item) => (
            <Post key={item.body} author={item.author} body={item.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start Adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
