<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="profile.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="profile.image"
          :src="profile.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        >
        <input
          @change="handleFileChange"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  profile: {
    id: 1,
    name: "root",
    image: 'https://i.imgur.com/58ImzMM.png',
  },
}
export default {
  data() {
    return {
      profile: {
        id: -1,
        name: '',
        image: ''
      }
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchProfiles(id)
  },
  methods: {
    fetchProfiles (profileId) {
      console.log('profileId', profileId)
      const { profile } = dummyData
      const { id, name, image } = profile
      this.profile = {
        ...profile,
        id,
        name,
        image
      }
    },
    handleFileChange (e) {
    const { files } = e.target

    if (files.length === 0) {
      // 使用者沒有選擇上傳的檔案
      this.profile.image = ''
    } else {
      // 否則產生預覽圖
      const imageURL = window.URL.createObjectURL(files[0])
      this.profile.image = imageURL
    }
    },
    handleSubmit (e) {
      const form = e.target
      const formData = new FormData(form)
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>
