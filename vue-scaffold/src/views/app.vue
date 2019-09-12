<template>
  <div id="app">
    <div class="fall-name">{{ fallName }}</div>
    <div class="chinese-name">{{ chineseName }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chineseName: "",
      fallName: `${this.$store.state.firstName} ${this.$store.state.lastName}`
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData(){
  		//axios-get请求
  		this.$http.get('http://localhost:3000/140000199802151735')
	        .then(data => {
            console.log(data);
            this.chineseName = data.data.data.author
          })//接口调用成功返回的数据
	        .catch(err => console.log(err))//接口调用失败返回的数据
    }
  }
}
</script>

<style lang="stylus" scoped></style>

