"use strict";
let movies = [
	{
		image: "/img/1.jpg",
		id: 1,
		name: "The Lord of the Rings: The Fellowship of the Ring",
		year: 2001,
		age: 12,
		genre: "fantasy",
		rate: 5,
		vid:"/vid/TheLordOfTheRingsTrailer.mp4",
		poster:"/vid/RingPoster.jpg",
		additImages1:"/img/addit/1.1.jpg",
		additImages2:"/img/addit/1.2.webp",
		additImages3:"/img/addit/1.3.png",
		link: "film1.html"
	},
	{
		image: "/img/3.jpg",
		id: 3,
		name: "The Matrix",
		year: 1999,
		age: 16,
		genre: "action",
		rate: 5,
		vid:"/vid/matrixTrailer.mp4",
		poster:"/vid/matrixPoster.jpg",
		additImages1:"/img/addit/3.1.jpg",
		additImages2:"/img/addit/3.2.webp",
		additImages3:"/img/addit/3.3.webp",
		link: "film3.html"
	},
	{
		image: "/img/6.webp",
        id: 6,
        name: "Up",
        year: 2009,
        age: 0,
        genre: "adventure",
        rate: 5,
		vid:"/vid/UpTrailer.mp4",
		poster:"/vid/UpPoster.webp",
		additImages1:"/img/addit/6.1.jpg",
		additImages2:"/img/addit/6.2.jpg",
		additImages3:"/img/addit/6.3.webp",
		link: "film6.html"
    },
	{
		image: "/img/7.jpg",
        id: 7,
        name: "Inception",
        year: 2010,
        age: 12,
        genre: "action",
        rate: 5,
		vid:"/vid/InceptionTrailer.mp4",
		poster:"/vid/InceptionPoster.jpg",
		additImages1:"/img/addit/7.1.jpg",
		additImages2:"/img/addit/7.2.avif",
		additImages3:"/img/addit/7.3.jpg",
		link: "film7.html"
    },
	{
		image: "/img/9.jpg",
        id: 9,
        name: "The Northman",
        year: 2022,
        age: 12,
        genre: "action",
        rate: 5,
		vid:"/vid/THE NORTHMANTrailer.mp4",
		poster:"/vid/theNorthmanPoster.jpg",
		additImages1:"/img/addit/9.1.jpg",
		additImages2:"/img/addit/9.2.jpg",
		additImages3:"/img/addit/9.3.jpg",
		link: "film9.html"
    },
	{
		image: "/img/10.webp",
        id: 10,
        name: "Sherlock",
        year: 2011,
        age: 16,
        genre: "drama",
        rate: 4,
		vid:"/vid/SherlockTrailer.mp4",
		poster:"/vid/SherlockPoster.jpg",
		additImages1:"/img/addit/10.1.jpg",
		additImages2:"/img/addit/10.2.jpg",
		additImages3:"/img/addit/10.3.jpg",
		link: "film10.html"
    },
];
function cardtemplates() {
	let a = [];
	movies.forEach((element) => {
		a.push({
			template:`<a href="${element.link}"><div class="catalog__elem" id="1">
			<div class="header__elem">
				<h3>${element.name}</h3>
				<img src="${element.image}" alt="${element.name}">
				<div class="elem__raiting">
					<img src="/img/star.png" alt="star">
					<p class="raiting__score">${element.rate}.0</p>
				</div>
			</div>
		</div></a>`,
			name: element.name,
			year: element.year,
			age: element.age,
			genre: element.genre,
			rate: element.rate,
			vid: element.vid,
			poster: element.poster,
			additImages1: element.additImages1,
			additImages2: element.additImages2,
			additImages3: element.additImages3,
			link: element.link
		});
	});
	let a1 = a.slice(0,5)
	return a1;
	}
let catalog = document.querySelector(".catalog");
cardtemplates().map((value) => {
	catalog.innerHTML += value.template;
});
