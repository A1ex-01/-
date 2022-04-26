<template>
  <div class="login-account">
    <el-form
      ref="formRef"
      :rules="rules"
      :model="accountInfo"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="acid">
        <el-input
          v-model.number="accountInfo.acid"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model.number="accountInfo.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { ElForm, ElMessage } from "element-plus"
import LocalCache from "@/utils/cache"
import store from "@/store"
export default defineComponent({
  setup() {
    let accountInfo = reactive({
      acid: "coderwhy",
      password: "123456"
    })
    // 输入规则
    const rules = {
      acid: [
        { required: true, message: "用户名是必传内容", trigger: "blur" },
        {
          pattern: /^[a-z0-9]{3,10}$/,
          message: "用户名必须是3-10个字符或数字",
          trigger: "blur"
        }
      ],
      password: [
        { required: true, message: "密码是必传内容", trigger: "blur" },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: "密码必须是5-10个字符或数字",
          trigger: "blur"
        }
      ]
    }
    // 登录逻辑
    const formRef = ref<InstanceType<typeof ElForm>>()
    const submitForm = (
      formRef: InstanceType<typeof ElForm> | undefined,
      pswStatus: boolean
    ) => {
      formRef?.validate((valid) => {
        if (valid) {
          const userInfo = {
            name: accountInfo.acid,
            password: accountInfo.password
          }
          if (pswStatus) {
            LocalCache.setCache("userInfo", userInfo)
          } else {
            LocalCache.delCache("userInfo")
          }
          store.dispatch("login/accountLoginAction", userInfo)
          ElMessage({
            message: "登录成功",
            type: "success"
          })
        } else {
          ElMessage({
            message: "请正确输入用户名或密码",
            type: "error"
          })
          return false
        }
      })
    }
    return {
      accountInfo,
      formRef,
      submitForm,
      rules
    }
  }
})
</script>

<style scoped lang="scss">
.demo-ruleForm {
  width: 300px;
}
</style>
