<template>
  <div class="col-3">
    <router-link :to="{ name: 'user', params: { id: user.id } }">
      <img :src="user.image | emptyImage" width="140px" height="140px" />
    </router-link>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary">追蹤人數：{{ user.followerCount }}</span>
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        @click.stop.prevent="deleteFollowing(user.id)"
        type="button"
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.stop.prevent="addFollowing(user.id)"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
import usersAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";

export default {
  props: {
    initialUsers: {
      type: Object,
      required: true,
    },
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      user: this.initialUsers
    };
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
        console.log("data", data);
        
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.user = {
          ...this.user,
           isFollowed: true,
           followerCount: this.user.followerCount + 1,
           }

      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        
        this.user = {
          ...this.user, 
          isFollowed: false,
          followerCount: this.user.followerCount - 1,
          };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>
