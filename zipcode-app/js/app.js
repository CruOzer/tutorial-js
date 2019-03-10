//http://api.zippopotam.us/de/
var zipForm = document.getElementById('zipform');
zipForm.addEventListener('submit', loadZipInfo);
var output = document.getElementById('output');
// Listen for delete
document.querySelector("body").addEventListener("click", deleteLocation);

function loadZipInfo(e) {
  e.preventDefault();
  //Get zip value from input
  const zip = document.querySelector(".zip").value;
  fetch('http://api.zippopotam.us/de/' + zip)
    .then((res) => {
      if (res.status != 200) {
        showIcon('remove');
        output.innerHTML = `<article class="message is-danger"><div class="message-body">Invalid Zipcode, please try again</div></article>`;
        throw Error(res.statusText);
      }
      showIcon('check');
      return res.json()
    })
    .then((data) => {
      // Show location info
      var o = "";
      data.places.forEach(place => {
        o += `
                    <article class="message is-primary">
                      <div class="message-header">
                        <p>Location Info</p>
                        <button class="delete"></button>
                      </div>
                      <div class="message-body">
                        <ul>
                          <li><strong>City: </strong>${place["place name"]}</li>
                          <li><strong>State: </strong>${place["state"]}</li>
                          <li><strong>Longitude: </strong>${place["longitude"]}</li>
                          <li><strong>Latitude: </strong>${place["latitude"]}</li>
                        </ul>
                      </div>
                    </article>
                  `;
      });
      output.innerHTML = o;
    })
    .catch((error) => console.log(error));
}


function showIcon(icon) {
  var check = document.querySelector('.icon-check');
  var remove = document.querySelector('.icon-remove');
  check.style.display = 'none';
  remove.style.display = 'none';
  document.querySelector(`.icon-${icon}`).style.display = 'inline-flex';
}

// Delete location box
function deleteLocation(e) {
  if (e.target.className == "delete") {
    document.querySelector(".message").remove();
    document.querySelector(".zip").value = "";
    document.querySelector(".icon-check").style.display = 'none';
  }
}
