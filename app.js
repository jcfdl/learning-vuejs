new Vue({
  el: '#root',
  data: {
    name: 'JCFDL',
    website: 'JC Website',
    link: 'http://www.link.com',
    websiteTag: '<a href="http://www.link.com">My website</a>',
    age: 25,
    x: 0,
    y: 0,
    inputAge: '',
    a: 0,
    b: 0
  },
  methods: {
    greet(time) {
      return `Good ${time} ${this.name}`
    },
    add(num) {
      this.age += num
    },
    substract(num) {
      this.age -= num
    },
    updateXY(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    },
    click() {
      alert('you clicked me')
    },
    logName() {
      console.log(`You entered age ${this.inputAge}`)
    }
  },
  computed: {
    addToA() {
      console.log('A')
      return this.age + this.a
    },
    addToB() {
      console.log('B')
      return this.age + this.b
    }
  }
})