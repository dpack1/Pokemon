<template>
<div id="app">
<link href='https://fonts.googleapis.com/css?family=VT323' >
  <div class="header">
    <router-link to="/">
      <div class="logo">
        <img src="/mudkip.gif" width = 40% padding = 0px>
      </div>
    </router-link>
    <div class="title">
      <h1>Pokemon Pokedex</h1>
    </div>
  </div>
  <div class="content">
  <h2> welcome to the pokemon pokedex</h2>
  <p> Help us to document pokemon from a cross every region and generations </p>
  <p> Start by selecting a region below:</p>


  <div class="container">
      <router-link style="text-decoration: none; color: inherit;" to="/kanto">
      <div class="pixel2">Kanto: <br/>Pokémon Red, Blue and Yellow </div>
      </router-link>

      <router-link style="text-decoration: none; color: inherit;" to="/jhoto">
      <div class="pixel2">Johto: <br/>Pokémon Gold, Silver and Crystal </div>
      </router-link>

    <router-link style="text-decoration: none; color: inherit;" to="/hoenn">
    <div class="pixel2">Hoenn: <br/>Pokémon Ruby, Sapphire and Emerald </div>
    </router-link>
  </div>

  <router-view />




  </div>


  <div class="footer">

  <a href="https://github.com/dpack1/Pokemon">
    <div class="pixel">
      <p >Git Hub</p>
    </div>
  </a>




    <router-link style="text-decoration: none; color: inherit;" to="/admin">
    <div class="pixel">
      <p>Admin</p></div>
    </router-link>

  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}


/* Header */
.header {
  display: flex;
  padding: 20px 100px 0px 10px;
  background-color: #FF4C4C;
  color: #1C454F;
}

.title {
  margin-top: 0px;

}

.title h1 {

  font-size: 30px;



}

.logo {

}

.content {
  padding: 20px 100px;
  min-height: 500px;
  background: white;
}

/* Footer */
.footer {
  height: 50px;
  padding: 10px 50px 10px 50px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}


h1 {
  font-size: 20px;
  font-family: 'VT323';

}

h2 {
  font-size: 30px;
  font-family: 'VT323';

}

.container {
  margin: 50px;
  display: block;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

p {
font-family: 'VT323';
font-size: 25px;
padding: 0px;

}



.pixel, .pixel2 {
  font-size: 25px;
  color: white;
  height: auto;
  margin: 10px;
  font-family: 'VT323';

  position: relative;
  display: inline-block;
  vertical-align: top;
  text-transform: uppercase;

  cursor: pointer;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.pixel:active, .pixel2:active {
  top: 2px;
}

.pixel {
  line-height: 0;

  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */

  border-style: solid;
  border-width: 20px;
  -moz-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
  -webkit-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
  -o-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
  border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
}

.pixel p {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: auto;
  text-align: center;
  margin: -20px -20px;
  line-height: 20px;
  padding: 10px 20px;

	background: #000000;
	background:
		linear-gradient(135deg, transparent 10px, #000000 0) top left,
		linear-gradient(225deg, transparent 10px, #000000 0) top right,
		linear-gradient(315deg, transparent 10px, #000000 0) bottom right,
		linear-gradient(45deg,  transparent 10px, #000000 0) bottom left;
	background-size: 50% 50%;
	background-repeat: no-repeat;
	background-image:
		radial-gradient(circle at 0 0, rgba(204,0,0,0) 14px, #000000 15px),
		radial-gradient(circle at 100% 0, rgba(204,0,0,0) 14px, #000000 15px),
		radial-gradient(circle at 100% 100%, rgba(204,0,0,0) 14px, #000000 15px),
		radial-gradient(circle at 0 100%, rgba(204,0,0,0) 14px, #000000 15px);
}

.pixel2 {
  position: relative;
  display: block;
  margin: 10px;
  font-family: 'VT323';
  text-transform: uppercase;

  font-size: 25px;
  color: white;
}

.pixel2::before {
  content: "";
  display: block;
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: -10px;
  right: -10px;
  background: black;
  z-index: -1;
}

.pixel2::after {
  content: "";
  display: block;
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: -6px;
  right: -6px;
  background: black;
  z-index: -1;
}

.pixel2 {
  padding: 10px 10px;
  position: relative;
  background: black;
  width: auto;
  z-index: 2;
}

</style>
