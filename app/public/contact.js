const pageContent = {
    navigation: [
        { name: 'Home', link: 'index.html' },
        { name: 'Our Goals', link: 'Goal-9.html', active: true },
        { name: 'Sign Up', link: 'contact.html' },
        { name: 'About Us', link: 'About-us.html' }
    ],
    teamInfo: {
        title: '<a href="About-us.html">Team Information</a>',
        content: 'Our team is dedicated to spreading awareness and driving action towards Sustainable Development Goals 6, 9 and 10.'
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
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

function loadNavigation() {
    const navLinksList = document.getElementById('nav-links');
    navLinksList.innerHTML = '';
    pageContent.navigation.forEach(item => {
        const listItem = document.createElement('li');
        if(item.name === 'Our Goals') {
        
            listItem.className = 'dropdown';
            listItem.innerHTML = `
            <a href="javascript:void(0)" class="dropbtn">Our Goals <span class="arrow-down"></span></a>
                <div class="dropdown-content">
                    <a href="Goal-6.html">Goal 6: Clean Water and Sanitation</a>
                    <a href="Goal-9.html">Goal 9: Industry, Innovation, and Infrastructure</a>
                    <a href="Goal-10.html">Goal 10: Reduced Inequalities</a>
                </div>
            `;
        } else {
            const link = document.createElement('a');
            link.textContent = item.name;
            link.href = item.link;
            listItem.appendChild(link);
        }
        navLinksList.appendChild(listItem);
    });
}
function loadTeamInfo() {
    const teamInfoElement = document.getElementById('team-info');
    teamInfoElement.innerHTML = `
        <h2>${pageContent.teamInfo.title}</h2>
        <p>${pageContent.teamInfo.content}</p>
    `;
}
