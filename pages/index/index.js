//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    info: "测试文字"
  },
  inputedit: function(e) {
    //获取事件参数 通过事件参数获取input所对应的全局属性属性名
    var dataset = e.currentTarget.dataset;
    //获取input的当前值 通过value获取用户当前输入的内容
    var value = e.detail.value;
    //将input所对应的全局属性的属性值更新
    this.data[dataset.item] = value;
  },
  btnClick() {
    //对数据层的info属性更新
    this.data.info = "测试文字已点击,用于测试双向绑定";
    //通过setData函数对数据层的info属性再次赋值 用于触发全局属性info属性的set属性，使当前对象的模板层重新渲染完成页面更新
    this.setData({
      info: this.data.info
    })
  }
})