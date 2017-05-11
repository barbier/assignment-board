function getValue(query) {
  let element = document.querySelector(query);
  
  return element.value;
}

function createAssignment(title, description) {
  let template = `<div class='column'>
  <h2>${title}</h2><p>${description}</p></div>`;
  let node = document.getElementById("icebox");

  node.innerHTML += template;
}

function assignmentClass() {
  this.title = getValue("#assignment");
  this.description = getValue("#description");
}

function clearForm() {
  let assignment = document.getElementById('assignment');
  let description = document.getElementById('description');
  
  assignment.value = "";
  description.value = "";
  assignment.focus();
}

(function() {
  let button = document.getElementById("createButton");

  button.addEventListener('click', function() {
    let assignment = new assignmentClass();

    createAssignment(assignment.title, assignment.description);
    clearForm();
  }, false);
}());
