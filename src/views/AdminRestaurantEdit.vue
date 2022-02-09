<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm 
    :initial-restaurant="restaurant"
    @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue"

const dummyData = 
{
  "restaurant": {
      "id": 1,
      "name": "Demario Kihn",
      "tel": "1-649-387-2568 x52703",
      "address": "3027 Vanessa Views",
      "opening_hours": "08:00",
      "description": "Voluptatem autem vel.\nDeserunt expedita voluptatem esse laudantium.\nLaborum ea error quae consequatur ullam atque labore distinctio.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.134166118954944",
      "CategoryId": 1,
  }
}

export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        tel: '',
        address: '',
        openingHours: '',
        description: '',
        image: '',
        categoryId: '',
      }
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    handleAfterSubmit (formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    },
    fetchRestaurant (restaurantId) {
      console.log('restaurantId', restaurantId)
      const { restaurant } = dummyData
      const {id, name, address, opening_hours: openingHours, description, image, CategoryId: categoryId } = restaurant
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        address,
        openingHours,
        description,
        image,
        categoryId
      }
    }
  }
}
</script>