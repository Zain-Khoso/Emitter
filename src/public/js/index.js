"use strict";

// DOM Selections.
const elem_Form = document.getElementById("form");
const elem_InputEntry = document.getElementById("input");
const elem_OutputButton = document.getElementById("output");

// Functions

// This function gets the shortened URL from the server.
const getShortURL = async function (event) {
  // Stoping default behaviour.
  event.preventDefault();

  const largeURL = elem_InputEntry.value;

  try {
    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: largeURL }),
    });

    const data = await res.json();

    elem_OutputButton.dataset.shortUrl = data.shortURL;
    elem_OutputButton.textContent = data.shortURL;
  } catch {
    location.reload();
  }
};

// This function copies the shortened url on the data atribute of this button
// to the clipboard.
const copyShortenedURL = function (event) {
  const target = event.target;
  const shortUrl = target.dataset.shortUrl;

  navigator.clipboard.writeText(shortUrl);

  event.target.textContent = "COPIED";
};
// Event Listeners
elem_Form.addEventListener("submit", getShortURL);
elem_OutputButton.addEventListener("click", copyShortenedURL);
