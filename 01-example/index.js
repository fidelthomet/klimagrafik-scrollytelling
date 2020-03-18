// eslint-disable-next-line no-undef, no-unused-vars
const app = new Vue({
  el: '#app',
  data: {
    // eslint-disable-next-line no-undef
    scroller: scrollama(),
    width: 500,
    height: 300,
    step: 0
  },
  mounted () {
    this.scroller.setup({
      step: '.scrolly article .step',
      offset: 0.5,
      progress: true,
      debug: true
    }).onStepEnter(this.enter)
      .onStepProgress(this.progress)
      .onStepExit(this.exit)

    this.resize()
    window.addEventListener('resize', this.resize)
  },
  computed: {
    circleColor () {
      const colors = ['#ee00aa', '#fc7e8f', '#ffc26c', '#fdff2d']
      return colors[this.step]
    }
  },
  methods: {
    resize () {
      const { $refs } = this
      const bounds = $refs.figure.getBoundingClientRect()

      this.width = bounds.width
      this.height = bounds.height
      this.scroller.resize()
    },
    enter (step) {
      console.log('enter', step)
      this.step = step.index
    },
    progress (step) {
      console.log('progress', step)
      this.step = step.index
    },
    exit (step) {
      console.log('exit', step)
      this.step = step.index
    }
  }
})
