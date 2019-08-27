window.onload = show(getUsers());

function show(url) {
  $.ajax({
    url: url,
    method: "GET"
  }).done(function(data) {
    var users = document.querySelector('#row-user-info');
    var user = data;
    users.innerHTML += `
    <div class="user-first-name">${user.first_name}</div>
    <div class="user-last-name">${user.last_name}</div>
    <div class="user-email">${user.email}</div>
    <div class="icon-action"><a href="edit_user.html"><i class="fa fa-pencil"></i></a></div>
    `
  });
}