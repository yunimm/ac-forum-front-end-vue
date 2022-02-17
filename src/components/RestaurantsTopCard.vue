<template>
  <div class="card mb-3" style="max-width: 540px; margin: auto">
    <div class="row no-gutters">
      <div class="col-md-4">
        <a href="#">
          <img class="card-img" :src="restaurant.image | emptyImage" />
        </a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ restaurant.name }}
          </h5>
          <span class="badge badge-secondary"
            >收藏數：{{ restaurant.FavoriteCount }}</span
          >
          <p class="card-text">
            {{ restaurant.description }}
          </p>
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            class="btn btn-primary mr-2"
            >Show</router-link
          >

          <button
            v-if="restaurant.isFavorited"
            @click.stop.prevent="deleteFavorite(restaurant.id)"
            type="button"
            class="btn btn-danger mr-2"
          >
            移除最愛
          </button>
          <button
            v-else
            @click.stop.prevent="addFavorite(restaurant.id)"
            type="button"
            class="btn btn-primary"
          >
            加到最愛
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
import usersAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";

export default {
  props: {
    initialRestaurant: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  mixins: [emptyImageFilter],
  methods: {
    async addFavorite(restaurantId) {
      try {
        // const response  改寫成 const { data }
        // 因為只需要取出res的data，故使用解構賦值取出
        const { data } = await usersAPI.addFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
      } catch (e) {
        console.log("error", e);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，請稍後再試",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
      } catch (e) {
        console.log("error", e);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移出最愛，請稍後再試",
        });
      }
    },
  },
};
</script>
