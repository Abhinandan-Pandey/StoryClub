import React, { useState,useEffect } from "react";
import { connect } from "react-redux";

import sprite from "../../Styles/img/sprite.svg";
import StoryCard from "../../Home/components/storyCard";
import ProfileEditModel from "../../Home/components/profileEditModel";
import axios from '../../axios';

function Profile(props) {
  const [profileDetails, setProfileDetails] = useState({
    coverQuote: 'cannot praise myself..',
    bio: "Working at xyz Company",
    location: "Anandpur Kolkata",
    coverQuotePrev: "",
    bioPrev: "",
    locationPrev: "",
    coverQuoteDisplay: false,
    bioDisplay: false,
    locationDisplay: false,
  });

  const handleEditFormDisplay = (toEdit) => {
    const toEditDisplay = toEdit + "Display";
    setProfileDetails({
      ...profileDetails,
      [toEditDisplay]: true,
    });
    console.log(toEditDisplay, profileDetails[toEditDisplay]);
  };
  const inputChangeHandler=(e,identifier)=>{
       setProfileDetails({
           ...profileDetails,
           [identifier]:e.target.value,
       })
  }
  const cancelEditHandler=(toCancel)=>{
    const toCancelDisplay=toCancel+'Display';
    setProfileDetails({
        ...profileDetails,
        [toCancelDisplay]:false,
    })
    console.log(toCancelDisplay, profileDetails[toCancelDisplay]);
  }
  const saveEditHandler=()=>{

  }
  const storyModelHandler = () => {
    props.history.push("/storyModel");
    console.log("storyEditor");
  };
  const viewProfileHandler = () => {
    console.log("profile");
  };
  const postEditorHandler = () => {
    console.log("post");
  };
  const imageUploader = () => {
    console.log("image");
  };
  
  useEffect(() => {
    const userData = {
      fullName: 'Abhinandan Pandey',
      coverQuote: "cannot praise yourself ...",
      bio: "Works at XYZ Company",
      location: "Enter Your Location",
      // userId:response.data.localId,
    };
  const queryParams='?&orderBy="userId"&equalTo="OQ913pyA3tcuOcYVnwcNr6pRzfc2"'
   axios.get('/users.json'+queryParams,userData)
   .then(response=>{
     console.log(response.data)
   })
   .catch(error=>{
    console.log(error)
   })
  }, [])

  return (
    <>
      <div>
        <div className="introHeader">
          {!profileDetails["coverQuoteDisplay"] ? (
            <div className="header">
              <p>can't praise yourself...</p>
              <button
                className="header-button"
                onClick={() => handleEditFormDisplay("coverQuote")}
              >
                <svg className="icon-pencil">
                  <use href={sprite + "#icon-pencil"}></use>
                </svg>
              </button>
            </div>
          ) : (
            <ProfileEditModel onChange={(e)=>inputChangeHandler(e,'coverQuote')} 
            value={profileDetails['coverQuote']}
            cancel={()=>cancelEditHandler('coverQuote')}
            save={saveEditHandler}/>
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
            <h2 className="name">Abhinandan</h2>
            {!profileDetails["bioDisplay"] ? (
              <div className="company">
                <p>Works at XYZ Company</p>
                <button
                  className="pencil-button"
                  onClick={() => handleEditFormDisplay("bio")}
                >
                  <svg className="icon-pencil__edit">
                    <use href={sprite + "#icon-pencil"}></use>
                  </svg>
                </button>
              </div>
            ) : (
              <ProfileEditModel onChange={(e)=>inputChangeHandler(e,'bio')} value={profileDetails['bio']} cancel={()=>cancelEditHandler('bio')}/>
            )}
            {!profileDetails["locationDisplay"] ? (
              <div className="place">
                <p>Anandapur,Kolkata</p>
                <button
                  className="pencil-button"
                  onClick={() => handleEditFormDisplay("location")}
                >
                  <svg className="icon-pencil__edit">
                    <use href={sprite + "#icon-pencil"}></use>
                  </svg>
                </button>
              </div>
            ) : (
              <ProfileEditModel onChange={(e)=>inputChangeHandler(e,'location')} value={profileDetails['location']} cancel={()=>cancelEditHandler('location')}/>
            )}
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="new-post" onClick={storyModelHandler}>
          <input
            type="text"
            placeholder="Post New Story"
            className="inputStyle"
          />
          <svg className="pencil-new-post__edit">
            <use href={sprite + "#icon-pencil"}></use>
          </svg>
        </div>
        <div className="container-header">Recent Posts</div>
        <div className="stories">
          <StoryCard
            postEditor={postEditorHandler}
            profileViewer={viewProfileHandler}
          />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return;
};
const mapDispatchToProps = (dispatch) => {
  return;
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
