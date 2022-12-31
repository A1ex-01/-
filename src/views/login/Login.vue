<template>
  <div class="login">
    <LoginPanel></LoginPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LoginPanel from "./cpns/LoginPanel.vue"
export default defineComponent({
  setup() {
    return {}
  },
  components: {
    LoginPanel
  }
})
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("http://a1ex.vip:8004/default-cover");
  background-size: cover;
}
</style>
