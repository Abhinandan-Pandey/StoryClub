import React, { useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../Store/actions/index";
import Spinner from "../../Utilities/spinner";

function StoryModal(props) {
  const [story, setStory] = useState({
    title: null,
    body: null,
    privacy: false,
  });
 
const inputChangeHandler=(e,identifier)=>{
    setStory({
        ...story,
        [identifier]:e.target.value
    })
}
const checkboxHandler=(e)=>{
    setStory({
        ...story,
        privacy:e.target.checked
    })
}
const postStoryHandler=()=>{
    const newStory={
        title:story['title'],
        body:story['body'],
        privacy:story['privacy'],
        userId:null
    }
    props.postStory(newStory)
    console.log(newStory)
}
  return (
    <React.Fragment>
      <div
        className="backdrop"
        onClick={props.closeModal}
        style={{
          opacity: props.show ? "1" : "0",
          transition: "opacity 1s linear",
        }}
      ></div>
      <div className="container">
        <div
          className="storyModal"
          style={{
            // transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0",
            transition: "opacity 1s linear",
          }}
        >
          {!props.loading ? (
            <>
              <form>
                <input
                  className="modal-title"
                  placeholder="Name of your Story"
                  onChange={(e) => inputChangeHandler(e, "title")}
                ></input>
                <textarea
                  className="modal-body"
                  placeholder="text"
                  onChange={(e) => inputChangeHandler(e, "body")}
                ></textarea>
              </form>
              <div className="modal-footer">
                <label >Keep private &nbsp;</label>
                <input
                  type="checkbox"
                  onChange={(e) => checkboxHandler(e)}
                />
                <button className="delete-post" onClick={props.deletePost}>
                  delete
                </button>
                <button className="submit-post" onClick={postStoryHandler}>
                  post
                </button>
                <button className="close-post" onClick={props.closeModal}>
                  cancel
                </button>
              </div>
            </>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.modal.loading,
    error: state.modal.error,
    show: state.modal.show,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postStory: (newStory) => dispatch(actions.postingStory(newStory)),
    deletePost: () => {},
    closeModal: () => dispatch(actions.modalClose()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryModal);
