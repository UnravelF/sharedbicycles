<template>
  <div class="bar-echart">
    <div ref="barDivRef" :style="{ width: width, height: height }"></div>
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
      const Ref = this.$refs.barDivRef
      var barEchart = echarts.init(Ref)

      var option = {
        xAxis: {
          data: [],
          axisLabel: {
            inside: true,
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#999'
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            data: [],
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ])
              }
            }
          }
        ]
      }

      const cityList = this.$store.state.cityList
      cityList.map((item) => {
        option.xAxis.data.push(item.area.slice(3))
        option.series[0].data.push(item.amount)
      })

      barEchart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped></style>
