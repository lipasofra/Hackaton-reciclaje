<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="left menu">
        <router-link class="item" to="/">
          <img class="ui small image" src="../assets/CONTACTOVERDE_logo1.png" />
        </router-link>
        <router-link class="item" to="/">
          <h1>CONTACTO VERDE</h1>
        </router-link>
      </div>
      <div class="right menu">
        <router-link class="item" to="/" v-if="!token"> HOME </router-link>
        <router-link class="item" to="/login" v-if="!token">
          LOGIN
        </router-link>
        <template v-if="token">
          <router-link class="item" to="/verdonacion">CONTACTAR</router-link>
          <router-link class="item" to="/verdonacion">DONAR</router-link>
          <router-link class="item" to="/verdonacion">ARTÍCULOS DE SEGUNDA</router-link>
          <span class="ui item logout" @click="logout">
            <i class="sign-out icon"></i>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: #000508;
  .item {
    color: #ffffff;
    &:hover {
      color: #b5cc18;
    }
  }
  .menu.left {
    width: 40%;
    .ui.image {
      width: 40px;
    }
  }
  .menu.right {
    width: 40%;
    justify-content: flex-end;
    .logout,
    .cart {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
