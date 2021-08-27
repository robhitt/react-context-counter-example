import React, { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';
import CounterContext from '../../store/counter-context';
import ModalContent from './ModalContent';
import classes from './Modal.module.css';

const portalElement = document.getElementById('modal');

const Modal = props => {
  const modalCtx = useContext(CounterContext);

  return (
    <Fragment>
      {createPortal(
        <div className={classes.modal} onClick={modalCtx.closeModal} />,
        portalElement
      )}
      {/* <div className={classes.modal} onClick={modalCtx.closeModal} /> */}
      <ModalContent />
    </Fragment>
  );
};

export default Modal;
