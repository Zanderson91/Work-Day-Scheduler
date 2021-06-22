//moment for display current date and time
const m = moment();
$('#currentDay').text(m.format("dddd, MMM Do YYYY, h:mm:ss a"));

// Store inputs to Local storage
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));

// Event Listener for Save Button
$(".saveBtn").on("click", function() {
let notes = $(this).siblings(".description").val();
let time = $(this).parent().attr("id");
localStorage.setItem(time, notes);

    // loop for time-block divs
$(".time-block").each(function () {
    let timeBlock = $(this).attr("id").split("hour")[1];
    let currentTime = moment().hour();

//Conditional statements for CSS time blocks
if (timeBlock < currentTime) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
    }else if (time === currentTime) { 
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");
    }else { $(this).addClass("future");
    $(this).removeClass("present");
    $(this).removeClass("past");
    }
              
})
})






