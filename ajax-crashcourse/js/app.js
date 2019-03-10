// Get file

// Create event listener
var btnGetTextFile = document.getElementById('btnGetTextFile');
btnGetTextFile.addEventListener('click', loadText);

function loadText(e) {
  // Create xhr object
  var xhr = new XMLHttpRequest();
  // open - type, url/file, async
  xhr.open('GET', 'sample.txt', true);
  // new way
  xhr.onload = function() {
    console.log('READYSTATE: ', xhr.readyState);
    // request finished -> 4
    if (this.status == 200) {
      document.getElementById('textfile').innerHTML = this.responseText;
    } else if (this.status = 404) {
      document.getElementById('textfile').innerHTML = 'Not found';
    }
  };

  xhr.onerror = function() {
    console.log('Request error');
  };

  // optional - used for loaders
  xhr.onprogress = function() {
    console.log('READYSTATE: ', xhr.readyState);
    // Processing request -> 3
  }
  console.log('READYSTATE: ', xhr.readyState);
  // old way
  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE: ', xhr.readyState);
  //   if (this.readyState == 4 && this.status == 200) {
  //     console.log(this.responseText);
  //
  //   }
  // }
  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
  xhr.send();
}


// Get JSON

// Create event listener
var btnGetUser = document.getElementById('btnGetUser');
btnGetUser.addEventListener('click', loadUser);
var btnGetUsers = document.getElementById('btnGetUsers');
btnGetUsers.addEventListener('click', loadUsers);


function loadUser() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'user.json', true);
  xhr.onload = function() {
    if (this.status == 200) {
      var user = JSON.parse(this.responseText);
      var output = '';
      output += '<ul>';
      output += '<li>ID: ' + user.id + '</li>';
      output += '<li>Name: ' + user.name + '</li>';
      output += '<li>Mail: ' + user.email + '</li>';
      output += '</ul>';
      document.getElementById('user').innerHTML = output;
    }
  }
  xhr.send();
}

function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.json', true);
  xhr.onload = function() {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);

      var output = '';
      users.forEach(function(user) {
        output += '<ul>';
        output += '<li>ID: ' + user.id + '</li>';
        output += '<li>Name: ' + user.name + '</li>';
        output += '<li>Mail: ' + user.email + '</li>';
        output += '</ul>';
      });

      document.getElementById('users').innerHTML = output;
    }
  }
  xhr.send();
}



// Get from external api

// Create event listener
var btnGetUsersGithub = document.getElementById('btnGetUsersGithub');
btnGetUsersGithub.addEventListener('click', loadUsersGithub);

function loadUsersGithub() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users', true);
  xhr.onload = function() {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);

      var output = '';
      users.forEach(function(user) {
        output += '<div class="user">';
        output += '<img src="' + user.avatar_url + '" width="70" height="70">';
        output += '<ul>';
        output += '<li>Name: ' + user.id + '</li>';
        output += '<li>Login: ' + user.login + '</li>';
        output += '</ul>';
        output += '</div>';
      });

      document.getElementById('githubusers').innerHTML = output;
    }
  }
  xhr.send();
}


// PHP Simple button

var btnPhpForm = document.getElementById('btnPhpForm');
btnPhpForm.addEventListener('submit', getName);

function getName() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'process.php?name=Brad', true);
  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);

    }
  }
  xhr.send();
}

// PHP get Form
var getForm = document.getElementById('getForm');
getForm.addEventListener('submit', getNameForm);

function getNameForm(e) {
  e.preventDefault();
  var name = document.getElementById('nameGet').value;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'process.php?name=' + name, true);
  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  }
  xhr.send();
}

// PHP post Form
var postForm = document.getElementById('postForm');
postForm.addEventListener('submit', postNameForm);

function postNameForm(e) {
  e.preventDefault();
  var name = document.getElementById('namePost').value;
  var params = "name=" + name;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'process.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  }
  xhr.send(params);
}


// PHP Get User from // DEBUG:
var btnGetUsersFromDB = document.getElementById('btnGetUsersFromDB');
btnGetUsersFromDB.addEventListener('click', getUsersFromDB);

function getUsersFromDB(e) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.php', true);
  xhr.onload = function() {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);

      var output = '';
      users.forEach(function(user) {
        output += '<ul>';
        output += '<li>ID: ' + user.id + '</li>';
        output += '<li>Name: ' + user.name + '</li>';
        output += '</ul>';
      });

      document.getElementById('usersFromDB').innerHTML = output;
    }
  }
  xhr.send();
}
