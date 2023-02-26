// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

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
var hourNow = dayjs().format('HH:mm:ss A');
$('#hourNow').text(hourNow);

// Current hour in 24 hour time
var currentHour = dayjs().hour();
console.log(currentHour);

// Iterates for each time block and applies past, present,future
$('.time-block').each(function() {
  // Get the hour ID of current time block also for the textare value to remain on the page
  var hourId = $(this).attr('id');
  // Take hour number from ID ex. hour-9 => 9
  // var blockHour = parseInt($(this).attr('id').split('-')[1]);
  var blockHour = parseInt(hourId.split('-')[1]);
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

});
