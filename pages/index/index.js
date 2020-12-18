//index.js
//获取应用实例
const app = getApp()
import {formatTime } from "../../utils/index"

Page({
  data: {
    s_id: "",
    s_name: '',
    s_number: 1,
    s_date: "",
    s_cost: '',
    s_price: '',
    show: false,
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
  },
  //事件处理函数
  onLoad: function () {
    this.setData({
      s_date: this.showDate(new Date()),
    })
  },
  //扫码
  getCode: function (e) {
    wx.scanCode({
      success: (res) => {
        console.log(this)
        this.setData({
          s_id: res.result
        })
      }
    })
  },
  //是否显示日期弹框
  showPopup() {
    this.setData({
      show: !this.data.show
    });
  },
  //
  setDate(value) {
    this.setData({
      currentDate: value.detail,
      s_date: this.showDate(new Date(value.detail))
    })
    this.showPopup();
  },
  showDate(date){
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}` 
  }
})