$(() => {
  const $document = $(document)
  const preloadAssets = [
    // add any assets to be preloaded to this array
    '//cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js',
    '/sparkflow/formats/latest/adchoices.min.js',
    '/sparkflow/formats/latest/utmark.min.js'
  ]

  ad.preload(preloadAssets)

  $document.on('adReady', () => {
    mraid.cancelAutoClose()
    insertAdBranding()
    startAd($document)
  })
})

const startAd = $document => {}

// FUNCTIONS
const setCtaAction = $el => {
  $el.attr('id').indexOf('BACKGROUND_') !== -1
    ? TweenMax.set($el, { display: 'block', width: '200%', height: '200%' })
    : TweenMax.set($el, { display: 'block' })
}

const insertAdBranding = () => {
  // AdChoices
  AdChoices.init({
    corner: 'br', // corner property which where the icon will be anchored: tr, tl, br or bl
    url: 'http://www.undertone.com/opt-out-tool?utm_source=AdChoiceIcon&utm_medium=IAAdChoicesIcon&utm_campaign=Privacy'
  })

  // Undertone
  UndertoneMark.init({
    corner: 'bl', // corner property which where the icon will be anchored: tr, tl, br or bl
    color: 'black',
    opacity: 0.5
  })
}
