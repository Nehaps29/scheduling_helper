// code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
  
   // save reference to important DOM elements
    var save_button = $('.saveBtn');
    var task_list = JSON.parse(localStorage.getItem('task_local')) || [];
    save_button.on('click', function () {

      var task = {
        id: this.parentElement.id,
        description_list: $(this).siblings(".description").val()
      };
      task_list.push(task);
      localStorage.setItem("task_local", JSON.stringify(task_list));
      
      });
      
  // creat variable to get current time in 24 hours format 
  const d = new Date();
  let hour = d.getHours();
  // adding condition so that block changes color as gray for past, red for present and green for future event based current time
  if (hour == 9){
    $("#hour-9").removeClass("past");
    $("#hour-9").removeClass("future");
    $("#hour-9").addClass("present");
  } else if (hour>9) { 
    $("#hour-9").removeClass("present");
    $("#hour-9").removeClass("future");
    $("#hour-9").addClass("past");
   }
   else {
    $("#hour-9").removeClass("present");
    $("#hour-9").removeClass("past");
    $("#hour-9").addClass("future");
   }

  if (hour == 10){
    $("#hour-10").removeClass("past");
    $("#hour-10").removeClass("future");
    $("#hour-10").addClass("present");
  } else if (hour>10) { 
    $("#hour-10").removeClass("present");
    $("#hour-10").removeClass("future");
    $("#hour-10").addClass("past");
   }
   else {
    $("#hour-10").removeClass("present");
    $("#hour-10").removeClass("past");
    $("#hour-10").addClass("future");
   }


  if (hour == 11){
    $("#hour-11").removeClass("past");
    $("#hour-11").removeClass("future");
    $("#hour-11").addClass("present");
  } else if (hour>11) { 
    $("#hour-11").removeClass("present");
    $("#hour-11").removeClass("future");
    $("#hour-11").addClass("past");
   }
   else {
    $("#hour-11").removeClass("present");
    $("#hour-11").removeClass("past");
    $("#hour-11").addClass("future");
   }

  if (hour == 12){
    $("#hour-12").removeClass("past");
    $("#hour-12").removeClass("future");
    $("#hour-12").addClass("present");
  } else if (hour>12) { 
    $("#hour-12").removeClass("present");
    $("#hour-12").removeClass("future");
    $("#hour-12").addClass("past");
   }
   else {
    $("#hour-12").removeClass("present");
    $("#hour-12").removeClass("past");
    $("#hour-12").addClass("future");
   }

  if (hour == 13){
    $("#hour-13").removeClass("past");
    $("#hour-13").removeClass("future");
    $("#hour-13").addClass("present");
  } else if (hour>13) { 
    $("#hour-13").removeClass("present");
    $("#hour-13").removeClass("future");
    $("#hour-13").addClass("past");
   }
   else {
    $("#hour-13").removeClass("present");
    $("#hour-13").removeClass("past");
    $("#hour-13").addClass("future");
   }

  if (hour == 14){
    $("#hour-14").removeClass("past");
    $("#hour-14").removeClass("future");
    $("#hour-14").addClass("present");
  } else if (hour>14) { 
    $("#hour-14").removeClass("present");
    $("#hour-14").removeClass("future");
    $("#hour-14").addClass("past");
   }
   else {
    $("#hour-14").removeClass("present");
    $("#hour-14").removeClass("past");
    $("#hour-14").addClass("future");
   }


  if (hour == 15){
    $("#hour-15").removeClass("past");
    $("#hour-15").removeClass("future");
    $("#hour-15").addClass("present");
  } else if (hour>15) { 
    $("#hour-15").removeClass("present");
    $("#hour-15").removeClass("future");
    $("#hour-15").addClass("past");
   }
   else {
    $("#hour-15").removeClass("present");
    $("#hour-15").removeClass("past");
    $("#hour-15").addClass("future");
   }


  if (hour == 16){
    $("#hour-16").removeClass("past");
    $("#hour-16").removeClass("future");
    $("#hour-16").addClass("present");
  } else if (hour>16) { 
    $("#hour-16").removeClass("present");
    $("#hour-16").removeClass("future");
    $("#hour-16").addClass("past");
   }
   else {
    $("#hour-16").removeClass("present");
    $("#hour-16").removeClass("past");
    $("#hour-16").addClass("future");
   }

  
  if (hour == 17){
    $("#hour-17").removeClass("past");
    $("#hour-17").removeClass("future");
    $("#hour-17").addClass("present");
  } else if (hour>17) { 
    $("#hour-17").removeClass("present");
    $("#hour-17").removeClass("future");
    $("#hour-17").addClass("past");
   }
   else {
    $("#hour-17").removeClass("present");
    $("#hour-17").removeClass("past");
    $("#hour-17").addClass("future");
   }

  //saving the entries and displaying it in the assigned text area
  var write_task = localStorage.getItem('task_local');
  
  write_task = JSON.parse(write_task);
  
  console.log(write_task);
  
  for (var i = 0; i<write_task.length; i++){
    var get_task = write_task[i];
    $(`#${get_task.id}`).children('textarea').text(get_task.description_list);
  }


  // code to display the current date in the header of the page.
  var today = dayjs();
  $ ('#currentDay').text(today.format('MMM D, YYYY, hh:mm A'));
});


