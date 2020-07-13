import React, { useState,useEffect} from "react";
import { connect } from "react-redux";

import sprite from "../../Styles/img/sprite.svg";
import StoryCard from "../../Home/components/storyCard";
import ProfileEditModel from "../../Home/components/profileEditModel";
import Spinner from '../../Utilities/spinner';
import * as actions from '../../Store/actions/index';
import StoryModal from '../../Home/components/storyModel';
import axios from "../../axios";
import withErrorHandler from "../../Hoc/withErrorHandler";

function Profile(props) { 
  const [profileDetails, setProfileDetails] = useState({
    coverQuote: "",
    bio: "",
    location: "",
    coverQuotePrev: "",
    bioPrev: "",
    locationPrev: "",
    coverQuoteDisplay: false,
    bioDisplay: false,
    locationDisplay: false,
  });
  const [storyModal, setStoryModal] = useState(null)

  const handleEditFormDisplay = (toEdit) => {
    const toEditDisplay = toEdit + "Display";
    setProfileDetails({
      ...profileDetails,
      [toEditDisplay]: true,
    });
  };
  const inputChangeHandler=(e,identifier)=>{
       setProfileDetails({
           ...profileDetails,
           [identifier]:e.target.value,
       })
  }
  const cancelEditHandler=(toCancel)=>{
    const toCancelDisplay=toCancel+'Display';
    const toCancelPrev=toCancel+'Prev'
    setProfileDetails({
        ...profileDetails,
        [toCancelDisplay]:false,
        [toCancel]:profileDetails[toCancelPrev]
    })
  }
  const saveEditHandler=(toSave)=>{
    const toSaveDisplay=toSave+'Display';
    setProfileDetails({
      ...profileDetails,
      [toSaveDisplay]:false,
  })
  const userProfile={
   coverQuote: profileDetails['coverQuote'],
    bio:profileDetails['bio'],
    location:profileDetails['location']
  }
  props.editProfile(props.userData.userDataId,props.token,userProfile)
  }
  const newPostHandler = () => {
    setStoryModal(<StoryModal type='newPost' card={{title:"",body:"",privacy:false}}/>)
    props.storyModalOpen();
  };
  const viewProfileHandler = () => {
    const uid=props.loggedInUserId;
    props.history.push('/profile/'+uid)
  };
  const postEditorHandler = (type,data) => {
    // console.log(data,'data')
    setStoryModal(<StoryModal type={type} card={data}/>)
    props.storyModalOpen();
  };

  const imageUploader = () => {
    console.log("image");
  };
  
  const {fetchUserProfile,token,userData,loadingUserStory,loadingUserData}=props;
  let userId=props.match.params.uid
  useEffect(() => {
    fetchUserProfile(userId,token);
    
  }, [fetchUserProfile,userId,token])
  
  useEffect(()=>{
    if(!loadingUserData && !loadingUserStory){
       setProfileDetails({
        coverQuote: userData.coverQuote,
        bio: userData.bio,
        location: userData.location,
        coverQuotePrev: userData.coverQuote,
        bioPrev: userData.bio,
        locationPrev: userData.location,
        coverQuoteDisplay: false,
        bioDisplay: false,
        locationDisplay: false,
       })
      }
  },[userData,loadingUserData,loadingUserStory])

  let storyCards=<Spinner/>
  if(!props.loadingUserData && !props.loadingUserStory){
   storyCards = props.stories.map((card,i) => {
    return (
      <StoryCard
        key={card.title+i}
        postEditor={()=>postEditorHandler('editPost',card)}
        profileViewer={viewProfileHandler}
        card={card}
        userId={props.loggedInUserId}
      />
    );
  });
  if(props.stories.length===0){
    storyCards=<h1>No Post Found</h1>
  }
}

  return (
    <>
    {props.storyModalReset?storyModal:null}
    {(props.loadingUserData || props.loadingUserStory)?
    <div className='stories-spinner'><Spinner/></div>:
    <>
      <div>
        <div className="introHeader">
          {!profileDetails["coverQuoteDisplay"] ? (
            <div className="header">
              <p>{profileDetails['coverQuote']}</p>
              {(userId===props.loggedInUserId)?(<button
                className="header-button"
                onClick={() => handleEditFormDisplay("coverQuote")}
              >
                <svg className="icon-pencil">
                  <use href={sprite + "#icon-pencil"}></use>
                </svg>
              </button>):null}
              
            </div>
          ) : (
            <ProfileEditModel onChange={(e)=>inputChangeHandler(e,'coverQuote')} 
            value={profileDetails['coverQuote']}
            cancel={()=>cancelEditHandler('coverQuote')}
            save={()=>saveEditHandler('coverQuote')}/>
          )}
        </div>
        <div className="user-profile">
          <div className="user">
            <svg className="icon-user">
              <use href={sprite + "#icon-user"}></use>
            </svg>
            <button className="img-button" onClick={imageUploader}>
              <div className="image">
                <svg className="icon-image">
                  <use href={sprite + "#icon-image"}></use>
                </svg>
                <p className="caption">Upload Profile pic</p>
              </div>
            </button>
          </div>
        </div>
        <div className="sub-header">
          <div className="sub-items">
          <h2 className="name">{props.userData.fullName}</h2>
            {!profileDetails["bioDisplay"] ? (
              <div className="company">
                <p>{profileDetails['bio']}</p>
                {(userId===props.loggedInUserId)?( <button
                  className="pencil-button"
                  onClick={() => handleEditFormDisplay("bio")}
                >
                  <svg className="icon-pencil__edit">
                    <use href={sprite + "#icon-pencil"}></use>
                  </svg>
                </button>):null}
               
              </div>
            ) : (
              <ProfileEditModel onChange={(e)=>inputChangeHandler(e,'bio')} value={profileDetails['bio']} 
              cancel={()=>cancelEditHandler('bio')}
              save={()=>saveEditHandler('bio')}/>
            )}
            {!profileDetails["locationDisplay"] ? (
              <div className="place">
                <p>{profileDetails['location']}</p>
                {(userId===props.loggedInUserId)?(<button
                  className="pencil-button"
                  onClick={() => handleEditFormDisplay("location")}
                >
                  <svg className="icon-pencil__edit">
                    <use href={sprite + "#icon-pencil"}></use>
                  </svg>
                </button>):null}
                
              </div>
            ) : (
              <ProfileEditModel onChange={(e)=>inputChangeHandler(e,'location')} value={profileDetails['location']}
               cancel={()=>cancelEditHandler('location')}
               save={()=>saveEditHandler('location')}/>
            )}
          </div>
        </div>
      </div>
      <div className="profile">
      {(userId===props.loggedInUserId)?(<div className="new-post" onClick={newPostHandler}>
          <input
            type="text"
            placeholder="Post New Story"
            className="inputStyle"
          />
          <svg className="pencil-new-post__edit">
            <use href={sprite + "#icon-pencil"}></use>
          </svg>
        </div>):null}
        
        <div className="container-header">Recent Posts</div>
        <div className="stories">
          {storyCards}
        </div>
      </div>
      </>}
    </>
  );
}

const mapStateToProps = (state) => {
  return{
    loggedInUserId:state.auth.userId,
    token:state.auth.token,
    stories:state.stories.stories,
    loadingUserStory:state.stories.loadingUserStory,
    loadingUserData:state.stories.loadingUserData,
    userData:state.stories.userData,
    errorUserStory:state.stories.errorUserStory,
    errorUserData:state.stories.errorUserData,
    storyModalReset:state.modal.show,
  };
};
const mapDispatchToProps = (dispatch) => {
  return{
    fetchUserProfile:(userId,token)=>dispatch(actions.fetchUserProfile(userId,token)),
    editProfile:(userId,token,useProfile)=>dispatch(actions.editProfile(userId,token,useProfile)),
    storyModalOpen:()=>dispatch(actions.modalOpen())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Profile,axios));
