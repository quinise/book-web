import React, { useState } from "react";

import { Card } from "react-bootstrap";
import BookViewModal from "./BookViewModal";

const BookSearchList = ({book}) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {
        book.map((item) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          return (
            <>
              <Card className="my-5 mx-auto" onClick={() => {setShow(true); setItem(item)}} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={thumbnail} alt="" />
              <Card.Body>
                <Card.Title>{item.volumeInfo.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.volumeInfo.subtitle}</Card.Subtitle>
                <Card.Text>
                  {item.searchInfo.textSnippet}
                </Card.Text>
                <Card.Link href={item.volumeInfo.previewLink}>Preview the text</Card.Link>
                <Card.Link href={item.volumeInfo.canonicalVolumeLink}>Listen to this text</Card.Link>
              </Card.Body>
            </Card>
            <BookViewModal show={show} item={bookItem} onClose={() => setShow(false)}/>
            </>
          )
        })
      }
    </>
  )
}

export default BookSearchList;