//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    info: "测试文字"
  },
  //事件处理函数
  onLoad: function() {

  },
  inputedit: function(e) {
    //获取事件参数 通过事件参数获取input所对应的全局属性属性名
    var dataset = e.currentTarget.dataset;
    //获取input的当前值 通过value获取用户当前输入的内容
    var value = e.detail.value;
    //将input所对应的全局属性的属性值更新
    this.data[dataset.item] = value;
    console.log(this.data[dataset.item])
  },
  btnClick() {
    this.data.info = "测试文字已点击,用于测试双向绑定";
    this.setData({
      info: this.data.info
    })
    console.log(this.data.info)
  }
})