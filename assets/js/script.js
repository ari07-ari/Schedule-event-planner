// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  //This triggers the save button
   $(".btn").on('click', function () {
    
    //it detects which save button and from what div was used
    //to then later obtain the value and save it in the local storage 
    var clickedButton = $(this);
    var textArea = clickedButton.siblings( ".description" ).val();
    var divId= clickedButton.parent().attr('id');
    console.log(textArea);

    localStorage.setItem(divId ,textArea);

   })






  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  

//We will take the actual hour
var currentHour= dayjs().hour();

//Make a for loop so it loops to all the textare
for (let index = 9; index < 18; index++) {

  var blockHour = $("#" + index);

  //this compares if the id of the div equals the current time
  //then it will decide which colour for present, past and future
  if (index === currentHour){
    blockHour.addClass("present");
  }
  else if (index > currentHour){
    blockHour.addClass("future");
  }
  else{
    blockHour.addClass("past");
  }
  
}


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  //this function will get the items that are stored localy and display them in their text box
  //after the page is refreshed
  function onPageRefresh() {
    var textArea = $('#9 .description').val(localStorage.getItem("9"));
    var textArea = $('#10 .description').val(localStorage.getItem("10"));
    var textArea = $('#11 .description').val(localStorage.getItem("11"));
    var textArea = $('#12 .description').val(localStorage.getItem("12"));
    var textArea = $('#13 .description').val(localStorage.getItem("13"));
    var textArea = $('#14 .description').val(localStorage.getItem("14"));
    var textArea = $('#15 .description').val(localStorage.getItem("15"));
    var textArea = $('#16 .description').val(localStorage.getItem("16"));
    var textArea = $('#17 .description').val(localStorage.getItem("17"));
  }
  onPageRefresh();


  // TODO: Add code to display the current date in the header of the page.
 
  //Using dayjs, The ddd is the day witH MMM as the month and the D is the 
  //say of the month, to br displayed in the heaader
  var topDate = dayjs().format("ddd, MMM D") ;
  $("#currentDay").text(topDate);
});
