<template>
  <html>
    <BasicLayouts>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Readex+Pro:wght@700&display=swap"
        rel="stylesheet"
      />
      <title>Artículo</title>
      <h1 class="ui dividing header">Información Adicional</h1>
      <h5>
        En este apartado encontrarás información relevante sobre el manejo
        adecuado de los residuos, diferentes opciones de aprovechamiento de
        material reciclable e informes de actualidad que nos brinda el
        Ministerio de Ambiente y Desarrollo Rural, y otras entidades
        especializadas como Greenpeace y WWF.
      </h5>
      <div class="ui search">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Busca..." />
          <i class="search icon"></i>
        </div>
        <div class="results"></div>
      </div>
      <div class="contenedor sombra">
        <main class="servicios">
          <div class="servicio">
            <img class="ui tiny image" src="../assets/wwf.png" />
            <a
              href="https://www.wwf.org.co/?uNewsID=365750"
              class="ui medium image"
            >
              <img src="../assets/info2.jpg" />
            </a>
            <h4>¿No sabes cómo aprovechar tus residuos? ¡Aquí te contamos!</h4>
          </div>

          <div class="servicio">
            <img class="ui small image" src="../assets/greenpeace.png" />
            <a
              href="https://comunidad.greenpeace.la/?utm_source=Web&utm_medium=Web&utm_campaign=Web&utm_term=Web&utm_content=Web&_ga=2.239756803.1605880085.1639325164-2035731847.1639325164"
              class="ui medium image"
            >
              <img src="../assets/info3.jpg" />
            </a>
            <h4>Te damos la bienvenida a la comunidad</h4>
          </div>

          <div class="servicio">
            <img class="ui medium image" src="../assets/minambiente.png" />
            <a
              href="https://www.minambiente.gov.co/bosques-biodiversidad-y-servicios-ecosistemicos/superamos-la-meta-en-la-gran-sembraton-con-el-aporte-de-mas-de-125-aliados-plantamos-mas-de-72-millones-de-arboles-en-todo-el-pais/"
              class="ui medium image"
            >
              <img src="../assets/info5.jpg" />
            </a>
            <h4>¡Superamos la meta en la Gran Sembratón!</h4>
          </div>
        </main>
      </div>
      <h2 class="ui dividing header">Conoce cómo clasificar los residuos:</h2>
      <img class="ui fluid image" src="../assets/canecas.jpg" />
      <div class="ui segment">
        <p>
          Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
          alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
          referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
          electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
          Mei ex natum rebum iisque.
        </p>
      </div>
    </BasicLayouts>
  </html>
  <div class="ui inverted vertical footer segment">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h4 class="ui inverted header">About</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">Sitemap</a>
            <a href="#" class="item">Contact Us</a>
            <a href="#" class="item">Religious Ceremonies</a>
            <a href="#" class="item">Gazebo Plans</a>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">Services</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">Banana Pre-Order</a>
            <a href="#" class="item">DNA FAQ</a>
            <a href="#" class="item">How To Access</a>
            <a href="#" class="item">Favorite X-Men</a>
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header">
            Todos los derechos reservados G37 Hackaton UNAL. 2021
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicLayouts from "../layouts/BasicLayouts.vue";

export default {
  name: "Home",
  components: {
    BasicLayouts,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Readex+Pro:wght@700&display=swap");
.contenedor {
  margin: 0 auto;
  max-width: 1200px;
}

.sombra {
  padding: 2rem;
  margin-bottom: 3rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  -webkit-box-shadow: 0px 11px 15px -9px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 11px 15px -9px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 11px 15px -9px rgba(0, 0, 0, 0.63);
}
.servicios {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
@media (min-width: 768px) {
  .servicios {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    column-gap: 1rem;
  }
}
h2 {
  font-family: "Readex Pro", sans-serif;
}
h3 {
  font-family: "Readex Pro", sans-serif;
}
.servicio {
  text-align: center;
}

.servicio {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  color: white;
}
html {
  background-color: white;
  background-size: 100%;
  height: 2200px;
  max-width: 1400px;
  margin: 0auto;
}
h1 {
  font-size: 5rem;

  align-text: right;
}
.banner {
  height: 600px;
  color: white;
}
.p {
  font-size: 45rem;
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
}
.footer.segment {
  padding: 5em 0em;
  margin-top: 400px;
}

body {
  margin: 0px;
  font-family: "Handlee", cursive;
}
.carousel {
  width: 100%;
  overflow: scroll;
  padding: 30px;
  position: relative;
}
.carousel__container {
  white-space: nowrap;
  margin: 70px 0px;
  padding-bottom: 10px;
}
.carousel-item {
  background-color: rgb(109, 255, 109);
  width: 200px;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 10px;
  display: inline-block;
  cursor: pointer;
  transition: 450ms all;
  transform-origin: center left;
  position: relative;
}
.carousel-item:hover ~ .carousel-item {
  transform: translate3d(100px, 0, 0);
}
.carousel__container:hover .carousel-item {
  opacity: 0.3;
}
.carousel__container:hover .carousel-item:hover {
  transform: scale(1.5);
  opacity: 1;
}
.carousel-item__img {
  width: 200px;
  height: 250px;
  object-fit: cover;
}
.carousel-item__details {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  font-size: 10px;
  opacity: 0;
  transition: 450ms opacity;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.carousel-item__details img {
  height: 25px;
}
.carousel-item__details p {
  margin: 0px;
}
.carousel-item__details:hover {
  opacity: 1;
  color: white;
}
</style>
