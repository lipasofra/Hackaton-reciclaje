<template>
  <html>
    <BasicLayouts>
      <h2 class="ui dividing header">¡HOLA!</h2>
      <h5>
        De acuerdo a tu perfil, por el tipo de material que reciclas y la zona
        en la que te encuentras estos son los ciudadanos que te han contactado
        para recolección.
      </h5>

      <h2>Solicitudes:</h2>
      <div class="ui middle aligned divided list">
        <div class="item">
          <img class="ui avatar image" src="../assets/perfil1.jpg" />
          <div class="content">
            <div class="header">Lena</div>
            Telefono: 32012345
            <div class="description">Dirección: Cll 120 #20</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="../assets/perfil4.jpg" />
          <div class="content">
            <div class="header">Lindsay</div>
            Telefono: 32012345
            <div class="description">Dirección: Cll 120 #20</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="../assets/perfil2.jpg" />
          <div class="content">
            <div class="header">Mark</div>
            Telefono: 32012345
            <div class="description">Dirección: Cll 120 #20</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="../assets/perfil3.jpg" />
          <div class="content">
            <div class="header">Molly</div>
            Telefono: 32012345
            <div class="description">Dirección: Cll 120 #20</div>
          </div>
        </div>
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
</style>
