<template>
  <ul class="d-flex justify-content-center list-unstyled my-3">
    <li><button type="button" class="btn btn-primary me-2" @click="openModal">三王密碼</button></li>
    <li><button type="button" class="btn btn-secondary" disabled><s>查看各階段 MVP 出場次數、機率(尚在開發中)</s></button></li>
  </ul>

  <div class="d-flex">
    <!-- 左 -->
    <div class="container">
      <!-- 選擇人物名稱區塊 -->
      <header class="border mb-3 p-2">
        <!-- 人物名稱 -->
        <h3 class="text-center">{{ currentPlayer['1']==='選擇當前角色名稱'? '請選擇人物':currentPlayer['1'] }}</h3>
        <!-- 新增人物名稱輸入框 -->
        <div class="d-flex align-items-center justify-content-center" v-if="selectPlayerShow['showInput1']">
          <input type="text" placeholder="輸入角色名稱" class="my-2 me-1 ps-1 w-25" v-model="playerInput['1']">
          <button class="btn btn-primary btn-sm me-1" type="button" @click="savePlayerName(1)">儲存</button>
          <button class="btn btn-success btn-sm" type="button" @click="selectPlayerShow['showInput1']=false" v-if="selectPlayerShow['showInput1']&&localPlayerName.length>0">切換常用人物</button>
        </div>

        <!-- 常用人物下拉選擇 -->
        <div class="d-flex align-items-center justify-content-center mb-2" v-else>
          <select class="form-select form-select-sm w-50 me-1" aria-label="Default select example" v-model="currentPlayer['1']">
            <option selected disabled>選擇當前角色名稱</option>
            <option :value="playerName" v-for="playerName in localPlayerName" :key="playerName">{{ playerName }}</option>
          </select>
          <button class="btn btn-success btn-sm me-3" type="button" @click="selectPlayerShow.showInput1=true">切換新增人物</button>
        </div>
      </header>

      <!-- 三個階段區塊 -->
      <section class="position-relative text-center border mb-3 py-3">
        <span class="progress-color-1" ref="progress-1"></span>
        <h2 class="h1 mb-3">(1) 第一階段</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-time select-none mb-0 me-3 p-2">{{ showTime['1']?showTime['1']:' 2 分 40 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(1)" :disabled="time['1']<160000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(1)" :disabled="time['1']===160000">重置</button>
        </div>
      </section>
      <section class="position-relative text-center border mb-3 py-5">
        <span class="progress-color-2" ref="progress-2"></span>
        <h2 class="h1 mb-3">(2) 第二階段</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-time select-none mb-0 me-3 p-2">{{ showTime['2']?showTime['2']:' 1 分 20 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(2)" :disabled="time['2']<80000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(2)" :disabled="time['2']===80000">重置</button>
        </div>
      </section>
      <section class="position-relative text-center border py-5">
        <span class="progress-color-3" ref="progress-3"></span>
        <h2 class="h1 mb-3">(3) 第三階段</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-time select-none mb-0 me-3 p-2">{{ showTime['3']?showTime['3']:' 2 分 40 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(3)" :disabled="time['3']<160000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(3)" :disabled="time['3']===160000">重置</button>
        </div>
      </section>
    </div>
    <!-- 右 -->
    <div class="container">
      <!-- 選擇人物名稱區塊 -->
      <header class="border mb-3 p-2">
        <!-- 人物名稱 -->
        <h3 class="text-center">{{ currentPlayer['2']==='選擇當前角色名稱'? '請選擇人物':currentPlayer['2'] }}</h3>
        <!-- 新增人物名稱輸入框 -->
        <div class="d-flex align-items-center justify-content-center" v-if="selectPlayerShow['showInput2']">
          <input type="text" placeholder="輸入角色名稱" class="my-2 me-1 ps-1 w-25" v-model="playerInput['2']">
          <button class="btn btn-primary btn-sm me-1" type="button" @click="savePlayerName(2)">儲存</button>
          <button class="btn btn-success btn-sm" type="button" @click="selectPlayerShow['showInput2']=false" v-if="selectPlayerShow['showInput2']&&localPlayerName.length>0">切換常用人物</button>
        </div>

        <!-- 常用人物下拉選擇 -->
        <div class="d-flex align-items-center justify-content-center mb-2" v-else>
          <select class="form-select form-select-sm w-50 me-1" aria-label="Default select example" v-model="currentPlayer['2']">
            <option selected disabled>選擇當前角色名稱</option>
            <option :value="playerName" v-for="playerName in localPlayerName" :key="playerName">{{ playerName }}</option>
          </select>
          <button class="btn btn-success btn-sm me-3" type="button" @click="selectPlayerShow.showInput2=true">切換新增人物</button>
        </div>
      </header>

      <!-- 三個階段區塊 -->
      <section class="position-relative text-center border mb-3 py-3">
        <span class="progress-color-1" ref="progress-4"></span>
        <h2 class="h1 mb-3">(1) 第一階段</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-time select-none mb-0 me-3 p-2">{{ showTime['4']?showTime['4']:' 2 分 40 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(4)" :disabled="time['4']<160000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(4)" :disabled="time['4']===160000">重置</button>
        </div>
      </section>
      <section class="position-relative text-center border mb-3 py-5">
        <span class="progress-color-2" ref="progress-5"></span>
        <h2 class="h1 mb-3">(2) 第二階段</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-time select-none mb-0 me-3 p-2">{{ showTime['5']?showTime['5']:' 1 分 20 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(5)" :disabled="time['5']<80000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(5)" :disabled="time['5']===80000">重置</button>
        </div>
      </section>
      <section class="position-relative text-center border py-5">
        <span class="progress-color-3" ref="progress-6"></span>
        <h2 class="h1 mb-3">(3) 第三階段</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-time select-none mb-0 me-3 p-2">{{ showTime['6']?showTime['6']:' 2 分 40 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(6)" :disabled="time['6']<160000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(6)" :disabled="time['6']===160000">重置</button>
        </div>
      </section>
    </div>
  </div>

  <audio :src="musicPath" class="d-none" ref="audio" controls></audio>
  <ThreeBossPword ref="threeBossPword"></ThreeBossPword>
</template>

<script>
import musicPath from '../assets/sounds/門鈴.wav'
import ThreeBossPword from '../components/modal/ThreeBossPword.vue'
export default {
  components: {
    ThreeBossPword
  },

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
      showTime: {}, //* 畫面顯示的時間
      timeStamp: {}, //* 用來暫停計時器
      playerInput: { //* 輸入文字欄位
        1: '',
        2: ''
      },
      //* localStorage 中已儲存的人物名稱(迴圈下拉選單)
      localPlayerName: JSON.parse(localStorage.getItem('player1')) || [],
      currentPlayer: {
        1: '選擇當前角色名稱',
        2: '選擇當前角色名稱'
      },
      selectPlayerShow: { //* 判斷顯示新增輸入或常用人物下拉選單
        showInput1: true,
        showInput2: true
      }
    }
  },

  watch: {
    //* 本地端有儲存的名字，才顯示"切換常用人物"、並且預設顯示下拉選單區塊
    localPlayerName: {
      handler () {
        if (this.localPlayerName.length > 0) {
          this.selectPlayerShow.showInput1 = false
          this.selectPlayerShow.showInput2 = false
        } else {
          this.selectPlayerShow.showInput1 = true
          this.selectPlayerShow.showInput2 = true
        }
      },
      immediate: true
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
    //* 重置時間
    resetTime (count) {
      this.time[count] = this.originTime[count]

      this.computed(count)

      this.progressComputed(count)

      clearInterval(this.timeStamp[count])
    },
    //* 新增角色名字到 localStorage
    savePlayerName (count) {
      const playerName = this.playerInput[count]

      if (!playerName) return

      //* 取出舊的資料
      this.localPlayerName = JSON.parse(localStorage.getItem('player1')) || []

      //* 加上新的資料
      this.localPlayerName.push(playerName)

      //* 回傳回去 localStorage
      localStorage.setItem('player1', JSON.stringify(this.localPlayerName))
      this.playerInput[count] = ''
      console.log('新增成功!!')
    },
    //* 開啟 Modal
    openModal () {
      this.$refs.threeBossPword.openModal()
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
