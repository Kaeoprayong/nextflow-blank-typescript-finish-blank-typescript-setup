// นำ funtion ใน file lib.ts มาใช้
//sayhi('Jang');
//mport sayhi, { adminName } from "./lib";
//import { register } from "./lib";

//register(); //คำสั่งใน import จะเปลี่ยนไปตาม function import
//  No defualt ใส่ {}
// import ของที่ exportจากไฟล์ทั่วไป ชื่อต้องตรง และอยู่ใน {} เท่านั้น
// export มาเปลี่ยนชื่อได้
//console.log(adminName);

//console.log('Hello, TypeScript with Node.js!');

//import ค่า sum plus 2 ตัวในไฟล์ lip
import { summary } from "./lib";
console.log(summary(15, 40));