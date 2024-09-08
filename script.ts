const toggleButton = document.getElementById('toggleSkills');
const skillsList = document.getElementById('skillsList');

if (toggleButton && skillsList) {
  toggleButton.addEventListener('click', () => {
    if (skillsList.style.display === 'none') {
      skillsList.style.display = 'block';
    } else {
      skillsList.style.display = 'none';
    }
  });
}
