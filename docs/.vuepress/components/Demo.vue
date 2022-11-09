<template>
  <div>
    <component :is="componentObject" />
  </div>
</template>

<script>
  export default {
    props: {
      componentObject: { type: Object, required: true }
    },
    name: 'demo'
  }
</script>
