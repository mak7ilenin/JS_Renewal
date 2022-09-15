// Agents information output
function showAgents(agents) {
    let agent = '<h2>Valorant Agents</h2>';
    let abilities = agents.map(agent => agent.abilities);
    for (let i = 0; i < agents.length; i++) {
        agent += '<div class="agent">'
            agent += '<div class="decoration_line1"></div>'
            agent += '<div class="img_container">'
                agent += '<a data-title="Agent" data-lightbox="image" href="images/' + agents[i].picture + '"><img src="images/' + agents[i].picture + '" alt="' + agents[i].name + '" /></a>'
            agent += '</div>';
            agent += '<div class="info_container">'
                agent += '<h3>' + agents[i].name + '</h3>';
                agent += '<p class="agent_role">' + agents[i].role + '</p>'
                agent += '<p>' + agents[i].biography + '</p>';
                agent += '<div class="ability_container">';
                    agent += '<h4>Abilitites</h4>';
                    agent += '<div class="ability_arrow"><img src="images/components/pngwing.com.png" class="arrow"></div>';
                agent += '</div>';
                agent += '<div class="abilities_container">';
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

// Show agents by this role
function chooseCategory(category) {
    let filteredAgents = agents.filter(agent => agent.role === category);
    showAgents(filteredAgents)
}

$(document).ready(function() {
    // Load agents after the page load
    showAgents(agents);
    
    // Check every agent container position to animate
    function checkPosition() {
        let elements = $('.agent');
        let windowHeight = window.innerHeight;
        for (var i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;
            
            if(positionFromTop - windowHeight <= 0) {
                element.classList.remove('hidden');
                element.classList.add('fade-in-element');
            }
        }
    }
    window.addEventListener('scroll', checkPosition);
    checkPosition();

    // Abilities dropdown
    $('.abilities_container').slideUp(10);
    $('.ability_container').click(function() {
        $(this).next().slideToggle(400, 'swing');
        const prev = $(this).prev();
        const arrow = prev.prev().next().next().children().children();
        arrow.toggleClass('arrow-up');
    });

    // Categories output
    let list = document.createElement('ul');
    for (let i = 0; i < categories.length; i++) {
        let category = document.createElement('li');
        category.innerHTML = '<a href="#" onClick="chooseCategory(`' + categories[i] + '`)" >' + categories[i] + '</a>';
        list.appendChild(category);
    }
    $('header').append(list);

});