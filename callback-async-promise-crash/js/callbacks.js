const posts = [{
    title: 'Poste One',
    body: 'This is post one'
  },
  {
    title: 'Poste Two',
    body: 'This is post two'
  }
];


function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((item) => output += `<li>${item.title}</li><li>${item.body}</li>`);
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    // Calls the callback function
    callback();
  }, 2000);
}

getPosts();

// get post as callback
createPost({
  title: 'Post three',
  body: 'This is post three'
},getPosts);
