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
    $('footer').show();
    let filteredAgents = agents.filter(agent => agent.role === category);
    showAgents(filteredAgents)
    checkPosition();
    $('.ability_container').click(function() {
        $(this).next().slideToggle(400, 'swing');
        const prev = $(this).prev();
        const arrow = prev.prev().next().next().children().children();
        arrow.toggleClass('arrow-up');
    });
}

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
$(window).scroll(checkPosition);
checkPosition();

function mainPage() {
    let content = '';
    content += '<div class="main_heading"><div class="main_img"><img src="images/components/valorant-logo.png"></div><h1>Valorant</h1></div>';
    content += '<div class="main_text"><p>Valorant (stylized as VALORANT) is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by an official release on June 2, 2020. The development of the game started in 2014. Valorant takes inspiration from the Counter-Strike series of tactical shooters, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving.</p></div>';
    content += '<div class="about_agents">'
        content += '<img src="images/VALORANT-Agents-thumbnail.jpg">'
        content += '<p>There are a large variety of playable agents available in the game. Agents are divided into 4 roles: Duelists, Sentinels, Initiators, and Controllers. Each agent has a different role which indicates how the agent is usually played.</p>'
    content += '</div>';
    $('#content').html(content);
    $('footer').hide();
}

$(document).ready(function() {
    // Load agents after the page load
    showAgents(agents);
    checkPosition();

    // Abilities dropdown
    $('.ability_container').click(function() {
        $(this).next().slideToggle(400, 'swing');
        const prev = $(this).prev();
        const arrow = prev.prev().next().next().children().children();
        arrow.toggleClass('arrow-up');
    });

    // Categories output
    let list = document.createElement('ul');
    let linksList = document.createElement('ul');
    let logo = '<a onclick="mainPage()" class="logo_container"><img src="images/components/white-riot-logo.png"></a>';
    for (let i = 0; i < categories.length; i++) {
        let category = document.createElement('li');
        let links = document.createElement('li');
        let linksString = '<a href="#" onClick="chooseCategory(`' + categories[i] + '`)" >' + categories[i] + '</a>';
        category.innerHTML += linksString;
        links.innerHTML += linksString;
        list.append(category);
        linksList.append(links);
    }
    $('header').append(logo, list);
    $('.links').append(linksList);
});