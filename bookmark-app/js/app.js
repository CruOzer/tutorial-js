// Listen for Form-submit

var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', saveBookmark);


function saveBookmark(e) {
  // get Form values
  var siteName = document.getElementById('site-name').value;

  var siteUrl = document.getElementById('site-url').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }
  /*
    // local storage
    localStorage.setItem('test','Hello');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */
  if(!validateForm(siteName, siteUrl))
  {
    return false;
  }
  // test if bookmarks exist
  if (localStorage.getItem('bookmarks') === null) {
    // Init array
    var bookmarks = [];
    //push item into array
    bookmarks.push(bookmark);
    //save to local storage as json
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    //get bookmarks from local localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //add bookmark to array
    bookmarks.push(bookmark);
    // re-set local storate
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  // Prevent default behavior -> no submit
  e.preventDefault();
  //refetch bookmarks
  fetchBookmarks();
}


// Fetch and display bookmarks
function fetchBookmarks() {
  //get bookmarks from local localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  var bookmarkResults = document.getElementById('bookmarkResults');
  var result = '';
  bookmarks.forEach(function(item) {
    var name = item.name;
    var url = item.url;
    result += '<div class="well">' +
      '<h3>' + name +
      ' <a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#">Delete</a> ' +
      ' <a class="btn btn-default" target="_blank" href="' + addhttp(url) + '">Visit</a> ' +
      '</h3>' +
      '</div>';
  });

  bookmarkResults.innerHTML = result;
}


function deleteBookmark(url) {
  // get Bookmarks
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      bookmarks.splice(i, 1);
    }
  }
  myForm.reset();
  // re-set local storate
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  //refetch bookmarks
  fetchBookmarks();
}

function addhttp(url) {
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
      url = "http://" + url;
  }
  return url;
}


function validateForm(siteName, siteUrl){
  if(!siteName || !siteUrl){
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }

  return true;
}
