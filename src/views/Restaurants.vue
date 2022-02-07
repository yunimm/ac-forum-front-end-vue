<template>
  <div class="container py-5">
    <NavTabs />
    <!-- RestaurantsPills -->
    <RestaurantsNavPills :categories = "categories"/>
    <div class="row">
      <!-- RestaurantCard -->
      <RestaurantCard 
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant = "restaurant"
      />
    </div>
    <!-- RestaurantPagination -->
    <RestaurantsPagination 
    :current-page = "currentPage"
    :total-page = "totalPage"
    :previous-page = "previousPage"
    :next-page = "nextPage"
    :category-id = "categoryId"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'

const dummyData = 
{
  "restaurants": [
      {
          "id": 1,
          "name": "Demario Kihn",
          "tel": "1-649-387-2568 x52703",
          "address": "3027 Vanessa Views",
          "opening_hours": "08:00",
          "description": "Voluptatem autem vel.\nDeserunt expedita voluptatem",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.134166118954944",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 2,
          "name": "Felix Schaefer",
          "tel": "192.785.0250 x0601",
          "address": "9212 Roslyn Park",
          "opening_hours": "08:00",
          "description": "Ea quis vitae nihil unde quo sunt blanditiis est.\n",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.63413059059406",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 3,
          "name": "Josue Dare",
          "tel": "(235) 637-2356 x402",
          "address": "298 Wolf Harbor",
          "opening_hours": "08:00",
          "description": "et",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.60231473468964",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 4,
          "name": "Mrs. Vergie Rippin",
          "tel": "239-009-9305 x41226",
          "address": "68346 Michaela Ranch",
          "opening_hours": "08:00",
          "description": "ut explicabo est",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.447895179724263",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 5,
          "Category": {
              "id": 5,
              "name": "素食料理",
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 5,
          "name": "Gabe Ledner",
          "tel": "251-402-6416",
          "address": "857 Julian Cove",
          "opening_hours": "08:00",
          "description": "Quis voluptate facilis molestiae quibusdam aut odi",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.879709091898313",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 6,
          "name": "Justine Littel",
          "tel": "712-250-8484 x70023",
          "address": "2039 Felicity Grove",
          "opening_hours": "08:00",
          "description": "Sapiente minima nisi et et. Repellendus illum vel ",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.812941945441732",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 7,
          "name": "Mr. Nolan Kohler",
          "tel": "908-302-5705",
          "address": "927 Dovie Parks",
          "opening_hours": "08:00",
          "description": "Porro numquam quia provident aut qui magni non del",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.646883306394304",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 8,
          "name": "Dee Metz",
          "tel": "(886) 964-0007",
          "address": "3201 Sterling Union",
          "opening_hours": "08:00",
          "description": "Iusto rerum quas repellendus nihil saepe. Cum amet",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.96380221993283",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 9,
          "name": "Rashad Huels",
          "tel": "056-876-1362 x9886",
          "address": "1588 Randy Orchard",
          "opening_hours": "08:00",
          "description": "Cum numquam similique nihil aliquam natus at facer",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.83847880570441",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 10,
          "name": "Dr. Maryam Beer",
          "tel": "767-042-2172 x84773",
          "address": "83774 Emmerich Crescent",
          "opening_hours": "08:00",
          "description": "quasi",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.84422443927308",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      }
  ],
  "categories": [
      {
          "id": 1,
          "name": "中式料理",
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z"
      },
      {
          "id": 2,
          "name": "日本料理",
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z"
      },
      {
          "id": 3,
          "name": "義大利料理",
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z"
      },
      {
          "id": 4,
          "name": "墨西哥料理",
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z"
      },
      {
          "id": 5,
          "name": "素食料理",
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z"
      },
      {
          "id": 6,
          "name": "美式料理",
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z"
      },
      {
          "id": 7,
          "name": "複合式料理",
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z"
      }
  ],
  "categoryId": "",
  "page": 1,
  "totalPage": [
      1,
      2,
      3,
      4,
      5
  ],
  "prev": 1,
  "next": 2
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination

  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }
}
</script>