/**
 * Returns a value from a input
 * @param Query to get a input tag
 * @return String
 */
function getValue(query) {
  let element = document.querySelector(query);
  
  return element.value;
}

/**
 * Class to alocate both values of the form
 */
class Assignment {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

/**
 * Creates the card element
 */
function createCard() {
  let icebox = document.getElementById('icebox');
  let cardContent = new Assignment(getValue('#assignment'), getValue('#description'));
  let card = document.createElement('div');
  let cardTitle = document.createElement('h2');
  let cardDescription = document.createElement('p');

  icebox.appendChild(card);

  card.appendChild(cardTitle);
  card.appendChild(cardDescription);

  cardTitle.innerHTML = cardContent.title;
  cardDescription.innerHTML = cardContent.description;
}

/**
 * Clear the form after create the card
 */
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
    createCard();
    clearForm();
  }, false);
}());
