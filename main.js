const birthYear = 1990;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

const sebastian = {
  "name": "sebastianPost",
  "age": age,
  "city": "Filipstad",
  "school": " Medieinstitutet",
  "seeking": "Internship / LIA"
};

const projectOne ={
  "name": "Weather App",
  "description": "A project I did for the basic course in Javascript where I focused on basic API protocol. I used Open Weather Maps API for weahter and location.",
  "url": "https://medieinstitutet.github.io/fed22d-js-grundkurs-2-weather-app-ZynCitrus/" 
};


document.querySelector('.infoContainerOne').innerHTML = `
<h1>let ${sebastian.name} = {</h1>
<div class="infotainer">
<h2>Age: ${age} y/o,</h2>
<h2> Location: ${sebastian.city},</h2>
<h2> School: ${sebastian.school},</h2>
<h2> Seeking: ${sebastian.seeking}</h2>
<h2>};</h2>
</div>
<div
`;

document.querySelector('.infoContainerTwo').innerHTML = `
<h1>const projectOne = {</h1>
<div class="infotainerTwo">
<h2>name: ${projectOne.name};</h2>
<h2>description: ${projectOne.description};</h2>
<h2>url: <a href="${projectOne.url}">LINK<a/></h2>
</div>
`;

document.querySelector('.sideMenu').innerHTML = `
<a href="https://www.linkedin.com/in/sebastian-p-24381a66/"><img src="./assets/icons/linkedin.png"></a>
<a href="https://discordapp.com/users/InHoSiVi14#2353/"><img src="./assets/icons/discord.png"></a>
<a href="mailto:sebastianpost@protonmail.com"><img src="./assets/icons/email.png"></a>
<a href="https://github.com/ZynCitrus/"><img src="./assets/icons/github.png"></a>
`;