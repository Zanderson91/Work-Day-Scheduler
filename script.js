//moment for display current date and time
const m = moment();
$('#currentDay').text(m.format("dddd, MMM Do YYYY, h:mm:ss a"));

function getTime () {
    let currentTime = moment().hour();
    $(".time-block").each(function() {
        let timeBlock = parseInt(($this).attr("id").split("hour")[1]);

})
}



/*
// Local Storage
localStorage.setItem(time, notes);


//need loop for time blocks


//need indication for classes added in CSS


//need value from local storage
})*/

//Event listener for Save Button
$(".saveBtn").on("click", function() {
let notes = $(this).siblings(".description").val();

