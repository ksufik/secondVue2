<template>
    <div>
        <input class="form__input" placeholder="Категория" type="text" v-model="category">
        <input class="form__input" placeholder="Сумма" type="text" v-model.number="value">
        <button class="form__btn" @click="$emit('add', category, value)">
            ADD
        </button>
    </div>
</template>

<script>
export default {
  name: 'PaymentForm',
  data () {
    return {
      category: '',
      value: null
    }
  }
}
</script>

<style lang="scss">
 .form{
    &__input{
      display: block;
      width: 100%;
      outline: none;
      border: 1px solid rgba(65, 184, 131, 1);
      padding: 10px 15px;
      margin: 15px 0;
    }
    &__btn{
      padding: 10px 20px;
      font-size: 20px;
      cursor: pointer;
      background-color: rgb(65, 184, 131);
      margin-bottom: 50px;
      margin-top: 20px;
      &:hover{
        background-color: rgba(65, 184, 131, 0.7);
      }
    }
 }
</style>
