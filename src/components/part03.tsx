import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { fromEvent, Observable } from "rxjs";

export const Part03 = () => {
  const [log, setLog]: any = useState([]);

  // Observable (PUSH)
  let bar = Observable.create((observer: any) => {
    console.log("Hello");
    observer.next(42);
    observer.next(100);
    observer.next(200);
    setTimeout(() => {
      observer.next(300);
    }, 1000);
  });

  // Generator (PULL)
  function* baz() {
    console.log("Hello");
    yield 42;
    yield 100;
    yield 200;
  }

  const onClick = () => {
    // Generator consumer determines when values are sent.
    let iterator = baz();
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
  };

  return (
    <div>
      <h5>Push Values from Observables in RxJS</h5>
      <Button onClick={onClick}>Click</Button>
      <ListGroup>
        {log.map((l: any) => (
          <ListGroupItem>{l}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
