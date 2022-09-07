let resultBtn = document.getElementById('result');

let place = 'Place of study: ';
let base = 'Training base: ';
let language = 'Study language: ';
let course = 'Course of study: ';

let groupCodeHtml = document.getElementById('groupCode');

resultBtn.addEventListener('click', () => {
    getGroupCode();
});
groupCodeHtml.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getGroupCode();
    }
});

function getGroupCode() {
    place = 'Place of study: ';
    base = 'Training base: ';
    language = 'Study language: ';
    course = 'Course of study: ';

    // Date function
    const dateString = new Date();
    const currentDateTime = (dateString.getFullYear()).toString();
    const currentYear = currentDateTime.substr(2, 1) + currentDateTime.substr(3, 1);

    let groupCode = document.getElementById('groupCode').value;
    
    groupCode.substr(0, 1) === 'J' ? place += 'Johvi' : 'None';
    groupCode.substr(0, 1) === 'S' ? place += 'Sillamae' : 'None';
    groupCode.substr(0, 1) === 'N' ? place += 'Narva' : 'None';
    
    groupCode.substr(1, 1) === 'P' ? base += 'Keskkool' : 'None';
    groupCode.substr(1, 1) === 'K' ? base += 'Pohikool' : 'None';
    
    groupCode.substr(4, 1) === 'R' ? language += 'Vene' : 'None';
    groupCode.substr(4, 1) === 'E' ? language += 'Eesti' : 'None';

    
    if(groupCode.substr(5, 1) === '2' && groupCode.substr(6, 1) === '0') {
        course += '3 course';
    }
    if(groupCode.substr(5, 1) === '2' && groupCode.substr(6, 1) === '1') {
        course += '2 course';
    }
    if(groupCode.substr(5, 1) === '2' && groupCode.substr(6, 1) === '2') {
        course += '1 course';
    }
    if((groupCode.substr(5, 1) + groupCode.substr(6, 1)) > currentYear) {
        course += 'This group did not sterted their course yet!';
    }
    if((groupCode.substr(5, 1) + groupCode.substr(6, 1)) <= currentYear - 4) {
        course += 'This group already ended their course!';
    }
    
    let allInfo = [];
    allInfo.push(place, base, language, course);
    
    const groupInfo = document.getElementsByTagName('li');
    for (let i = 0; i < groupInfo.length; i++) {
        groupInfo[i].innerText = allInfo[i]
    }
}