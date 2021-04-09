import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Observable, of } from "rxjs";

export const Part02 = () => {
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
    </div>
  );
};

export const Part03 = () => {
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
      <Button onClick={onClick}>Open console and click this</Button>
    </div>
  );
};

export const Part04 = () => {
  const title = "Throw Errors with RxJS Observables";

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
      <Button onClick={onClick}>Open console and click this</Button>
    </div>
  );
};

export const Part05 = () => {
  const title = "Perform an Action on Completion with RxJS Observables";

  // Observable (PUSH)
  let bar = Observable.create((observer: any) => {
    try {
      console.log("Hello");
      observer.next(42);
      observer.next(100);
      setTimeout(() => {
        observer.next(300);
        observer.complete();
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
      },
      () => {
        // complete handler.
        console.log("done");
      }
    );
  };

  return (
    <div>
      <h5>{title}</h5>
      <Button onClick={onClick}>Open console and click this</Button>
    </div>
  );
};

export const Part06 = () => {
  const title = "Deliver Synchronous Values with the RxJS of() Operator";

  // Observable (PUSH)
  let bar = Observable.create((observer: any) => {
    observer.next(42);
    observer.next(100);
    observer.next(100);
    observer.complete(200);
  });

  // less boilerplate
  let foo = of(42, 100, 200);

  const onClick = () => {
    foo.subscribe(
      (x: any) => {
        console.log(x);
      },
      () => {
        // complete handler.
        console.log("done");
      }
    );
  };

  return (
    <div>
      <h5>{title}</h5>
      <Button onClick={onClick}>Open console and click this</Button>
    </div>
  );
};

export const Part07 = () => {
  const title = "Convert JavaScript Values to RxJS Observables";

  let arr = [42, 100, 200];
  // let foo = Observable.from(arr);

  const onClick = () => {
    // foo.subscribe(
    //   (x: any) => {
    //     console.log(x);
    //   },
    //   () => {
    //     // complete handler.
    //     console.log("done");
    //   }
    // );
  };

  return (
    <div>
      <h5>{title}</h5>
      <Button onClick={onClick}>Open console and click this</Button>
    </div>
  );
};
