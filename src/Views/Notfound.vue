<template>
  <div class="container">
    <h1 class="heading">404 Not Found</h1>
  <p class="para">The page you are looking for does not exist.</p>
  <router-link class="link" to="/">Go to Home Page</router-link>

  </div>
</template>

 <script>
    export default {
      name: 'NotFound',
    };
    </script>

<style>

.container {  
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0a0a0a;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.heading {
  color: gray;
  text-align: center;
  font-size: 4rem;
}

.para {
  color: gray;
  text-align: center;
  margin: 0;
  padding: 0;
}

.link{
  display: block;
  text-align: center;
  color: #3498db;
  text-decoration: none;
}

.link:hover{
  text-decoration: underline;
}
</style>