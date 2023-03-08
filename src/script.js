// const searchButton = document.getElementById('place');
const inputField = document.getElementById('search-input');
inputField.addEventListener('input', () => {
  
  const lower_input = inputField.value.toLowerCase();
  const tiles = document.querySelectorAll('.tile');

  // console.log(tiles);
  tiles.forEach(tile => {
    const name = tile.querySelector('.club-name').textContent.toLowerCase();
    // console.log(name);
    const description = tile.querySelector('.description').textContent.toLowerCase();
    if (name.includes(lower_input) || description.includes(lower_input)) {
      // tile.style.opacity = 1;
      // tile.querySelectorAll('button').forEach(button => {
      //   button.disabled = false;
      // });
      tile.style.display = 'block';
    } else {
      // tile.style.opacity = 0.5;
      // tile.querySelectorAll('button').forEach(button => {
      //   button.disabled = true;
      // });
      // const socials = document.querySelectorAll('.socialmedialogo');
      //   socials.forEach(social => {
      //     social.addEventListener('click', (event) => {
      //     event.preventDefault();
      //   }); 
      // });
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
  if (filterDropdown.style.display === 'block') {
    filterDropdown.style.display = 'none';
    
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
  const filter = e.target;
  e.stopPropagation();
  if (e.target.checked) {
    selected.push(e.target.dataset.category);
    console.log(selected);
  } 
  else {
    selected.pop(e.target.dataset.category);
    console.log(selected);
  }

  for (var s in selected){
    // if (filter.tagName === 'A') {
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => {
      console.log(typeof tile.dataset.categories);
      const checkCategories = tile.dataset.categories;
      const categories = checkCategories && checkCategories.split(',') || [];
      if (categories.includes(selected[s])) {
        tile.style.display = 'block';
      } else {
        tile.style.display = 'none';
      }
    });
    // }
  }
}




// filterDropdown.addEventListener('click', (e) => {
//   const filter = e.target;
//   if (filter.tagName === 'A') {

//     const category = filter.dataset.category;
//     const tiles = document.querySelectorAll('.tile');

//     tiles.forEach(tile => {
//       console.log(typeof tile.dataset.categories);
//       // const categories = typeof tile.dataset.categories === 'string' 
//       //                    ? tile.dataset.categories.spilt(',') 
//       //                    : "";
//       const checkCategories = tile.dataset.categories;
//       const categories = checkCategories && checkCategories.split(',') || [];
//       if (categories.includes(category)) {
//         // tile.style.opacity = 1;
//         // tile.querySelectorAll('button').forEach(button => {
//         //   button.disabled = false;
//         // });
//         tile.style.display = 'block';
//       } else {
//         // tile.style.opacity = 0.5;
//         // tile.querySelectorAll('button').forEach(button => {
//         //   button.disabled = true;
//         // });
//         // const socials = document.querySelectorAll('.socialmedialogo');
//         // socials.forEach(social => {
//         //   social.addEventListener('click', (event) => {
//         //  event.preventDefault();
//         //  }); 
//         // });
//         tile.style.display = 'none';
//       }
//     });
//   }
// });


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


function activateDropdown() {
  var x = document.getElementById("dark-box");
  event.stopPropagation()
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.getElementById("filter-btn").zIndex = 100;
}

function removeDarkOverlay() {
  var x = document.getElementById("dark-box");
  
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("filter-btn").zIndex = 1;
    document.getElementById("filter-dropdown").style.display = "none";
  }
  
}

document.querySelector('#filter-btn').addEventListener('click', activateDropdown);

document.body.addEventListener('click', removeDarkOverlay);