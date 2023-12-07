// command i ขึ้น co-pilot
//typescript
import express from 'express'

// const คือตัวแปร
const app = express();
const port = 3000;

// เรียกใช้ function
//1.กำหนด URL 
// 1.1 / ถ้าเข้ามา URL นี้ให้ return hello
app.get('/', function(request, response) {
    response.send('hello')
    
})

// 1.2 ฟัง request
app.listen(port, ()=>{
console.log('http://localhost:' + port);
})
