import { createAction, handleActions } from 'redux-actions';

const sizes = {
  xs: {
    size: 576,
    q: 'max-width'
  },
  sm: {
    size: 576,
    q: 'min-width'
  },
  md: {
    size: 768,
    q: 'min-width'
  },
  lg: {
    size: 992,
    q: 'min-width'
  }
};

export const Screen = {
  xs(w) {
    return w <= sizes.xs.size;
  },
  sm(w) {
    return w >= sizes.sm.size;
  },
  md(w) {
    return w >= sizes.md.size;
  },
  lg(w) {
    return w >= sizes.lg.size;
  },
  size(w) {
    if (this.lg(w)) {
      return 'lg';
    } else if (this.md(w)) {
      return 'md';
    } else if (this.sm(w)) {
      return 'sm';
    }
    return 'xs';
  }
};

const defaultState = {
  size: undefined,
  width: undefined
};

const REACT_RESIZE_SAVE_SIZE = 'REACT_RESIZE_SAVE_SIZE';
export const resizeSaveSize = createAction(REACT_RESIZE_SAVE_SIZE);


export default handleActions({
  REACT_RESIZE_SAVE_SIZE: (state, { payload } = {}) => {
    if (payload) {
      return {
        ...state,
        width: payload,
        size: Screen.size(payload)
      };
    }
    return state;
  }
}, defaultState);
