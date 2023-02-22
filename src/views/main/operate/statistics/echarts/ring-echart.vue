<template>
  <div class="ring-echart">
    <div ref="ringDivRef" :style="{ width: width, height: height }"></div>
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
  mounted() {
    this.initStatisticsData()
  },
  methods: {
    initStatisticsData() {
      const Ref = this.$refs.ringDivRef
      var ringEchart = echarts.init(Ref)

      var option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '工单数据',
            type: 'pie',
            radius: ['20%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: []
          }
        ]
      }

      const investCount = {
        name: '投放工单',
        value: this.$store.state.system.investCount
      }
      const repairCount = {
        name: '维修工单',
        value: this.$store.state.system.repairCount
      }
      const orderData = []
      orderData.push(investCount, repairCount)
      orderData.map((item) => {
        option.series[0].data.push(item)
      })

      ringEchart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped></style>
