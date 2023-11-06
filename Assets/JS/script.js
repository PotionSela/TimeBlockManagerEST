// Get the current date and format it
const currentDayElement = document.getElementById('currentDay');
const currentDay = dayjs().utcOffset(-5).format('dddd, MMMM D');
const currentDateTime = dayjs().utcOffset(-5).format('dddd, MMMM D, HH:mm A'); // Includes time (HH:mm A)
const currentHour = dayjs().utcOffset(-5).hour(); // Get the current hour using dayjs for EST
const currentMinute = dayjs().utcOffset(-5).minute(); // Get the current minute using dayjs for EST

currentDayElement.textContent = currentDay;
currentDayElement.textContent = currentDateTime;

// Loop through each time block and add the appropriate class
$(".time-block").each(function () {
  const timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

  // Remove existing classes to ensure no overlapping classes
  $(this).removeClass("past present future");

  // Now add the appropriate class based on the current time
  if (timeBlockHour < currentHour) {
    $(this).addClass("past");
  } else if (timeBlockHour === currentHour && currentMinute < 60) {
    $(this).addClass("present");
  }  else {
    $(this).addClass("future");
  }
});

// Save Events to Local Storage
$(".saveBtn").on("click", function () {
  // Get the user input (event description) from the textarea
  const eventDescription = $(this).siblings(".description").val().trim();

  // Get the time block's id to use as a key for local storage
  const timeBlockId = $(this).parent().attr("id");

  // Check if an event description is provided
  if (eventDescription !== "") {
    // Save the event description in local storage
    localStorage.setItem(timeBlockId, eventDescription);
  }
});

// Load Events from Local Storage
function loadEventsFromLocalStorage() {
  // Loop through each time block and load the corresponding event description
  $(".time-block").each(function () {
    const timeBlockId = $(this).attr("id");
    const eventDescription = localStorage.getItem(timeBlockId);

    // If there's a saved event description, set it in the textarea
    if (eventDescription) {
      $(this).find(".description").val(eventDescription);
    }
  });
}

// Call the function to load events from local storage when the page loads
loadEventsFromLocalStorage();
