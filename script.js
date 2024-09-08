var toggleButton = document.getElementById('toggleSkills');
var skillsList = document.getElementById('skillsList');
if (toggleButton && skillsList) {
    toggleButton.addEventListener('click', function () {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
        }
        else {
            skillsList.style.display = 'none';
        }
    });
}
