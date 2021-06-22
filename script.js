//moment for display current date and time
const m = moment();
$('#currentDay').text(m.format("dddd, MMM Do YYYY, h:mm:ss a"));


//need conditionals for time blocks






//function created to return a string 





//need indication for classes added in CSS


//need value from local storage


$(document).ready(function() {
//Event listener for Save Button
$(".saveBtn").on("click", function() {
let notes = $(this).siblings(".description").val();
let time = $(this).parent().attr("id");

// Local Storage
localStorage.setItem(time, notes);


    // loop over div time blocks
$(".time-block").each(function () {
    let timeBlock = parseInt($(this).attr("id").split("hour")[1]);
    let currentTime = moment().hour();

if (timeBlock < currentTime) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
    }else if (timeBlock === currentTime) { 
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");
    }else { $(this).addClass("future");
    $(this).removeClass("present");
    $(this).removeClass("past");
}
              

})
})
})

$("#hour8 .description").val(localStorage.getItem("hour8"));



