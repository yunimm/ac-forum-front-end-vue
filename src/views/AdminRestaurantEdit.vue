<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
        categoryId: "",
      },
      isProcessing: false
    };
  },
  created() {
    // 使用者第一次進來頁面，拉餐廳資料進來
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  beforeRouteUpdate(to, from, next){
    // 使用者路由改變時，拉餐廳資料進來
    const { id } = to.params;
    this.fetchRestaurant(id);
    next()
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({name: 'admin-restaurants'})
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: "error",
          title: "無法更新餐廳資料，請稍後再試",
        });
      }
    },
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetails({
          restaurantId,
        });

        const {
          id,
          name,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId,
        } = data.restaurant;
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          address,
          openingHours,
          description,
          image,
          categoryId,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法編輯餐廳，請稍後再試",
        });
      }
    },
  },
};
</script>
