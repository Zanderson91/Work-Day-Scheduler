//moment for display current date and time
const m = moment();
$('#currentDay').text(m.format("dddd, MMM Do YYYY, h:mm:ss a"));

function getTime () {
    var currentTime = moment().hour();


}


//Event listener for Save Button
$(".saveBtn").on("click", function() {

}


// Local Storage
localStorage.setItem(time, text);
