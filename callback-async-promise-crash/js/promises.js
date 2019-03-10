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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

// get post as callback
// createPost({
//   title: 'Post three',
//   body: 'This is post three'
// }).then(getPosts).catch((error) => console.log(error));


//Async / Await

async function init() {
  await createPost({
    title: 'Post three',
    body: 'This is post three'
  });
  getPosts();
}

init();

// Async / Await with fetch
async function fetchUsers(){
  var res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

fetchUsers();


const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, 'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));
