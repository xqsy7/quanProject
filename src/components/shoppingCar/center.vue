<template>
  <div class="content">
    <div class="goods">
      <label>
        <input type="checkbox" />
      </label>
      <div class="goodsImg">
        <img
          alt
        />
      </div>
      <div class="goodsInfo"></div>
      <p class="goodsPrice"></p>
      <div class="num">
        <button >-</button>
        <input type="text" />
        <button >+</button>
      </div>
      <p class="Subtotal">￥</p>
      <p class="operation">删除</p>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations} from "vuex";
export default {
  name: "Center",
//   computed: {
//     ...mapState({
//       goods: state => state.ShoppingCar.goods
//     })
//   },
//   methods:{
//     ...mapMutations({
//       handleGoodsChange:"ShoppingCar/handleGoodsChange",
//       handleReducer:"ShoppingCar/handleReducer",
//       handleAdd:"ShoppingCar/handleAdd"
//     })
//   }
};
</script>
<style>
  .goods {
    width: 100%;
    display: flex;
    height: 107px;
    align-items: center;
    background: #ccc;
  }
  .goods > label {
    width: 118px;
    text-align: center;
  }
  .goods > .goodsInfo {
    width: 200px;
  }
  .goods > .goodsPrice {
    width: 200px;
    text-align: center;
  }
  .goods > .num {
    overflow: hidden;
    display: flex;
  }
  .goods > .num > button {
    width: 20px;
    height: 20px;
    border: 0;
  }
  .goods > .num > input {
    width: 40px;
  }

  .goods > .Subtotal {
    width: 200px;
    text-align: center;
  }

  .goods > .operation {
    width: 86px;
    text-align: center;
  }
  img{
    width:80px;
    height: 80px;
  }
</style>