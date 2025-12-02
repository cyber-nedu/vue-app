    <template>
      <main>
        <!-- Your main page content goes here -->
        <h1>Welcome to the Main Section!</h1>
        <p>This is where the primary content of your application will reside.</p>
  
      </main>
    </template>

    <script>
    export default {
      name: 'MainContent',
    };
    </script>

    <style scoped>

    main {
      padding: 20px;
      min-height: calc(100vh -  60px + 60px); /* Adjust based on header and footer height */
      flex-grow: 1;
    }
    </style>