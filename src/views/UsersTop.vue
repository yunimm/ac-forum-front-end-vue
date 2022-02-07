<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
    <UserCards
    v-for="user in users"
    :initial-users = "users"
    :key="user.id"
    />
    </div>
  </div>
</template>
<script>
import NavTabs from './../components/NavTabs.vue'
import UserCards from './../components/UserCards.vue'

const dummyData = 
{
  "users": [
      {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$5T8asqkynon1GHqoGUh4c.LHLuZLzSsMoI7BpSee1y6TCkj2NteGW",
          "isAdmin": true,
          "image": "https://media.istockphoto.com/photos/cats-are-curious-picture-id882201722?k=20&m=882201722&s=612x612&w=0&h=fu19nh_gb0VAc2oAPkjQRdPr79p2s5wlvrBm4BrnVkk=",
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": true
      },
      {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$n5e.nfYH1I3MLifJ76QLdO7CSTdQeuh2.bqIuVt4HPAD1jCas0Nym",
          "isAdmin": false,
          "image": "https://media.istockphoto.com/photos/cats-are-curious-picture-id882201722?k=20&m=882201722&s=612x612&w=0&h=fu19nh_gb0VAc2oAPkjQRdPr79p2s5wlvrBm4BrnVkk=",
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      },
      {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$iRaqwvDraMEtS.YX.U4Ih.loiHwFSUkH0sitSnR0IUAJjfQIuhrZi",
          "isAdmin": false,
          "image": "https://media.istockphoto.com/photos/cats-are-curious-picture-id882201722?k=20&m=882201722&s=612x612&w=0&h=fu19nh_gb0VAc2oAPkjQRdPr79p2s5wlvrBm4BrnVkk=",
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      }
  ]
}
export default {
  components: {
    NavTabs,
    UserCards
  },
  data() {
    return {
      users: []
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    fetchUsers () {
      const {
        users
      } = dummyData
      this.users = users
    }
  }
}
</script>