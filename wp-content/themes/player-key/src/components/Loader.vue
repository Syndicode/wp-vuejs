<script>
export default {
  name: "Loader",
}
</script>

<template>
  <div class="loader">
    <div class="loader__layouts">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

.loader.active {
  opacity: 1;
  pointer-events: auto;
}

.loader__layouts {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.loader__layouts div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: var(--rich-black);
  animation: loader__layouts 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.loader__layouts div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}

.loader__layouts div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}

.loader__layouts div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}

@keyframes loader__layouts {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

</style>
