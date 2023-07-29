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
  /*<div id="hour-10" class="row time-block present">
        <div class="col-2 col-md-1 hour text-center py-3">10AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>

  themeButtonEl.on('click', function () {
  if (isDark) {
    $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    isDark = !isDark;
  } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    isDark = !isDark;
  }
});
function saveProjectsToStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}
*/
   var save_button = $('.saveBtn');
   var task_list = [];
   var descriptionText = $('.description');
   
   // can we do something like for each save clicked, get id of that section
   save_button.on('click', function () {
    descriptionText.attr('id',this.parentElement.id);
    console.log(this);
    var task = {
      id: this.parentElement.id,
      description: descriptionText.val()
    };
    task_list.push(task);
    console.log(this.parentElement);
    console.log(this.parentElement.id);
    console.log(descriptionText.val());
    localStorage.setItem("task_local", JSON.stringify(task_list));
    
    });
   
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  /*function readProjectsFromStorage() {
  var projects = localStorage.getItem('projects');
  if (projects) {
    projects = JSON.parse(projects);
  } else {
    projects = [];
  }
  return projects;
}*/
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $ ('#currentDay').text(today.format('MMM D, YYYY'));
});


