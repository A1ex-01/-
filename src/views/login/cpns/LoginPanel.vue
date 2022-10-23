<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs stretch type="border-card" v-model="currentTab" class="demo-tabs">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="psw-check">
      <el-checkbox v-model="pswStatus" label="记住密码" size="small" />
      <span class="forgetpsw">忘记密码</span>
    </div>
    <div class="loginin">
      <el-button type="primary" class="loginbtn" @click="submit"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { Iphone, UserFilled } from "@element-plus/icons-vue"
import LoginPhone from "./LoginPhone.vue"
import LoginAccount from "./LoginAccount.vue"
export default defineComponent({
  setup() {
    // 账号登录实例
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    // 手机登录实例
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    // 是否记住密码
    const pswStatus = ref(false)
    // 当前tab值
    const currentTab = ref("account")
    // 提交
    const submit = () => {
      if (currentTab.value === "account") {
        accountRef.value?.submitForm(accountRef.value?.formRef, pswStatus.value)
      } else {
        phoneRef.value?.submitForm(phoneRef.value?.formRef, pswStatus.value)
      }
    }
    return {
      pswStatus,
      submit,
      accountRef,
      currentTab,
      phoneRef
    }
  },
  components: {
    Iphone,
    UserFilled,
    LoginAccount,
    LoginPhone
  }
})
</script>

<style scoped lang="scss">
.login-panel {
  margin-bottom: 150px;
  padding: 50px 150px;
  border-radius: 30px;
  box-shadow: 0 0 10px #fff;
  background-color: white;
  .title {
    text-align: center;
  }
}
.psw-check {
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  .forgetpsw {
    color: #409eff;
    cursor: pointer;
  }
}
.loginin {
  // width: 100%;
  .loginbtn {
    width: 100%;
    background-color: #409eff;
    color: white;
  }
}
</style>
