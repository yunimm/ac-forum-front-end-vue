// ./src/views/SignIn.vue
<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        :disabled="isProssing"
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      email: "",
      password: "",
      isProssing: false,
    };
  },
  methods: {
    async handleSubmit(e) {
      try {
        if (!this.email || !this.password) {
          // 顯示錯誤提示
          Toast.fire({
            icon: "warning",
            title: "請填入 email 和 password",
          });
          return;
        }

        this.isProssing = true;

        // 向後端驗證使用者登入資訊是否合法
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });

        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // 將token存放在localStorage內
        localStorage.setItem("token", data.token);

        // 轉址到首頁
        this.$router.push("/restaurants");
      } catch (e) {
        this.isProssing = false;
        this.password = "";
        // 顯示錯誤提示
        Toast.fire({
          icon: "warning",
          title: "輸入的帳號密碼有誤",
        });
        console.log("error", error);
      }
    },
  },
};
</script>
