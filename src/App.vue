    <template>
      <div id="app">
        <Navbar v-if="!$route.meta.hideNavbar" />
        
        <Footer v-if="!$route.meta.hideFooter" />
            <router-view />
      </div>
    </template>

    <script>
    import Navbar from './components/Navbar.vue';
    import Footer from './components/footer.vue';

    export default {
      name: 'App',
      components: {
        Navbar,
        Footer
      }
    };
    </script>