const birthYear = 1990;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

const sebastian = {
  "name": "Sebastian Post",
  "age": age,
  "city": "Filipstad / Grängesberg",
  "school": " Medieinstitutet",
  "children": "Vienna, Swea, Vilmer, Amadeus"
}


document.querySelector('.infoContainer').innerHTML = `
<h1>${sebastian.name} {</h1>
<div class="infotainer">
<h2>Age: ${age} y/o;</h2>
<h2>Kids: ${sebastian.children};</h2>
<h2> Location: ${sebastian.city};</h2>
<h2> School: ${sebastian.school};</h2>
<h2>}</h2>
</div>
<div
`;

document.querySelector('.pageTwo').innerHTML = `
<p>hej hej</p>
`;

document.querySelector('.sideMenu').innerHTML = `
<a href="https://www.linkedin.com/in/sebastian-p-24381a66/"><img src="./assets/icons/linkedin.png"></a>
<a href="https://discordapp.com/users/InHoSiVi14#2353/"><img src="./assets/icons/discord.png"></a>
<a href="mailto:sebastianpost@protonmail.com"><img src="./assets/icons/email.png"></a>
<a href="https://github.com/ZynCitrus/"><img src="./assets/icons/github.png"></a>
`;