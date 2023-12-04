const pageContent = {
    navigation: [
        { name: 'Home', link: 'index.html' },
        { name: 'Our Goals', link: 'Goal-9.html', active: true },
        { name: 'Sign Up', link: 'signup.html' },
        { name: 'About Us', link: 'About-us.html' }
    ],
    header: {
        title: 'UN Sustainable Development Goal 9: Industry, Innovation, and Infrastructure',
        imageUrl: 'H21.jpg',
        altText: 'Industry, Innovation, and Infrastructure'
    },
    keyInformation: {
        title: 'Key Information',
        text: 'Goal 9 encompasses building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation.',
        imageUrl: 'D21.jpg',
        altText: 'Key Information Visual Aid'
    },
    futureTargets: {
        title: 'Future Targets',
        text: 'Targets for Sustainable Development Goal 9 include:',
        imageUrl: 'D21.jpg',
        altText: 'Future Targets Visual Aid',
        targets: [
            'Develop quality, reliable, sustainable and resilient infrastructure.',
            'Promote inclusive and sustainable industrialization.',
            'Increase access to financial services and markets.'
        ]
    },
    teamInfo: {
        title: 'Team Information',
        content: 'Our team is dedicated to spreading awareness and driving action towards Sustainable Development Goal 9.'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadHeader();
    loadKeyInformation();
    loadFutureTargets();
    loadTeamInfo();
    highlightActiveNav(); // Ensuring this is called on page load
});

function loadNavigation() {
    const navLinksList = document.getElementById('nav-links');
    navLinksList.innerHTML = '';
    pageContent.navigation.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = item.name;
        link.href = item.link;
        if (item.active) {
            link.classList.add('active');
        }
        listItem.appendChild(link);
        navLinksList.appendChild(listItem);
    });
}

function loadHeader() {
    const headerElement = document.getElementById('main-header');
    headerElement.innerHTML = `
        <img src="${pageContent.header.imageUrl}" alt="${pageContent.header.altText}">
        <h1>${pageContent.header.title}</h1>
    `;
}

function loadKeyInformation() {
    const keyInfoElement = document.getElementById('key-information');
    keyInfoElement.innerHTML = `
        <p>${pageContent.keyInformation.text}</p>
        <img src="${pageContent.keyInformation.imageUrl}" alt="${pageContent.keyInformation.altText}" />
    `;
}

function loadFutureTargets() {
    const futureTargetsElement = document.getElementById('future-targets');
    futureTargetsElement.innerHTML = `
        <img src="${pageContent.futureTargets.imageUrl}" alt="${pageContent.futureTargets.altText}" />
        <div>
            <h2>${pageContent.futureTargets.title}</h2>
            <p>${pageContent.futureTargets.text}</p>
            <ul>
                ${pageContent.futureTargets.targets.map(target => `<li>${target}</li>`).join('')}
            </ul>
        </div>
    `;
}

function loadTeamInfo() {
    const teamInfoElement = document.getElementById('team-info');
    teamInfoElement.innerHTML = `
        <h2>${pageContent.teamInfo.title}</h2>
        <p>${pageContent.teamInfo.content}</p>
    `;
}

function highlightActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    const currentLocation = window.location.pathname; // Changed from hash to pathname for better accuracy

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.substring(currentLocation.lastIndexOf('/') + 1)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call highlightActiveNav on page load and when the URL hash changes
document.addEventListener('DOMContentLoaded', highlightActiveNav);
window.addEventListener('hashchange', highlightActiveNav);
