let resultBtn = document.getElementById('result');

let place = '';
let base = '';
let language = '';
let course = '';

let groupCodeHtml = document.getElementById('groupCode');

resultBtn.addEventListener('click', () => {
    let groupCode = document.getElementById('groupCode').value;

    groupCode.substr(0, 1) === 'J' ? place = 'Johvi' : '';
    groupCode.substr(0, 1) === 'S' ? place = 'Sillamae' : '';
    groupCode.substr(0, 1) === 'N' ? place = 'Narva' : '';

    groupCode.substr(1, 1) === 'P' ? base = 'Keskkool' : '';
    groupCode.substr(1, 1) === 'K' ? base = 'Pohikool' : '';
    
    groupCode.substr(4, 1) === 'R' ? language = 'Vene' : '';
    groupCode.substr(4, 1) === 'E' ? language = 'Eesti' : '';
    
    if(groupCode.substr(5, 1) === '2' && groupCode.substr(6, 1) === '0') {
        course = '3 course';
    }
    if(groupCode.substr(5, 1) === '2' && groupCode.substr(6, 1) === '1') {
        course = '2 course';
    }
    if(groupCode.substr(5, 1) === '2' && groupCode.substr(6, 1) === '2') {
        course = '1 course';
    }

    let allInfo = [];
    allInfo.push(place, base, language, course);
    
    const groupInfo = document.getElementsByTagName('li');
    for (let i = 0; i < groupInfo.length; i++) {
        groupInfo[i].innerText = allInfo[i]
    }
});

groupCodeHtml.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        resultBtn.click();
    }
});