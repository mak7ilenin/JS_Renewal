var movies = [
    {
        name: 'The Dark Knight Rises',
        director: 'Christopher Nolan',
        year: 2012,
        country: 'United States',
        description: 'Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.',
        poster: 'MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg',
        link: 'https://www.imdb.com/title/tt1345836/?ref_=fn_al_tt_1'
    },
    {
        name: 'Joker',
        director: 'Todd Phillips',
        year: 2019,
        country: 'United States',
        description: 'Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.',
        poster: 'joker-poster-1567009838218.jpg',
        link: 'https://www.imdb.com/title/tt7286456/'
    },
    {
        name: 'The Wolverine',
        director: 'James Mangold',
        year: 2013,
        country: 'United States',
        description: 'Logan travels to Tokyo to meet Yashida, an old acquaintance who is dying. The situation regresses when Yashida offers to take away his healing abilities, but Logan refuses.',
        poster: 'MV5BNzg1MDQxMTQ2OF5BMl5BanBnXkFtZTcwMTk3MjAzOQ@@._V1_FMjpg_UX1000_.jpg',
        link: 'https://www.imdb.com/title/tt1430132/?ref_=fn_al_tt_1'
    }
];

function getMovies(movies) {
    let entity = '';

    entity += '<h2>' + movies.name + '</h2>';
    entity += '<div class="img_container"><a href="' + movies.link + '" target="_blank"><img class="movie_img" src="img/' + movies.poster + '"></a></div>';
    entity += '<div class="text_container"><p><b>Director: </b>' + movies.director + '</p>';
    entity += '<p><b>Release Year: </b>' + movies.year + '</p>';
    entity += '<p><b>Country: </b>' + movies.country + '</p>';
    entity += '<p><b>Description: </b>' + movies.description + '</p></div>';
    
    let container = document.createElement('div');
    container.innerHTML = entity;
    container.classList.add('movies__item')

    document.getElementById('content').appendChild(container);
}

for (let i = 0; i < movies.length; i++) {
    getMovies(movies[i]);
}