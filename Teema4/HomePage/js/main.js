// Categories output
let list = document.createElement('ul');
let category = ''

for (let i = 0; i < categories.length; i++) {
    category = document.createElement('li');
    category.innerHTML = categories[i];
    list.appendChild(category);
}
document.getElementById('content').appendChild(list);

// Agents information output
let agent = '';
let abilities = agents.map(agent => agent.abilities);

for (let i = 0; i < agents.length; i++) {
    agent += '<div class="agent">'
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
                    agent += '<p>Key: ' + abilityInfo[j].key + '</p>';
                    agent += '<p>Name: ' + abilityInfo[j].name + '</p>';
                    agent += '<p>Description: ' + abilityInfo[j].description + '</p><br>';
                }
            agent += '</div>';
        agent += '</div>';
    agent += '</div>';
}
document.getElementById('content').innerHTML += agent;