const pageContent = {
    navigation: [
        { name: 'Home', link: 'index.html' },
        { name: 'Our Goals', link: 'Goal-6.html',},
        { name: 'Sign Up', link: 'contact.html' },
        { name: 'About Us', link: 'About-us.html' }
    ],
    header: {
        title: 'UN Sustainable Development Goal 6: Clean water and Sanitation',
        imageUrl: 'goal6-img4.jpg', 
        altText: 'Ensure access to water and sanitation for all'
    },
    keyInformation: {
        title: 'Key Information',
        text:  `<strong id="KIT">Goal 6: Clean Water and Sanitation</strong><br><br>

        <strong>Why?:</strong> Access to water, sanitation and hygiene is a human right. To get back on track, key strategies include increasing sector-wide investment and capacity-building, promoting innovation and evidence-based action, enhancing cross-sectoral coordination and cooperation among all stakeholders, and adopting a more integrated and holistic approach to water management. Water is essential not only to health, but also to poverty reduction, food security, peace and human rights, ecosystems and education. Nevertheless, countries face growing challenges linked to water scarcity, water pollution, degraded water-related ecosystems and cooperation over transboundary water basins.<br><br>
        
        <strong>What are the challenges?:</strong> In 2022, 2.2 billion people still lacked safely managed drinking water, including 703 million without a basic water service; 3.5 billion people lacked safely managed sanitation, including 1.5 billion without basic sanitation services; and 2 billion lacked a basic handwashing facility, including 653 million with no handwashing facility at all. By managing our water sustainably, we are also able to better manage our production of food and energy and contribute to decent work and economic growth. Moreover, we can preserve our water ecosystems, their biodiversity, and take action on climate change.<br><br>
        
        <strong>Are water and climate change linked?:</strong> Water availability is becoming less predictable in many places. In some regions, droughts are exacerbating water scarcity and thereby negatively impacting people’s health and productivity and threatening sustainable development and biodiversity worldwide. Ensuring that everyone has access to sustainable water and sanitation services is a critical climate change mitigation strategy for the years ahead. Without better infrastructure and management, millions of people will continue to die every year from water-related diseases such as malaria and diarrhoea, and there will be further losses in biodiversity and ecosystem resilience, undermining prosperity and efforts towards a more sustainable<br><br>
        
        <strong>Joining Forces:</strong> We can make a difference by:<br>
        - Civil society organizations should work to keep governments accountable, invest in water research and development, and promote the inclusion of women, youth and indigenous communities in water resources governance.<br>
        - Generating awareness of these roles and turn- ing them into action will lead to win-win results and increased sustainability and integrity for both human and ecological systems.<br>
        - You can also get involved in the World Water Day and World Toilet Day campaigns that aim to provide information and inspiration to take action on hygiene issues.`,
    
        imageUrl: 'goal6-img1.png', 
        altText: 'Key Information Visual Aid'
    },
    futureTargets: {
        title: 'Future Targets <br>',
        text: `<strong>6.1 By 2030: </strong>achieve universal and equitable access to safe and affordable drinking water for all.<br><br>
        
        <strong>6.2 By 2030: </strong>achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations.<br><br>
        
        <strong>6.3 By 2030: </strong>improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally.<br><br>
        
        <strong>6.4 By 2030: </strong>substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity.<br><br>

        <strong>6.5 By 2030: </strong> implement integrated water resources management at all levels, including through transboundary cooperation as appropriate.<br><br>

        <strong>6.6 By 2020: </strong>protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes.<br><br>

        <strong>6.A By 2030: </strong>expand international cooperation and capacity-building support to developing countries in water- and sanitation-related activities and programmes, including water harvesting, desalination, water efficiency, wastewater treatment, recycling and reuse technologies.<br><br>
    
        <strong>6.B Support and strengthen: </strong> the participation of local communities in improving water and sanitation management.`,

        imageUrl: 'Goal-6-img3.png',
        altText: 'Future Targets Visual Aid', 
        targets: []
    },
    teamInfo: {
        title: '<a href="About-us.html">Team Information</a>',
        content: 'Our team is dedicated to spreading awareness and driving action towards Sustainable Development Goals 6, 9 and 10.'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadHeader();
    loadKeyInformation();
    loadFutureTargets();
    loadTeamInfo();
    highlightActiveNav(); 

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


document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown on button click
    dropdownBtn.addEventListener('click', function(event) {
        dropdownContent.classList.toggle('show');
        event.stopPropagation();
    });

    // Close the dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (!dropdownBtn.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

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
    const currentLocation = window.location.pathname; 

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.substring(currentLocation.lastIndexOf('/') + 1)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('hashchange', highlightActiveNav);