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
    },
    pictures: [
        {picture: 'Homepage-main.png'},
        {picture: 'Homepage-goal6.png'},
        {picture: 'homepage-goal9.png'},
        {picture: 'Homepage-goal10.png'}
    ]
}

document.addEventListener('DOMContentLoaded', function() {
    loadTeamInfo();
    loadImages();
    
    document.querySelector('.dropbtn').addEventListener('click', function() {
        this.querySelector('.arrow-down').classList.toggle('open');
    });
    document.querySelector('#goallinks').addEventListener('click', clickHandler)
});


function loadTeamInfo() {
    const teamInfoElement = document.getElementById('team-info');
    teamInfoElement.innerHTML = `
        <h2>${pageContent.teamInfo.title}</h2>
        <p>${pageContent.teamInfo.content}</p>
    `;
}

function loadImages() {
    document.querySelector('#picture1').src = pageContent.pictures[0].picture
    document.querySelector('#picture2').src = pageContent.pictures[1].picture
    document.querySelector('#picture3').src = pageContent.pictures[2].picture
    document.querySelector('#picture4').src = pageContent.pictures[3].picture
}
function clickHandler(e) {
    console.log(e.currentTarget)
    console.log(e.target)
    if (e.currentTarget != e.target){
        const targetID = e.target.id;
        if (targetID == "picture2")
        {
            window.location = 'Goal-6.html'
        }
        else if (targetID == "picture3")
        {
            window.location = 'Goal-9.html'
        }
        else if(targetID == "picture4")
        {
            window.location = 'Goal-10.html'
        }
    } 
}

