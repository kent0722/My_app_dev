document.addEventListener('DOMContentLoaded', () => {
  const renderComponents = () => {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const showDropdownButton = document.getElementById('showDropdownButton');
    const showDropdownMenu = document.getElementById('showDropdownMenu');
    //header
    dropdownButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });
    //show
    showDropdownButton.addEventListener('click', () => {
      showDropdownMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!showDropdownButton.contains(e.target) && !showDropdownMenu.contains(e.target)) {
        showDropdownMenu.classList.add('hidden');
      }
    });
  };
  document.addEventListener('turbo:load', renderComponents);
});
