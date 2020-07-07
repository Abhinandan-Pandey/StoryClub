import axios from '../../axios';
import * as actionTypes from '../actions/actionTypes';

export const postingStart=()=>{
    return{
        type:actionTypes.POSTING_STORY_START,
    }
}

export const postingSucceded=()=>{
    return {
        type:actionTypes.POSTING_STORY_SUCCESS,
    }
}

export const postingFailed=(error)=>{
    return{
        type:actionTypes.POSTING_STORY_FAIL,
        error:error,
    }
}
export const modalClose=()=>{
    return{
        type:actionTypes.MODAL_CLOSE,
    }
}

export const postingStory=({title,body,privacy,userId})=>{
   return (dispatch)=>{
       const story={
           title,
           body,
           privacy,
           userId,
       }
       dispatch(postingStart())
       axios.post('/stories.json',story)
       .then((res)=>{
           dispatch(postingSucceded())
       })
       .catch((err)=>{
           console.log(err)
           dispatch(postingFailed(err))
       })
   }
}