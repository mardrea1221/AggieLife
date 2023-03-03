const searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', () => {
  const input = document.querySelector('#search-input');
  const lower_input = input.value.toLowerCase();
  const tiles = document.querySelectorAll('.tile');

  // console.log(tiles);
  tiles.forEach(tile => {
    const name = tile.textContent.toLowerCase();
    // console.log(name);
    const description = tile.querySelector('.description').textContent.toLowerCase();
    if (name.includes(lower_input) || description.includes(lower_input)) {
      tile.style.display = 'block';
    } else {
      tile.style.display = 'none';
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
      // console.log(typeof tile.dataset.categories);
      const categories = typeof tile.dataset.categories === 'string' 
                         ? tile.dataset.categories.spilt(',') 
                         : "";
      if (categories.includes(category)) {
        tile.style.display = 'block';
      } else {
        tile.style.display = 'none';
      }
    });
  }
});

