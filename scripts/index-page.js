//Default comments array
let comments = [
    {
      name: "Victor Pinto",
      date: "11/02/2023",
      comment:
        "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
      name: "Christina Cabrera",
      date: "10/28/2023",
      comment:
        "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
      name: "Isaac Tadesse",
      date: "10/20/2023",
      comment:
        "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
  ];
  
  //Function start
  function displayComments(arr) {
    //Used DOM  API
    let commentContainer = document.querySelector(".comment__default-comment");
  
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
      date.innerText = arr[i]["date"];
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
    }
  }
  displayComments(comments);
  
  
  const form = document.querySelector(".comment__input-container");
  
  //attach an event listener on the form of type submit
  form.addEventListener("submit", submitEvent => {
    
    submitEvent.preventDefault();
  
    const newComment = {};
    newComment.name = submitEvent.target.name.value;
    newComment.comment = submitEvent.target.comment.value;
  
    let commentContainer = document.querySelector(".comment__default-comment");
  
    //div that holds all info
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
    defaultContainer.appendChild(headerContainer);
  
    //image
    let image = document.createElement("div");
    image.classList.add("comment__header--image-one");
    imageContainer.appendChild(image);
  
    //name
    let name = document.createElement("h2");
    name.classList.add("comment__header--name");
    name.innerText = newComment.name;
    headerContainer.appendChild(name);
  
    //current date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
  
    today = mm + "/" + dd + "/" + yyyy;
  
    //date
    let date = document.createElement("h3");
    date.innerText = today;
    date.classList.add("comment__header--date");
    headerContainer.appendChild(date);
  
    //text container
    let textContainer = document.createElement("div");
    textContainer.classList.add("comment__text-container-default");
    defaultContainer.appendChild(textContainer);
  
    //comment
    let comment = document.createElement("p");
    comment.classList.add("comment__text-container-default--comment");
    comment.innerText = newComment.comment;
    textContainer.appendChild(comment);
  
    //inserts comment above the default comments
    let top = document.querySelector(".comment__default-comment");
    top.insertBefore(defaultContainer, top.childNodes[0]);
  
    //clears input from entry fields
    let clearInput = document.querySelector(".comment__input-container");
    clearInput.reset();
  });
  