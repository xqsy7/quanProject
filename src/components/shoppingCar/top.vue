<template>
  <div class="top">
    <label>
      <input type="checkbox" />全选
    </label>
    <p>商品</p>
    <p>单价</p>
    <p>数量</p>
    <p>小计</p>
    <p>操作</p>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
export default {
  name:"Top",
  computed: {
    ...mapState({
      selectedAll:state=>state.ShoppingCar.selectedAll
    })
  },
  methods: {
    ...mapMutations({
      modifySelected:"ShoppingCar/modifySelected"
    })
  },
};
</script>

<style>
.top {
  width: 100%;
  height: 49px;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top > p {
  width: 200px;
  font-weight: 500;
  text-align: center;
}
.top > p:nth-child(2) {
  width: 400px;
}

.top > label {
  width: 200px;
  text-align: center;
}
</style>