<!--Створіть компонент, який відображає два різних повідомлення на основі булевої змінної.
 Переключайте змінну для перевірки умовного виведення обох повідомлень.-->

<!--Створіть два елементи, один з v-show, інший з v-if, з однаковими умовами. 
 Змініть умову і спостерігайте за відмінностями у DOM. 
 Дослідіть, в яких ситуаціях краще використовувати кожну директиву.-->

<template>
  <div class="msg">
    <p v-if="isMessageOne">This is the first message (v-if).</p>
    <p v-else>This is the second message (v-if).</p>


    <p v-show="isMessageOne">This is the first message (v-show).</p>
    <p v-show="!isMessageOne">This is the second message (v-show).</p>

    <button @click="Message" id="msg-btn">Toggle message</button>
  </div>
</template>

<script>
export default {
  name: 'MessageComp',
  data() {
    return {
      isMessageOne: true
    };
  },
  methods: {
    Message() {
      this.isMessageOne = !this.isMessageOne;
    }
  }
};
</script>
