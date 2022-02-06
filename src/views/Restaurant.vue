<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant"/>
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comments="restaurantComments"
    @after-delete-comment="afterDeleteComment"/>
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id ="restaurant.id"
    @after-create-comment="afterCreateComment"/>
  </div>
</template>

<script>
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
      "viewCounts": 1,
      "createdAt": "2022-01-29T14:48:43.000Z",
      "updatedAt": "2022-02-05T07:43:51.848Z",
      "CategoryId": 1,
      "Category": {
          "id": 1,
          "name": "中式料理",
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z"
      },
      "FavoritedUsers": [],
      "LikedUsers": [],
      "Comments": [
          {
              "id": 1,
              "text": "Et rerum porro veritatis laudantium.",
              "UserId": 2,
              "RestaurantId": 1,
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z",
              "User": {
                  "id": 2,
                  "name": "user1",
                  "email": "user1@example.com",
                  "password": "$2a$10$n5e.nfYH1I3MLifJ76QLdO7CSTdQeuh2.bqIuVt4HPAD1jCas0Nym",
                  "isAdmin": false,
                  "image": null,
                  "createdAt": "2022-01-29T14:48:43.000Z",
                  "updatedAt": "2022-01-29T14:48:43.000Z"
              }
          },
          {
              "id": 51,
              "text": "A ea ducimus nostrum velit qui voluptas est ea.",
              "UserId": 3,
              "RestaurantId": 1,
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z",
              "User": {
                  "id": 3,
                  "name": "user2",
                  "email": "user2@example.com",
                  "password": "$2a$10$iRaqwvDraMEtS.YX.U4Ih.loiHwFSUkH0sitSnR0IUAJjfQIuhrZi",
                  "isAdmin": false,
                  "image": null,
                  "createdAt": "2022-01-29T14:48:43.000Z",
                  "updatedAt": "2022-01-29T14:48:43.000Z"
              }
          },
          {
              "id": 101,
              "text": "Totam magni ab.",
              "UserId": 3,
              "RestaurantId": 1,
              "createdAt": "2022-01-29T14:48:43.000Z",
              "updatedAt": "2022-01-29T14:48:43.000Z",
              "User": {
                  "id": 3,
                  "name": "user2",
                  "email": "user2@example.com",
                  "password": "$2a$10$iRaqwvDraMEtS.YX.U4Ih.loiHwFSUkH0sitSnR0IUAJjfQIuhrZi",
                  "isAdmin": false,
                  "image": null,
                  "createdAt": "2022-01-29T14:48:43.000Z",
                  "updatedAt": "2022-01-29T14:48:43.000Z"
              }
          }
      ]
  },
  "isFavorited": false,
  "isLiked": false
}
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'
export default {
  name: 'restaurant',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        CategoryName: '',
        image: '',
        opening_hours: '',
        tel:'',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser  
    }
  },
  created () {
    // 帶入id
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      const { restaurant, isFavorited, isLiked } = dummyData
      const { 
        id,
        name,
        Category,
        image,
        // 因為ESLint規範，修改變數名稱
        opening_hours: openingHours,
        tel,
        address,
        description,
        Comments
      } = restaurant

      this.restaurant = {
        id,
        name,
        CategoryName: Category ? Category.name : '未分類',
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked 
      }
      this.restaurantComments = Comments
    },
    afterDeleteComment (commentId) {
      this.restaurantComments = this.restaurantComments.filter(comment => 
        comment.id != commentId
      )
    },
    afterCreateComment (payload) {
      console.log('payload',payload)
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  }
}
</script>