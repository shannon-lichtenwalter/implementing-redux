# Redux challenge

You'll be building a clone of Redux -- in this case, `dedux` -- in the service of a simple counter app.

## 1

Build the `dedux` library. Use the tests in `implementing-redux/__tests__/tests.spec.js` to guide you.

You can run the tests with:

```
yarn test {{ PATH_TO_FILE }} --watch
```

There are some tests you'll need to write yourself. The API for `dedux` is very similar to `redux`. It has:

- A `createStore` method that accepts a reducer function and returns a `store` object

A `store` has the following methods:

- `getState`
- `dispatch`
- `subscribe`

## 2

Use the `dedux` library in `counter.js` to build a small counter application. The HTML is already written and can be seen in `implementing-redux/counter.html`.

## 3

Wouldn't it be nice if we logged every action that happens in the app, together with the state computed after it? And wouldn't it be great if the app persisted your state to the browser so that you wouldn't lose count on a refresh? How would you go about implementing these features?

Once you've finished an initial implementation, return to the test file and unskip the `applyMiddleware` block.
