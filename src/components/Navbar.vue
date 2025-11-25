<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <nav>
    <div class="logo">
     <router-link to="/"><img src="/images/logo.png" alt=""></router-link>
    </div>

    <div class="search-bar">
      <input type="search "  placeholder="Search..."/>
      <Icon class="search-icon" icon="mdi:search" />
    </div>
    <ul>
      <li><router-link to="/"><Icon icon="mdi:home" /> Home</router-link></li>

      <li><router-link to="/about"><icon icon="mdi:about" /> About</router-link></li>

      <li><router-link to="/service"> <icon icon="mdi:offer" />Service</router-link></li>

      <li><router-link to="/Notfound"> <icon icon="mdi:blog" />Blog</router-link></li>

      <li><router-link to="/Notfound"> <icon icon="mdi:contact" />Contact</router-link></li>
    </ul>
  </nav>
</template>

<style>

body{
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.logo img{
  width: 60px;
  height: auto;
  cursor: pointer;
}

nav{
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
}

ul{
  list-style: none;
  display: flex;
  gap: 40px;
  align-items: center;
}

a{
  text-decoration: none;
  color: #969696;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center; 
  gap: 8px;
}

nav a:hover{
color: aqua;
  transition: 0.3s;
}
 
.search-bar{
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 25px;
  width: 30%;
  margin: 0 auto;
  background: rgb(43, 43, 43);
  box-shadow: 0 0 10 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.search-bar input{
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: #fff;
}

.search-bar input::placeholder{
  color: gray;
}

.search-icon{
  margin-left: 10px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
} 
</style>