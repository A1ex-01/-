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
      <div class="checkout">
        <img :src="checkoutBtn" @click="sliderStatus = true" alt="" />
        <Transition name="slider">
          <div class="mask" v-if="sliderStatus">
            <span
              :class="{ checked: local === 'zhCn' }"
              @click="changeLanguage('zhCn')"
              >中文</span
            ><span
              :class="{ checked: local === 'en' }"
              @click="changeLanguage('en')"
              >英文</span
            >
          </div>
        </Transition>
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
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, getCurrentInstance } from "vue"
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
import checkoutBtn from "@/assets/img/checkoutLanguage.svg"
export default defineComponent({
  setup() {
    const app = getCurrentInstance()
    const sliderStatus = ref(false)
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
    const getLanguage = () => {
      const baseLocal = "zhCn"
      const local = LocalCache.getCache("language")
      if (local) {
        return local === baseLocal ? baseLocal : "en"
      } else {
        localStorage.setItem("language", baseLocal)
        return baseLocal
      }
    }
    const local = ref(getLanguage())
    const changeLanguageRoot: any = inject("changeLocale")
    const changeLanguage = (locale: string) => {
      LocalCache.setCache("language", locale)
      changeLanguageRoot(locale)
      local.value = locale
      app!.appContext.config.globalProperties.$i18n.locale = locale
      sliderStatus.value = false
      // 更新语言
    }
    return {
      name,
      exit,
      changeLanguage,
      local,
      CircleCloseFilled,
      EditPen,
      Management,
      UserFilled,
      checkoutBtn,
      sliderStatus
    }
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
.checkout {
  position: relative;
  > img {
    width: 50%;
    height: 50%;
  }
  > .mask {
    position: absolute;
    left: 0%;
    top: 65px;
    width: 132px;
    background-color: white;
    z-index: 22;
    transform: translateX(calc(-50% + 20px));
    box-shadow: 0 0 10px 3px #ccc;
    border-radius: 10px;
    overflow: hidden;
    > span {
      display: block;
      width: 100%;
      line-height: 32px;
      text-align: center;
      color: #000;
      &.checked {
        background-color: #409eff;
        color: white;
      }
    }
  }
}

.slider-enter-active,
.slider-leave-active {
  transition: all 0.3s ease-in;
}
.slider-enter-from {
  opacity: 0;
  transform: translateX(calc(-50% + 20px)) translateY(30px) !important;
}
.slider-enter-to {
  opacity: 1;
  transform: translateX(calc(-50% + 20px)) translateY(0px) !important;
}
.slider-leave-from {
  opacity: 1;
  transform: translateX(calc(-50% + 20px)) translateY(0px) !important;
}
.slider-leave-to {
  opacity: 0;
  transform: translateX(calc(-50% + 20px)) translateY(30px) !important;
}
</style>
