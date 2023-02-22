<template>
  <div class="pie-echart">
    <div ref="pieDivRef" :style="{ width: width, height: height }"></div>
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
      const Ref = this.$refs.pieDivRef
      var pieEchart = echarts.init(Ref)

      var option = {
        title: {
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: '单车数量',
            type: 'pie',
            radius: '50%',
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      const cityList = this.$store.state.cityList
      cityList.map((item, index) => {
        option.series[0].data.push({
          name: item.area.slice(3),
          value: item.amount
        })
      })

      pieEchart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped></style>
