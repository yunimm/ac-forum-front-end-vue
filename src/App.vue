<template>
  <div id="restaurant-forum">
    <Navbar />
    <main role="main" class="mt-5">
    <router-view/>
    </main>
  </div>
</template>

// 載入bootstrap套件
// 載入navbar
<script>
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap'
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
