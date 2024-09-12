import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BookViewModal = ({show, item, onClose}) => {
  if (!show) { return null; }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>{item.volumeInfo.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={thumbnail} alt=''/>
          <h3>{item.volumeInfo.authors}</h3>
          <p>{item.volumeInfo.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default BookViewModal;