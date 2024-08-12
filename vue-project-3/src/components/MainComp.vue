<!-- Створіть декілька компонентів і динамічно переключайте між ними за допомогою v-if, 
в залежності від вибору користувача (наприклад, використовуючи радіокнопки або випадаючий список).-->

<template>
  <div>
    <h2>Select a Component to Display</h2>
    <div>
      <label>
        <input type="radio" value="FirstComp" v-model="selectedComponent" />
        First Component
      </label>
      <label>
        <input type="radio" value="SecondComp" v-model="selectedComponent" />
        Second Component
      </label>
    </div>

    <div class="disp-comp">
      <first-comp v-if="selectedComponent === 'FirstComp'" />
      <second-comp v-if="selectedComponent === 'SecondComp'" />
    </div>
  </div>
</template>

<script>
import FirstComp from './FirstComp.vue';
import SecondComp from './SecondComp.vue';

export default {
  name: 'MainComp',
  components: {
    FirstComp,
    SecondComp
  },
  data() {
    return {
      selectedComponent: 'FirstComp'
    };
  }
};
</script>
