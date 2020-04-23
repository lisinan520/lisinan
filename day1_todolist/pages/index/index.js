//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    keyword:"",
   list:[],
   num:0,
   sum:0
  //  show:false
  },
  add:function(e){
    const user= e.detail.value;
    const obj = new Object()
    obj.val = user
    obj.show = false
    obj.check = false
    this.data.list.push(obj);
    // console.log(this.data.list)
    this.num()
    this.setData({
      list:this.data.list,
      keyword:""
    })
   //通过this.setData()将数据渲染到视图层
      
   },
   del(e){
    //      console.log(e.target.dataset.index)
        var i = e.target.dataset.index;
        this.data.list.splice(i,1)
        this.setData({list: this.data.list})
    this.num()
    },
    check:function(e){
//    console.log(e.target.dataset.index)
this.data.list[e.target.dataset.index].show = !this.data.list[e.target.dataset.index].show
this.num()
this.setData({list: this.data.list})

    },
    num(){
      var leng = this.data.list.filter((item)=>{
        return item.show == false
      })
      this.data.sum = leng.length
      this.data.num = this.data.list.length-leng.length
      this.setData({num:this.data.num,sum:this.data.sum})
    }
 
   
    



})
