// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var saveBtn = $('#saveBtn');

$(document).ready(function () {
  // Adds event listener for all save buttons
  $('.saveBtn').on('click', function(){
  // Get user input and corresponding hour Id
    const hourId = $(this).parent().attr('id');
    const userInput = $(this).siblings('.description').val();
  // Saves the user input in local storage
    localStorage.setItem(hourId, userInput);
  });
// Get current date and display in header
var currentDay = dayjs().format('dddd, MMMM D');
$('#currentDay').text(currentDay);
var hourNow = dayjs().format('hh:mm:ss A');
$('#hourNow').text(hourNow);

// Current hour in 24 hour time
var currentHour = dayjs().hour();

// Iterates for each time block and applies past, present,future
$('.time-block').each(function() {
  // Get the hour ID of current time block
  // var hourId = $(this).attr('id');
  // Take hour number from ID ex. hour-9 => 9
  var blockHour = parseInt($(this).attr('id').split('-')[1]);
  // Apply past, present, future classes by comparison to current hour
  if(blockHour < currentHour) {
    $(this).addClass('past');
  } else if(blockHour === currentHour) {
    $(this).removeClass('past')
    $(this).addClass('present');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
// Get user input from local storage and set textarea value
var userInput = localStorage.getItem(hourId);
$(this).children('.description').val(userInput);

});



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
