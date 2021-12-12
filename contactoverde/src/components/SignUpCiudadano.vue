<template>
  <body>
    <BasicLayouts>
      <div class="register">
        <h2>REGISTRO CIUDADANO</h2>
        <form class="ui form" v-on:submit.prevent="processSignUp">
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
          <div class="field">
            <input type="text" v-model="user.name" placeholder="Nombre" />
          </div>
          <div class="field">
            <input type="text" v-model="user.telefono" placeholder="Teléfono" />
          </div>
          <div class="field">
            <input
              type="email"
              v-model="user.email"
              placeholder="Correo electrónico"
            />
          </div>
          <div class="field">
            <input type="text" v-model="user.zona" placeholder="Zona" />
          </div>

          <button
            class="ui button fluid blue"
            type="submit"
            :class="{ loading }"
          >
            Crear usuario
          </button>
        </form>
      </div>
    </BasicLayouts>
  </body>
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
  name: "SignUp",
  components: {
    BasicLayouts,
  },
  data: function () {
    return {
      user: {
        username: "",
        password: "",
        name: "",
        telefono: "",
        email: "",
        zona: "",
      },
    };
  },

  methods: {
    processSignUp: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($userInput: SignUpInput!) {
              signUpUser(userInput: $userInput) {
                refresh
                access
              }
            }
          `,
          variables: {
            userInput: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.signUpUser.access,
            token_refresh: result.data.signUpUser.refresh,
          };

          this.$emit("completedSignUp", dataLogIn);
        })
        .catch((error) => {
          alert("ERROR: Fallo en el registro.");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: white;
  background-size: 100%;
  height: 600px;
  max-width: 1400px;
}

.register {
  text-align: center;

  h2 {
    font-family: "Readex Pro", sans-serif;
    margin: 90px 0 30px 0;
    color: black;
  }
  .ui.form {
    max-width: 300px;
    margin: 0 auto;
    margin-bottom: 1px;
    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }
}

.footer.segment {
  padding: 5em 0em;
}
</style>
