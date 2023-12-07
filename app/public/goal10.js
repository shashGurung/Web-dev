const pageContent = {
    navigation: [
        { name: 'Home', link: 'index.html' },
        { name: 'Our Goals', link: 'Goal-9.html', active: true },
        { name: 'Sign Up', link: 'contact.html' },
        { name: 'About Us', link: 'About-us.html' }
    ],
    header: {
        title: 'UN Sustainable Development Goal 10: Reduced Inqualities',
        imageUrl: 'Goal-10-picture1.jpg',
        altText: 'Industry, Innovation, and Infrastructure'
    },
    keyInformation: {
        title: 'Key Information',
        text:  `<strong id="KIT">Goal 10: Reduced Inqualities</strong><br><br>

        <strong>Why do we need to reduce inequalities?:</strong> Inequalities based on income, sex, age, disability, sexual orientation, race, class, ethnicity, religion and opportunity continue to persist across the world. Inequality threatens long-term social and economic development, harms poverty reduction and destroys people’s sense of fulfillment and self-worth. This, in turn, can breed crime, disease and environmental degradation.<br><br>
        
        <strong>What are some examples of inequality?:</strong> Women and children with lack of access to healthcare die each day from preventable diseases such as measles and tuberculosis or in childbirth. Older persons, migrants and refugees face lack of opportunities and discrimination – an issue that affects every country in the world. One in five persons reported being discriminated on at least one ground of discrimination prohibited by international human rights law.<br><br>
        
        <strong>How do we tackle discrimination?:</strong> In today’s world, we are all interconnected. Problems and challenges like poverty, climate change, migration or economic crises are never just confined to one country or region. Even the richest countries still have communities living in abject poverty. The oldest democracies still wrestle with racism, homophobia and transphobia, and religious intolerance. Global inequality affects us all, no matter who we are or where we are from.<br><br>
        
        <strong>The Road Ahead:</strong> Greater efforts are needed to eradicate extreme poverty and hunger, and invest more in health, education, social protection and decent jobs especially for young people, migrants and refugees and other vulnerable communities.<br><br>
        
        <strong>Why It Matters To You:</strong> We cannot achieve sustainable development and make the planet better for all if people are excluded from the chance for a better life.<br><br>
        
        <strong>The Cost of Inaction:</strong> The incomes of the poorest 40 per cent of the population had been growing faster than the national average in most countries. But emerging yet inconclusive evidence suggests that COVID-19 may have put a dent in this positive trend of falling within-country inequality. The pandemic has also caused the largest rise in between-country inequality in three decades.<br><br>
        
        <strong>Joining Forces:</strong> We can make a difference by:<br>
        - Within countries, it is important to empower and promote inclusive social and economic growth. We can ensure equal opportunity and reduce inequalities of income if we eliminate discriminatory laws, policies and practices.<br><br>
        - Among countries, we need to ensure that developing countries are better represented in decision-making on global issues so that solutions can be more effective, credible and accountable.<br><br>
        - Governments and other stakeholders can also promote safe, regular and responsible migration, including through planned and well-managed policies, for the millions of people who have left their homes seeking better lives due to war, discrimination, poverty, lack of opportunity and other drivers of migration.`,
    
        imageUrl: 'Goal-10-picture2.png',
        altText: 'Key Information Visual Aid'
    },
    futureTargets: {
        title: 'Future Targets <br>',
        text: `<strong>10.1</strong> By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average<br><br>

        <strong>10.2</strong> By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status<br><br>
        
        <strong>10.3</strong> Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard<br><br>
        
        <strong>10.4</strong> Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality<br><br>
        
        <strong>10.5</strong> Improve the regulation and monitoring of global financial markets and institutions and strengthen the implementation of such regulations<br><br>
        
        <strong>10.6</strong> Ensure enhanced representation and voice for developing countries in decision-making in global international economic and financial institutions in order to deliver more effective, credible, accountable and legitimate institutions<br><br>
        
        <strong>10.7</strong> Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies<br><br>

        <strong>10.A</strong> Implement the principle of special and differential treatment for developing countries, in particular least developed countries, in accordance with World Trade Organization agreements<br><br>
        
        <strong>10.B</strong> Encourage official development assistance and financial flows, including foreign direct investment, to States where the need is greatest, in particular least developed countries, African countries, small island developing States and landlocked developing countries, in accordance with their national plans and programmes<br><br>

        <strong>10.C</strong> By 2030, reduce to less than 3 per cent the transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5 per cent`,
        imageUrl: 'Goal-10-picture3.jpg',
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