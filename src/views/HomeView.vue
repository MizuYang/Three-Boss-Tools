<template>
  <header ref="header">
    <ul class="d-flex justify-content-center align-items-center list-unstyled mb-0 py-3">
      <li class="ms-auto"><h3 class="mb-0">{{ getToday }}</h3></li>
      <li class="bg-gray mx-auto p-2"><h3 class="fw-bold mb-0">{{ getThreeBossPword }}</h3></li>
      <li class="d-flex align-items-center justify-content-center me-auto">
        <input type="text" placeholder="輸入角色名稱" class="my-2 me-1 ps-1" v-model="playerInput['1']">
        <button class="btn btn-primary btn-sm me-1" type="button" @click="addPlayerName(1)">新增</button>
      </li>
      <!-- <li class="me-auto"><button type="button" class="btn btn-primary btn-sm" @click="openModal">三王密碼</button></li> -->
      <li class="me-auto">
        <a href="https://forum.gamer.com.tw/C.php?bsn=4212&snA=433749" target="_blank" class="fs-5 text-decoration-none">三王密碼查詢</a>
      </li>
    </ul>
  </header>

  <main class="d-flex" ref="mainArea">

    <!-- 左 -->
    <div class="container">
      <!-- 選擇角色名稱區塊 -->
      <header class="border mb-3 p-2">
        <!-- 角色名稱 -->
        <div class="position-relative d-flex align-items-center justify-content-center my-3">
          <h3 class="text-center mb-0 me-3">{{ currentPlayer['1']==='選擇當前角色名稱'? '請選擇角色':currentPlayer['1'] }}
          </h3>
          <button type="button" class="btn btn-danger btn-sm" v-if="currentPlayer['1']!=='選擇當前角色名稱'" @click="deletePlayerName(1)">刪</button>
        </div>

        <!-- 選擇角色下拉選擇 -->
        <div class="d-flex align-items-center justify-content-center mb-2">
          <select class="form-select form-select-sm w-50 me-1" aria-label="Default select example" v-model="currentPlayer['1']">
            <option selected disabled>選擇當前角色名稱</option>
            <option :value="playerName" v-for="playerName in localPlayerName" :key="playerName">{{ playerName }}</option>
          </select>
        </div>
      </header>

      <!-- 三隻王區塊 -->
      <section class="position-relative text-center border mb-3 py-3">
        <span class="progress-color-1" ref="progress-1"></span>
        <h2 class="h1 mb-3">第一隻王</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-gray select-none mb-0 me-3 p-2">{{ showTime['1']?showTime['1']:' 2 分 40 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(1)" :disabled="time['1']<160000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(1)" :disabled="time['1']===160000">重置</button>
        </div>
      </section>
      <section class="position-relative text-center border mb-3 py-3">
        <span class="progress-color-2" ref="progress-2"></span>
        <h2 class="h1 mb-3">第二隻王</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-gray select-none mb-0 me-3 p-2">{{ showTime['2']?showTime['2']:' 1 分 20 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(2)" :disabled="time['2']<80000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(2)" :disabled="time['2']===80000">重置</button>
        </div>
      </section>
      <section class="position-relative text-center border py-3">
        <span class="progress-color-3" ref="progress-3"></span>
        <h2 class="h1 mb-3">第三隻王</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-gray select-none mb-0 me-3 p-2">{{ showTime['3']?showTime['3']:' 2 分 40 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(3)" :disabled="time['3']<160000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(3)" :disabled="time['3']===160000">重置</button>
        </div>
      </section>
    </div>

    <!-- 右 -->
    <div class="container">
      <!-- 選擇角色名稱區塊 -->
      <header class="position-relative border mb-3 p-2">
        <!-- 角色名稱 -->
        <div class="d-flex align-items-center justify-content-center my-3">
          <h3 class="text-center mb-0 me-3">{{ currentPlayer['2']==='選擇當前角色名稱'? '請選擇角色':currentPlayer['2'] }}</h3>
          <button type="button" class="btn btn-danger btn-sm" v-if="currentPlayer['2']!=='選擇當前角色名稱'" @click="deletePlayerName(2)">刪</button>
        </div>

        <!-- 選擇角色下拉選擇 -->
        <div class="d-flex align-items-center justify-content-center mb-2">
          <select class="form-select form-select-sm w-50 me-1" aria-label="Default select example" v-model="currentPlayer['2']">
            <option selected disabled>選擇當前角色名稱</option>
            <option :value="playerName" v-for="playerName in localPlayerName" :key="playerName">{{ playerName }}</option>
          </select>
        </div>
      </header>

      <!-- 三隻王區塊 -->
      <section class="position-relative text-center border mb-3 py-3">
        <span class="progress-color-1" ref="progress-4"></span>
        <h2 class="h1 mb-3">第一隻王</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-gray select-none mb-0 me-3 p-2">{{ showTime['4']?showTime['4']:' 2 分 40 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(4)" :disabled="time['4']<160000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(4)" :disabled="time['4']===160000">重置</button>
        </div>
      </section>
      <section class="position-relative text-center border mb-3 py-3">
        <span class="progress-color-2" ref="progress-5"></span>
        <h2 class="h1 mb-3">第二隻王</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-gray select-none mb-0 me-3 p-2">{{ showTime['5']?showTime['5']:' 1 分 20 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(5)" :disabled="time['5']<80000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(5)" :disabled="time['5']===80000">重置</button>
        </div>
      </section>
      <section class="position-relative text-center border py-3">
        <span class="progress-color-3" ref="progress-6"></span>
        <h2 class="h1 mb-3">第三隻王</h2>
        <div class="d-flex align-items-center justify-content-center">
          <h3 class="fs-time bg-gray select-none mb-0 me-3 p-2">{{ showTime['6']?showTime['6']:' 2 分 40 秒 '  }}</h3>
          <button type="button" class="btn btn-danger p-lg me-3" @click="MVP(6)" :disabled="time['6']<160000">開始</button>
          <button type="button" class="btn btn-secondary p-lg" @click="resetTime(6)" :disabled="time['6']===160000">重置</button>
        </div>
      </section>
    </div>
  </main>

  <footer>
    <FooterState ref="foot"></FooterState>
  </footer>

  <audio :src="musicPath" class="d-none" ref="audio" controls></audio>

  <!-- Modal -->
  <ThreeBossPword ref="threeBossPword"></ThreeBossPword>
  <AddNameErr ref="addNameErr"></AddNameErr>
</template>

<script>
import FooterState from '../components/layout/FooterState.vue'
import AddNameErr from '../components/modal/AddNameErr.vue'
import musicPath from '../assets/sounds/門鈴.wav'
import ThreeBossPword from '../components/modal/ThreeBossPword.vue'
export default {
  components: {
    FooterState,
    AddNameErr,
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
      //* localStorage 中已儲存的角色名稱(迴圈下拉選單)
      localPlayerName: JSON.parse(localStorage.getItem('player1')) || [],
      currentPlayer: {
        1: '選擇當前角色名稱',
        2: '選擇當前角色名稱'
      },
      selectPlayerShow: { //* 判斷顯示新增輸入或選擇角色下拉選單
        showInput1: true,
        showInput2: true
      }
    }
  },

  watch: {
    //* 本地端有儲存的名字，才顯示"切換選擇角色"、並且預設顯示下拉選單區塊
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

  computed: {
    getToday () {
      const Today = new Date()
      const str = `${Today.getFullYear()}/${Today.getMonth() + 1}/${Today.getDate()}`
      return str
    },
    getThreeBossPword () {
      let num = null
      const position = []
      const Today = new Date()
      const m = Today.getMonth()
      const d = Today.getDate()
      num = ((m + d) * 5).toString('2')
      if (num.length !== 8) {
        const data = []
        const addNum = 8 - num.length
        for (let i = 0; i < addNum; i++) {
          data.push(0)
        }
        num = `${data.join('')}${num}`
      }
      //* 抓出密碼 "on" 的位置
      num.split('').forEach((item, i) => {
        if (item === '1') {
          position.push(i + 1)
        }
      })
      num = `${num} (${position})`

      return num
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
          this.$refs.audio.pause() //* 音效
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
    addPlayerName (count) {
      const playerName = this.playerInput[count]

      //* 未輸入字元
      if (!playerName) {
        this.$refs.addNameErr.modal.show()
        return
      }

      //* 取出舊的資料
      this.localPlayerName = JSON.parse(localStorage.getItem('player1')) || []

      //* 加上新的資料
      this.localPlayerName.push(playerName)

      //* 回傳回去 localStorage
      localStorage.setItem('player1', JSON.stringify(this.localPlayerName))
      this.playerInput[count] = ''
    },
    //* 刪除角色名字
    deletePlayerName (count) {
      const deleteName = this.currentPlayer[count]

      //* 從資料集中刪掉該筆資料
      const deleteIndex = this.localPlayerName.findIndex(item => {
        return item === deleteName
      })
      this.localPlayerName.splice(deleteIndex, 1)

      //* 回傳回去 localStorage
      localStorage.setItem('player1', JSON.stringify(this.localPlayerName))

      //* 清空當前角色名稱
      this.currentPlayer[count] = '選擇當前角色名稱'

      //* 如果 localStorage 沒有儲存名字，則隱藏下拉選單
      if (this.localPlayerName.length === 0) {
        this.selectPlayerShow.showInput1 = true
        this.selectPlayerShow.showInput2 = true
      }
    },
    //* 開啟 Modal
    openModal () {
      this.$refs.threeBossPword.openModal()
    }
  },

  mounted () {
    //* 讓 Footer 置底
    const headerH = this.$refs.header.offsetHeight
    const footerH = this.$refs.foot.$refs.footer.offsetHeight
    //* 中間區塊高度 = 100vh - (header + footer)    <- 讓 footer 置底
    this.$refs.mainArea.style.minHeight = `calc(100vh - (${headerH + footerH}px))`

    //* 造訪人數+1
    this.$http.get('https://api.countapi.xyz/update/threeBoss/threeBoss/?amount=1')
      .then(res => {
        console.log(`目前造訪人數： ${res.data.value} 人`)
      })
      .catch(err => {
        console.log(err)
      })
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
.bg-gray {
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
