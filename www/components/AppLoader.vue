<template>
  <div class="loader-contain">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 1100 220">
      <defs>
        <clipPath id="flameclip" ref="flameclip">
          <rect class="cliprect" width="950" height="100" x="0" y="80"></rect>
        </clipPath>
        <filter id="flame">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 14 -4"></feColorMatrix>
        </filter>
        <linearGradient id="a" x1="911.03" x2="920.54" y1="131.87" y2="131.87" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#684e38"/>
          <stop offset=".31" stop-color="#7a5b43"/>
          <stop offset=".65" stop-color="#85644a"/>
          <stop offset="1" stop-color="#89674c"/>
        </linearGradient>
        <linearGradient id="b" x1="950.81" x2="959.74" y1="55.96" y2="31.2" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#6c513b"/>
          <stop offset=".45" stop-color="#765941"/>
          <stop offset="1" stop-color="#89674c"/>
        </linearGradient>
        <linearGradient id="c" x1="937.17" x2="918.55" y1="61.8" y2="32.03" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#876642"/>
          <stop offset=".14" stop-color="#8d6b45"/>
          <stop offset=".64" stop-color="#a0774f"/>
          <stop offset="1" stop-color="#a67c52"/>
        </linearGradient>
        <linearGradient id="d" x1="874.59" x2="960.35" y1="105.64" y2="105.64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#89674c"/>
          <stop offset=".47" stop-color="#85644a"/>
          <stop offset=".88" stop-color="#7b5c44"/>
          <stop offset="1" stop-color="#765841"/>
        </linearGradient>
        <radialGradient id="e" cx="780.11" cy="767.09" r="68.44" gradientTransform="rotate(-11.5 -2535.072 -323.245)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fff" stop-opacity="0"/>
          <stop offset=".37" stop-color="#fff" stop-opacity=".01"/>
          <stop offset=".51" stop-color="#fff" stop-opacity=".03"/>
          <stop offset=".6" stop-color="#fff" stop-opacity=".08"/>
          <stop offset=".68" stop-color="#fff" stop-opacity=".15"/>
          <stop offset=".75" stop-color="#fff" stop-opacity=".23"/>
          <stop offset=".8" stop-color="#fff" stop-opacity=".34"/>
          <stop offset=".86" stop-color="#fff" stop-opacity=".47"/>
          <stop offset=".91" stop-color="#fff" stop-opacity=".61"/>
          <stop offset=".95" stop-color="#fff" stop-opacity=".78"/>
          <stop offset=".99" stop-color="#fff" stop-opacity=".96"/>
          <stop offset="1" stop-color="#fff"/>
        </radialGradient>
        <linearGradient id="f" x1="835.76" x2="1095" y1="128.3" y2="128.3" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#9c272d"/>
          <stop offset=".32" stop-color="#a3272d"/>
          <stop offset=".78" stop-color="#b5272d"/>
          <stop offset="1" stop-color="#c1272d"/>
        </linearGradient>
      </defs>
      <rect ref="flame" class="flame" width="902.2" height="55.23" y="93.5" fill="#e59b39" rx="12" ry="12"/>
      <g class="ship" ref="ship">
         <g id="flamebits" ref="flamebits">
          <ellipse cx="814.2" cy="119.7" rx="41" ry="12.5" />
          <ellipse cx="847.7" cy="135.2" rx="41" ry="12.5" />
          <ellipse cx="847.7" cy="105.2" rx="41" ry="12.5" />
          <ellipse cx="817.2" cy="125.7" rx="20.5" ry="9" />
          <ellipse cx="847.7" cy="109.2" rx="13" ry="7.5" />
          <ellipse cx="859.2" cy="135.2" rx="6.5" ry="7.5" />
          <ellipse cx="862.7" cy="121.2" rx="10" ry="7.5" />
          <ellipse cx="829.7" cy="116.2" rx="10" ry="7.5" />
          <ellipse cx="882.2" cy="117.7" rx="19.5" ry="15" />
          <ellipse cx="846.2" cy="122.7" rx="19.5" ry="15" />
          <ellipse cx="837.2" cy="143.7" rx="15.5" ry="11" />
          <ellipse cx="834.2" cy="100.7" rx="15.5" ry="11" />
          <ellipse cx="849.7" cy="121.2" rx="29" ry="17.5" />
        </g>
        <path fill="#89674c" d="M958.5 110.8c-.2-2.2 3.7 9.9 2.9 11.2s-7.2-11.3-7.2-11.3 4.5 2.3 4.3.1z"/>
        <path fill="url(#a)" d="M916.7 128.1s1.3 4 2.6 4.8 1.8 3.4.5 2.6l-8.8-6.2z" transform="translate(-6.3 -6.1)"/>
        <path fill="url(#b)" d="M942.5 41.3s4-13.7 13-21.5 11.2-3 11.3-2.4 2.8 10.6 1.7 15.6-1.1 14.7-1.1 14.7l-14.8 3.2z" transform="translate(-6.3 -6.1)"/>
        <path fill="#89674c" d="M947.8 40.4S922.7 18 913.3 21.6s-1.7 36.8 11.2 39.3c15.3-8.1-3.9-15.2 23.3-20.5z"/>
        <path fill="url(#c)" d="M938.1 47.7a37.8 37.8 0 0 0-6.1-10.4c-3.4-3.8-9.8-7.4-11.8-6.8s-4.9 9.6-1.3 18.3 13 16.7 13 16.7-2.2-10.8 6.2-17.8z" transform="translate(-6.3 -6.1)"/>
        <path fill="url(#d)" d="M927.5 76.6l-.9 3.4s-2.4 3.7-14.3 5.7-12.8.1-23 2.3-14.7 18.7-14.7 18.7l4.3-2.5s-1.5 3-3.5 6.1 3-.7 3-.7l-3.4 6.6-.2 3.8s3.6-2.9 4.3-4.6-3 5.9-2.1 7.4 2 4.3 2 4.3l1.3-4s3.5 4.1 3.2 7.4 5.5 5.7 5.5 5.7 3.3 5.7 5.3 4.8-1.6-2.4-.9-4.1 4.7-5.3 9.7-6.9 11.8.1 22.4-.6 16.8-1.5 16.8-1.5l-.7-3 2.7 2.6 5.8-2.9 6.4-5.1s8.7-21.7-.1-30.4-21.7-18.9-21.7-18.9z" transform="translate(-6.3 -6.1)"/>
        <path fill="#89674c" d="M959.7 34.6s5.8 2.3 7.8 4.7a15.5 15.5 0 0 1 2.7 5.4l-10.7-6.8z"/>
        <path fill="#89674c" d="M964 46s-3.5-11.6-9.3-10.9-12.2.5-16.5 5.2-12.3 12.3-14 16.9-.2 11.3-.2 11.3l37.6-1.7zM948.6 116.8s2.9 7.3 2.1 8.6-6.2-6.2-6.2-6.2z"/>
        <path fill="#e8d8cd" d="M923.4 61.2s-4.3 7.3-2.7 9.6a12.1 12.1 0 0 0 2.8 3.2s1.6-5.2 2.8-7-.8 8.7-.8 8.7l2.6 2.1 1-2.9.8 3.6 1.3 1.3s-.5-4.7.9-5.5 2.6 6.9 2.6 6.9l4.7 1.7-1-4.6 2.9 6.3 3.9.7a27.5 27.5 0 0 1 4.2 9.3c1.1 5.1.5 14.9-1.9 18.6s-3 3.3-5.1 3.8-4.2-2.3-4.2-2.3l4 6.1 8.9-3.5s-.2-5.9.6-4.5a24.2 24.2 0 0 0 2.3 3.3l.9-.8v-6.9l1.5 6.6 5.5-3.9s-1.4-6.6-.5-7.3 2.3 5.4 2.3 5.4 5.9-4.5 5.7-5.6-.6-5.2-1.2-5.6 1.8 3.4 2.1 4.9 2.4-3.7 2.4-3.7-1.4-4-.7-3.6a20.3 20.3 0 0 1 1.9 1.7s.7-4.4-1.4-6.6-8-14.9-8.1-17.5 1.5-3 4.7-5.9 1.9-3.6 1.9-3.6l-4.4 2c-2.5 1.1-8.3 1.3-12.4-.5s-8.2-3.1-7.9-4.2-7.6 3.8-22.9.2z"/>
        <path fill="#e8d8cd" d="M941.9 59.9l3.8-1a45.6 45.6 0 0 0 6.3 1.4l.2.2c2.2 3 23.9-3.4 23.9-3.4s-5.2 12.5-19.6 13.5c-12.8 2.8-14.6-10.7-14.6-10.7z"/>
        <path fill="#89674c" d="M934.6 44.1a39.7 39.7 0 0 0-4 2.2 24.8 24.8 0 0 0-3.6 2.8 12.2 12.2 0 0 0-2.7 3.7 6.6 6.6 0 0 0-.5 4.6 7.5 7.5 0 0 1-.5-4.9 13 13 0 0 1 2.2-4.6 23.7 23.7 0 0 1 3.2-3.9 44.7 44.7 0 0 1 4-3.4z"/>
        <path fill="#89674c" d="M929.4 51.8l-1.7.9-1.5 1.3a6.1 6.1 0 0 0-1.2 1.6 3.6 3.6 0 0 0-.4 2.1 4.4 4.4 0 0 1-.6-2.3 6.9 6.9 0 0 1 .5-2.4 9.4 9.4 0 0 1 1-2.3 9.1 9.1 0 0 1 1.5-2.1z"/>
        <path fill="#e8d8cd" d="M960.2 53c4-3.7 3.6-5.6 1.7-9.6s-9.8-8.2-9.8-8.2l7.3-.5c6.4 7.3 8.1 9.8 14.6 7.8s4.9 3 4.9 3 .5 4.7-1.7 6.8.4 3.6-6.1 6.8-20.5 4.6-20.5 4.6-3.2-4.2-4.9-4.8c4.6-1.2 11.8-3.4 14.5-5.9z"/>
        <path d="M979.3 41.6c-1.3-1.3-1.8-.8-2.5-.6s-.8.2-2.6 1.7-4 1.4-3.2 2.3 6.4 2.4 6.4 2.4 3-.7 2.7-2.2.6-2.3-.8-3.6z"/>
        <path fill="#fff" d="M970.5 60.5s-.6-2.5-1.3-2.1-.3 2.5-.3 2.5z"/>
        <path fill="#f272a6" d="M976.2 53.5c-.2-.8-7.9 6.5-20.8 9.5a75.3 75.3 0 0 0 13.9-2.8l6.4-2.1a23.7 23.7 0 0 0 .5-4.6z"/>
        <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M978.3 51l-1.2-.4v1.6s-5.9 8.4-23.9 9.3M975.6 57.9c-8.1 4.8-22.4 4.1-22.4 4.1"/>
        <path fill="#fff" d="M972.5 58.8s-.6-2.4-1.3-2.1-.3 2.5-.3 2.5z"/>
        <g ref="eyes" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
          <path d="M953.4 47.1s-.4-.8 1-1.5 1.8 0 1.8 0M966.4 41s-.4-.8.6-1.3 1.3.3 1.3.3"/>
        </g>
        <circle cx="941.5" cy="46.5" r="46.5" fill="url(#e)"/>
        <g>
          <path fill="url(#f)" d="M906.7 81.5l-69.2 11.1s-4.3 55.8.6 70.4c0 0 146.1 43.8 256.9-35.3 0 0-47.5-37.8-106.2-46.2 0 0 .3 19.4-39.9 20.6-12.2.4-22.7-1.8-42.2-20.6z" transform="translate(-6.3 -6.1)"/>
          <path fill="none" stroke="#fbb03b" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M900.3 76.5s1.8 20 40.4 20S981 76.7 981 76.7"/>
          <path fill="#fbb03b" d="M836 88.1l46.3-6.1v-4.9S860 49.3 817 46.2c0 0-7.9-.6-1.7 10.9s20.7 31 20.7 31zM836 156.3l46.3 7.3v3.6s-24.3 30.5-60.9 31.7c0 0-12.1 2.4-8.5-9.7s23.1-32.9 23.1-32.9z"/>
          <rect width="13.4" height="43.83" x="820.3" y="100.3" fill="#fbb03b" rx="5.5" ry="5.5"/>
        </g>
      </g>
    </svg>
    <h1>{{ text || 'Loading...' }}</h1>
  </div>
</template>

<script>
import { TweenMax, TimelineMax, Sine, Rough } from 'gsap'

export default {
  props: [ 'text' ],
  methods: {
    ship() {
      TweenMax.set(this.$refs.ship, {
        x: -800
      })
      TweenMax.set(this.$refs.flamebits, {
        x: 20
      })

      let tl = new TimelineMax(),
        rough = RoughEase.ease.config({
          template: Power0.easeNone,
          strength: 1,
          points: 20,
          taper: 'none',
          randomize: true,
          clamp: false
        })

      tl.add('start')
      tl.to(
        this.$refs.ship,
        1,
        {
          x: 0,
          ease: Sine.easeOut
        },
        'start'
      )
      tl.fromTo(
        this.$refs.flame,
        1,
        {
          opacity: 0,
          scaleX: 0.2
        },
        {
          opacity: 0.7,
          scaleX: 1,
          ease: Sine.easeOut
        },
        'start'
      )
      tl.to(
        this.$refs.ship,
        0.5,
        {
          y: -5,
          repeat: -1,
          yoyo: true,
          ease: rough
        },
        'start'
      )
      tl.staggerFromTo(
        this.$refs.flamebits.childNodes,
        1,
        {
          x: 20,
          opacity: 1,
          y: -Math.random() * 5
        },
        {
          x: -200,
          opacity: 0,
          y: Math.random() * 5,
          repeat: -1,
          ease: Back.easeOut
        },
        0.1,
        'start'
      )
    }
  },
  mounted() {
    this.ship()
  }
}
</script>

<style scoped>
.loader-contain {
  width: 80%;
  margin: 10vw;
  height: 500px;
}

canvas {
  position: absolute;
  filter: url('#flame');
}

#flamebits {
  filter: url('#flame');
}

#flamebits ellipse {
  fill: #f5dc8c;
  stroke: #f90b2d;
  stroke-width: 6px;
}

h1 {
  text-align: center;
}
</style>
