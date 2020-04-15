new Vue({
  el: '#root',
  data: {
    name: 'JCFDL'
  },
  methods: {
    greet(time) {
      return `Good ${time} ${this.name}`
    }
  }
})