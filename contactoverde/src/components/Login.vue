<template>
  <html>
    <BasicLayouts> </BasicLayouts>
  </html>
  <div class="contenedor sombra">
    <div class="login">
      <h2>Iniciar sesión</h2>
      <form class="ui form" v-on:submit.prevent="processLogInUser">
        <div class="field">
          <input type="text" v-model="user.username" placeholder="Usuario" />
        </div>

        <div class="field">
          <input
            type="password"
            v-model="user.password"
            placeholder="Contraseña"
          />
        </div>
        <br />
        <button
          class="ui button fluid green"
          type="submit"
          :class="{ loading }"
        >
          Entrar
        </button>
      </form>
    </div>
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
import gql from "graphql-tag";

export default {
  name: "LogIn",
  components: {
    BasicLayouts,
  },
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    processLogInUser: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($credentials: CredentialsInput!) {
              logIn(credentials: $credentials) {
                refresh
                access
              }
            }
          `,
          variables: {
            credentials: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.logIn.access,
            token_refresh: result.data.logIn.refresh,
          };

          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
html {
  background-color: black;
  background-image: url(../assets/home3.jpg);
  background-size: 100%;
  height: 210px;
  max-width: 1400px;
  margin: 0auto;
}
.login {
  text-align: center;
  h2 {
    margin: 50px 0 30px 0;
  }
  .ui.form {
    max-width: 300px !important;
    margin: 0 auto;
    margin-bottom: 100px;
    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }
}
.footer.segment {
  padding: 6em 0em;
}
</style>
