  <template>
      <footer>
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/contact">Contact</router-link>
        </nav>
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </template>

    <script>
    export default {
      name: 'AppFooter',
    };
    </script>

    <style scoped>

    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 20px 0;
      position: relative;
      bottom: 0;
      width: 100%;
      height: 60px;
    }
  </style>