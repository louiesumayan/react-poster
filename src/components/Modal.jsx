import classes from './Modal.module.css';

function Modal({ children, hideHanlder }) {
  return (
    <>
      <div className={classes.backdrop} onClick={hideHanlder} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
