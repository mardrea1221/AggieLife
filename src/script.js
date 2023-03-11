/* Search Functionality */
const inputField = document.getElementById('search-input');
inputField.addEventListener('input', () => {
  
  const lower_input = inputField.value.toLowerCase();
  const tiles = document.querySelectorAll('.tile');

  tiles.forEach(tile => {
    const name = tile.querySelector('.club-name').textContent.toLowerCase();
    const description = tile.querySelector('.description').textContent.toLowerCase();
    if (name.includes(lower_input) || description.includes(lower_input)) {
      tile.style.display = 'block';
    } else {
      tile.style.display = 'none';
    }
  });
});

// Copy of InputField Listener - For Using the Microphone
function input_copy(input){
  const lower_input = input.toLowerCase();
  const tiles = document.querySelectorAll('.tile');

  tiles.forEach(tile => {
    const name = tile.querySelector('.club-name').textContent.toLowerCase();
    const description = tile.querySelector('.description').textContent.toLowerCase();
    if (name.includes(lower_input) || description.includes(lower_input)) {
      tile.style.display = 'block';
    } else {
      tile.style.display = 'none';
    }
  });

}


/* Filter Functionality */
const filterBtn = document.getElementById('filter-btn');
const filterDropdown = document.getElementById('filter-dropdown');

filterBtn.addEventListener('click', function() {
  filterBtn.style.borderRadius = "30px 30px 0px 0px";
  if (filterDropdown.style.display === 'block') {
    filterDropdown.style.display = 'none';
    filterBtn.style.borderRadius = "30px 30px 30px 30px";
    
  } else {
    filterDropdown.style.display = 'block';
  }
});

const checked_boxes = document.querySelectorAll('input[type="checkbox"]');
var selected = [];
for (var i = 0; i < checked_boxes.length; i++) {
  checked_boxes[i].addEventListener("click", displayCheck);
}
function displayCheck(e) {
  e.stopPropagation();
  if (e.target.checked) {
    selected.push(e.target.dataset.category);
    console.log(selected);
  } 
  else {
    selected.pop(e.target.dataset.category);
    console.log(selected);
  }
  const tiles = document.querySelectorAll('.tile');
  if (selected.length >= 1){
      for (var i = 0; i < tiles.length; i++) {
        if (selected.includes(tiles[i].dataset.categories)){
          tiles[i].style.display = 'block';
        }
        else{
          tiles[i].style.display = 'none';
        }
    }
  }
  else{
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].style.display = 'block';
      }
    }
}


function activateDarkOverlay_filter() {
  var x = document.getElementById("dark-box");
  if (x.style.display === "none") {
    document.getElementById("filter-btn").style.zIndex = "3";
    document.getElementById("filter-dropdown").style.zIndex = "3";
    document.getElementById("accessibility-btn").style.zIndex = "1";
    document.getElementById("access-dropdown").style.zIndex = "1";
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function activateDarkOverlay_accessibility() {
  var x = document.getElementById("dark-box");
  
  if (x.style.display === "none") {
    document.getElementById("filter-btn").style.zIndex = "1";
    document.getElementById("filter-dropdown").style.zIndex = "1";
    document.getElementById("accessibility-btn").style.zIndex = "3";
    document.getElementById("access-dropdown").style.zIndex = "3";
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function removeDarkOverlay() {
  var x = document.getElementById("dark-box");
  
  if (x.style.display === "block") {
    x.style.display = "none";

    document.getElementById("accessibility-btn").style.zIndex = "1";
    document.getElementById("access-dropdown").style.zIndex = "1";
    document.getElementById("filter-btn").style.zIndex = "1";
    document.getElementById("filter-dropdown").style.zIndex = "1";

    document.getElementById("filter-dropdown").style.display = "none";
    document.getElementById("access-dropdown").style.display = "none";

    document.getElementById('filter-btn').style.borderRadius = "30px 30px 30px 30px";
    document.getElementById('accessibility-btn').style.borderRadius = "30px 30px 30px 30px";
  }
}

document.querySelector('#filter-btn').addEventListener('click', activateDarkOverlay_filter);
document.querySelector('#accessibility-btn').addEventListener('click', activateDarkOverlay_accessibility);
document.querySelector('#dark-box').addEventListener('click', removeDarkOverlay);

// document.body.addEventListener('click', removeDarkOverlay);


  

/* Microphone Functionality*/ 
const microphone = document.getElementById('mic');
microphone.addEventListener('click', function() {
  var recog = new webkitSpeechRecognition();
  recog.lang = "en-GB";

  recog.onresult = function(e){
    console.log(e);
    document.getElementById('search-input').value = e.results[0][0].transcript;
    const cur_input = document.getElementById('search-input').value;
    input_copy(cur_input);
  }

  recog.start();

});


/* Accessibility Functionality */
const accessBtn = document.getElementById('accessibility-btn');
const accessDropdown = document.getElementById('access-dropdown');
accessBtn.addEventListener('click', function() {
  accessBtn.style.borderRadius = "30px 30px 0px 0px";
  if (accessDropdown.style.display === 'block') {
    accessDropdown.style.display = 'none';
    accessBtn.style.borderRadius = "30px 30px 30px 30px";
    
  } else {
    accessDropdown.style.display = 'block';
    accessDropdown.style.borderRadius = "0px 0px 30px 30px";
  }
});





