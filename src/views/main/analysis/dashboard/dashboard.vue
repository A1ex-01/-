<template>
  <div class="dashboard">
    <el-row :gutter="12">
      <el-col :span="7">
        <AxCard title="分类商品数量(饼图)"
          ><BaseEchart :option="categoryGoodsCount"></BaseEchart
        ></AxCard>
      </el-col>
      <el-col :span="10"
        ><AxCard title="不同城市商品销量"
          ><BaseEchart :option="addressGoodsSale"></BaseEchart></AxCard
      ></el-col>
      <el-col :span="7"
        ><AxCard title="分类商品数量(玫瑰图)"
          ><BaseEchart :option="roseGetter"></BaseEchart></AxCard
      ></el-col>
    </el-row>
    <el-row :gutter="12" style="margin-top: 12px">
      <el-col :span="12"
        ><AxCard title="分类商品的销量"
          ><BaseEchart :option="categoryGoodsSale"></BaseEchart></AxCard
      ></el-col>
      <el-col :span="12"
        ><AxCard title="分类商品的收藏"
          ><BaseEchart :option="categoryGoodsFavor"></BaseEchart></AxCard
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { AxCard } from "@/base-ui/card/index"
import { useStore } from "vuex"
import { BaseEchart } from "@/base-ui/ecahrt/index"
export default defineComponent({
  name: "dashboard",
  setup() {
    // 获取数据
    const store = useStore()
    store.dispatch("dashBorderModule/getAllViewShow")
    const categoryGoodsCount = computed(
      () => store.state.dashBorderModule.categoryGoodsCount
    )
    const roseGetter = computed(
      () => store.getters["dashBorderModule/categoryGoodsCounted"]
    )
    const categoryGoodsSale = computed(
      () => store.state.dashBorderModule.categoryGoodsSale
    )
    const categoryGoodsFavor = computed(
      () => store.state.dashBorderModule.categoryGoodsFavor
    )
    const addressGoodsSale = computed(
      () => store.state.dashBorderModule.addressGoodsSale
    )
    return {
      categoryGoodsCount,
      addressGoodsSale,
      roseGetter,
      categoryGoodsSale,
      categoryGoodsFavor
    }
  },
  components: { AxCard, BaseEchart }
})
</script>

<style scoped lang="scss">
.dashboard {
  // background-color: white;
  .echarts {
    width: 500px;
    height: 500px;
  }
}
</style>
