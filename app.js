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
    b: 0,
    available: false,
    nearby: false,
    error: false,
    success: false,
    characters: ['Jc', 'Josh', 'Mae'],
    siblings: [
      {
        name: 'Jc',
        age: 23
      },
      {
        name: 'Josh',
        age: 21
      },
      {
        name: 'Mae',
        age: 13
      },
    ],
    health: 100,
    ended: false,
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
    },
    punch() {
      this.health -= 10
      if(this.health <= 0) {
        this.ended = true
      }
    },
    restart() {
      this.health = 100
      this.ended = false
    },
    getRefs() {
      console.log(this.$refs)
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
    },
    compClasses() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})