<template>
  <div class="verification-code">
    <img v-if="verificationType === 'image'" src="/src/assets/images/1.jpg" />
    <div v-if="verificationType === 'word'" class="code-countdown">
      <div v-if="codeFlag">{{ verificationWord }}</div>
      <div v-if="!codeFlag">
        <span>{{ countdownTime }}</span
        >秒后重新发送
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    verificationType: {
      type: String,
      default: 'word'
    },
    verificationWord: {
      type: String,
      default: '获取验证码'
    },
    countdownNum: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      countdownTime: this.countdownNum,
      codeFlag: true
    }
  },
  methods: {
    countDownInit() {
      if (this.codeFlag) {
        this.codeFlag = false
        let countInterval = setInterval(() => {
          console.log(this.countdownTime)
          this.countdownTime--
          if (this.countdownTime === 0) {
            this.codeFlag = true
            this.countdownTime = this.countdownNum
            clearInterval(countInterval)
            this.$emit('countDownAfter')
          }
        }, 1000)
      }
    }
  }
}
</script>
