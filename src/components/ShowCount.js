import React, { Fragment, useContext } from 'react';
import CounterContext from '../store/counter-context';
import Button from './UI/Button';
import Modal from './modal/Modal';

const ShowCount = props => {
  const modalCtx = useContext(CounterContext);
  return (
    <Fragment>
      <Button onClick={modalCtx.openModal}>Modal Takeover</Button>
      {modalCtx.modalIsOpen && <Modal />}
    </Fragment>
  );
};

export default ShowCount;
