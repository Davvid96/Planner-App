
$(".row").on("submit", function(event){
    event.preventDefault();
    var calendarData = localStorage.getItem("calendarData")?JSON.parse(localStorage.getItem("calendarData")): {};
console.log(event.target.elements.textBoxClass.value);
calendarData[`time${event.target.dataset.time}`]=event.target.elements.textBoxClass.value;
localStorage.setItem("calendarData", JSON.stringify(calendarData));
})

$(function(event){
console.log("page loaded");
var calendarData = localStorage.getItem("calendarData")?JSON.parse(localStorage.getItem("calendarData")): null;
if (!calendarData) return;

})



