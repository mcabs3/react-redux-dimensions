# react-redux-dimensions

A simple redux integration to collect browser dimension data with some sugar to make access to dimensions "sweeter" (see what I did there)?

## Installation

```bash
yarn add react-redux-dimensions
```

## Usage `store.js`
```js
  // Add the ScreenReducer to your reducer configuration
  import { ScreenReducer } from 'react-redux-dimensions'

  // combine your reducer
  combineReducers({
    screen: ScreenReducer
  })
```

```jsx
// Generic App component that creates the store and gives it to the Provider
import React, { Component } from 'react';
import Screen from 'react-redux-dimensions';
import { Provider } from 'react-redux';
import configureStore from '../your-store-configurer';

const store = configureStore();

class App extends Component {
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

export default App;
```

```jsx
// Connected Component that needs the "screen"
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
  screen: state.screen
});

const mapDispatch = dispatch => ({})

class ExamplePage extends Component {
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

export default connect(mapState, mapDispatch)(ExamplePage)
```

## License

MIT © [Miguel Caballero](https://github.com/mcabs3)
