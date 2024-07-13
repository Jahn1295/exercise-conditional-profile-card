import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let roleDropDown = "";
  if (variables.role === null) {
    roleDropDown = "Select";
  } else {
    roleDropDown = variables.role;
  }
  let firstName = "";
  if (variables.name === null) {
    firstName = "Your Name";
  } else {
    firstName = variables.name;
  }
  let lastName = "";
  if (variables.lastName === null) {
    lastName = " goes here";
  } else {
    lastName = variables.lastName;
  }
  let myCountry = "";
  if (variables.country === null) {
    myCountry = "Country";
  } else {
    myCountry = variables.country;
  }
  let myCity = "";
  if (variables.city === null) {
    myCity = "City";
  } else {
    myCity = variables.city;
  }
  let myTwitter = "";
  if (variables.twitter === null) {
    myTwitter = "https://twitter.com/4geeksacademy";
  } else {
    myTwitter = "https://twitter.com/" + variables.twitter;
  }
  let myGithub = "";
  if (variables.github === null) {
    myGithub = "https://github.com/4geeksacademy";
  } else {
    myGithub = "https://github.com/" + variables.github;
  }
  let myLinkedIn = "";
  if (variables.linkedin === null) {
    myLinkedIn = "https://linkedin.com/school/4geeksacademy";
  } else {
    myLinkedIn = "https://linkedin.com/" + variables.linkedin;
  }
  let myInsta = "";
  if (variables.instagram === null) {
    myInsta = "https://instagram.com/4geeksacademy";
  } else {
    myInsta = "https://instagram.com/" + variables.instagram;
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${firstName} ${lastName}</h1>
          <h2>${roleDropDown}</h2>
          <h3>${myCity}, ${myCountry}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href= "${myTwitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${myGithub}"><i class="fab fa-github"></i></a></li>
            <li><a href="${myLinkedIn}"><i class="fab fa-linkedin"></i></a></li>
            <li><a target="_blank" href="${myInsta}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
