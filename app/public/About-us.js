const aboutPageContent = {
    navigation: [
        { name: 'Home', link: 'index.html' },
        { name: 'Our Goals', link: 'Goal-9.html' },
        { name: 'Sign Up', link: 'contact.html' },
        { name: 'About Us', link: 'About-us.html', active: true }
    ],
    header: {
        title: 'About Us',
        imageUrl: 'asd1.jpeg',
        altText: 'Our Team'
    },
    intro: {
        content: `
        The Sustainable Development Goals (SDGs) are a critical framework for building a sustainable and prosperous future for all, addressing global challenges such as poverty, inequality, climate change, environmental degradation, and peace and justice. Our website focuses on advocating for Goals 6, 9, and 10 of the SDGs, each playing an interconnected role in sustainable development. Goal 6 emphasizes the importance of clean water and sanitation, Goal 9 aims to foster resilient infrastructure, sustainable industrialization, and innovation, and Goal 10 focuses on reducing inequalities. We believe that achieving these goals by 2030 is essential to ensure no one is left behind in our journey towards a better world. Our platform aims to raise awareness, educate, and inspire action towards these goals, contributing to a global movement for a sustainable future.`
       
    },
    team: [
        {
            photoUrl: 'Ahmed-pc.png', 
            name: 'Ahmed Almaneai',
            // bio: 'Short bio of the member.',
            Email:'ahmed.almaneai@uea.ac.uk',
            contributions: 'The developer and the designer of the "Goal 9: Industry, Innovation, and Infrastructure" and "About Us" pages, also wrote the HTML, CSS, and Javascript codes for these two pages.'
            
        },
        {
            photoUrl: 'Simon-pi.png', 
            name: 'Simon Hagan',
            // bio: 'Short bio of the member.',
            Email:'s.hagan@uea.ac.uk',
            contributions: 'The developer and the designer of the "Goal 10: Reduced Inequalities" and "Sign Up" pages, also wrote the HTML, CSS, and Javascript codes for these two pages.'
            
        },{
            photoUrl: 'Shash-in.png', 
            name: 'Shash Gurng',
            // bio: 'Short bio of the member.',
            Email:'shash.gurung@uea.ac.uk',
            contributions: 'The developer and the designer of the "Goal 6: Clean Water and Sanitation" and "Home" pages, also wrote the HTML, CSS, and Javascript codes for these two pages.'
            
        }
        
        
    ],
    teamInfo: {
        title: 'Team Information',
        content: 'Our team is dedicated to spreading awareness and driving action towards Sustainable Development Goals 6, 9 and 10.'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadIntro();
    loadTeamInformation();
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


function loadHeader() {
    const headerElement = document.getElementById('about-header');
    headerElement.style.backgroundImage = `url('${aboutPageContent.header.imageUrl}')`;
    headerElement.innerHTML = `<h1>${aboutPageContent.header.title}</h1>`;
}

function loadIntro() {
    const introElement = document.getElementById('about-intro');
    introElement.textContent = aboutPageContent.intro.content;
}

function loadTeamInfo() {
    const teamInfoElement = document.getElementById('team1-info');
    teamInfoElement.innerHTML = `
        <h2>${aboutPageContent.teamInfo.title}</h2>
        <p>${aboutPageContent.teamInfo.content}</p>
    `;
}

function loadTeamInformation() {
    const teamElement = document.getElementById('team-information');
    aboutPageContent.team.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.innerHTML = `
            <img src="${member.photoUrl}" alt="Photo of ${member.name}">
            <h2>${member.name}</h2>
            <p><strong>Contributions and responsibilities :</strong> ${member.contributions}</p>
            <p><strong>Email:</strong> ${member.Email}</p>
        `;
        teamElement.appendChild(memberElement);
    });
}


