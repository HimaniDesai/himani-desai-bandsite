
  function displayComments(arr) {
    //Used DOM  API
    let commentContainer = document.querySelector(".comment__default-comment");
    commentContainer.innerHTML="";
  
    for (let i = 0; i < arr.length; i++) {
      //div that holds all of my default comment content
      let defaultContainer = document.createElement("div");
      defaultContainer.classList.add("comment__default");
      commentContainer.appendChild(defaultContainer);
  
      //image container
      let imageContainer = document.createElement("div");
      imageContainer.classList.add("comment__image-container-one");
      defaultContainer.appendChild(imageContainer);
  
      // div that holds default comments
      let headerContainer = document.createElement("div");
      headerContainer.classList.add("comment__header");
      if (i==0){
        headerContainer.classList.add("comment__header--first");
      }
      defaultContainer.appendChild(headerContainer);
  
      //image
      let image = document.createElement("div");
      image.classList.add("comment__header--image-one");
      imageContainer.appendChild(image);
  
      //name
      let name = document.createElement("h2");
      name.classList.add("comment__header--name");
      name.innerText = arr[i]["name"];
      headerContainer.appendChild(name);
  
      //date
      let date = document.createElement("h3");
      date.classList.add("comment__header--date");
      let v = new Date(arr[i]["timestamp"])
      date.innerText = v.getUTCMonth()+1 + "/" + v.getDate() + "/" + v.getFullYear();
      headerContainer.appendChild(date);
  
      //comment container
      let textContainer = document.createElement("div");
      textContainer.classList.add("comment__text-container-default");
      defaultContainer.appendChild(textContainer);
  
      //comment
      let comment = document.createElement("p");
      comment.classList.add("comment__text-container-default--comment");
      comment.innerText = arr[i]["comment"];
      textContainer.appendChild(comment);

      //like- delete button container
      let deleteButtonContainer = document.createElement("div");
      deleteButtonContainer.classList.add("comment__delete-button-container");
      defaultContainer.appendChild(deleteButtonContainer);
      //like
      let likeButton = document.createElement("button");
      likeButton.classList.add("comment__like-icon");
      likeButton.addEventListener("click", event => {
        let varId = event.target.id;
        likeComment(varId);
      });
      likeButton.id = arr[i]["id"];
      deleteButtonContainer.appendChild(likeButton);
      //like-label
      let likeLabel = document.createElement("div");
      likeLabel.classList.add("comment__like-label");
      likeLabel.innerText = arr[i]["likes"];
      deleteButtonContainer.appendChild(likeLabel);

      //delete
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("comment__delete-icon");
      deleteButton.addEventListener("click", event => {
        let varId = event.target.id;
        deleteComment(varId);
      });
      deleteButton.id = arr[i]["id"];
      deleteButtonContainer.appendChild(deleteButton);
    }
  }

  import {BandSiteApi,apiKEY} from "./band-site-api.js";
  const bandApi = new BandSiteApi(apiKEY);
  let comments=[];
  function getCommentsListed () {(async () => {
    // Get shows
    comments = await bandApi.getComments();
    displayComments(comments);
    console.log(comments);
  })();
  }

  getCommentsListed();

  
  const form = document.querySelector(".comment__input-container");
  
  //attach an event listener on the form of type submit
  form.addEventListener("submit", submitEvent => {
    
    submitEvent.preventDefault();
  
    const newComment = {};
    newComment.name = submitEvent.target.name.value;
    newComment.comment = submitEvent.target.comment.value;

    (async () => {
      // Post a comment
      await bandApi.postComment(newComment).then(() => {
        //Get Comments
        getCommentsListed();
      });
    })();
    // clears input from entry fields
    let clearInput = document.querySelector(".comment__input-container");
    clearInput.reset();
  });

  function deleteComment(id) {
    (async () => {
      // Delete a comment
      await bandApi.deleteComment(id).then(()=>{
        //Get Comments
        getCommentsListed();
      });
    })();
  }

  function likeComment(id) {
    (async () => {
      // Delete a comment
      await bandApi.likeComment(id).then(()=>{
        //Get Comments
        getCommentsListed();
      });
    })();
  }
  

