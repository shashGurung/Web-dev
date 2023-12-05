const aboutPageContent = {
    header: {
        title: 'About Us',
        imageUrl: 'asd1.jpeg',
        altText: 'Our Team'
    },
    intro: {
        content: 'Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...Short brief about our website goal...'
       
    },
    team: [
        {
            photoUrl: 'team-p2.jpg', 
            name: 'Ahmed',
            bio: 'Short bio of the member.',
            role: 'Project Manager',
            responsibilities: ['Project planning', 'Team management'],
            contributions: 'Led the development of the website.'
            
        },
        {
            photoUrl: 'team-p2.jpg', 
            name: 'Simon',
            bio: 'Short bio of the member.',
            role: 'Project Manager',
            responsibilities: ['Project planning', 'Team management'],
            contributions: 'Led the development of the website.'
            
        },{
            photoUrl: 'Shash-in.png', 
            name: 'Shash',
            bio: 'Short bio of the member.',
            role: 'Project Manager',
            responsibilities: ['Project planning', 'Team management'],
            adsadad:'asdasddadadasasd',
            contributions: 'Led the development of the website.'
            
        }
        
        
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadIntro();
    loadTeamInformation();
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

function loadTeamInformation() {
    const teamElement = document.getElementById('team-information');
    aboutPageContent.team.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.innerHTML = `
            <img src="${member.photoUrl}" alt="Photo of ${member.name}">
            <h2>${member.name}</h2>
            <p>${member.bio}</p>
            <p><strong>Role:</strong> ${member.role}</p>
            <ul>
                ${member.responsibilities.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p><strong>Contributions:</strong> ${member.contributions}</p>
            <p><strong>Contributions:</strong> ${member.adsadad}</p>
        `;
        teamElement.appendChild(memberElement);
    });
}
