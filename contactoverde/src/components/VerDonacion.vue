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
      <h2 class="ui dividing header">Búsqueda artículos de segunda</h2>
      <h5>
        Si conoces el ID del artículo que buscas ingrésalo en el motor de
        búsqueda o búscalo por nombre del artículo
      </h5>
      <div class="ui search">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Common passwords..." />
          <i class="search icon"></i>
        </div>
        <div class="results"></div>
      </div>

      <section class="carousel">
        <div class="carousel__container">
          <div class="carousel-item">
            <img
              class="carousel-item__img"
              src="../assets/articulo1.jpg"
              alt="ropa"
            />
            <div class="carousel-item__details">
              <div>
                <img
                  src="C:\Users\lipas\Documents\FRONTEND DEVELOPER\imagenes\play-icon.png"
                  alt="signo play"
                />
                <img
                  src="C:\Users\lipas\Documents\FRONTEND DEVELOPER\imagenes\plus-icon.png"
                  alt="signo mas"
                />
              </div>
              <p class="carousel-item__details--title">Título descriptivo</p>
              <p class="carousel-item__details--subtitle">2019 16+ 114mins</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="carousel-item__img"
              src="../assets/articulo2.jpg"
              alt="oceano azul"
            />
            <div class="carousel-item__details">
              <div>
                <img
                  src="C:\Users\lipas\Documents\FRONTEND DEVELOPER\imagenes\play-icon.png"
                  alt="signo play"
                />
                <img
                  src="C:\Users\lipas\Documents\FRONTEND DEVELOPER\imagenes\plus-icon.png"
                  alt="signo mas"
                />
              </div>
              <p class="carousel-item__details--title">Título descriptivo</p>
              <p class="carousel-item__details--subtitle">2019 16+ 114mins</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="carousel-item__img"
              src="../assets/articulo3.jpg"
              alt="libros"
            />
            <div class="carousel-item__details">
              <div>
                <img
                  src="C:\Users\lipas\Documents\FRONTEND DEVELOPER\imagenes\play-icon.png"
                  alt="signo play"
                />
                <img
                  src="C:\Users\lipas\Documents\FRONTEND DEVELOPER\imagenes\plus-icon.png"
                  alt="signo mas"
                />
              </div>
              <p class="carousel-item__details--title">Título descriptivo</p>
              <p class="carousel-item__details--subtitle">2019 16+ 114mins</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="carousel-item__img"
              src="../assets/articulo4.jpg"
              alt="flor blanca"
            />
            <div class="carousel-item__details">
              <div>
                <img
                  src="C:\Users\lipas\Documents\FRONTEND DEVELOPER\imagenes\play-icon.png"
                  alt="signo play"
                />
                <img
                  src="C:\Users\lipas\Documents\FRONTEND DEVELOPER\imagenes\plus-icon.png"
                  alt="signo mas"
                />
              </div>
              <p class="carousel-item__details--title">Título descriptivo</p>
              <p class="carousel-item__details--subtitle">2019 16+ 114mins</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="carousel-item__img"
              src="https://images.pexels.com/photos/5743436/pexels-photo-5743436.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="arena café"
            />
            <div class="carousel-item__details">
              <div>
                <img
                  src="C:\Users\lipas\Documents\FRONTEND DEVELOPER\imagenes\play-icon.png"
                  alt="signo play"
                />
                <img
                  src="C:\Users\lipas\Documents\FRONTEND DEVELOPER\imagenes\plus-icon.png"
                  alt="signo mas"
                />
              </div>
              <p class="carousel-item__details--title">Título descriptivo</p>
              <p class="carousel-item__details--subtitle">2019 16+ 114mins</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="carousel-item__img"
              src="https://images.pexels.com/photos/8694231/pexels-photo-8694231.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="café claro"
            />
            <div class="carousel-item__details">
              <div>
                <img
                  src="C:\Users\lipas\Documents\FRONTEND DEVELOPER\imagenes\play-icon.png"
                  alt="signo play"
                />
                <img
                  src="C:\Users\lipas\Documents\FRONTEND DEVELOPER\imagenes\plus-icon.png"
                  alt="signo mas"
                />
              </div>
              <p class="carousel-item__details--title">Título descriptivo</p>
              <p class="carousel-item__details--subtitle">2019 16+ 114mins</p>
            </div>
          </div>
        </div>
      </section>
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

h2 {
  color: white;
}
html {
  background-color: white;
  background-size: 100%;
  height: 600px;
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
  background-color: palevioletred;
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
