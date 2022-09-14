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
let agentContainer = document.createElement('div');
let agent = '';

for (let i = 0; i < agents.length; i++) {
    agent += '<div class="img_container">'
        agent += '<img src="images/' + agents[i].picture + '" alt="' + agents[i].name + '" />'
    agent += '</div>';
    agent += '<div class="info_container">'
        agent += '<h3>' + agents[i].name + '</h3>';
        agent += '<p>' + agents[i].biography + '</p>';
        agent += '<h4>Abilitites</h4>';
        agent += '<div class="ability">';
        let ability = agents.find(agent => agent.abilities);
        console.log(ability);
            agent += '<p>Key: ' + ability[i].key + '</p>';
            agent += '<p>Name: ' + ability[i].name + '</p>';
            agent += '<p>Key: ' + ability[i].description + '</p>';
        agent += '</div>';
}
agentContainer.innerHTML = agent;
document.getElementById('content').appendChild(agentContainer);