# Example of React's Component Composition

## Overview
This is a simeple todo app example built with react. It contains a form component to add new todos. Each todo has it's own remove, edit and cancel buttonaactions.

###### NoteUpdateForm 
Component that receives a note through props and on
submit is able to update the App's state with an updated note.

###### NoteItem to has the following behavior
Component to render each individual note.

If the user double clicks on the notes content it switches to the Edit View  
* Default view  
  *Displays the notes content and a delete button
  * Displays a delete button that will remove the Note from the application's state
* Edit View 
  * Shows the NoteUpdateForm and a Cancel Button
  * onNoteUpdateForm Submit or click of the cancel button it switches back to the default view

###### App Component Tree
``` 
App
  NoteCreateForm
  NoteList
    NoteItem
      NoteUpdateForm
```

## Technologies
- Reactjs
- Nodejs
- Javascript
- Html5
- CSS3
- SASS
