
document.getElementById('city-filter').addEventListener('input', function() {
    const filterValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#cities-table tbody tr');
    
    rows.forEach(row => {
        const cityName = row.cells[1].textContent.toLowerCase();
        if (cityName.includes(filterValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});


document.getElementById('menu-filter').addEventListener('input', function() {
    const filterValue = this.value.toLowerCase();
    const select = document.getElementById('city-select');
    const options = select.options;
    
    for (let i = 0; i < options.length; i++) {
        const optionText = options[i].text.toLowerCase();
        if (optionText.includes(filterValue)) {
            options[i].style.display = '';
        } else {
            options[i].style.display = 'none';
        }
    }
});


document.getElementById('menu-filter').addEventListener('blur', function() {
    if (this.value === '') {
        const options = document.getElementById('city-select').options;
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = '';
        }
    }
});


document.getElementById('city-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const selectedCity = document.getElementById('city-select');
    const selectedValue = selectedCity.options[selectedCity.selectedIndex].text;
    
    alert(`Vybrané město: ${selectedValue}`);
    
});


document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});