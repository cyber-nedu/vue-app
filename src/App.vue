    <template>
      <div id="app">
        <Navbar v-if="!$route.meta.hideNavbar" />
        <router-view />
      </div>
    </template>

    <script>
    import Navbar from './components/Navbar.vue'; // Your Navbar component

    export default {
      name: 'App',
      components: {
        Navbar
      }
    };
    </script>