

// create array to hold times

    timeArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17",];
    var parent = $("#parent");

// function to display the current date/time on page
    function showTime() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a')
    var timeP = $("<p>").text(time);
    $("#currentDay").append(timeP);
    }
    showTime()


// function to dynamically make the timeblocks from 9am-5pm
for (i=0; i<timeArray.length; i++) {
    var element1 = document.createElement("div");
    var element2 = document.createElement("div");
    var element3 = document.createElement("textarea");
    var element4 = document.createElement("button");
    parent.append(element1);
    element1.append(element2);
    element1.append(element3);
    element1.append(element4);
    $(element1).addClass("row time-block");
    $(element1).attr("id", `hour-${timeArray[i]}`);
    $(element2).addClass("col-md-1 hour");
    $(element3).addClass("col-md-10 description");
    $(element4).addClass("btn saveBtn col-md-1");
    $(element4).html("<i class='fas fa-save'></i>")

    // converting 24h time 
    if (timeArray[i]%12 == 0) {
        $(element2).text(`12pm`);
    } 
    
    else if (timeArray[i] >= 12) {
        $(element2).text(`${timeArray[i]%12}pm`);
    }

    else if (timeArray[i]%12 < 12) {
        $(element2).text(`${timeArray[i]%12}am`);
    }

    // get local storage
    $(`#hour-${timeArray[i]} .description`).val(localStorage.getItem(`hour-${timeArray[i]}`))

    // change background colors depending on if time passed or in the future
    if (timeArray[i] < moment().hours()) {
        $(element3).css("background-color", "red");
    }

    else if (timeArray[i] > moment().hour()) {
        $(element3).css("background-color", "grey");
    }

    else {
        $(element3).css("background-color", "green");
    }
}

// save to localStorage
$(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description" ).val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
})




