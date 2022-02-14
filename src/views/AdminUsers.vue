<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.name }}</td>
          <td>
            <button
              v-if="user.isAdmin"
              @click.stop.prevent="toggleUserRole(user.id)"
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
            <button
              v-else
              @click.stop.prevent="toggleUserRole(user.id)"
              type="button"
              class="btn btn-link"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav.vue"

const dummyUser =
{
  "users": [
      {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$5T8asqkynon1GHqoGUh4c.LHLuZLzSsMoI7BpSee1y6TCkj2NteGW",
          "isAdmin": true,
          "image": null,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z"
      },
      {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$n5e.nfYH1I3MLifJ76QLdO7CSTdQeuh2.bqIuVt4HPAD1jCas0Nym",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z"
      },
      {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$iRaqwvDraMEtS.YX.U4Ih.loiHwFSUkH0sitSnR0IUAJjfQIuhrZi",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-01-29T14:48:43.000Z",
          "updatedAt": "2022-01-29T14:48:43.000Z"
      }
  ]
}

export default {
  components: {
    AdminNav
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
      this.users = dummyUser.users
    },
    toggleUserRole(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          }
        }
        return user
      })
    }
  }
}
</script>