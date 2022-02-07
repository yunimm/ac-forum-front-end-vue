<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <hr>
    <RestaurantsTopCard 
    v-for="restaurant in restaurants"
    :key="restaurant.id"
    :initial-restaurant = "restaurant"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantsTopCard from './../components/RestaurantsTopCard.vue'
const dummyData = 
{
  "restaurants": [
      {
          "id": 50,
          "name": "Ayana Wisoky",
          "tel": "1-895-188-6023 x01668",
          "address": "9820 Green Lakes",
          "opening_hours": "08:00",
          "description": "Et id voluptatibus esse distinctio. Fugit quisquam",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.85643302494314",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 49,
          "name": "Mr. Jordyn Metz",
          "tel": "(172) 036-5002 x4273",
          "address": "8022 Amiya Extension",
          "opening_hours": "08:00",
          "description": "Modi est odit. Consequatur explicabo rem. Omnis li",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.43590000076023",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 48,
          "name": "Neva Quitzon",
          "tel": "687.666.7377 x029",
          "address": "7169 Fredrick Centers",
          "opening_hours": "08:00",
          "description": "Temporibus et sapiente sapiente non est non quasi ",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.20046960035271",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 5,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 47,
          "name": "Drake Reilly",
          "tel": "1-079-842-5524 x3514",
          "address": "2216 Wisozk Ports",
          "opening_hours": "08:00",
          "description": "Et provident velit autem ab ut id facilis. Assumen",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.66528519950528",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 46,
          "name": "Arnoldo Kilback II",
          "tel": "(216) 289-8187 x73717",
          "address": "2356 Chadd Square",
          "opening_hours": "08:00",
          "description": "Voluptatibus assumenda corrupti.\nOmnis quo non iur",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.68389419219231",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 5,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 45,
          "name": "Dejon Willms",
          "tel": "1-703-013-1126 x49936",
          "address": "71101 Halvorson Club",
          "opening_hours": "08:00",
          "description": "reiciendis",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.2670867380246484",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 44,
          "name": "Dalton Sanford",
          "tel": "498-550-9949 x841",
          "address": "3116 Mohamed Neck",
          "opening_hours": "08:00",
          "description": "quia",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.283205532860244",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 4,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 43,
          "name": "Buford Hoeger",
          "tel": "1-896-563-7837",
          "address": "129 Kautzer Streets",
          "opening_hours": "08:00",
          "description": "iure",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.10600055254315",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 1,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 42,
          "name": "Toy Baumbach",
          "tel": "(926) 790-5310 x85261",
          "address": "10483 Winston Heights",
          "opening_hours": "08:00",
          "description": "doloremque quia deserunt",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.46949701081501",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 2,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 41,
          "name": "Minerva Hegmann",
          "tel": "1-261-163-8146 x706",
          "address": "430 Lamar Falls",
          "opening_hours": "08:00",
          "description": "Eveniet nisi fuga cupiditate perferendis facere in",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.512109088081935",
          "viewCounts": 0,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "CategoryId": 4,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      }
  ]
}
export default {
  components: {
    NavTabs,
    RestaurantsTopCard
  },
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurantsTop()
  },
  methods: {
    fetchRestaurantsTop () {
      const { restaurants } = dummyData
      this.restaurants = restaurants  
    }
  }
}
</script>