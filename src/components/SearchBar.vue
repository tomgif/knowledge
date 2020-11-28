<template>
  <div class="fields">
    <div class="field">
      <input
        type="text"
        placeholder="Введите часть вопроса"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    value: String,
    default: null
  }
};
</script>
