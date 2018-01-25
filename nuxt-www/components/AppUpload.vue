<template>
  <div class="upload">
    <form class="form-signin">
      <div class="fileinput">
        <input type="file" id="upload-file" placeholder="Image URL" class="form-control" accept="image/*" />
      </div>
      <div class="formbutton">
        <button id="upload-button">Upload!</button> 
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgURL: '',
      loading: false
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
</style>
