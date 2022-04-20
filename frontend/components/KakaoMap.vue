<template>
  <div class="center">
    <div class="map_wrap" :style="computedSize">
      <div id="kakaoMap" style="width:100%;height:100%;position:relative;overflow:hidden;" />
      <!-- 지도타입 컨트롤 div 입니다 -->
      <div class="custom_typecontrol radius_border">
        <span id="btnRoadmap" class="selected_btn" @click="setMapType('roadmap')">지도</span>
        <span id="btnSkyview" class="btn" @click="setMapType('skyview')">스카이뷰</span>
      </div>
      <!-- 지도 확대, 축소 컨트롤 div 입니다 -->
      <div class="custom_zoomcontrol radius_border">
        <span @click="zoomIn"><img src="~/assets/images/kakaoMap/ico_plus.png" alt="확대"></span>
        <span @click="zoomOut"><img src="~/assets/images/kakaoMap/ico_minus.png" alt="축소"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KakaoMap",
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '600px',
    }
  },
  data() {
    return {
      map: null,
      lat: 34.92571130928342,
      lng: 127.49242927696554,
      id: 0,
    }
  },
  computed: {
    computedSize() {
      return {
        width: this.width,
        height: this.height,
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      // 0. 현재 위도경도를 가져온다.
      const info = await this.fetchLocationQuery('은빛사랑채노인복지센터');
      const filteredInfo = this.$_.find(info.documents, (item) => {
        return item.address_name.startsWith('전남');
      });
      this.lng = filteredInfo.x;
      this.lat = filteredInfo.y;
      this.id = filteredInfo.id;
      
      console.log(filteredInfo);
      // 1. 지도를 그려준다.
      if (window.kakao && window.kakao.maps) {
        this.initKakaoMap();
      } else {
        this.loadScript();
      }
    },
    initKakaoMap() {
      const container = document.getElementById('kakaoMap');
      const centerPosition = new kakao.maps.LatLng(this.lat, this.lng);
      const options = {
        center: centerPosition,
        level: 2,
      };
      this.map = new kakao.maps.Map(container, options);

      this.createMarker(centerPosition);
    },
    loadScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initKakaoMap);
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${this.$config.kakaoAppKey}&libraries=services`;
      document.head.appendChild(script);
    },
    createMarker(centerPosition) {
      const marker = new kakao.maps.Marker({
        position: centerPosition,
        clickable: true
      });
      marker.setMap(this.map);

      // 인포윈도우를 생성합니다
      // const infowindow = new kakao.maps.InfoWindow({
      //   content: '<div>마커정보</div>',
      //   removable: true
      // });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', () => {
        // 마커 위에 인포윈도우를 표시합니다
        // infowindow.open(this.map, marker);
        window.open(`http://map.kakao.com/link/map/${this.id}`, '');
      });
    },
    /* AJAX */
    async fetchLocationQuery(query) {
      const res = await this.$axios.$get(`//dapi.kakao.com/v2/local/search/keyword?query=${query}`, {
        headers: {
          Authorization: `KakaoAK ${this.$config.kakaoRestKey}`
        }
      });
      return res;
    },
    /* Event */
    setMapType(mapType) {
      const roadmapControl = document.getElementById('btnRoadmap');
      const skyviewControl = document.getElementById('btnSkyview');
      if (mapType === 'roadmap') {
        this.map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
        roadmapControl.className = 'selected_btn';
        skyviewControl.className = 'btn';
      } else {
        this.map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
        skyviewControl.className = 'selected_btn';
        roadmapControl.className = 'btn';
      }
    },
    zoomIn() {
      this.map.setLevel(this.map.getLevel() - 1);
    },
    zoomOut() {
      this.map.setLevel(this.map.getLevel() + 1);
    }
  },
}
</script>
<style scoped>
.center {
  display: flex;
  justify-content: center;
}
.map_wrap {position:relative;overflow:hidden;width:100%;height:350px;}
.radius_border{border:1px solid #919191;border-radius:5px;box-sizing: content-box;}
.custom_typecontrol {position:absolute;top:10px;right:10px;overflow:hidden;width:130px;height:30px;margin:0;padding:0;z-index:1;font-size:12px;font-family:'Malgun Gothic', '맑은 고딕', sans-serif;}
.custom_typecontrol span {display:block;width:65px;height:30px;float:left;text-align:center;line-height:30px;cursor:pointer;}
.custom_typecontrol .btn {background:#fff;background:linear-gradient(#fff,  #e6e6e6);}
.custom_typecontrol .btn:hover {background:#f5f5f5;background:linear-gradient(#f5f5f5,#e3e3e3);}
.custom_typecontrol .btn:active {background:#e6e6e6;background:linear-gradient(#e6e6e6, #fff);}
.custom_typecontrol .selected_btn {color:#fff;background:#425470;background:linear-gradient(#425470, #5b6d8a);}
.custom_typecontrol .selected_btn:hover {color:#fff;}
.custom_zoomcontrol {position:absolute;top:50px;right:10px;width:36px;height:80px;overflow:hidden;z-index:1;background-color:#f5f5f5;}
.custom_zoomcontrol span {display:block;width:36px;height:40px;text-align:center;cursor:pointer;}
.custom_zoomcontrol span img {width:15px;padding:12px 0;border:none;}
.custom_zoomcontrol span:first-child{border-bottom:1px solid #bfbfbf;}
</style>