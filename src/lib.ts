// lib.ts ประกาศตัวแป
export default function sayhi(name:string) { //export  ออกไปใช้ file อื่น

    console.log(`sayhi ${name}!`) //command +/ key ลัด comment =>แทรกตัวแปรใน string   
}
//export เฉยๆ ไม่ต้อง default
export function register(){
    console.log('register');
}
export let adminName = "แอดมิน"
//no export function
let noExport = " No Export"