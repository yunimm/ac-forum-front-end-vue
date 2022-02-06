<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="profile.image" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ profile.name }}</h5>
        <p class="card-text">{{ profile.email }}</p>
        <ul class="list-unstyled list-inline">
          <li><strong>33</strong> 已評論餐廳</li>
          <li><strong>2</strong> 收藏的餐廳</li>
          <li><strong>0</strong> followings (追蹤者)</li>
          <li><strong>1</strong> followers (追隨者)</li>
        </ul>
        <p></p>
        <form action="/following/3" method="POST" style="display: contents">
          <button
            v-if="profile.isFollowed"
            @click.stop.prevent="deleteFollow()"
            type="submit"
            class="btn btn-primary"
          >
            追蹤
          </button>
          <button 
          v-else 
          @click.stop.prevent="addFollow()"
          type="submit" class="btn btn-danger">已追蹤</button>
        </form>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      profile: this.initialProfile
    }
  },
  methods: {
    addFollow () {
      this.profile = {
        ...this.profile,
        isFollowed: true,
      }
    },
    deleteFollow () {
      this.profile = {
        ...this.profile,
        isFollowed: false,
      }
    },
  },
}
</script>
