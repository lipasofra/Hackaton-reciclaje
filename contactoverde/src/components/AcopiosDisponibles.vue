<template>
  <html>
    <BasicLayouts>
      <form class="ui form">
        <h2 class="ui dividing header">Filtra tu búsqueda</h2>
        <h5>
          Por tipo de material que deseas reciclar y la zona en la que te
          encuentras para ubicar al reciclador indicado.
        </h5>
        <div class="two fields">
          <div class="field">
            <label>Material</label>
            <select class="ui fluid dropdown">
              <option value="PL">Plástico</option>
              <option value="PP">Papel</option>
              <option value="VR">Vidrio</option>
              <option value="MT">Metal</option>
            </select>
          </div>
          <div class="field">
            <label>Zona</label>
            <select class="ui fluid dropdown">
              <option value="SR">Sur</option>
              <option value="NR">Norte</option>
              <option value="OR">Oriente</option>
              <option value="OC">Occidente</option>
            </select>
          </div>
        </div>
      </form>

      <h2>Puntos de Acopio disponibles:</h2>
      <div class="ui list">
        <div class="item">
          <i class="map marker icon"></i>
          <div class="content">
            <a class="header">Krolewskie Jadlo</a>
            <div class="description">Telefono: 32012345</div>
            <div class="description">Dirección: Cll 120 #20</div>
            <div class="description">
              An excellent option, quick delivery and hearty.
            </div>
          </div>
        </div>
        <div class="item">
          <i class="map marker icon"></i>
          <div class="content">
            <a class="header">Xian Famous Foods</a>
            <div class="description">Telefono: 32012345</div>
            <div class="description">Dirección: Cll 120 #20</div>
            <div class="description">
              A taste of Shaanxi's delicious culinary traditions, with delights
              like spicy cold noodles and lamb burgers.
            </div>
          </div>
        </div>
        <div class="item">
          <i class="map marker icon"></i>
          <div class="content">
            <a class="header">Sapporo Haru</a>
            <div class="description">Telefono: 32012345</div>
            <div class="description">Dirección: Cll 120 #20</div>
            <div class="description">
              Greenpoint's best choice for quick and delicious sushi.
            </div>
          </div>
        </div>
        <div class="item">
          <i class="map marker icon"></i>
          <div class="content">
            <a class="header">Enid's</a>
            <div class="description">Telefono: 32012345</div>
            <div class="description">Dirección: Cll 120 #20</div>
            <div class="description">
              At night a bar, during the day a delicious brunch spot.
            </div>
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
