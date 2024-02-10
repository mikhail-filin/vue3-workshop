<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    borderColor: {
      type: String,
    },
  },
};
</script>

<template>
  <li
    :class="[$style['user-card'], Math.random() > 0.5 ? $style.custom : null]"
  >
    {{ user.name }}: {{ user.website }}
  </li>
</template>

<style module>
.user-card {
  border: 2px solid #222;
  padding: 10px;
}
.custom {
  border-color: v-bind(borderColor);
}
</style>
