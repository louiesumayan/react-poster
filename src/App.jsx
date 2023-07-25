import MainHeader from './components/MainHeader';
import PostList from './components/PostList';
import { useState } from 'react';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModal() {
    setModalIsVisible(true);
  }

  function clickHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModal} />
      <main>
        <PostList isShowModal={modalIsVisible} onStopPosting={clickHandler} />
      </main>
    </>
  );
}

export default App;
