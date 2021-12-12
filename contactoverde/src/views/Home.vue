<template>
  <html>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Readex+Pro:wght@700&display=swap"
      rel="stylesheet"
    />
    <BasicLayouts>
      <div class="banner">
        <h1>SOMOS CONTACTO VERDE</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          provident saepe magnam sapiente dolorem id corrupti harum nam, aliquid
          aut repellendus suscipit ipsa, quae rerum illo nihil? Autem, veniam
          illo.
        </p>
        <button class="ui olive button" @click="$router.push('/login')">
          LOGIN
        </button>
        <button class="ui grey button">CREATE ACCOUNT</button>
      </div>
    </BasicLayouts>
  </html>
  <div class="contenedor sombra">
    <h2>PERFILES DE USUARIO</h2>
    <main class="servicios">
      <div class="servicio">
        <h3>Ciudadano</h3>
        <div class="iconos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-user"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#7bc62d"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          provident saepe magnam sapiente dolorem id
        </p>
        <button
          class="ui olive button"
          @click="$router.push('/signupciudadano')"
        >
          REGISTRARSE
        </button>
      </div>

      <div class="servicio">
        <h3>Reciclador</h3>
        <div class="iconos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-recycle"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00b341"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
            <path
              d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"
              transform="rotate(120 12 13)"
            />
            <path
              d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"
              transform="rotate(240 12 13)"
            />
          </svg>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          provident saepe magnam sapiente dolorem id
        </p>
        <button
          class="ui olive button"
          @click="$router.push('/signupreciclador')"
        >
          REGISTRARSE
        </button>
      </div>

      <div class="servicio">
        <h3>Punto de Acopio</h3>
        <div class="iconos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-map-pin"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#597e8d"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="11" r="3" />
            <path
              d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
            />
          </svg>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          provident saepe magnam sapiente dolorem id
        </p>
        <button class="ui olive button" @click="$router.push('/signupacopio')">
          REGISTRARSE
        </button>
      </div>
    </main>
  </div>

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

html {
  background-color: black;
  background-image: url(../assets/home3.jpg);
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
  margin-top: 180px;
}
.p {
  font-size: 45rem;
  position: -webkit-sticky;
  margin-top: 120px;
}
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
.iconos {
  display: flex;
  height: 150px;
  width: 150px;
  justify-content: space-evenly;
  align-items: center;
}

.iconos i {
  font-size: 2rem;
  color: var(--oscuro);
}
.footer.segment {
  padding: 4em 0em;
}
</style>
