/*
Lesson 1: 1) Create an empty JavaScript object below.
             This will be a objects representation of
             yourself so make sure you name the variable
             appropriately.
          2) Add a 'name' and 'age' properties to the
             object created in step (1).  appropriately.

Lesson 2: 1) Add a 'projects' property to the object
             created in Lesson 1. What type should
             'projects' be?
          2) Add a 'project' to your 'projects' property.
             What type will the 'project' be? 

Lesson 3: 1) Add a 'likes' property to each of the projects
             created in Lesson 2.
          2) In the click handler below, add 1 to the likes
             for the project that was clicked.
*/

// Create your object here.
var me = {
    projects: {
        'project-1': {name: 'Project 1', likes: 0},
        'project-2': {name: 'Project 2', likes: 0}
    }
};


$(document).ready(function(){
    // Get a list of all the buttons with class 'like-button'
    var likeButtons = $('.like-button');
    // Add a click handler for each of the like buttons
    likeButtons.click(function(e){
        // Get a reference to the div element that contains the 
        // like button that was clicked.
        var projectDiv = $(e.target).parent();
        // Get the id of the div elemement that contains the
        // like button that was clicked.
        var projectId = $(projectDiv).attr('id');
        // Update the likes for the project in your person object.
        // `projectID` should be a reference to the key in your
        // <person>.projects property. Each time your project's
        // 'Like' button is clicked this function will run so
        // we should increment the likes by 1.        

        // ---------------- Add code here ------------------

        console.log('Previous Likes: ' + me.projects[projectId].likes);
        me.projects[projectId].likes += 1;
        console.log('New Likes: ' + me.projects[projectId].likes);

        // ---------------- ^^^^^^^^^^^^^ ------------------

        // Get the element with class 'likes' that is a child
        // of the div element that contains the like button
        // that was clicked.
        var likesElement = $(projectDiv).find('.likes')[0];
        // Update the text with likes from your person object.
        $(likesElement).text(me.projects[projectId].likes);
        console.log(me);
    });
});