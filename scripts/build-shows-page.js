function table(arr) {
  //container that has everything
  let tableContainer = document.querySelector(".shows__container");

  let titleContainer = document.createElement("div");
  titleContainer.classList.add("shows__title-container");
  tableContainer.appendChild(titleContainer);

  //header Title
  let title = document.createElement("h1");
  title.classList.add("shows__title");
  titleContainer.appendChild(title);
  title.innerText = "Shows";

  let showsContainer = document.createElement("div");
  showsContainer.classList.add("shows__container-all");
  tableContainer.appendChild(showsContainer);

  //container for labels (tablet&desktop)
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

  for (let i = 0; i < arr.length; i++) {
    //Container for all types of displays
    let oneContainer = document.createElement("div");
    oneContainer.classList.add("shows__one-container");
    showsContainer.appendChild(oneContainer);

    //dates
    let dateLabel = document.createElement("h3");
    dateLabel.classList.add("shows__one-container--date-label");
    oneContainer.appendChild(dateLabel);
    dateLabel.innerText = "DATE";

    let date = document.createElement("h4");
    date.classList.add("shows__one-container--date");
    oneContainer.appendChild(date);
    const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    const month = ["Jan","Feb", "Mar","Apr", "May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    let v = new Date(arr[i]["date"])
    date.innerText = weekday[v.getUTCDay()]+" " + v.getDate() + " " + month[v.getMonth()]+ " " + v.getFullYear();

    //venues
    let venueLabel = document.createElement("h3");
    venueLabel.classList.add("shows__one-container--venue-label");
    oneContainer.appendChild(venueLabel);
    venueLabel.innerText = "VENUE";

    let venue = document.createElement("h4");
    venue.classList.add("shows__one-container--venue");
    oneContainer.appendChild(venue);

    venue.innerText = arr[i]["place"];
    //location
    let locationLabel = document.createElement("h3");
    locationLabel.classList.add("shows__one-container--location-label");
    oneContainer.appendChild(locationLabel);
    locationLabel.innerText = "LOCATION";

    let location = document.createElement("h4");
    location.classList.add("shows__one-container--location");
    oneContainer.appendChild(location);

    location.innerText = arr[i]["location"];
    //button
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("shows__one-container--button-container");
    oneContainer.appendChild(buttonContainer);

    let button = document.createElement("button");
    button.classList.add("shows__one-container--button");
    buttonContainer.appendChild(button);

    button.innerText = "BUY  TICKETS";//add appropriate link whenever required to proceed in ticket booking
  }
}

import {BandSiteApi, apiKEY} from "./band-site-api.js";
const bandApi = new BandSiteApi(apiKEY);
(async () => {
  // Get shows
  const shows = await bandApi.getShows();
  table(shows);
  console.log(shows);
})();

  