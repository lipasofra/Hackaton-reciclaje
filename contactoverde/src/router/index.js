import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import SignUpCiudadano from "../components/SignUpCiudadano.vue";
import SignUpReciclador from "../components/SignUpReciclador.vue";
import SignUpAcopio from "../components/SignUpAcopio.vue";
import Rdisponibles from "../components/Rdisponibles.vue";
import CrearDonacion from "../components/CrearDonacion.vue";
import VerDonacion from "../components/VerDonacion.vue";
import AcopiosDisponibles from "../components/AcopiosDisponibles.vue";
import SolicitudesCiudadano from "../components/SolicitudesCiudadano.vue";
import InformacionAdicional from "../components/InformacionAdicional.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signupciudadano",
    name: "SignUpCiudadano",
    component: SignUpCiudadano,
  },
  {
    path: "/signupreciclador",
    name: "SignUpReciclador",
    component: SignUpReciclador,
  },
  {
    path: "/signupacopio",
    name: "SignUpAcopio",
    component: SignUpAcopio,
  },
  {
    path: "/rdisponibles",
    name: "Rdisponibles",
    component: Rdisponibles,
  },
  {
    path: "/creardonacion",
    name: "CrearDonacion",
    component: CrearDonacion,
  },
  {
    path: "/verdonacion",
    name: "VerDonacion",
    component: VerDonacion,
  },
  {
    path: "/acopiosdisponibles",
    name: "AcopiosDisponibles",
    component: AcopiosDisponibles,
  },
  {
    path: "/solicitudesciudadano",
    name: "SolicitudesCiudadano",
    component: SolicitudesCiudadano,
  },
  {
    path: "/informacionadicional",
    name: "InformacionAdicional",
    component: InformacionAdicional,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
