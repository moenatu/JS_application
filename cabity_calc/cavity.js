// window.onload = function(){
//   console.log("onload");
// };

//test
// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// });
// app.message = 'I have change the messsage data!';
//end of test

var app = new Vue({
  el: '#app',
  data:{
    message: 'Hello Vue!'
  },
  methods:{
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});
