var updatedData;

window.onload = edit(getUsers());

function edit(url) {
  $.ajax({
    url: url,
    method: "GET"
  }).done(function (data) {
    var users = document.querySelector('#form-container');
    var user = data;
    users.innerHTML += `
      <label for="firstName">First name:</label><br>
      <input id="firstName" type="text" name="firstname" value="${user.first_name}">
      <br>
      <label for="lastName">Last name:</label><br>
      <input id="lastName" type="text" name="lastname" value="${user.last_name}">
      <br>
      <label for="email">Email:</label><br>
      <input id="email" type="email" name="email" value="${user.email}">
      <br><br>
    `;
    localStorage.setItem('url', url);
  });
}

function getNewData() {
  let first_name = document.querySelector('#firstName').value;
  let last_name = document.querySelector('#lastName').value;
  let email = document.querySelector('#email').value;

  update(first_name, last_name, email);
}

function update(first_name, last_name, email) {
  let dataUser = {
    first_name: first_name,
    last_name: last_name,
    email: email
  };

  updatedData = JSON.stringify(dataUser);
  let url = localStorage.getItem('url');

  $.ajax({
    url: url,
    type: "PUT",
    data: updatedData,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function () {
      alert('Data has been update');
      document.getElementById("formData").submit();
    }
  });
}