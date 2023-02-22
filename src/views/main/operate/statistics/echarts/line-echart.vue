<template>
  <div class="line-echart">
    <div ref="lineDivRef" :style="{ width: width, height: height }"></div>
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
      const Ref = this.$refs.lineDivRef
      var lineEchart = echarts.init(Ref)

      var option = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {},
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '设备数量',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: []
          }
        ]
      }
      const cityList = this.$store.state.cityList
      cityList.map((item, index) => {
        option.series[0].data.push(item.amount)
        option.xAxis[0].data.push(item.area.slice(3))
      })

      lineEchart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped></style>
