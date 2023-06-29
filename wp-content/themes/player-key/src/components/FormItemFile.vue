<script>
export default {
  name: 'FormItemFile',
  props: {
    fileName: {
      type: String,
    },
    fileTitle: {
      type: String,
      required: true,
    },
    inputId: {
      type: String,
      required: true,
    }
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      if (file) {
        reader.readAsDataURL(file)
        reader.onload = () => {
          file.previewBase64 = reader.result
          this.$emit('file-updated', file)
        }
        reader.onerror = (error) => {
          console.log('Error ', error)
        }
      }
    },
  },
}
</script>

<template>
  <div>
    <input
        :id="inputId"
        class="hide-file-input"
        type="file"
        accept="image/jpeg, image/png, application/pdf"
        @change="onFileChange"
    />
    <label class="file-label" :for="inputId">
      {{fileName || `Upload a ${fileTitle}`}}
    </label>
  </div>
</template>

<style scoped>
.hide-file-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.file-label {
  display: block;
  margin: 0;
  padding: 12px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: var(--rich-black);
  background-color: #f5f5f5;
  cursor: pointer;
}

</style>
