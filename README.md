# react-redux-dimensions

A simple redux integration to collect browser dimension data

## Install

```bash
yarn add --save react-redux-dimensions
```

## Usage `store.js`
```js
  import { ScreenReducer } from 'react-redux-dimensions'

  // combine your reducer
  combineReducers({
    screen: ScreenReducer
  })
```

```jsx
import React, { Component } from 'react';
import Screen from 'react-redux-dimensions';
import { Provider } from 'react-redux';

class Example extends Component {
  render () {
    return (
      <Provider store={store}>
        <Screen>
          <App />
        </Screen>
      </Provider>
    )
  }
}
```

```jsx
// Connected Component
import React, { Component } from 'react';
import Screen from 'react-redux-dimensions';
import { Provider } from 'react-redux';

const mapState = state => ({
  screen: state.screen
});

const mapDispatch = dispatch => ({})

class Example extends Component {
  render () {
    const { screen } = this.props;
    return (
      <div>
        <p>"Size" {screen.size}</p>
        <p>Orientation {screen.orientation}</p>
        <p>InnerWidth {screen.width}</p>
        <p>InnerHeight {screen.height}</p>
      </div>
    )
  }
}
```

## License

MIT © [Miguel Caballero](https://github.com/mcabs3)
