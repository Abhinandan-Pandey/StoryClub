import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import StoryCard from "../components/storyCard";
import * as actions from "../../Store/actions/index";
import Spinner from "../../Utilities/spinner";
import StoryModal from "../../Home/components/storyModel";
import axios from "../../axios";
import withErrorHandler from "../../Hoc/withErrorHandler";

function Stories(props) {useEffect(()=>{
  console.log('mount s')
  return () => {
    //  axios.interceptors.request.eject(reqInterceptor);
    //  axios.interceptors.response.eject(resInterceptor);
      console.log('unmount s')
    };
},[])
  const [storyModal, setStoryModal] = useState(null);

  const { fetchStories, token } = props;
  const viewProfileHandler = () => {
    const uid = props.userId;
    props.history.push("/profile/" + uid);
  };
  const ProfileHandler = (uid) => {
    props.history.push("/profile/" + uid);
  };
  const postEditorHandler = (type, data) => {
    setStoryModal(<StoryModal type={type} card={data} />);
    props.storyModalOpen();
  };

  useEffect(() => {
    fetchStories(token);
  }, [fetchStories, token]);

  const [stories, setStories] = useState([]);
  const { storiesArray } = props;
  useEffect(() => {
    setStories(storiesArray);
  }, [storiesArray]);

  let storyCards;
  if (!props.loading) {
    // console.log(stories,updateStory,deleteStory)
    const publicStories = stories.filter((card) => card.privacy === false);
    storyCards = publicStories.map((card, i) => {
      return (
        <StoryCard
          key={card.title + i}
          postEditor={() => postEditorHandler("editPost", card)}
          profileViewer={() => ProfileHandler(card.userId)}
          card={card}
          userId={props.userId}
        />
      );
    });
    if (publicStories.length === 0) {
      storyCards = <h1>No Post Found</h1>;
    }
  }

  return (
    <>
      {!props.loading ? (
        <>
          {props.storyModalReset ? storyModal : null}
          <div className="introHeader">
            <h1 className="heading-1 intro">Everone Has Story to Tell</h1>
            <h3 className="line">Show your story to world</h3>
            <button
              className="btn-primary pro-btn"
              onClick={viewProfileHandler}
            >
              Veiw Profile
            </button>
          </div>
          <div className="container-header">Public Stories</div>
          <div className="stories">{storyCards}</div>
        </>
      ) : (
        <div className="stories-spinner">
          <Spinner />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.stories.loading,
    storiesArray: state.stories.stories,
    token: state.auth.token,
    userId: state.auth.userId,
    storyModalReset: state.modal.show,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStories: (token) => dispatch(actions.fetchingStory(token)),
    storyModalOpen: () => dispatch(actions.modalOpen()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Stories, axios));
