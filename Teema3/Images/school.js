var students = [
    {
        name: "Lebron",
        group: 'JPTV20',
        age: 18,
        address: 'Johvi',
        photo: 'istockphoto-1286810719-612x612.jpg'
    },
    {
        name: "Aleksei",
        group: 'JPTVR19',
        age: 21,
        address: 'Tallinn',
        photo: 'istockphoto-685132245-612x612.jpg'
    },
    {
        name: "Danik",
        group: 'JPTV21',
        age: 19,
        address: 'Kohtla-Jarve',
        photo: 'depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg'
    },
    {
        name: "Maksim",
        group: 'SPTV20',
        age: 17,
        address: 'Johvi',
        photo: 'portrait-white-man-isolated_53876-40306.webp'
    }
];

function printStudent(student) {
    let text = '';
    text += '<h2>' + student.name + '</h2>';
    let path = 'img/' + student.photo
    if('photo' in student) {
        text += '<img src="' + path + '"></img>';
    }
    text += '<p>Student group: ' + student.group + '</p>';
    text += '<p>Student age: ' + student.age + '</p>';
    text += '<p>Student address: ' + student.address + '</p>';

    let container = document.createElement('div');
    container.innerHTML = text;
    document.getElementById('content').appendChild(container)
}

for (let i = 0; i < students.length; i++) {
    printStudent(students[i]);
}