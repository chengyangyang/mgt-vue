<template>
    <div class="shap">
      <div class="input-group input-group">
        <span class="input-group-addon" id="sizing-addon1" style="line-height: 40px"><img src="../../static/images/find.png" height="20" width="20"/></span>
        <input type="text" class="form-control" placeholder="搜索商品" aria-describedby="sizing-addon1">
      </div>
      <div class="shap-add"><button class="shap-add-butn" @click = "addData ()">新增商品</button></div>
      <div class="shap-body" v-for="(item,index) in shapList" :key="index">
        <div class="shap-content">
          <img src="../../static/images/delete.png" style="width: 25px;height: 25px;position: absolute;z-index:1000;right:2px;top: 2px;" @click = "removeshap (index)" />
          <div class="shap-content-checkboxs"><input type="checkbox" :checked = "item.isCheckbox" @click = "isCheck (item)"/></div>
          <div class="shap-content-img-box">
            <div class="shap-content-img"><img class="img-content" v-bind:src="item.imgPath"/></div>
          </div>
          <div class="shap-content-sp">
            <div>
              <p class="shap-content-title">{{item.shapName}}</p>
              <p class="shap-content-title">{{item.shapType}}</p>
            </div>
            <div class="shap-content-button">
              <div class="shap-content-foot-left"><div class="shap-foot-money">价格：￥{{item.money}}</div></div>
              <div class="shap-content-foot-right">
                <button class="shap-content-foot-num" @click = "addSub (item,false)">-</button>
                <button class="shap-content-foot-num shap-content-foot-num-cent">{{item.num}}</button>
                <button class="shap-content-foot-num" @click = "addSub (item,true)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="checkAll">
          <input type="checkbox" :checked = "isCheckboxAll" @click = "checkAll (isCheckboxAll)"/>
        </div>
        <div class="checkAll">
          全选
        </div>
        <div class="summoney">总价：{{sumMoney | moneyFormat }}</div>
      </div>
    </div>
</template>

<script>
import {comData} from '../service/server'
export default {
  name: 'shap',
  data: function () {
    return {
      isCheckboxAll: false,
      sumMoney: 0,
      shapList: []
    }
  },
  filters: {
    moneyFormat (money) {
      return '￥' + money.toFixed(2)
    }
  },
  methods: {
    isCheck: function (shap) {
      shap.isCheckbox = !shap.isCheckbox
      if (shap.isCheckbox) {
        this.isCheckboxAll = true
        this.shapList.forEach((item, index) => {
          if (!item.isCheckbox) {
            this.isCheckboxAll = false
            return false
          }
        })
      } else {
        this.isCheckboxAll = false
      }
      this.summoney()
    },
    addSub (shap, flag) {
      if (flag) {
        shap.num += 1
        shap.money = shap.oneMoney * shap.num
      } else {
        shap.num -= 1
        if (shap.num < 1) {
          shap.num = 1
        }
        shap.money = shap.oneMoney * shap.num
      }
      this.summoney()
    },
    checkAll (flag) {
      this.isCheckboxAll = !flag
      this.shapList.forEach((item, index) => {
        item.isCheckbox = !flag
      })
      this.summoney()
    },
    summoney () {
      this.sumMoney = 0
      this.shapList.forEach((item, index) => {
        if (item.isCheckbox) {
          this.sumMoney += item.money
        }
      })
    },
    addData () {
      var shapAddData = { imgPath: '../../static/images/5a4b6b107f295.jpg',
        shapName: '添加的商品',
        shapType: '新物种1',
        oneMoney: 1001,
        money: 1001,
        num: 1,
        isCheckbox: false
      }
      this.shapList.push(shapAddData)
      this.isCheckboxAll = false
    },
    removeshap (shap) {
      this.shapList.splice(shap, 1)
      this.summoney()
    },
    getLocalData () { // 请求本地数据
      var _this = this;
      comData().then(function (data) {
        _this.shapList = data;
      }).catch(function (err) {
          console.log(err);
        }
      );
         // this.$get('../../static/data/shap.json').then((response) => {
         //    this.shapList = response
         //  })
    }
  },
  mounted () {
    this.getLocalData();
  }
}
</script>

<style scoped>
  .shap{
    width: 350px;
    height: 500px;
    margin: auto;
  }
  .shap-head{
    width: 350px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid black;
  }
  .shap-content{
    background-color: white;
    width: 350px;
    height: 100px;
    position: relative;
    border-top: 1px solid black ;
  }
  .shap-content-checkboxs{
    height: 100px;
    width: 50px;
    line-height: 100px;
    float: left;
  }
  .shap-content-img-box{
    height: 100px;
    width: 100px;
    float: left;
  }
  .shap-content-img{
    height: 80px;
    width: 80px;
    margin: 10px auto;
    border-style: ridge;
  }
  .shap-content-sp{
    text-align: left;
    float: left;
    height: 100px;
    width: 200px;
    position: relative;
  }
  .shap-content-title{
    margin-top: 2px;
    margin-bottom: 0px;
  }
 .shap-content-button{
   width: 200px;
   height: 50px;
   position: absolute;
   bottom: 0px;
 }
  .shap-content-foot-left{
    width: 120px;
    height: 50px;
    float: left;
  }
  .shap-content-foot-right{
    height: 30px;
    float: left;
    margin-top: 20px;
  }
  .shap-foot-money{
    margin-top: 20px;
  }
  .shap-content-foot-num{
    float: left;
    width: 20px;
    height: 20px;
    border: 1px solid black;
  }
  .shap-content-foot-num-cent{
    border-left-style: none;
    border-right-style: none;
  }
  .img-content{
    width: 100%;
    height: 100%;
  }
  .checkAll{
    margin-top: 20px;
    height: 100px;
    width: 50px;
    float: left;
  }
  .summoney{
    float: left;
    margin-left: 80px;
    margin-top: 20px;
  }
  .shap-add{
    width: 350px;
    height: 35px;
    text-align: right;
    margin-bottom: 0px;
    margin-top: 4px;
  }
  .shap-add-butn{
    background-color: red;
    color: cornsilk;
    width: 80px;
    height: 30px;
    font-size: 16px;
    margin-bottom: 0px;
  }
</style>
