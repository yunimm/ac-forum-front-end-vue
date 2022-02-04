<template>
    <div class="col-3">
      <router-link 
      :to="{ name: 'user', params: { id: user.id } }"
      >
        <img
          :src= user.image
          width="140px"
          height="140px"
        >
      </router-link>
      <h2>{{ user.name }}</h2>
      <span class="badge badge-secondary">追蹤人數：3</span>
      <p class="mt-3">
        <button
          v-if="user.isFollowed"
          @click.stop.prevent="deleteFollowed()"
          type="button"
          class="btn btn-danger"
        >
          取消追蹤
        </button>
        <button
          v-else
          @click.stop.prevent="addFollowed()"
          type="button"
          class="btn btn-primary"
        >
          追蹤
        </button>
      </p>
    </div>
</template>

<script>
export default {
  props: {
    initialUsers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUsers
    }
  },
  methods: {
    addFollowed() {
      this.user = {
        ...this.user,
        isFollowed: true
      }
    },
    deleteFollowed() {
        this.user = {
        ...this.user,
        isFollowed: false
      }
    }
  }
}
</script>

