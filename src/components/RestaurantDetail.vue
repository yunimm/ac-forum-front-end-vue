<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>Judy Runte</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        義大利料理
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
    src="https://loremflickr.com/320/240/food,dessert,restaurant/"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            08:00
          </li>
          <li>
            <strong>Tel:</strong>
            (918) 827-1962
          </li>
          <li>
            <strong>Address:</strong>
            98138 Elisa Road
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id }}"
        class="btn btn-primary btn-border mr-2"
      >Dashboard</router-link>

      <button
        v-if="restaurant.isFavorited"
        @click.stop.prevent="deleteFavorite()"
        type="button"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        v-else
        @click.stop.prevent="addFavorite()"
        type="button"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        @click.stop.prevent="deleteLike()"
        type="button"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        v-else
        @click.stop.prevent="addLike()"
        type="button"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    }
  },
  methods: {
    addFavorite () {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true
      }
    },
    deleteFavorite () {
      this.restaurant = {
      ...this.restaurant,
      isFavorited: false
      }
    },
    addLike () {
      this.restaurant = {
      ...this.restaurant,
      isLiked: true
      }
    },
    deleteLike () {
      this.restaurant = {
      ...this.restaurant,
      isLiked: false
      }
    }
  }
}
</script>