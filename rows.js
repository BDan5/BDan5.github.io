const rows = document.querySelectorAll('.row');
const colors = ['green', 'teal', 'yellow', 'orange', 'orangered', 'red'];


rows.forEach((row, index) => {
  const label = row.querySelector('.label');
  label.style.backgroundColor = colors[index];
})
