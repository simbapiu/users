function saveData() {
  var first_name = document.querySelector('#firstName').value;
  var last_name = document.querySelector('#lastName').value;
  var email = document.querySelector('#email').value;

  create(first_name, last_name, email);
}