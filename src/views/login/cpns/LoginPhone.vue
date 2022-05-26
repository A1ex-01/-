<template>
  <div class="login-phone">
    <el-form
      ref="formRef"
      :rules="rules"
      :model="accountInfo"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input
          v-model.number="accountInfo.phone"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input
          v-model.number="accountInfo.code"
          maxlength="6"
          type="password"
          autocomplete="off"
        />
        <el-button type="primary" class="get-code">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { ElForm, ElMessage } from "element-plus"
import LocalCache from "@/utils/cache"
export default defineComponent({
  setup() {
    let accountInfo = reactive({
      phone: "",
      code: ""
    })
    // 输入规则
    const rules = {
      phone: [
        { required: true, message: "手机号是必传内容", trigger: "blur" },
        {
          pattern:
            /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
          message: "手机号必须符合规范!",
          trigger: "blur"
        }
      ],
      code: [
        { required: true, message: "验证码是必传内容", trigger: "blur" },
        {
          pattern: /^[0-9]{6}$/,
          message: "验证码必须是6位数字",
          trigger: "blur"
        }
      ]
    }
    // 登陆逻辑
    const formRef = ref<InstanceType<typeof ElForm>>()
    const submitForm = (
      formEl: InstanceType<typeof ElForm> | undefined,
      pswStatus: boolean
    ) => {
      formEl?.validate((valid) => {
        if (valid) {
          if (pswStatus) {
            const userInfo = {
              acid: accountInfo.phone,
              password: accountInfo.code
            }
            LocalCache.setCache("userInfo", userInfo)
          }
          ;("phone submit!")
        } else {
          ElMessage({
            message: "请正确输入手机号或验证码",
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
::v-deep .el-form-item__content {
  flex-wrap: nowrap;
}
.get-code {
  margin-left: 10px;
}
</style>
