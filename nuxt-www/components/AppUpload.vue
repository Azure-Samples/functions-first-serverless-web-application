<template>
  <div class="upload">
    <form class="form-signin" @submit.prevent>
      <div class="fileinput">
        <input 
          type="file" 
          id="upload-file" 
          ref="uploadFile"
          placeholder="Image URL" 
          class="form-control" 
          accept="image/*"
          @change="fileChanged" />
      </div>
      <div class="formbutton">
        <button id="upload-button" @click="uploadFile">Upload!</button>
        <button id="cancel-button" @click="$emit('hide-upload')">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [ 'api' ],
  data() {
    return {
      imgFile: null,
      imgURL: '',
      loading: false
    }
  },
  methods: {
    uploadFile() {
      if (this.imgFile) {
        this.$emit('file-uploading')
        this.api.uploadImage(this.imgFile)
          .then(() => {
            this.$refs.uploadFile.value = null
            this.$emit('file-upload-completed')
          })
      }
    },
    fileChanged(e) {
      const files = e.target.files || e.dataTransfer.files
      this.imgFile = files.length ? files[0] : null
    }
  }
}
</script>

<style scoped>
.upload {
  position: absolute;
  top: 70px;
  right: 70px;
}

.fileinput {
  width: 40vw;
  height: 20vw;
  border: 2px dashed white;
  background: rgba(150, 150, 150, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.formbutton {
  float: right;
  margin-top: 30px;
}

#cancel-button {
  background-color: #999;
  color: #fff;
  margin-left: 12px;
}
</style>
