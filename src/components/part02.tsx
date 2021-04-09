import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { fromEvent, Observable } from "rxjs";

export const Part = () => {
  const [log, setLog]: any = useState([]);

  let bar = Observable.create((observer: any) => {
    console.log("Hello");
    observer.next(42);
    observer.next(100);
    observer.next(200);
    setTimeout(() => {
      observer.next(300);
    }, 1000);
  });

  const onClick = () => {
    bar.subscribe((x: any) => console.log(x));
  };

  return (
    <div>
      <h5>Return multiple values from Observables in RxJS</h5>
      <Button onClick={onClick}>Open console and click this</Button>
      <ListGroup>
        {log.map((l: any) => (
          <ListGroupItem>{l}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
