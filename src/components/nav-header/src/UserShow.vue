<template>
  <div class="user-show">
    <div class="btns">
      <div class="chat">
        <el-icon size="20px"><chat-dot-round /></el-icon>
      </div>
      <div class="collect">
        <el-icon size="20px"><collection-tag /></el-icon>
      </div>
      <div class="message">
        <el-icon size="20px"><service /></el-icon>
      </div>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar size="small" style="margin-right: 6px">u</el-avatar>
        {{ name }}
        <el-icon class="el-icon--right">
          <ArrowDown />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="exit" :icon="CircleCloseFilled"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item :icon="EditPen">用户信息</el-dropdown-item>
          <el-dropdown-item :icon="Management">用户管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import LocalCache from "@/utils/cache"
import {
  ArrowDown,
  CircleCloseFilled,
  EditPen,
  Management,
  UserFilled,
  ChatDotRound,
  CollectionTag,
  Service
} from "@element-plus/icons-vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
export default defineComponent({
  setup() {
    // 获取用户头像和名字
    const store = useStore()
    const userInfo = computed(() => store.state.login.userInfo)
    const { name } = userInfo.value
    // 退出登录
    const router = useRouter()
    const exit = () => {
      LocalCache.clearCache()
      router.push("/login")
    }
    return { name, exit, CircleCloseFilled, EditPen, Management, UserFilled }
  },
  components: {
    ArrowDown,
    ChatDotRound,
    CollectionTag,
    Service
  }
})
</script>

<style scoped lang="scss">
.user-show {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .btns {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 6px;
    > div {
      height: 100%;
      width: 40px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.el-dropdown-link {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
