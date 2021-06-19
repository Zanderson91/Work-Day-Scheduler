//moment for display current date and time
const m = moment();
$('#currentDay').text(m.format("dddd, MMM Do YYYY, h:mm:ss a"));









//need loop for time blocks
if (timeBlock < currentTime {
    $(this).removeClass("future")
}


//need indication for classes added in CSS


//need value from local storage


$(document).ready(function() {
//Event listener for Save Button
$(".saveBtn").on("click", function() {
let notes = $(this).siblings(".description").val();
let time = $(this).parent().attr("id");

// Local Storage
localStorage.setItem(time, notes);
})

})

