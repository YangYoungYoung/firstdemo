// pages/typeInfo/typeInfo.js
var network = require("../../utils/network.js")
var common = require("../../utils/common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    let that = this
    let url = "https://chanmao.oicp.vip/mall/api/getShopByType"
    var params = {
      type:id
    }
    let method = "GET";
    wx.showLoading({
      title: '加载中...',
    }),
      network.POST(url, params, method).then((res) => {
        wx.hideLoading();
        // console.log("返回值是：" + res.data.mainType);
        that.setData({
         shopInfo:res.data.shopInfo
        })
      }).catch((errMsg) => {
        wx.hideLoading();
        console.log(errMsg); //错误提示信息
        wx.showToast({
          title: '网络错误',
          icon: 'loading',
          duration: 1500,
        })
      });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  //跳转到详情页
  toDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    // console.log("当前点击的是："+id);
    wx.navigateTo({
      url: '../detail/detail?goodId=' + id,
    })
  },
})