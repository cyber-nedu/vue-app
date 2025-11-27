<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router'; 

// 1. State for the sidebar visibility
const isMenuOpen = ref(false);
const router = useRouter();

// 2. Functions to control the state
const openMenu = () => {
  isMenuOpen.value = true;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// 3. Close the menu and navigate when a link is clicked
const handleLinkClick = (path) => {
  closeMenu();
  if (path) {
    // Navigates after closing the menu
    router.push(path);
  }
};

// 4. Handle click outside (Click Listener on the whole document)
const handleClickOutside = (event) => {
  const navElement = document.querySelector('nav');
  // Check if the click is outside the <nav> element
  if (navElement && !navElement.contains(event.target)) {
    // If the menu is open and the click is outside <nav>
    if (isMenuOpen.value) {
      closeMenu();
    }
  }
};

// 5. Lifecycle hooks to add/remove the event listener
onMounted(() => {
  // Add the click listener to the entire document when the component is mounted
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  // Clean up the listener when the component is destroyed
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <nav>
    <div class="logo">
      <router-link to="/"><img src="/images/logo.png" alt=""></router-link>
    </div>

    <div class="search-bar">
      <input type="search" placeholder="Search..."/>
      <Icon class="search-icon" icon="mdi:search" />
    </div>
    
    <ul>
      <li class="hideOnMobile"><router-link to="/"><Icon icon="mdi:home" /> Home</router-link></li>

      <li class="hideOnMobile"><router-link to="/about"><Icon icon="mdi:about" /> About</router-link></li>

      <li class="hideOnMobile"><router-link to="/service"> <Icon icon="mdi:offer" />Service</router-link></li>

      <li class="hideOnMobile"><router-link to="/Notfound"> <Icon icon="mdi:blog" />Blog</router-link></li>

      <li class="hideOnMobile"><router-link to="/Notfound"> <Icon icon="mdi:contact" />Contact</router-link></li>
      
      <Icon class="menu-icon" icon="mdi:menu" @click="openMenu" />
    </ul>

    <ul class="showOnMobile" :class="{ 'active': isMenuOpen }">

      <li><a href="#" @click.prevent="handleLinkClick('/')"><Icon icon="mdi:home" /> Home</a></li>

      <li><a href="#" @click.prevent="handleLinkClick('/about')"><Icon icon="mdi:about" /> About</a></li>

      <li><a href="#" @click.prevent="handleLinkClick('/service')"> <Icon icon="mdi:offer" />Service</a></li>

      <li><a href="#" @click.prevent="handleLinkClick('/Notfound')"> <Icon icon="mdi:blog" />Blog</a></li>

      <li><a href="#" @click.prevent="handleLinkClick('/Notfound')"> <Icon icon="mdi:contact" />Contact</a></li>
      
    </ul>
  </nav>
</template>

<style>

body{
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.logo img {
  width: 60px;
  height: auto;
  cursor: pointer;
}

nav{
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
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
  font-size: 16px;
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

.menu-icon{
  font-size: 2rem;
  color: #fff;
  font-weight: 700; 
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.showOnMobile{
  position: fixed;
  top: 0;
  left: 0;
  background: #333333a2;
  backdrop-filter: blur(10px);
  height: 100vh;
  width: 200px;
  display: none; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  a{
    color: #333;
  }

  li:hover{
    background: #333;
    width: 100%;
    color: aqua;
    border-radius: 20px;
    transition: 0.3s;
    display: flex;
    justify-content: center;
  }
}


.showOnMobile.active {
  display: flex;
}


.close-icon{
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 28px;
  outline:2px solid #969696;
  color: #fff;
  outline-style: groove;
  cursor: pointer;
}

@media(min-width:769px){
    .menu-icon{
    display: none;
    }
}

@media (max-width: 768px){
  .hideOnMobile{
    display: none;
  }

  nav{
    padding: 0 20px;
  }
}

</style>