<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
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
      "updatedAt": "2022-02-05T07:43:51.000Z",
      "CategoryId": 1,
      "Category": {
          "id": 1,
          "name": "中式料理",
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z"
      },
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
  }
}
export default {
  data () {
    return {
      restaurant: dummyData.restaurant
    }
  }
}
</script>