import { createAction, handleActions } from 'redux-actions';
import { ScreenSize } from '../utils/helpers';

const defaultState = {
  size: undefined,
  width: undefined,
  height: undefined
};

const REACT_REDUX_DIMENSIONS_SAVE = 'REACT_REDUX_DIMENSIONS_SAVE';
export const saveDimensionData = createAction(REACT_REDUX_DIMENSIONS_SAVE);


export default handleActions({
  REACT_REDUX_DIMENSIONS_SAVE: (state, { payload } = {}) => {
    if (payload) {
      const {
        height = 0,
        width = 0
      } = payload

      return {
        ...state,
        height,
        width,
        size: ScreenSize.size(width),
        orientation: height > width ? 'portrait' : 'landscape'
      };
    }
    return state;
  }
}, defaultState);
