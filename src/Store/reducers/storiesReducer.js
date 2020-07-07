import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const intialState = {
  loading: false,
  error: null,
  stories: [],
};

const fetchingStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};
const fetchingSuccess = (state, action) => {
  return updateObject(state, {
    stories: action.stories,
    loading:false,
  });
};
const fetchingFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_STORY_START:
      return fetchingStart(state, action);
    case actionTypes.FETCHING_STORY_SUCCESS:
      return fetchingSuccess(state, action);
    case actionTypes.FETCHING_STORY_FAIL:
      return fetchingFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
