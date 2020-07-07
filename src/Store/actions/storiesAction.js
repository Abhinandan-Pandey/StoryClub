import axios from "../../axios";
import * as actionTypes from "../actions/actionTypes";

export const fetchingStoryStart = () => {
  return {
    type: actionTypes.FETCHING_STORY_START,
  };
};

export const fetchingStorySuccess = (stories) => {
  let storiesArray=Object.keys(stories).map((key)=>{
      return(stories[key]) 
  })
  // console.log(storiesArray)
   
  return {
    type: actionTypes.FETCHING_STORY_SUCCESS,
    stories: storiesArray,
  };
};

export const fetchingStoryFail = (err) => {
  return {
    type: actionTypes.FETCHING_STORY_FAIL,
    error: err,
  };
};

export const fetchingStory = () => {
  return (dispatch) => {
    dispatch(fetchingStoryStart());
    axios
      .get("/stories.json")
      .then((res) => {
        dispatch(fetchingStorySuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchingStoryFail(err));
      });
  };
};
