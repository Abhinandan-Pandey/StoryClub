(this["webpackJsonpstory-club"]=this["webpackJsonpstory-club"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/sprite.417b38a5.svg"},38:function(e,t,a){e.exports=a(66)},47:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),l=a(15),s=a(4),i=a(36),u=a(13),m=(a(47),a(3)),d=a(2),f=a(17),p=a.n(f),E=function(e,t,a){return{type:"AUTH_SUCCESS",idToken:e,userId:t,userName:a}},v=function(e){return{type:"AUTH_FAIL",error:e}},y=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),localStorage.removeItem("userName"),{type:"AUTH_LOGOUT"}},b=function(e){return function(t){setTimeout((function(){t(y())}),1e3*e)}},g=function(e){var t=e.email,a=e.password,n=e.isSignup,r=e.fullName;return function(e){e({type:"AUTH_START"});var o={displayName:r,email:t,password:a,returnSecureToken:!0},c="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzOU2zSdEfJJ2fBMR3piZK9jH_q6g9nPQ";n||(c="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzOU2zSdEfJJ2fBMR3piZK9jH_q6g9nPQ"),p.a.post(c,o).then((function(t){var a=new Date((new Date).getTime()+1e3*t.data.expiresIn);if(localStorage.setItem("token",t.data.idToken),localStorage.setItem("expirationDate",a),localStorage.setItem("userId",t.data.localId),localStorage.setItem("userName",t.data.displayName),e(E(t.data.idToken,t.data.localId)),e(b(t.data.expiresIn)),n){var o={fullName:r,coverQuote:"cannot praise yourself ...",bio:"Works at XYZ Company",location:"Enter Your Location",userId:t.data.localId};p.a.post("https://storyclub-734f8.firebaseio.com/users.json?auth="+t.data.idToken,o).then((function(e){})).catch((function(e){console.log(e)}))}})).catch((function(t){t.response?e(v(t.response.data.error.message)):e(v(t.message))}))}},h=a(5),S=p.a.create({baseURL:"https://storyclub-734f8.firebaseio.com/"}),N=function(e){return function(t){t({type:"FETCHING_STORY_START"}),S.get("/stories.json?auth="+e).then((function(e){var a;t((a=e.data,{type:"FETCHING_STORY_SUCCESS",stories:Object.keys(a).map((function(e){return Object(h.a)({},a[e],{userStoryId:e})}))}))})).catch((function(e){t(function(e){return{type:"FETCHING_STORY_FAIL",error:e}}(e))}))}},O=function(e,t){return function(a){a({type:"FETCH_USER_STORY_START"}),a({type:"FETCH_USER_DATA_START"});var n="?auth="+t+'&orderBy="userId"&equalTo="'+e+'"';S.get("/stories.json"+n).then((function(e){var t;a((t=e.data,{type:"FETCH_USER_STORY_SUCCESS",userStory:Object.keys(t).map((function(e){return Object(h.a)({},t[e],{userStoryId:e})}))}))})).catch((function(e){console.log(e),a(function(e){return{type:"FETCH_USER_STORY_START",userStoryError:e}}(e))})),S.get("/users.json"+n).then((function(e){var t;a((t=e.data,{type:"FETCH_USER_DATA_SUCCESS",userData:Object.keys(t).map((function(e){return Object(h.a)({},t[e],{userDataId:e})}))[0]}))})).catch((function(e){console.log(e),a(function(e){return{type:"FETCH_USER_DATA_FAIL",userDataError:e}}(e))}))}},T=function(e){return{type:"POSTING_STORY_FAIL",error:e}};var I=Object(s.b)((function(e){return{error:e.auth.error}}),(function(e){return{login:function(t){return e(g(t))}}}))((function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),s=Object(d.a)(l,2),i=s[0],u=s[1];return r.a.createElement("div",{className:"box-layout__box"},r.a.createElement("h1",{className:"heading-1 title"},"Story Club"),r.a.createElement("p",{className:"heading-3"},"Get Started - It's free"),r.a.createElement("p",{className:"error"},e.error),r.a.createElement("form",{className:"form",onSubmit:function(t){t.preventDefault();var a={email:o,password:i,isSignup:!1};e.login(a)}},r.a.createElement("input",{className:"text-input",placeholder:"E-mail",email:"email",value:o,type:"email",onChange:function(e){c(e.target.value)}}),r.a.createElement("input",{className:"text-input",placeholder:"Password",password:"password",value:i,type:"password",onChange:function(e){u(e.target.value)}}),r.a.createElement("button",{className:"btn-primary"},"Login")),r.a.createElement("div",{className:"heading-3"},"Need an account? \xa0",r.a.createElement("span",null,r.a.createElement("button",{className:"simple-text-button",onClick:e.loginToogle},"sign up"))))}));var _=Object(s.b)((function(e){return{error:e.auth.error}}),(function(e){return{signup:function(t){return e(g(t))}}}))((function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),s=Object(d.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(""),f=Object(d.a)(m,2),p=f[0],E=f[1],v=Object(n.useState)(""),y=Object(d.a)(v,2),b=y[0],g=y[1],h=Object(n.useState)(null),S=Object(d.a)(h,2),N=S[0],O=S[1],T=e.error;return Object(n.useEffect)((function(){O(T)}),[T]),r.a.createElement("div",{className:"box-layout__box"},r.a.createElement("h1",{className:"heading-1 title"},"Story Club"),r.a.createElement("p",{className:"heading-3"},"Get Started - It's free"),r.a.createElement("p",{className:"error"},N),r.a.createElement("form",{className:"form",onSubmit:function(t){t.preventDefault();var a={fullName:o,email:i,password:p,confirmPassword:b,isSignup:!0};p===b&&""!==o.trim()?e.signup(a):O(p!==b?"Password doesn't match":"Please enter your name")}},r.a.createElement("input",{className:"text-input",placeholder:"Full Name",fullname:"fullName",value:o,type:"text",onChange:function(e){c(e.target.value)}}),r.a.createElement("input",{className:"text-input",placeholder:"E-mail",email:"email",value:i,type:"email",onChange:function(e){u(e.target.value)}}),r.a.createElement("input",{className:"text-input",placeholder:"Password",password:"password",value:p,type:"password",onChange:function(e){E(e.target.value)}}),r.a.createElement("input",{className:"text-input",placeholder:"Confirm Password",confirmpassword:"confirmPassword",value:b,type:"password",onChange:function(e){g(e.target.value)}}),r.a.createElement("button",{className:"btn-primary"},"Sign Up")),r.a.createElement("div",{className:"heading-3"},"Already have an account? \xa0",r.a.createElement("span",null,r.a.createElement("button",{className:"simple-text-button",onClick:e.loginToogle},"Login"))))})),C=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],o=t[1],c=function(){o(!a)},l=r.a.createElement(_,{loginToogle:c});return a&&(l=r.a.createElement(I,{loginToogle:c})),r.a.createElement("div",{className:"box-layout"},l)},j=a(12),k=a.n(j);var U=function(e){return r.a.createElement("div",{className:"story-card",onClick:e.postEditor},r.a.createElement("div",{className:"story-card__title",onClick:e.postEditor},e.card.title),e.userId===e.card.userId?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"icon-button",onClick:e.postEditor},r.a.createElement("svg",{className:"icon__delete"},r.a.createElement("use",{href:k.a+"#icon-trash-can"}))),r.a.createElement("button",{className:"icon-button",onClick:e.postEditor},r.a.createElement("svg",{className:"icon__edit"},r.a.createElement("use",{href:k.a+"#icon-document-edit"})))):r.a.createElement("div",{onClick:e.postEditor}),r.a.createElement("div",{className:"story-card__body",onClick:e.postEditor},e.card.body),r.a.createElement("button",{className:"written-by story-card__by",onClick:e.profileViewer},r.a.createElement("div",{className:""},"by-",e.card.userName,"\xa0")))},D=function(){return r.a.createElement("div",{className:"lds-roller"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},w=a(11),A=a(37);var P=Object(s.b)((function(e){return{loading:e.modal.loading,error:e.modal.error,show:e.modal.show,token:e.auth.token,userId:e.auth.userId,userName:e.auth.userName}}),(function(e){return{postStory:function(t,a){return e(function(e,t){return function(a){a({type:"POSTING_STORY_START"}),S.post("/stories.json?auth="+t,e).then((function(t){var n=Object(h.a)({},e,{userStoryId:t.data.name});a({type:"POSTING_STORY_SUCCESS"}),a(function(e){return{type:"ADDED_STORY",addedPost:e}}(n))})).catch((function(e){console.log(e),a(T(e))}))}}(t,a))},deletePost:function(t,a){return e(function(e,t){return function(a){a({type:"POSTING_STORY_START"}),S.delete("/stories/"+e+".json?auth="+t).then((function(t){a({type:"POSTING_STORY_SUCCESS"}),a(function(e){return{type:"DELETED_STORY",storyId:e}}(e))})).catch((function(e){a(T(e))}))}}(t,a))},editPost:function(t,a,n){return e(function(e,t,a){return function(n){n({type:"POSTING_STORY_START"}),S.patch("/stories/"+t+".json?auth="+a,e).then((function(a){var r=Object(h.a)({},e,{userStoryId:t});n({type:"POSTING_STORY_SUCCESS"}),n(function(e){return{type:"UPDATED_STORY",updatedStory:e}}(r))})).catch((function(e){n(T(e))}))}}(t,a,n))},closeModal:function(){return e({type:"MODAL_CLOSE"})}}}))((function(e){var t=Object(n.useState)({title:e.card.title,body:e.card.body,privacy:e.card.privacy,type:e.type}),a=Object(d.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(null),s=Object(d.a)(l,2),i=s[0],u=s[1],m=function(e,t){c(Object(h.a)({},o,Object(w.a)({},t,e.target.value)))},f=function(e){c(Object(h.a)({},o,{privacy:e.target.checked}))},p=function(){var t={title:o.title,body:o.body,privacy:o.privacy,userId:e.userId,userName:e.userName};!function(){var e=!0;return""!==o.title.trim()&&""!==o.body.trim()||(e=!1),e}()?u(r.a.createElement("p",{className:"error-modal"},"One or more fields are empty.")):(u(null),"newPost"===e.type?e.postStory(t,e.token):"editPost"===e.type&&e.editPost(t,e.card.userStoryId,e.token))},E=function(){e.deletePost(e.card.userStoryId,e.token)},v=e.userId===e.card.userId?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"delete-post",onClick:E},"delete")):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"delete-post",onClick:E,style:{visibility:"hidden"}},"delete")),y=e.userId===e.card.userId?r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Keep private \xa0"),r.a.createElement("input",{type:"checkbox",checked:o.privacy,onChange:function(e){return f(e)}})):r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{style:{visibility:"hidden"}},"Keep private \xa0"),r.a.createElement("input",{style:{visibility:"hidden"},type:"checkbox",checked:o.privacy,onChange:function(e){return f(e)}})),b=e.userId===e.card.userId?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"submit-post",onClick:p},"post")):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"submit-post",style:{visibility:"hidden"},onClick:p},"post"));return"newPost"===e.type&&(v=r.a.createElement("button",{className:"delete-post",style:{visibility:"hidden"},onClick:E},"delete"),y=r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Keep private \xa0"),r.a.createElement("input",{type:"checkbox",checked:o.privacy,onChange:function(e){return f(e)}})),b=r.a.createElement("button",{className:"submit-post",onClick:p},"post")),r.a.createElement("div",{className:"box"},e.show?r.a.createElement("div",{className:"backdrop",onClick:e.closeModal,style:{opacity:e.show?"1":"0",transition:"opacity 1s linear"}}):null,e.show?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"storyModal",style:{opacity:e.show?"1":"0",transition:"opacity 1s linear"}},i,e.loading?r.a.createElement(D,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("input",{className:"modal-title",placeholder:"Name of your Story",value:o.title,onChange:function(e){return m(e,"title")}}),r.a.createElement(A.a,{className:"modal-body",placeholder:"text",value:o.body,minRows:5,maxRows:25,onChange:function(e){return m(e,"body")}})),r.a.createElement("div",{className:"modal-footer"},y,v,b,r.a.createElement("button",{className:"close-post",onClick:function(){return e.closeModal()}},"close"))))):null)})),R=function(e){return e.show?r.a.createElement("div",{className:"backdrop",onClick:e.clicked}):null},F=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:"modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},x=function(e,t){return function(a){var o=function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),r=a[0],o=a[1],c=e.interceptors.request.use((function(e){return o(null),e})),l=e.interceptors.response.use((function(e){return e}),(function(e){o(e)}));Object(n.useEffect)((function(){return function(){e.interceptors.request.eject(c),e.interceptors.response.eject(l)}}),[c,l,e]);return[r,function(){o(null)}]}(t),c=Object(d.a)(o,2),l=c[0],s=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{show:l,modalClosed:s},l?l.message:null),r.a.createElement(e,a))}};var H=Object(s.b)((function(e){return{loading:e.stories.loading,storiesArray:e.stories.stories,token:e.auth.token,userId:e.auth.userId,storyModalReset:e.modal.show}}),(function(e){return{fetchStories:function(t){return e(N(t))},storyModalOpen:function(){return e({type:"MODAL_OPEN"})}}}))(x((function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),o=a[0],c=a[1],l=e.fetchStories,s=e.token,i=function(t){e.history.push("/profile/"+t)},u=function(t,a){c(r.a.createElement(P,{type:t,card:a})),e.storyModalOpen()};Object(n.useEffect)((function(){l(s)}),[l,s]);var m=Object(n.useState)([]),f=Object(d.a)(m,2),p=f[0],E=f[1],v=e.storiesArray;Object(n.useEffect)((function(){E(v)}),[v]);var y=null,b=[],g=[],h=[];if(0!==p.length){var S=p.filter((function(e){return!1===e.privacy}));S.forEach((function(t,a){var n=function(e){var t,a,n,r=e.length,o=r/3,c=r-3*Math.floor(r/3);return t=a=o,1===c?t+=1:2===c&&(t+=1,a+=1),{fe:n=t-1,ss:n+1,se:n+a}}(S),o=n.fe,c=n.ss,l=n.se;a<=o?b.push(r.a.createElement(U,{key:t.title+a,postEditor:function(){return u("editPost",t)},profileViewer:function(){return i(t.userId)},card:t,userId:e.userId})):a<=l&&a>=c?g.push(r.a.createElement(U,{key:t.title+a,postEditor:function(){return u("editPost",t)},profileViewer:function(){return i(t.userId)},card:t,userId:e.userId})):h.push(r.a.createElement(U,{key:t.title+a,postEditor:function(){return u("editPost",t)},profileViewer:function(){return i(t.userId)},card:t,userId:e.userId}))})),0===S.length&&(y=r.a.createElement("h1",null,"No Post Found"))}return r.a.createElement(r.a.Fragment,null,e.loading?r.a.createElement("div",{className:"stories-spinner"},r.a.createElement(D,null)):r.a.createElement(r.a.Fragment,null,e.storyModalReset?o:null,r.a.createElement("div",{className:"introHeader"},r.a.createElement("h1",{className:"heading-1 intro"},"Everone Has Story to Tell"),r.a.createElement("h3",{className:"line"},"Show your story to world"),r.a.createElement("button",{className:"btn-primary pro-btn",onClick:function(){var t=e.userId;e.history.push("/profile/"+t)}},"Veiw Profile")),r.a.createElement("div",{className:"container-header"},"Public Stories"),r.a.createElement("div",{className:"grid-container"},y,r.a.createElement("div",{className:"stories"},b),r.a.createElement("div",{className:"stories"},g),r.a.createElement("div",{className:"stories"},h))))}),S));var Y=function(e){return r.a.createElement("div",{className:"profile-edit-form"},r.a.createElement("input",{className:"profile-input",type:"text",onChange:e.onChange,value:e.value}),r.a.createElement("div",{className:"profile-input-button-box"},r.a.createElement("button",{className:"profile-input-button",onClick:e.cancel},"Cancel"),r.a.createElement("button",{className:"profile-input-button",onClick:e.save},"Save")))};var L=Object(s.b)((function(e){return{loggedInUserId:e.auth.userId,token:e.auth.token,stories:e.stories.stories,loadingUserStory:e.stories.loadingUserStory,loadingUserData:e.stories.loadingUserData,userData:e.stories.userData,errorUserStory:e.stories.errorUserStory,errorUserData:e.stories.errorUserData,storyModalReset:e.modal.show}}),(function(e){return{fetchUserProfile:function(t,a){return e(O(t,a))},editProfile:function(t,a,n){return e(function(e,t,a){return function(n){S.patch("users/"+e+".json?auth="+t,a).then((function(e){var t=Object(h.a)({},a);n({type:"UPDATED_PROFILE",updatedProfile:t})})).catch((function(e){console.log(e)}))}}(t,a,n))},storyModalOpen:function(){return e({type:"MODAL_OPEN"})}}}))(x((function(e){var t=Object(n.useState)({coverQuote:"",bio:"",location:"",coverQuotePrev:"",bioPrev:"",locationPrev:"",coverQuoteDisplay:!1,bioDisplay:!1,locationDisplay:!1}),a=Object(d.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(null),s=Object(d.a)(l,2),i=s[0],u=s[1],m=function(e){var t=e+"Display";c(Object(h.a)({},o,Object(w.a)({},t,!0)))},f=function(e,t){c(Object(h.a)({},o,Object(w.a)({},t,e.target.value)))},p=function(e){var t,a=e+"Display",n=e+"Prev";c(Object(h.a)({},o,(t={},Object(w.a)(t,a,!1),Object(w.a)(t,e,o[n]),t)))},E=function(t){var a=t+"Display";c(Object(h.a)({},o,Object(w.a)({},a,!1)));var n={coverQuote:o.coverQuote,bio:o.bio,location:o.location};e.editProfile(e.userData.userDataId,e.token,n)},v=function(){var t=e.loggedInUserId;e.history.push("/profile/"+t)},y=function(t,a){u(r.a.createElement(P,{type:t,card:a})),e.storyModalOpen()},b=e.fetchUserProfile,g=e.token,S=e.userData,N=e.loadingUserStory,O=e.loadingUserData,T=e.match.params.uid;Object(n.useEffect)((function(){b(T,g)}),[b,T,g]),Object(n.useEffect)((function(){O||N||c({coverQuote:S.coverQuote,bio:S.bio,location:S.location,coverQuotePrev:S.coverQuote,bioPrev:S.bio,locationPrev:S.location,coverQuoteDisplay:!1,bioDisplay:!1,locationDisplay:!1})}),[S,O,N]);var I=null,_=[],C=[],j=[];return e.loadingUserData||e.loadingUserStory||(e.stories.forEach((function(t,a){var n=function(e){var t,a,n,r=e.length,o=r/3,c=r-3*Math.floor(r/3);return t=a=o,1===c?t+=1:2===c&&(t+=1,a+=1),{fe:n=t-1,ss:n+1,se:n+a}}(e.stories),o=n.fe,c=n.ss,l=n.se;a<=o?_.push(r.a.createElement(U,{key:t.title+a,postEditor:function(){return y("editPost",t)},profileViewer:v,card:t,userId:e.loggedInUserId})):a<=l&&a>=c?C.push(r.a.createElement(U,{key:t.title+a,postEditor:function(){return y("editPost",t)},profileViewer:v,card:t,userId:e.loggedInUserId})):j.push(r.a.createElement(U,{key:t.title+a,postEditor:function(){return y("editPost",t)},profileViewer:v,card:t,userId:e.loggedInUserId}))})),0===e.stories.length&&(I=r.a.createElement("h1",null,"No Post Found"))),r.a.createElement(r.a.Fragment,null,e.storyModalReset?i:null,e.loadingUserData||e.loadingUserStory?r.a.createElement("div",{className:"stories-spinner"},r.a.createElement(D,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"introHeader"},o.coverQuoteDisplay?r.a.createElement(Y,{onChange:function(e){return f(e,"coverQuote")},value:o.coverQuote,cancel:function(){return p("coverQuote")},save:function(){return E("coverQuote")}}):r.a.createElement("div",{className:"header"},r.a.createElement("p",null,o.coverQuote),T===e.loggedInUserId?r.a.createElement("button",{className:"header-button",onClick:function(){return m("coverQuote")}},r.a.createElement("svg",{className:"icon-pencil"},r.a.createElement("use",{href:k.a+"#icon-pencil"}))):null)),r.a.createElement("div",{className:"user-profile"},r.a.createElement("div",{className:"user"},r.a.createElement("svg",{className:"icon-user"},r.a.createElement("use",{href:k.a+"#icon-user"})),r.a.createElement("button",{className:"img-button",onClick:function(){console.log("image")}},r.a.createElement("div",{className:"image"},r.a.createElement("svg",{className:"icon-image"},r.a.createElement("use",{href:k.a+"#icon-image"})),r.a.createElement("p",{className:"caption"},"Upload Profile pic"))))),r.a.createElement("div",{className:"sub-header"},r.a.createElement("div",{className:"sub-items"},r.a.createElement("h2",{className:"name"},e.userData.fullName),o.bioDisplay?r.a.createElement(Y,{onChange:function(e){return f(e,"bio")},value:o.bio,cancel:function(){return p("bio")},save:function(){return E("bio")}}):r.a.createElement("div",{className:"company"},r.a.createElement("p",null,o.bio),T===e.loggedInUserId?r.a.createElement("button",{className:"pencil-button",onClick:function(){return m("bio")}},r.a.createElement("svg",{className:"icon-pencil__edit"},r.a.createElement("use",{href:k.a+"#icon-pencil"}))):null),o.locationDisplay?r.a.createElement(Y,{onChange:function(e){return f(e,"location")},value:o.location,cancel:function(){return p("location")},save:function(){return E("location")}}):r.a.createElement("div",{className:"place"},r.a.createElement("p",null,o.location),T===e.loggedInUserId?r.a.createElement("button",{className:"pencil-button",onClick:function(){return m("location")}},r.a.createElement("svg",{className:"icon-pencil__edit"},r.a.createElement("use",{href:k.a+"#icon-pencil"}))):null)))),r.a.createElement("div",{className:"profile"},T===e.loggedInUserId?r.a.createElement("div",{className:"new-post",onClick:function(){u(r.a.createElement(P,{type:"newPost",card:{title:"",body:"",privacy:!1}})),e.storyModalOpen()}},r.a.createElement("input",{type:"text",placeholder:"Post New Story",className:"inputStyle"}),r.a.createElement("svg",{className:"pencil-new-post__edit"},r.a.createElement("use",{href:k.a+"#icon-pencil"}))):null,r.a.createElement("div",{className:"container-header"},"Recent Posts"),r.a.createElement("div",{className:"grid-container"},I,r.a.createElement("div",{className:"stories"},_),r.a.createElement("div",{className:"stories"},C),r.a.createElement("div",{className:"stories"},j)))))}),S)),M=a(20),G=Object(s.b)((function(e){return{isAuthenticated:null!=e.auth.token}}))((function(e){var t=e.isAuthenticated,a=e.component,n=Object(M.a)(e,["isAuthenticated","component"]);return r.a.createElement("div",null,r.a.createElement(m.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(m.a,{to:"/home"}):r.a.createElement(a,e)}})))}));var Q=Object(s.b)(null,(function(e){return{logout:function(){return e(y())}}}))((function(e){return r.a.createElement("div",{className:"navigation"},r.a.createElement("button",{className:"home-button heading-1",onClick:function(){e.history.push("/home")}},"Storyclub"),r.a.createElement("button",{className:"simple-text-button logout-button heading-3",onClick:function(){e.logout(),e.history.push("/")}},"logout"))})),V=Object(s.b)((function(e){return{isAuthenticated:null!=e.auth.token}}))((function(e){var t=e.isAuthenticated,a=e.component,n=Object(M.a)(e,["isAuthenticated","component"]);return r.a.createElement("div",null,r.a.createElement(m.b,Object.assign({},n,{component:function(e){return t?r.a.createElement("div",null,r.a.createElement(Q,e),r.a.createElement(a,e)):r.a.createElement(m.a,{to:"/"})}})))}));var B=function(e){return r.a.createElement("div",{className:"text"},r.a.createElement("b",null," 404-Page Not Found"),r.a.createElement("button",{className:"redirectButton",onClick:function(){return e.history.push("/home")}},"Go To Homepage"))};var z=Object(s.b)(null,(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var a=new Date(localStorage.getItem("expirationDate"));if(a<=new Date)e(y());else{var n=localStorage.getItem("userId"),r=localStorage.getItem("userName");e(E(t,n,r)),e(b((a.getTime()-(new Date).getTime())/1e3))}}else e(y())}))}}}))((function(e){(0,e.onTryAutoSignup)();var t=r.a.createElement(m.d,null,r.a.createElement(G,{path:"/",exact:!0,component:C}),r.a.createElement(V,{path:"/home",exact:!0,component:H}),r.a.createElement(V,{path:"/profile/:uid",exact:!0,component:L}),r.a.createElement(V,{path:"/StoryClub",exact:!0,component:H}),r.a.createElement(m.b,{component:B}));return r.a.createElement("div",null,t)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=function(e,t){return Object(h.a)({},e,{},t)},q={loading:!1,error:null,show:!1},K=function(e,t){return J(e,{loading:!0,error:null})},W=function(e,t){return J(e,{loading:!1,show:!1})},X=function(e,t){return J(e,{loading:!1,error:t.error})},Z=function(e,t){return J(e,{show:!1})},$=function(e,t){return J(e,{show:!0})},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POSTING_STORY_START":return K(e);case"POSTING_STORY_SUCCESS":return W(e);case"POSTING_STORY_FAIL":return X(e,t);case"MODAL_CLOSE":return Z(e);case"MODAL_OPEN":return $(e);default:return e}},te={token:null,userId:null,error:null,loading:!1,userName:null},ae=function(e,t){return J(e,{error:null,loading:!0})},ne=function(e,t){return J(e,{error:t.error,loading:!1})},re=function(e,t){return J(e,{token:t.idToken,userId:t.userId,userName:t.userName,error:null,loading:!1})},oe=function(e,t){return J(e,{token:null,userId:null})},ce=function(e,t){return J(e,{})},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return ae(e);case"AUTH_SUCCESS":return re(e,t);case"AUTH_FAIL":return ne(e,t);case"AUTH_LOGOUT":return oe(e);case"AUTH_REDIRECT_PATH":return ce(e);default:return e}},se={loading:!1,error:null,stories:[],userData:null,loadingUserData:!0,loadingUserStory:!0,errorUserData:null,errorUserStory:null},ie=function(e,t){return J(e,{loading:!0})},ue=function(e,t){return J(e,{stories:t.stories,loading:!1})},me=function(e,t){return J(e,{loading:!1,error:t.error})},de=function(e,t){return J(e,{loadingUserData:!1,userData:t.userData})},fe=function(e,t){return J(e,{loadingUserStory:!1,stories:t.userStory})},pe=function(e,t){return J(e,{loadingUserData:!1,errorUserData:t.userDataError})},Ee=function(e,t){return J(e,{loadingUserStory:!1,errorUserStory:t.userStoryError})},ve=function(e,t){return J(e,{loadingUserData:!0})},ye=function(e,t){return J(e,{loadingUserStory:!0})},be=function(e,t){var a=e.stories.map((function(e){return t.updatedStory.userStoryId===e.userStoryId?t.updatedStory:e}));return J(e,{stories:a})},ge=function(e,t){var a=e.stories.concat(t.addedPost);return J(e,{stories:a})},he=function(e,t){var a=e.stories.filter((function(e){return e.userStoryId!==t.storyId}));return J(e,{stories:a})},Se=function(e,t){var a=Object(h.a)({},e.userData,{},t.updatedProfile);return J(e,{userData:a})},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_STORY_START":return ie(e);case"FETCHING_STORY_SUCCESS":return ue(e,t);case"FETCHING_STORY_FAIL":return me(e,t);case"FETCH_USER_DATA_SUCCESS":return de(e,t);case"FETCH_USER_STORY_SUCCESS":return fe(e,t);case"FETCH_USER_DATA_START":return ve(e);case"FETCH_USER_STORY_START":return ye(e);case"FETCH_USER_DATA_FAIL":return pe(e,t);case"FETCH_USER_STORY_FAIL":return Ee(e,t);case"UPDATED_PROFILE":return Se(e,t);case"UPDATED_STORY":return be(e,t);case"DELETED_STORY":return he(e,t);case"ADDED_STORY":return ge(e,t);default:return e}},Oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,Te=Object(u.c)({auth:le,modal:ee,stories:Ne}),Ie=Object(u.e)(Te,Oe(Object(u.a)(i.a))),_e=r.a.createElement(s.a,{store:Ie},r.a.createElement(l.a,null,r.a.createElement(z,null)));c.a.render(r.a.createElement(r.a.StrictMode,null,_e),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.416bbf06.chunk.js.map