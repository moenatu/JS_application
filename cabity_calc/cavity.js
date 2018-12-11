
var rectangularCavityResonator = new Vue({
  el: '#rectangularCavityResonator',
  data:{
    x_Length: 1,
    y_Length: 1,
    z_Length: 1,
    modeResultList:[
      {m:0,n:0,p:0,lambda:0,f:0},
    ],
  },
  methods:{
    calcTEmode: function() {
        console.log('done');
        var m = 1,n = 0,p = 1,lambda = 0,f = 0;
        var TEmode = {m:m,n:n,p:p,lambda:lambda,f:f};
        var a = 2 * this.x_Length, b = 2 * this.y_Length, l = 2 * this.z_Length;
        var c = 299792458; //[m/s]
        this.modeResultList = [];
        console.log(TEmode);

        for(m=1;m<6;m++){
          for(n=0;n<6;n++){
            for(p=0;p<6;p++){
              lambda = 1/Math.sqrt(
                Math.pow(m/a, 2) +
                Math.pow(n/b, 2) +
                Math.pow(p/l, 2)
              );
              f = c/lambda;
              f = f/1000000;
              f = Math.round(f*10000)/10000;
              // https://qiita.com/nagito25/items/0293bc317067d9e6c560
              TEmode = {m:m,n:n,p:p,lambda:lambda,f:f};
              this.modeResultList.push(TEmode);
              // console.log(TEmode.f);
            }
          }
        }
        // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        // https://qiita.com/PianoScoreJP/items/f0ff7345229871039672
        this.modeResultList.sort(function(a,b){
          if(a.f < b.f) return -1;
          if(a.f > b.f) return 1;
          return 0;
        });
    }
  }
});

Vue.component('modeResult-list', {
    props: ['modeResult'],
    template: `<li>TE{{modeResult.m,modeResult.n,modeResult.p}}: {{ modeResult.f }} [GHz]</li>`
});
