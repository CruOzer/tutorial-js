document.getElementById('getText').addEventListener('click', fetchFile);
document.getElementById('getUsers').addEventListener('click', fetchJson);
document.getElementById('getPosts').addEventListener('click', fetchApi);
document.getElementById('addPost').addEventListener('submit', addPost);

output = document.getElementById('output');

function fetchFile(e) {
  // fetch('sample.txt').then(function(res) {
  //   return res.text();
  // }).then(function(data) {
  //   console.log(data);
  // });
  fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => output.innerHTML = data)
    .catch((error) => console.log(error));
}


function fetchJson(e) {
  fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
      var o = '<h2 class="mb-4">Users</h2>';
      data.forEach((item) => {
        o += `<ul class="list-group mb-3"><li  class="list-group-item">ID: ${item.id}</li><li  class="list-group-item">Name: ${item.name}</li><li  class="list-group-item">E-Mail: ${item.email}</li></ul>`;
      });
      output.innerHTML = o;
    })
    .catch((error) => console.log(error));
}


function fetchApi(e) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      var o = '<h2>Posts</h2>';
      data.forEach((item) => {
        o += `<div class="card card-body mb-3"><h3>${item.title}</h3><p>${item.body}</p></div>`;
      });
      output.innerHTML = o;
    })
    .catch((error) => console.log(error));
}


function addPost(e) {
  e.preventDefault();
  var title = document.getElementById('title').value;
  var body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: body
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}
