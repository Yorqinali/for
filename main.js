// 1. k va n butun son berilgan. K ni n marta chiqaruvchi dastur tuzing

// var k = 1;
// var n = 10;
// for (var i = 1; i <= n; i++) {
//   console.log(k);
// }




// 2. a, b sonlar berilgan. A b dan katta a va b orasidagi butun sonlarni chiqaruvchi dastur tuzing. A va B ni ozi ham chiqsin

// var a=10;
// var b=1;
// for(var i = a ; i >= b; i--){
//   console.log(i);
// }



// 3.a,b sonlar berilgan a b dan katta ava b orasidagi barcha butun sonlarni kamayish tartibida chiqaring a va b kirmasin

// var a=10;
// var b=1;
// for (var i = a-1 ; i > b ; i--) {
//   console.log(i);
// }
 



// 4.1kg konfet 10.000 so'm berilgan . 1kg dan 10 kg gacha barchasini narxini chiqaruvchi dastur tuzing

// var konfet = 10000;
// var limit = 10;

// for (var i = 1; i <= limit; i++){
//   let natija = i * konfet
//  console.log(natija);
// }




// 5.1kg konfet 10000so'm. 0,1 kg dan 1 kg gacha bo'lgan konfet narxin toping

var konfet = 10000;
var limit = 1.0;
for (var i = 1; i <=limit; i++){
  let natija = i * konfet
  console.log(natija);
}



// 6.1kg konfet 10000so'm. 1,2kg, 1,4, 1,6, 1,8, 2kg konfetlarni narxini toping

// var konfet = 10000;
// var limit = 2.0;
// for (var i = 1.2; i <=limit; i++){
//   let natija = i * konfet
//   console.log(natija);
// }

// 7.a,b sonlar berilgan. A dan b gacha barcha butun sonlarni yig'indisin topuvchi dastur yozing

// let sum = 0;
// for(var i = 1; i <= 10; i++){
//   sum += i
//   console.log(sum);
// }




// 8.a,b sonlar berilgan. A dan b gacha barcha butun sonlarni ko'paytmasin topuvchi dastur yozing

// let sum = 1;
// for(var i = 1; i <= 10; i++){
//   sum *= i
//   console.log(sum);
// }

// 9.a,b sonlar berilgan a dan b gacha bo'lgan sonlarni kvadratlarini yig'indisin topuvchi dastur toping

// let sum = 1;
// for(var i = 1; i <= 10; i++){
//   sum *= i
//   var natija = sum +i
//   console.log(natija);
// }

// 11.n soni berilgan shu soni ichidan toqlarin ko'ruvchi dastur yozing

// var n = 20;
// for (var i = 0; i < n; i++){
//   // console.log(i);
//   if(i % 2 != 0){
//     console.log(i);
//   }
// }

// 12.n soni berilgan shu sonlarni ichidan juftlarini koruvchi dastur yozing

// var n = 20;
// for (var i = 1; i < n; i++){
//   // console.log(i);
//   if(i % 2 == 0){
//     console.log(i);
//   }
// }

// 13.n soni berilgan shu son ichidan faqat murakkab sonlarni aniqlovchi dastur yozing


// var n = 20;
// for (var i = 0; i < n; i++){
//   if(i / i ===1 && i % 2 === 0 && i / 1 === i){
//     console.log(i);
//   }
// }

// 14.n soni berilgan shu sonlarni ichidan jufat va toq sonlarni kvadratlarini chiqaring

// var juft = [];
// var toq = [];
// var n = 12;
// for(var i= 1; i <= n; i++){
//   if(i % 2 === 0){
//     juft.push(i)
//   }else{
//     toq.push(i)
//   }
// }

// for(var i = 0; i < juft.length; i++){
//   console.log(juft[i] ** 2);
// }

// for(var i = 0; i < toq.length; i++){
//   console.log(toq[i] ** 2);
// }


// 15.n son berilgan n sonidan kamayish tartibida sonlar chiqarilsin

// var n = 10;
// var k = 1
// for(var i = n; i >= k; i--){
//   console.log(i);
// }

// 16. nson berilgan 0 va ngacha sonlar orasida 5ga karralisini tashlab o'tib ketuvchi dastur tuzing

// var n = 32;
// var k = 5
// for(var i = 0; i / k!= 0; i++){
//     console.log(i);
// }





// 17.n butun son berilgan ngacha butun sonlarni ko'paytmasini topuvchi dastur tuzing

// let sum = 1;
// for(var i = 1; i <= 10; i++){
//   sum *= i
//   console.log(sum);
// }


// var n = 20;
// var x = 10;

// for (var i = 1; i <= n; i++){
//     var natija = i / x
//     console.log(natija);
// }

// 20.n va x sonlar berilgan 0 dan n gacha sonlar orasida x ga bo'linadigan sonlarni topuvchi dastur tuzing
