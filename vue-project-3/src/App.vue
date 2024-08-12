<template>
  <header>
    <div class="wrapper">
      <MessageComp />
      <MainComp />
      <InputComp />
    </div>
  </header>

  <main>
  </main>
</template>

<script>
import InputComp from './components/InputComp.vue';
import MainComp from './components/MainComp.vue';
import MessageComp from './components/MessageComp.vue';

export default {
  name: 'App',
  components: {
    MessageComp,
    MainComp,
    InputComp
  }
};
</script>
