$(function () {
  var currentHour = dayjs().hour();
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id").split("-")[1]);
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(hour, description);
  });
});
$(".description").each(function () {
  var hour = $(this).parent().attr("id");
  var savedDescription = localStorage.getItem(hour);
  if (savedDescription !== null) {
    $(this).val(savedDescription);
  }
});