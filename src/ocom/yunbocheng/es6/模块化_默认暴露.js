/* 默认暴露 */
export default {
    /*这个里面可以写任意类型的数据。数组、对象、字符串、函数等等*/
    school:"北京大学",
    change:function (){
        console.log("我们可以改变你！");
    },

    /* 这个定义的也是一个函数，使用的对象中函数的简化写法。*/
    data(){
      return{
          msg:"hello"
      }
    }
}