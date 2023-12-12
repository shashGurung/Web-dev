const pageContent = {
    navigation: [
        { name: 'Home', link: 'index.html' },
        { name: 'Our Goals', link: 'Goal-9.html'},
        { name: 'Sign Up', link: 'contact.html', active: true  },
        { name: 'About Us', link: 'About-us.html' }
    ],
    teamInfo: {
        title: '<a href="About-us.html">Team Information</a>',
        content: 'Our team is dedicated to spreading awareness and driving action towards Sustainable Development Goals 6, 9 and 10.'
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadTeamInfo();
    
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown on button click
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', function(event) {
            dropdownContent.classList.toggle('show');
            event.stopPropagation();
        });
    }

    // Close the dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (dropdownBtn && !dropdownBtn.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

function loadTeamInfo() {
    const teamInfoElement = document.getElementById('team-info');
    teamInfoElement.innerHTML = `
        <h2>${pageContent.teamInfo.title}</h2>
        <p>${pageContent.teamInfo.content}</p>
    `;
}
