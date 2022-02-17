<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UserCards v-for="user in users" :initial-users="user" :key="user.id" />
    </div>
  </div>
</template>
<script>
import NavTabs from "./../components/NavTabs.vue";
import UserCards from "./../components/UserCards.vue";
import usersAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
    UserCards,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();
        console.log(data)
        // 使用map改FollowerCount大小寫
        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }));
      } catch (error) {
        console.log("error:", error);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
    // async addFollowing(userId) {
    //   try {
    //     const { data } = await usersAPI.addFollowing({ userId });
    //     console.log("data", data);
    //     if (data.status !== "success") {
    //       throw new Error(data.message);
    //     }
    //     this.users = data.users.map((user) => {
    //       if (user.id !== userId) {
    //         return user;
    //       } else {
    //         return {
    //           ...user,
    //           followerCount: user.followerCount + 1,
    //           isFollowed: true,
    //         };
    //       }
    //     });
    //   } catch (error) {
    //     Toast.fire({
    //       icon: "error",
    //       title: "無法加入追蹤，請稍後再試",
    //     });
    //   }
    // },
  },
};
</script>
