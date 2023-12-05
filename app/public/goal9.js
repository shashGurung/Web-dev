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
        text:  `<strong id="KIT">Goal 9: Resilient Infrastructure, Sustainable Industrialization, and Innovation</strong><br><br>

        <strong>Empowering Progress:</strong> Goal 9 is at the heart of achieving economic growth and addressing climate change. It’s about creating infrastructure that stands the test of time, industries that are sustainable for all, and fostering innovations that drive us forward.<br><br>
        
        <strong>Current Landscape:</strong> Before the pandemic hit, global manufacturing was already on a downturn, and the crisis only deepened the impact, revealing vulnerabilities through high inflation, supply chain disruptions, and economic slowdowns. Nevertheless, technological industries have shown promising expansion, especially in Asian Least Developed Countries (LDCs), indicating a path to recovery and growth.<br><br>
        
        <strong>Milestones Achieved:</strong> As of 2022, we've made significant strides. Nearly everyone on the planet is now within the reach of mobile networks, and investments in research and infrastructure have seen an uptick, showing a global commitment to connectivity and innovation.<br><br>
        
        <strong>The Road Ahead:</strong> To meet our 2030 targets, we must amplify our efforts. This means pouring resources into transportation, energy, and technology, especially in LDCs, to bridge the gap and propel sustainable development.<br><br>
        
        <strong>Why It Matters To You:</strong> Industry and innovation are not just economic terms; they affect our daily lives, from the jobs we do to the quality of the air we breathe. Sustainable industrial practices can lift living standards and ensure that our planet remains a viable home for future generations.<br><br>
        
        <strong>The Cost of Inaction:</strong> Ignoring these goals could mean stagnation in global poverty reduction, inadequate health services, poor education, and a deteriorating environment. It's a price too high to pay.<br><br>
        
        <strong>Joining Forces:</strong> We can make a difference by:<br>
        - Setting sustainable standards and regulations.<br>
        - Partnering with NGOs and governments to promote sustainable development.<br>
        - Using our voices and digital platforms to influence policy and prioritize sustainable goals.`,
    
        imageUrl: 'D21.jpg',
        altText: 'Key Information Visual Aid'
    },
    futureTargets: {
        title: 'Future Targets <br>',
        text: `<strong>9.1 Infrastructure for Development:</strong> Commit to building quality, reliable, and sustainable infrastructure that promotes economic development and well-being, with equitable access for everyone.<br><br>

        <strong>9.2 Sustainable Industrialization:</strong> By 2030, aim to significantly increase the industrial sector's contribution to employment and GDP, particularly in the least developed countries, ensuring inclusive and sustainable growth.<br><br>
        
        <strong>9.3 Access to Financial Services:</strong> Enhance the access of small-scale industries to financial services, including affordable credit, and integrate them into value chains and markets, especially in developing countries.<br><br>
        
        <strong>9.4 Sustainable Industry:</strong> By 2030, upgrade infrastructure and industries for sustainability, with improved efficiency and adoption of clean technologies, aligning actions with national capabilities.<br><br>
        
        <strong>9.5 Research and Innovation:</strong> Promote scientific research and technological capabilities in all countries, especially developing ones. By 2030, bolster innovation with more R&D workers and increased spending in both public and private sectors.<br><br>
        
        <strong>9.A Infrastructure Support:</strong> Enhance support for sustainable and resilient infrastructure development in developing countries, focusing on African nations, least developed countries, landlocked states, and small island developing States.<br><br>
        
        <strong>9.B Domestic Technology Development:</strong> Back domestic technology development and innovation in developing countries, ensuring a conducive policy environment for industrial diversification and value addition.<br><br>
        
        <strong>9.C ICT Access:</strong> Dramatically broaden access to information and communications technology, aiming for universal and affordable Internet access in least developed countries by 2020.`,
        imageUrl: 'D21.jpg',
        altText: 'Future Targets Visual Aid',
        targets: []
    },
    teamInfo: {
        title: 'Team Information',
        content: 'Our team is dedicated to spreading awareness and driving action towards Sustainable Development Goals 6, 9 and 10.'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadHeader();
    loadKeyInformation();
    loadFutureTargets();
    loadTeamInfo();
    highlightActiveNav(); // Ensuring this is called on page load

    // Ensure .dropbtn exists in the DOM before attaching event listener
    document.querySelector('.dropbtn').addEventListener('click', function() {
        this.querySelector('.arrow-down').classList.toggle('open');
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
                    <a href="goal6.html">Goal 6: Clean Water and Sanitation</a>
                    <a href="Goal-9.html">Goal 9: Industry, Innovation, and Infrastructure</a>
                    <a href="goal10.html">Goal 10: Reduced Inequalities</a>
                </div>
            `;
        } else {
            const link = document.createElement('a');
            link.textContent = item.name;
            link.href = item.link;
            if (item.active) {
                link.classList.add('active');
            }
            listItem.appendChild(link);
        }
        navLinksList.appendChild(listItem);
    });
}

document.addEventListener('click', function(e) {
    if(e.target.classList.contains('dropbtn')) {
        // Toggle dropdown
        e.target.nextElementSibling.classList.toggle('show');
    } else {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

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

document.querySelector('.dropbtn').addEventListener('click', function() {
    this.querySelector('.arrow-down').classList.toggle('open');
});

function highlightActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    const currentLocation = window.location.pathname; 

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.substring(currentLocation.lastIndexOf('/') + 1)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


document.addEventListener('DOMContentLoaded', highlightActiveNav);
window.addEventListener('hashchange', highlightActiveNav);
