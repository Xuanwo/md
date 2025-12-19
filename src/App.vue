<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import { useUIStore } from '@/stores/ui'
import CodemirrorEditor from '@/views/CodemirrorEditor.vue'

const uiStore = useUIStore()
const { isDark } = storeToRefs(uiStore)
</script>

<template>
  <AppSplash />
  <CodemirrorEditor />
  <Toaster
    rich-colors
    position="top-center"
    :theme="isDark ? 'dark' : 'light'"
  />
</template>

<style lang="less">
html,
body,
#app {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

// Reset pointer-events after menus open.
body {
  pointer-events: initial !important;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: rgba(243, 244, 247, 0.5);
}

::-webkit-scrollbar-track {
  border-radius: 6px;
  background-color: rgba(200, 200, 200, 0.3);
}

::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: rgba(144, 146, 152, 0.5);
}

/* CSS-hints */
.CodeMirror-hints {
  position: absolute;
  z-index: 10;
  overflow-y: auto;
  margin: 0;
  padding: 2px;
  border-radius: 4px;
  max-height: 20em;
  min-width: 200px;
  font-size: 12px;
  font-family: monospace;

  color: #333333;
  background-color: #ffffff;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px 0 rgba(0, 0, 0, 0.08);
}

.CodeMirror-hint {
  margin-top: 10px;
  padding: 4px 6px;
  border-radius: 2px;
  white-space: pre;
  color: #000000;
  cursor: pointer;

  &:first-of-type {
    margin-top: 0;
  }
  &:hover {
    background: #f0f0f0;
  }
}
.search-match {
  background-color: #ffeb3b; /* all matches */
}
.current-match {
  background-color: #ff5722; /* current match */
}
</style>
