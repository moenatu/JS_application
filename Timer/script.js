(function(){
  'use strict';

  var passedTime = 0;
  var intervalId = null;
  var timer = document.getElementById('timer');

  function start() {
    if (intervalId != null) {
      return;
    }
    intervalId = setInterval(function() {
      passedTime++;
      render();
    },1000);
  }
  function stop() {
    if (intervalId != null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
  function reset() {
    stop();
    passedTime = 0;
    render();
  }
  function render() {
    var minutes = Math.floor(passedTime / 60);
    var seconds = passedTime % 60;
      timer.textContent = zeroFill(minutes) + ':' + zeroFill(seconds);
  }
  render();
  /*setInterval(function(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    timer.textContent = zeroFill(hours) + ':'
                        + zeroFill(minutes) + ':'
                        + zeroFill(seconds);
    //引数を指定しないと現在時刻が表示される。
    //中身の書き方は'2015-01-01'とか。
  },1000);
  //setInterval(この関数を実行,その間隔 -/msミリビョウ)
*/
  function zeroFill(num) {
    //0埋め
    return ('0' + num).slice(-2);
  }

  document.getElementById('start').addEventListener('click',start);
  document.getElementById('stop').addEventListener('click',stop);
  document.getElementById('reset').addEventListener('click',reset);

}());
