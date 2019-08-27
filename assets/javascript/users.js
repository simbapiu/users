var usersArray = [];
var j = 0;
var user;

function create(first_name, last_name, email) {
  var userObj = {
    first_name: first_name,
    last_name: last_name,
    email: email,
  };

  var data = JSON.stringify(userObj);

  $.ajax({
    url: "https://api.myjson.com/bins",
    type: "POST",
    data: data,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
      var url = data.uri;
      usersArray.push(url);
      localStorageUsers(usersArray);
      document.getElementById("formData").submit();
    }
  });
}

function localStorageUsers(userList) {
  localStorage.setItem('usersContainer', JSON.stringify(userList));
}

function getUsers() {
  var storedUsers = localStorage.getItem('usersContainer');
  if ( storedUsers === null ) {
    usersArray = [];
  } else {
    usersArray = JSON.parse(storedUsers);
  }

  return usersArray[j];
}
