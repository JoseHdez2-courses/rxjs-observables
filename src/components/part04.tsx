import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { fromEvent, Observable } from "rxjs";

export const Part = () => {
  const title = "Throw Errors with RxJS Observables";
  const [log, setLog]: any = useState([]);

  // Observable (PUSH)
  let bar = Observable.create((observer: any) => {
    try {
      console.log("Hello");
      observer.next(42);
      observer.next(100);
      observer.next("error incoming");
      observer.error(new Error("bad"));
      setTimeout(() => {
        observer.next(300);
      }, 1000);
    } catch (err) {
      observer.error(err);
    }
  });

  const onClick = () => {
    bar.subscribe(
      (x: any) => {
        console.log(x);
      },
      (err: any) => {
        console.error("Something went wrong: " + err);
      }
    );
  };

  return (
    <div>
      <h5>{title}</h5>
      <Button onClick={onClick}>Click</Button>
      <ListGroup>
        {log.map((l: any) => (
          <ListGroupItem>{l}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
