$(".row").on("submit", function (event) {
  event.preventDefault();
  var calendarData = localStorage.getItem("calendarData")
    ? JSON.parse(localStorage.getItem("calendarData"))
    : {};
  console.log(event.target.elements.textBoxClass.value);
  calendarData[`time${event.target.dataset.time}`] =
    event.target.elements.textBoxClass.value;
  localStorage.setItem("calendarData", JSON.stringify(calendarData));
});

$(function (event) {
  $("#currentDay").text(moment().format('llll'));
  var calendarData = localStorage.getItem("calendarData")
    ? JSON.parse(localStorage.getItem("calendarData"))
    : null;
  if (!calendarData) return;
  $(".row").each(function () {
    $(this)
      .find("textarea")
      .text(calendarData[`time${$(this).data("time")}`]);
  });
});
