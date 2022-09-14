$(document).ready(function() {
    for (let i = 0; i < category.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = ('<a href="#" onClick="myContent(`' + category[i] + '`)" >' + category[i] + '</a>');
        $('#menu').append(li);
    }
});
function myContent(val) {
    let text = '';
    let categories = animals.filter(animal => animal.classname === val);
    $('#content').html('');

    if(categories.length > 0) {
        text += '<hr> <h2>' + val + '</h2>';
        for (let i = 0; i < categories.length; i++) {
            text += '<div class="animal"><h3><b>' + categories[i].name + '</b></h3>';
            text += '<div class="text_container"><p>' + categories[i].description + '</p></div>'
            text += '<div class="img_container"><img src="images/' + categories[i].image + '" alt="' + categories[i].name + '"></div></div>';
        }
    }

    if(categories.length <= 0) {
        text += '<hr> <h2>Вид "' + val + '" отсутствует!</h2>';
    }

    let animalInfo = document.createElement('div');
    animalInfo.classList.add('animals');
    animalInfo.innerHTML = text;
    $('#content').append(animalInfo);
}