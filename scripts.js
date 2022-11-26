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
	},
	{
		image: "/img/2.jpg",
		id: 2,
		name: "Kung Fu Panda",
		year: 2009,
		age: 6,
		genre: "action",
		rate: 4,
		vid:"/vid/pandaTrailer.mp4",
		poster:"/vid/pandaTrailerPoster.webp",
		additImages1:"/img/addit/2.1.jpg",
		additImages2:"/img/addit/2.2.jpg",
		additImages3:"/img/addit/2.3.jpg",
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
	},
	{
		image: "/img/4.jpg",
		id: 4,
		name: "Forrest Gump",
		year: 1994,
		age: 12,
		genre: "drama",
		rate: 4,
		vid:"/vid/ForrestGumpTrailer.mp4",
		poster:"/vid/ForestGumpPoster.jpg",
		additImages1:"/img/addit/4.1.webp",
		additImages2:"/img/addit/4.2.webp",
		additImages3:"/img/addit/4.3.jpg",
	},
	{
		image: "/img/5.jpg",
		id: 5,
		name: "Warrior Nun",
		year: 2020,
		age: 12,
		genre: "fantasy",
		rate: 3,
		vid:"/vid/WarriorNunTrailer.mp4",
		poster:"/vid/WarriorNunPoster.jpg",
		additImages1:"/img/addit/5.1.jpg",
		additImages2:"/img/addit/5.2.webp",
		additImages3:"/img/addit/5.3.jpg",
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
    },
	{
		image: "/img/8.jpg",
        id: 8,
        name: "Parasite",
        year: 2019,
        age: 18,
        genre: "thriller",
        rate: 4,
		vid:"/vid/GisaengchungTrailer.mp4",
		poster:"/vid/GisaengchungPoster.jpg",
		additImages1:"/img/addit/8.1.jpg",
		additImages2:"/img/addit/8,2.jpg",
		additImages3:"/img/addit/8.3.jpg",
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
    },
];

function cardtemplates() {
	let a = [];
	movies.forEach((element) => {
		a.push({
			template:`<a href="#"><div class="catalog__elem" id="1">
			<div class="header__elem">
				<h3>${element.name}</h3>
				<img src="${element.image}" alt="${element.name}">
				<div class="elem__raiting">
					<img src="/img/star.png" alt="star">
					<p class="raiting__score">${element.rate}.0</p>
				</div>
			</div>
		</div></a>`,
		// 	template:`
		// <div class="catalog__elem" id="1">
		// 	<div class="header__elem">
		// 		<h3>${element.name}</h3>
		// 		<img src="${element.image}" alt="${element.name}">
		// 		<div class="elem__raiting">
		// 			<img src="/img/star.png" alt="star">
		// 			<p class="raiting__score">${element.rate}.0</p>
		// 		</div>
		// 	</div>
		// 		<div class="elem__property">
		// 			<div class="elem__name">
		// 				<h4>${element.name}</h4>
		// 			</div>
		// 			<div class="elem__options">
        //             	<p>Год: ${element.year}</p>
        //             	<p>Воз.огр.:${element.age}+</p>
        //             	<p>Жанр: ${element.genre}</p>
        //             	<p>Рейтинг: ${element.rate}/5</p>
		// 			</div>
		// 			<p class="elem__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio explicabo alias, at quo velit tempore cupiditate voluptates praesentium blanditiis. ipsum dolor sit amet consectetur adipisicing elit. Ea architecto illum eligendi commodi corrupti ullam quisquam explicabo fugiat adipisci hic. ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur. ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos blanditiis expedita sunt vel modi officia nobis nam quae nesciunt quod et suscipit nemo, mollitia temporibus aut tenetur magni provident?</p>
		// 			<div class="elem__images">
		// 				<div class="screnshots">
		// 					<a href="#"><img src="${element.additImages1}" alt="${element.name}1"></a>
		// 					<a href="#"><img src="${element.additImages2}" alt="${element.name}2"></a>
		// 					<a href="#"><img src="${element.additImages3}" alt="${element.name}3"></a>
		// 				</div>
		// 				<video class="trailer" src="${element.vid}" poster="${element.poster}" controls muted></video>			
		// 			</div>
		// 		</div>
		// </div>`,
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
		});
	});
	return a;
}
function filter(year, age, genre, rate) {
	let bebra3 = cardtemplates().filter(
		(value) =>
			value.genre === genre &&
			value.age <= age &&
			value.rate <= rate &&
			value.year === year
		// if (value.genre === genre | ()) {
		// 	if (!bebra3.includes(value)) {
		// 		bebra3.push(value);

		// 	}
		// }
		// if (value.age < age) {
		// 	if (!bebra3.includes(value)) {
		// 		bebra3.push(value);
		// 	}
		// }
		// if (value.rate < rate) {
		// 	if (!bebra3.includes(value)) {
		// 		bebra3.push(value);
		// 	}
		// }
		// if (value.year === year) {
		// 	if (!bebra3.includes(value)) {
		// 		bebra3.push(value);
		// 	}
		// }
	);
	return bebra3;
}
let catalog = document.querySelector(".catalog");
cardtemplates().map((value) => {
	catalog.innerHTML += value.template;
});

function cardGen(year, age, genre, rate) {
	let catalog = document.querySelector(".catalog");
	catalog.innerHTML = "";
	filter(year, age, genre, rate).map((value) => {
		catalog.innerHTML += value.template;
	});
}

const year = document.querySelector("#year");
const genre = document.querySelector("#genre");
const raiting = document.querySelector("#raiting");
const age = document.querySelector("#age");

let bebra = [year, genre, raiting, age];

bebra.map((inp) => {
	inp.addEventListener("change", () => {
		const yearValue = document.querySelector("#year").value;
		const genreValue = document.querySelector("#genre").value;
		const raitingValue = document.querySelector("#raiting").value;
		const ageValue = document.querySelector("#age").value;
		console.log(1);
		cardGen(
			Number(yearValue),
			Number(ageValue.slice(0, ageValue.length - 1)),
			genreValue,
			Number(raitingValue)
		);
	});
});

let button = document.querySelector(".aboba");
button.addEventListener("click", () => {
	let catalog = document.querySelector(".catalog");
	catalog.innerHTML = "";
	cardtemplates().map((value) => {
		catalog.innerHTML += value.template;
	});
});
