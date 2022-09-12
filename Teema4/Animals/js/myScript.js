$(document).ready(function() {
    console.log(category)
    console.log(animals)
    for (let i = 0; i < category.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = ('<a href="#" onClick="myContent(`' + category[i] + '`)" >' + category[i] + '</a>');
        document.getElementById('menu').appendChild(li);
    }
});
function myContent(val) {
    let heading = '<h2>' + val + '</h2>';
    let text = '';

    let newAnimals = animals.filter(animal => animal.classname === val);
    console.log(newAnimals.length);
}
