//table data//
var shows = [
    {
      date: "Mon Sept 09 2024",
      venue: "Ronald Lane",
      location: "San Francisco, CA"
    },
    {
      date: "Tue Sept 17 2024",
      venue: "Pier 3 East",
      location: "San Francisco, CA"
    },
    {
      date: "Sat Oct 12 2024",
      venue: "View Lounge",
      location: "San Francisco, CA"
    },
    {
      date: "Sat Nov 16 2024",
      venue: "Hyatt Agency",
      location: "San Francisco, CA"
    },
    {
      date: "Fri Nov 29 2024",
      venue: "Moscow Center",
      location: "San Francisco, CA"
    },
    {
      date: "Wed Dec 18 2024",
      venue: "Pres Club",
      location: "San Francisco, CA"
    }
  ];
  
  function table(arr) {
    //container that holds it all ("mother-container")
    let tableContainer = document.querySelector(".shows__container");
  
    let titleContainer = document.createElement("div");
    titleContainer.classList.add("shows__title-container");
    tableContainer.appendChild(titleContainer);
  
    //Shows Header Title
    let title = document.createElement("h1");
    title.classList.add("shows__title");
    titleContainer.appendChild(title);
    title.innerText = "Shows";
  
    let showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container-all");
    tableContainer.appendChild(showsContainer);
  
    //header container for labels (tablet&desktop)
    let headerContainer = document.createElement("div");
    headerContainer.classList.add("shows__header-container");
    showsContainer.appendChild(headerContainer);
  
    let dateHeader = document.createElement("h3");
    dateHeader.classList.add("shows__header-container--date");
    headerContainer.appendChild(dateHeader);
    dateHeader.innerText = "DATES";
  
    let venueHeader = document.createElement("h3");
    venueHeader.classList.add("shows__header-container--venue");
    headerContainer.appendChild(venueHeader);
    venueHeader.innerText = "VENUE";
  
    let locationHeader = document.createElement("h3");
    locationHeader.classList.add("shows__header-container--location");
    headerContainer.appendChild(locationHeader);
    locationHeader.innerText = "LOCATION";
  
    let buttonHeader = document.createElement("button");
    buttonHeader.classList.add("shows__header-container--button-header");
    headerContainer.appendChild(buttonHeader);
  
    buttonHeader.innerText = "BUY TICKETS";
  
    for (let i = 0; i < shows.length; i++) {
      //Container for all
      let oneContainer = document.createElement("div");
      oneContainer.classList.add("shows__one-container");
      showsContainer.appendChild(oneContainer);
  
      //Dates
      let dateLabel = document.createElement("h3");
      dateLabel.classList.add("shows__one-container--date-label");
      oneContainer.appendChild(dateLabel);
      dateLabel.innerText = "DATE";
  
      let date = document.createElement("h4");
      date.classList.add("shows__one-container--date");
      oneContainer.appendChild(date);
  
      date.innerText = arr[i]["date"];
  
      //Venues
      let venueLabel = document.createElement("h3");
      venueLabel.classList.add("shows__one-container--venue-label");
      oneContainer.appendChild(venueLabel);
      venueLabel.innerText = "VENUE";
  
      let venue = document.createElement("h4");
      venue.classList.add("shows__one-container--venue");
      oneContainer.appendChild(venue);
  
      venue.innerText = arr[i]["venue"];
      //Location
      let locationLabel = document.createElement("h3");
      locationLabel.classList.add("shows__one-container--location-label");
      oneContainer.appendChild(locationLabel);
      locationLabel.innerText = "LOCATION";
  
      let location = document.createElement("h4");
      location.classList.add("shows__one-container--location");
      oneContainer.appendChild(location);
  
      location.innerText = arr[i]["location"];
      //Button
      let buttonContainer = document.createElement("div");
      buttonContainer.classList.add("shows__one-container--button-container");
      oneContainer.appendChild(buttonContainer);
  
      let button = document.createElement("button");
      button.classList.add("shows__one-container--button");
      buttonContainer.appendChild(button);
  
      button.innerText = "BUY  TICKETS";
    }
  }
  table(shows);
  