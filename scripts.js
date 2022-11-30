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
		link: "film2.html"
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
		link: "film4.html"
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
		link: "film5.html"
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
		link: "film8.html"
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
			template:`<a href="${element.link}"><div class="catalog__elem" id="${element.id}">
			<div class="header__elem">
				<h3>${element.name}</h3>
				<img src="${element.image}" alt="${element.name}">
				<div class="elem__raiting">
					<img src="/img/star.png" alt="star">
					<p class="raiting__score">${element.rate.toFixed(1)}</p>
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
			link: element.link,
		});
	});
	
	return a;
}


function filter(year, age, genre, rate) {
	let toFilterFilms = cardtemplates()
	let filteredFilms = []
	if (year){
		console.log('year')
		toFilterFilms = toFilterFilms.filter((i)=>{
			console.log(i.year === year)
			return i.year === year
		})
	}
	if (rate){
		console.log('rate')
		toFilterFilms = toFilterFilms.filter((i)=>{
			console.log(i.rate == rate)
			return i.rate == rate
		})
	}
	if (Number(age)+1){
		console.log('age')
		toFilterFilms = toFilterFilms.filter((i)=>{
			console.log(i.age >= Number(age))
			return i.age >= Number(age)
		})
	}
	if (genre !== 'Genre'){
		console.log('genre')
		toFilterFilms = toFilterFilms.filter((i)=>{
			console.log(i.genre === genre)
			return i.genre === genre
		})
	}
	console.log(filteredFilms)
	return toFilterFilms
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
		cardGen(
			Number(yearValue),
			ageValue,
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

const qwerty = document.querySelectorAll('.catalog__elem');
// qwerty.forEach(item => {
// 	item.addEventListener('click' function() => {
// 		console.log(item.id)
// 	})
// })
qwerty.forEach(item=>{
	item.addEventListener('click', ()=>{
		console.log(item.id);
	});
});
// function filmtemplate(){
// 	let b = [];
// 	movies.
// }
function myNewFunction(sel) {
	let value = sel.options[sel.selectedIndex].text;
	movies.forEach(item => {
		cardtemplates().filter(item => item.genre === value);
	})
}
// function filtorfilm(){
// 	filmDataCopy.classList.add()
// 	filmData.sort(function(a,b) {
// 		if (a.genre > b.genre){
// 			return 1;
// 		}
// 		if (a.genre < b.genre){
// 			return -1;
// 		}
// 	});
// }
// filmData.forEach(item => )

