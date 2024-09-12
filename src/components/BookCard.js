import React from "react";
import { Card } from "react-bootstrap";

const BookSearchList = ({book}) => {
  return (
    <>
      {
        book.map((item) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          return (
            <>
              <Card className="my-5 mx-auto" style={{ width: '18rem' }}>
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
            </>
          )
        })
      }
    </>
  )
}

export default BookSearchList;