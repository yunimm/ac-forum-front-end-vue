<template>
  <div class="card">
    <div class="card-header"><strong>132</strong> 已評論餐廳</div>
    <div class="card-body">
      <router-link 
      :to="{ name: 'restaurant', params: { id: restaurantComment.Restaurant.id } }"
      v-for="restaurantComment in restaurantComments"
      :key="restaurantComment.id">
        <img
          :src="restaurantComment.Restaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  }
}
</script>