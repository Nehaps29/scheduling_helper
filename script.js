// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? id = hour-9, hour-10
  //
  
    var save_button = $('.saveBtn');
    var task_list = [];

    save_button.on('click', function () {

      var task = {
        id: this.parentElement.id,
        description_list: $(this).siblings(".description").val()
        //taskName: this.siblings(".description")
        
      };
      task_list.push(task);
      console.log(this.parentElement);
      console.log(this.parentElement.id);
      //console.log(save_button.siblings(".description").val())
      //console.log(description_list);
      //console.log(description_list.val());
      //console.log(this.previousElementSibling.value);
      localStorage.setItem("task_local", JSON.stringify(task_list));
      readTaskFromStorage();
      });
   
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  const d = new Date();
  let hour = d.getHours();

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

  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


function readTaskFromStorage(){
  var write_task = localStorage.getItem('task_local');
  
  write_task = JSON.parse(write_task);
  
  console.log(write_task);
  
  for (var i = 0; i<write_task.length; i++){
    var get_task = write_task[i];
    console.log(get_task);
    console.log(get_task.id);
    console.log(get_task.description_list);
    $('#get_task.id').children('textarea').text(get_task.description_list);
  }

}
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $ ('#currentDay').text(today.format('MMM D, YYYY, hh:mm A'));
});


