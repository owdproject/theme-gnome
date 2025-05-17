<script setup lang="ts"></script>

<template>
  <Sheet class="owd-system-bar__menu">
    <slot />
  </Sheet>
</template>

<style scoped lang="scss">
.owd-system-bar__menu {
  position: absolute;
  top: calc(var(--p-system-bar-height) + var(--p-system-bar-menu-spacing));
  padding: 8px;
}
</style>
