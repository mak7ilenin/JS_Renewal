$(document).ready(function() {
    // Load agents after the page load
    showAgents(agents);
    function checkPosition() {
        let elements = $('.agent');
        let windowHeight = window.innerHeight;
        for (var i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;
        
            if(positionFromTop - windowHeight <= 0) {
                element.classList.remove('hidden');
                element.classList.add('fade-in-element');
                // setTimeout(() => {
                //     element.classList.remove('fade-in-element');
                // }, 1300);
            }
        }
    }
    window.addEventListener('scroll', checkPosition);
    checkPosition();
});

// Categories output
let list = document.createElement('ul');

for (let i = 0; i < categories.length; i++) {
    let category = document.createElement('li');
    category.innerHTML = '<a href="#" onClick="chooseCategory(`' + categories[i] + '`)" >' + categories[i] + '</a>';
    list.appendChild(category);
}
$('header').append(list);

function chooseCategory(category) {
    // Show agents by this role
    let filteredAgents = agents.filter(agent => agent.role === category);
    showAgents(filteredAgents)
}

function showAgents(agents) {
    // Agents information output
    let agent = '';
    let abilities = agents.map(agent => agent.abilities);
    for (let i = 0; i < agents.length; i++) {
        agent += '<div class="agent">'
            agent += '<div class="decoration_line1"></div>'
            agent += '<div class="img_container">'
                agent += '<img src="images/' + agents[i].picture + '" alt="' + agents[i].name + '" />'
            agent += '</div>';
            agent += '<div class="info_container">'
                agent += '<h3>' + agents[i].name + '</h3>';
                agent += '<p>' + agents[i].biography + '</p>';
                agent += '<h4>Abilitites</h4>';
                agent += '<div class="ability">';
                    let ability = abilities[i].map(ability => ability);
                    let abilityInfo = ability.map(ability => ability);
                    for (let j = 0; j < ability.length; j++) {
                        agent += '<p>' + abilityInfo[j].key + ' - ' + abilityInfo[j].name + '</p>';
                        agent += '<p>Description: ' + abilityInfo[j].description + '</p><br>';
                    }
                agent += '</div>';
            agent += '</div>';
        agent += '</div>';
    }
    $('#content').html(agent);
}