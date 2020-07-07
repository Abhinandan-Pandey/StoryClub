import React, { useEffect } from "react";
import { connect } from "react-redux";

import StoryCard from "../components/storyCard";
import * as actions from "../../Store/actions/index";
import Spinner from '../../Utilities/spinner';

function Stories(props) {
  const { fetchStories } = props;
  const viewProfileHandler = () => {
    console.log("profile");
  };
  const postEditorHandler = () => {
    props.history.push("/storyModel");
    console.log("post");
  };
  useEffect(() => {
    fetchStories();
  }, [fetchStories]);
 let storyCards=<Spinner/>
 if(!props.loading){
   storyCards = props.stories.map((card,i) => {
    return (
      <StoryCard
        key={card.title+i}
        postEditor={postEditorHandler}
        profileViewer={viewProfileHandler}
        card={card}
      />
    );
  });
}

  return (
    <>
      <div className="introHeader">
        <h1 className="heading-1 intro">Everone Has Story to Tell</h1>
        <h3 className="line">Show your story to world</h3>
        <button className="btn-primary pro-btn" onClick={viewProfileHandler}>
          Veiw Profile
        </button>
      </div>
      <div className="container-header">Public Stories</div>
      <div className="stories">{storyCards}</div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.stories.loading,
    stories: state.stories.stories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStories: () => dispatch(actions.fetchingStory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
