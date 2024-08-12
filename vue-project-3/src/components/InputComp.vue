<!--Використовуючи v-bind, динамічно додавайте або 
видаляйте атрибути елемента (наприклад, disabled, readonly) в залежності від умови.-->

<template>
  <div>
    <label>
      <input type="radio" value="none" v-model="mode" />
      None
    </label>
    <label>
      <input type="radio" value="readonly" v-model="mode" />
      Readonly
    </label>
    <label>
      <input type="radio" value="disabled" v-model="mode" />
      Disabled
    </label>

    <input type="text" placeholder="Введіть текст" v-bind:readonly="mode === 'readonly'"
      v-bind:disabled="mode === 'disabled'" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 'none'
    };
  }
};
</script>