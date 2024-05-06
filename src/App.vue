<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="map" style="width: 100%;height: 400px;">

    </div>


    <div class="echarts-wrapper" ref="province_map" style="width: 400px;height: 400px;">

    </div>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  // import BMap from 'bmaplib'
  import * as echarts from "echarts"
  import {
    ChinaData,
    ProvinceData
  } from 'china-map-geojson';
  export default {
    name: 'app',
    components: {
      HelloWorld
    },
    mounted() {
      this.initMap()
      this.initEcharts()
    },
    methods: {
      randomData() {
        return Math.round(Math.random() * 100);
      },
      initMap() {

        var BMap = window.BMap || {};
        var map = new BMap.Map("map")

        var point = new BMap.Point(116.404, 39.915); // 创建点坐标  
        map.centerAndZoom(point, 6); // 初始化地图，设置中心点坐标和地图级别  
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
          mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]
        }));
        map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        //单击获取点击的经纬度
        map.addEventListener("click", function(e) {
          alert(e.point.lng + "," + e.point.lat);
        });
      },
      initEcharts() {
        let colorArr = ['#EFED1E', '#01F408', '#EE3A3B', '#4ADBEC', '#0FEEFB'];
        var myChart = echarts.init(this.$refs.province_map, null, {
          renderer: 'canvas',
          useDirtyRect: false
        });
        echarts.registerMap('湖南', ProvinceData.Hunan);
        const data = [{
          name: '长沙市',
          value: this.randomData()
        }, {
          name: '株洲市',
          value: this.randomData()
        }, {
          name: '湘潭市',
          value: this.randomData()
        }, {
          name: '衡阳市',
          value: this.randomData()
        }, {
          name: '常德市',
          value: this.randomData(),
          label:{
            offset:[20,0]
          }
          
        }, {
          name: '张家界市',
          value: this.randomData()
        }, {
          name: '益阳市',
          value: this.randomData()
        }, {
          name: '郴州市',
          value: this.randomData()
        }, {
          name: '永州市',
          value: this.randomData(),
          label:{
            offset:[10,0]
          }
        }, {
          name: '怀化市',
          value: this.randomData()
        }, {
          name: '娄底市',
          value: this.randomData()
        },{
          name: '岳阳市',
          value: this.randomData()
        },{
          name: '邵阳市',
          value: this.randomData()
        }, {
          name: '湘西土家族苗族自治州',
          value: this.randomData()
        }];

        const option = {
          tooltip: {
            show: true,
            formatter: function(e) {
              var name = e.name ? e.name : '获取中';
              var value = e.value ? e.value : '暂无数据'
              return name + "：" + value;
            }
          },
          // visualMap: {
          //   show: false,
          //   min: 0,
          //   max: 100,
          //   inRange: {
          //     color: ['#0388FF']
          //   }
          // },
          emphasis:{
            disabled: false,
            label: {
              color: '#FFFFFF',
            },
            itemStyle: {
              borderWidth: 2,
              borderColor: '#36b4bf',
              areaColor: '#00EFFF',
              color: '#00EFFF',
            },                
          },
          geo: {
            map: '湖南',
            roam: false,
            zoom: 1.2,
            aspectScale: 0.9,
            itemStyle: {
              borderColor: '#36b4bf',
              areaColor: '#005568',
              color: '#005568'
            },
            emphasis:{
              disabled: false,
              label: {
                color: '#FFFFFF',
              },
              itemStyle: {
                borderWidth: 2,
                borderColor: '#36b4bf',
                areaColor: '#00EFFF',
                color: '#00EFFF',
              },                
            },
            select:{
              disabled: false,
              label: {
                color: '#FFFFFF',
              },
              itemStyle: {
                borderWidth: 2,
                borderColor: '#36b4bf',
                areaColor: '#00EFFF',
                color: '#00EFFF',
              },        
            }
          },
          series: [{
            type: 'map',
            map: '湖南',
            zoom: 1.2,
            aspectScale: 0.9,
            
            label: {
              show: true,
              color: '#00EFFF',
              position: ['50%', '50%'],
             overflow: 'break',
             width: 80
              
            },
            itemStyle: {
              borderWidth: 2,
              borderColor: '#36b4bf',
              areaColor: '#005568',
              color: '#005568',
            },
            select:{
              disabled: false,
              label: {
                color: '#FFFFFF',
              },
              itemStyle: {
                borderWidth: 2,
                borderColor: '#36b4bf',
                areaColor: '#00EFFF',
                color: '#00EFFF',
              },        
            },
            emphasis:{
              disabled: false,
              label: {
                color: '#FFFFFF',
              },
              itemStyle: {
                borderWidth: 2,
                borderColor: '#36b4bf',
                areaColor: '#00EFFF',
                color: '#00EFFF',
              },                
            },
            data: data
          }]

        };
        
        myChart.setOption(option);
        myChart.on('select',{ seriesIndex: 1 },(e)=>{
          console.log(e)
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>