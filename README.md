# react-redux-dimensions

A simple redux integration to collect browser dimension data



[![NPM](https://img.shields.io/npm/v/react-modern-library-boilerplate.svg)](https://www.npmjs.com/package/react-modern-library-boilerplate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add --save react-redux-dimensions
```

## Usage `store.js`
```js
  import { ResizerReducer } from 'react-redux-dimensions'

  // combine your reducer
  combineReducers({
    appWindow: ResizerReducer
  })
```

```jsx
import React, { Component } from 'react';
import Resizer from 'react-redux-dimensions';
import { Provider } from 'react-redux';

class Example extends Component {
  render () {
    return (
      <Provider store={store}>
        <Resizer>
          <App />
        </Resizer>
      </Provider>
    )
  }
}
```

## License

MIT © [Miguel Caballero](https://github.com/mcabs3)
