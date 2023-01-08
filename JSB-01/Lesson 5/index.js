/*5-Câu lệnh điều kiện
+if(<điều kiện>){
*           câu lệnh>
*}
*else{
*   câu lệnh }
*/
//Tính thương của hai số
var a,b;
a=18;
b=5;

if(b === 0){
    console.log("who can equal to 0");
}
else{
    console.log("kq",a/b);
}
var friend = "Đức"
if(friend == "Đức"){
    console.log("Đi ăn lạc");
}else{
    console.log("Đi ăn gà");
}
/**
 * y = biểu thức có giá trị biểu thức
 * VD: y=ax
 * p = ax**3 + by**2 + cz + d 
 * -Hàm (function) trong js như một cái máy, giúp chúng ta làm một công việc gì đó 
 *  Nó cầu đầu vào và sẽ trả cho chúng đầu ra
 * -Cú pháp
 * function <tên hàm> (<biến đầu vào 1>,< biến đầu vào 2>....){
 *          xử lý
 *          return <biến đầu ra>
 * }
 */

// VD:
function reminder(){
        console.log("Hôm nay là một ngày đáng nhớ,24/2");
}
reminder();
function Tinhtuoi(nămsinh){
    var tuoi = 2022 - nămsinh;
    return  tuoi;
}
var tuoicuangoc = Tinhtuoi(2008);
console.log(tuoicuangoc)

function tinhsotien(sotien){
    var sotiencondu = 10000 - sotien;
    return sotiencondu;
}
var sotiencondu = tinhsotien(500);
console.log(sotiencondu)



