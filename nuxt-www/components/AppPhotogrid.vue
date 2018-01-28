<template>
  <section>
    <div 
      class="captionhover" 
      v-show="captionhover"
      :style="{ top: captionY + 'px', left: captionX + 'px' }"
    >
      <p class="tooltip">{{ captionText }}</p>
    </div>
    <div class="gridwrap">
      <div 
        v-for="image in images"
        :key="image.id"
        @mouseenter="captionon($event, image)" 
        @mouseleave="captionoff" 
        class="panel"
        ref="hoverpanel"
      >
      <img :src="image.thumbnailPath" width="180" height="180" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [ 'images' ],
  data() {
    return {
      captionhover: false,
      captionX: 0,
      captionY: 0,
      captionText: ''
    }
  },
  methods: {
    captionon(e, image) {
      this.captionhover = true
      if (image.description && image.description.captions && image.description.captions.length > 0) {
        this.captionText = image.description.captions[0].text;
      } else {
        this.captionText = ''
      }
      let x =
        e.target.getBoundingClientRect().left +
        e.target.getBoundingClientRect().width -
        20
      let y =
        e.target.getBoundingClientRect().top +
        e.target.getBoundingClientRect().height / 3
      this.captionX = x
      this.captionY = y
    },
    captionoff() {
      this.captionhover = false
      this.captionX = 0
      this.captionY = 0
    }
  }
}
</script>

<style scoped>
.captionhover {
  position: fixed;
  background: #0284a8;
  padding: 10px;
  border-radius: 4px;
  z-index: 3000;
}

.captionhover:after {
  right: 100%;
  top: 50%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(136, 183, 213, 0);
  border-right-color: #0284a8;
  border-width: 10px;
  margin-top: -10px;
}

.gridwrap {
  padding-top: 70px;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  padding-bottom: 70px;
}

.panel {
  /* needed for the flex layout*/
  margin-left: 5px;
  margin-right: 5px;
  flex: 1 1 200px;
  cursor: pointer;
}

.gridwrap > * {
  background-color: #ddd;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  margin-bottom: 10px;
}

/* tooltip */

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
}

.tooltip[x-placement^='top'] {
  margin-bottom: 5px;
}

.tooltip[x-placement^='top'] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='bottom'] {
  margin-top: 5px;
}

.tooltip[x-placement^='bottom'] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='right'] {
  margin-left: 5px;
}

.tooltip[x-placement^='right'] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^='left'] {
  margin-right: 5px;
}

.tooltip[x-placement^='left'] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>
