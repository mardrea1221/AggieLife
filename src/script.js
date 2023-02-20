const filterBtn = document.getElementById('filter-btn');

const filterDropdown = document.getElementById('filter-dropdown');

filterBtn.addEventListener('click', function() {
  console.log("hi")
  if (filterDropdown.style.display === 'block') {
    filterDropdown.style.display = 'none';
    
  } else {
    filterDropdown.style.display = 'block';
  }
});