<template>
  <div class="rose-echart">
    <div ref="roseDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '360px'
    }
  },
  async mounted() {
    this.initStatisticsData()
  },
  methods: {
    initStatisticsData() {
      const Ref = this.$refs.roseDivRef
      var roseEchart = echarts.init(Ref)

      var option = {
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '今日订单数据',
            type: 'pie',
            radius: [10, 80],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: []
          }
        ]
      }

      const orderCount = {
        name: '进行中',
        value: this.$store.state.system.orderCount
      }
      const finishCount = {
        name: '已完成',
        value: this.$store.state.system.finishCount
      }
      const orderData = []
      orderData.push(orderCount, finishCount)
      orderData.map((item) => {
        option.series[0].data.push(item)
      })

      roseEchart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped></style>
