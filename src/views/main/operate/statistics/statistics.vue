<template>
  <div class="statistics">
    <el-row :gutter="10">
      <el-col :span="8">
        <gf-card title="设备数量分布图(广州市)">
          <pie-echart />
        </gf-card>
      </el-col>
      <el-col :span="8">
        <gf-card title="订单统计图(每日)">
          <rose-echart />
        </gf-card>
      </el-col>
      <el-col :span="8">
        <gf-card title="工单统计图">
          <ring-echart />
        </gf-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <gf-card title="设备数量分布图(折线图)">
          <line-echart />
        </gf-card>
      </el-col>
      <el-col :span="12">
        <gf-card title="城市点位分布图">
          <bar-echart />
        </gf-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GfCard from '@/base-ui/card/card.vue'

import pieEchart from './echarts/pie-echart.vue'
import roseEchart from './echarts/rose-echart.vue'
import ringEchart from './echarts/ring-echart.vue'
import lineEchart from './echarts/line-echart.vue'
import barEchart from './echarts/bar-echart.vue'

export default {
  name: 'Statistics',
  components: {
    GfCard,
    pieEchart,
    roseEchart,
    ringEchart,
    lineEchart,
    barEchart
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
