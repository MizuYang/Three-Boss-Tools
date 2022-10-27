<template>
  <div class="d-flex mt-4">
    <div class="container">
      <div class="position-relative text-center border mb-5 py-4">
        <span class="progress-color-1" ref="progress-1"></span>
        <input type="text" placeholder="輸入角色名稱" class="my-2 ps-1">
        <h2 class="h1 mb-3">(1) 第一階段</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-time select-none mb-0 me-3 p-2">{{ showTime['1']?showTime['1']:' 2 分 40 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(1)" :disabled="time['1']<160000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(1)" :disabled="time['1']===160000">重置</button>
        </div>
      </div>
      <div class="position-relative text-center border mb-5 py-5">
        <span class="progress-color-2" ref="progress-2"></span>
        <h2 class="h1 mb-3">(2) 第二階段</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-time select-none mb-0 me-3 p-2">{{ showTime['2']?showTime['2']:' 1 分 20 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(2)" :disabled="time['2']<80000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(2)" :disabled="time['2']===80000">重置</button>
        </div>
      </div>
      <div class="position-relative text-center border py-5">
        <span class="progress-color-3" ref="progress-3"></span>
        <h2 class="h1 mb-3">(3) 第三階段</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-time select-none mb-0 me-3 p-2">{{ showTime['3']?showTime['3']:' 2 分 40 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(3)" :disabled="time['3']<160000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(3)" :disabled="time['3']===160000">重置</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="position-relative text-center border mb-5 py-4">
        <span class="progress-color-1" ref="progress-4"></span>
        <input type="text" placeholder="輸入角色名稱" class="my-2 ps-1">
        <h2 class="h1 mb-3">(4) 第一階段</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-time select-none mb-0 me-3 p-2">{{ showTime['4']?showTime['4']:' 2 分 40 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(4)" :disabled="time['4']<160000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(4)" :disabled="time['4']===160000">重置</button>
        </div>
      </div>
      <div class="position-relative text-center border mb-5 py-5">
        <span class="progress-color-2" ref="progress-5"></span>
        <h2 class="h1 mb-3">(5) 第二階段</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-time select-none mb-0 me-3 p-2">{{ showTime['5']?showTime['5']:' 1 分 20 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(5)" :disabled="time['5']<80000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(5)" :disabled="time['5']===80000">重置</button>
        </div>
      </div>
      <div class="position-relative text-center border py-5">
        <span class="progress-color-3" ref="progress-6"></span>
        <h2 class="h1 mb-3">(6) 第三階段</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-time select-none mb-0 me-3 p-2">{{ showTime['6']?showTime['6']:' 2 分 40 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(6)" :disabled="time['6']<160000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(6)" :disabled="time['6']===160000">重置</button>
        </div>
      </div>
    </div>
  </div>

  <audio :src="musicPath" class="d-none" ref="audio" controls></audio>
</template>

<script>
import musicPath from '../assets/sounds/門鈴.wav'
export default {
  data () {
    return {
      musicPath: musicPath,
      originTime: {
        1: 160000,
        2: 80000,
        3: 160000,
        4: 160000,
        5: 80000,
        6: 160000
      },
      time: {
        1: 160000,
        2: 80000,
        3: 160000,
        4: 160000,
        5: 80000,
        6: 160000
      },
      showTime: {},
      timeStamp: {}
    }
  },

  methods: {
    //* 三王倒數計時：2分40秒，1分20秒，2分40秒
    MVP (count) {
      this.time[count] -= 1 //* 先直接-1，讓該按鈕進入 disabled
      this.timeStamp[count] = setInterval(() => {
        this.computed(count, 'backTime')

        this.progressComputed(count)

        if (this.time[count] <= 0) {
          this.showTime[count] = '已出王'
          this.$refs.audio.play() //* 音效
          clearInterval(this.timeStamp[count]) //* 清除倒數計時
        }
      }, 1000)
    },
    //* 進度條計算
    progressComputed (count) {
      this.$refs[`progress-${count}`].style.width = `${100 - Math.ceil(this.time[count] / this.originTime[count] * 100)}%`
    },
    //* 顯示 分/秒 計算
    computed (count, state) {
      const min = parseInt(this.time[count] / 1000 / 60 % 60)
      const sec = parseInt(this.time[count] / 1000 % 60)

      if (state === 'backTime') {
        this.time[count] -= 1000
      }

      this.showTime[count] = ` ${min} 分 ${sec} 秒`
    },
    resetTime (count) {
      this.time[count] = this.originTime[count]

      this.computed(count)

      this.progressComputed(count)

      clearInterval(this.timeStamp[count])
    }
  }

}
</script>

<style lang='scss' scope>
.center-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.bg-time {
  background-color: rgb(191, 191, 191);
}
.fs-time {
  font-size: 4rem;
}
.p-lg {
  font-size: 2.5rem;
  padding: 1rem !important;
}
%progress {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: rgba(191, 255, 88, 0.357);
  z-index: -1;
}
.progress-color-1 {
  @extend %progress;
}
.progress-color-2 {
  @extend %progress;
}
.progress-color-3 {
  @extend %progress;
}
.select-none {
  user-select: none;
}
</style>
