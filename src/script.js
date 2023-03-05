// const searchButton = document.getElementById('place');
const inputField = document.getElementById('search-input');
inputField.addEventListener('input', () => {
  
  const lower_input = inputField.value.toLowerCase();
  const tiles = document.querySelectorAll('.tile');

  // console.log(tiles);
  tiles.forEach(tile => {
    const name = tile.textContent.toLowerCase();
    // console.log(name);
    const description = tile.querySelector('.description').textContent.toLowerCase();
    if (name.includes(lower_input) || description.includes(lower_input)) {
      tile.style.opacity = 1;
      tile.querySelectorAll('button').forEach(button => {
        button.disabled = false;
      });
    } else {
      tile.style.opacity = 0.5;
      tile.querySelectorAll('button').forEach(button => {
        button.disabled = true;
      });
      const socials = document.querySelectorAll('.socialmedialogo');
        socials.forEach(social => {
          social.addEventListener('click', (event) => {
          event.preventDefault();
        }); 
      });
    }
  });
});




const filterBtn = document.getElementById('filter-btn');

const filterDropdown = document.getElementById('filter-dropdown');

filterBtn.addEventListener('click', function() {
  if (filterDropdown.style.display === 'block') {
    filterDropdown.style.display = 'none';
    
  } else {
    filterDropdown.style.display = 'block';
  }
});

filterDropdown.addEventListener('click', (e) => {
  const filter = e.target;
  if (filter.tagName === 'A') {

    const category = filter.dataset.category;
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => {
      console.log(typeof tile.dataset.categories);
      // const categories = typeof tile.dataset.categories === 'string' 
      //                    ? tile.dataset.categories.spilt(',') 
      //                    : "";
      const checkCategories = tile.dataset.categories;
      const categories = checkCategories && checkCategories.split(',') || [];
      if (categories.includes(category)) {
        tile.style.opacity = 1;
        tile.querySelectorAll('button').forEach(button => {
          button.disabled = false;
        });
      } else {
        tile.style.opacity = 0.5;
        tile.querySelectorAll('button').forEach(button => {
          button.disabled = true;
        });
        const socials = document.querySelectorAll('.socialmedialogo');
        socials.forEach(social => {
                social.addEventListener('click', (event) => {
                  event.preventDefault();
                }); });
      }
    });
  }
});

