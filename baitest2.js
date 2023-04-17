// let sukem = document.getElementById("sukem");
// sukem.value = "10.000 vnđ"
// let trasua = document.getElementById("trasua");
// trasua.value = "30.000 vnđ"
// let thanhtiensukem = document.getElementById("thanhtienbanhngot");
// let soluongbanhngot = document.getElementById("soluongbanhngot");


// soluong.addEventListener('change', function () {
//     let banhngotphomai = document.getElementById("banNgotPhomai");
//     banhngotphomai.value = "90.000 vnđ"
//     let tong = parseInt(soluong.value) * parseInt(banhngotphomai.value)
//     thanhtiensuk.value = tong + ".000 vnđ"
// });
// banhngotphomai.addEventListener('change', function () {
//     let banhngotphomai = document.getElementById("banNgotPhomai");
//     banhngotphomai.value = "90.000 vnđ"
//     let tong = parseInt(soluong.value) * parseInt(banhngotphomai.value)
//     thanhtien.value = tong + ".000 vnđ"
// })
//bánh ngọt phô mai
let banhngotphomai = document.getElementById("banNgotPhomai");
banhngotphomai.value = "90.000 vnđ"
let slbn = document.getElementById("slbn")
let ttbn = document.getElementById("ttbn")
slbn.addEventListener("change", function () {
    let tong = parseInt(slbn.value) * parseInt(banhngotphomai.value);
    ttbn.value = tong + ".000 vnđ"
})
banhngotphomai.addEventListener("change", function () {
    let tong = parseInt(slbn.value) * parseInt(banhngotphomai.value);
    ttbn.value = tong + ".000 vnđ"
})
//bánh sukem
let sukem = document.getElementById("sukem");
sukem.value = "10.000 vnđ"
slsk = document.getElementById("slsk");
ttsk = document.getElementById("ttsk");
slsk.addEventListener("change", function () {
    let tong = parseInt(slsk.value) * parseInt(sukem.value);
    ttsk.value = tong + ".000 vnđ"
})
sukem.addEventListener("change", function () {
    let tong = parseInt(slsk.value) * parseInt(sukem.value);
    ttsk.value = tong + ".000 vnđ"
})
// trà sữa
let trasua = document.getElementById("trasua");
    trasua.value = "30.000 vnđ"
slts = document.getElementById("slts");
ttts = document.getElementById("ttts");
slts.addEventListener("change", function () {
    let tong = parseInt(slts.value) * parseInt(trasua.value);
    ttts.value = tong + ".000 vnđ"
})
trasua.addEventListener("change", function () {
    let tong = parseInt(slts.value) * parseInt(trasua.value);
    ttts.value = tong + ".000 vnđ"
})
// tongTien=document.getElementById("tongtien")
// tongTien=(ttbn.value+ttsk.value+ttts.value)+".000vnđ"
// console.log(tongTien)
// console.log(ttbn.value)