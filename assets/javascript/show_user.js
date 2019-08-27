window.onload = show(getUsers());

function show(url) {
  $.ajax({
    url: url,
    method: "GET"
  }).done(function(data) {
    var users = document.querySelector('#data-user');
    var user = data;
    users.innerHTML += `
    <div class="first-name"><b>First name:</b> 
      <br> ${user.first_name}
    </div>
    <div class="last-name"><b>Last name:</b> 
      <br> ${user.last_name}
    </div>
    <div class="email"><b>Email:</b> 
      <br> ${user.email}
    </div>
    `
  });
}