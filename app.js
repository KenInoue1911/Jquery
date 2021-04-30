var hello = 'Hello world';
var int1 = 1; //整数を代入
var int2 = 2; //負数を代入する
var float1 = 3.1; //小数点を代入する
var str1 = 'javascriptを覚えよう'; //文字列を代入する
    // alert(10 / 3);割り算
    // alert('hello' + 'world');
    //var h1 = 'hello';
    //var h2 = 'wolrdd';
    //alert(h1 + h2);

//if(条件1){処理1} else if(条件2){処理2} else{処理3}
//条件1を満たすときは処理1、条件2を満たすときは処理2、どちらも満たさないときは処理3

  //var orange = 100;
  //var apple = 120;
   //if(orange < apple){
    //alert('みかんの値段がリンゴより安い');
   //} else if (orange == apple) {
    //alert('みかんとリンゴが同じ値段');
   //} else{
    //alert('みかんの値段がリンゴよりも高い');
   //}

// 引数の条件がtrueの間、波括弧内部の処理が繰り返される。
 //while(条件){
   //処理
 //}
//var max = 100;
//var num = 1;
//var count = 0;
//while(num < max){
  //num = num * 2;
  //count = count + 1;
//}
//alert('2を掛け続けて' + max + 'を超えるのに必要な回数は' + count + '回です');

//do{
  //最低1回は行われる処理
//}while(条件式);

//for ( 初期値; 条件式; 増減値 ){
  //繰り返し処理
//}

//var i;
//var num = 1;
//for(i = 1; i < 11; i++){
  //num = num + i;
//}
//alert('1から10まで足した結果は' + num );

//ここまでが2章

//function 関数名(){
  //処理内容
//}

//function 関数名

//$(function () {
  //$('body').html('<h1>Hello jQuery!</h1>');
//});

$(function(){
$('button').on('click', function(){
  $('ul').children().css('color','red');
 });
});
