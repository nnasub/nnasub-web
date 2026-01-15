function changeServer(src, btnEl) {
            // เปลี่ยน iframe (ใช้โค้ดชุดใหม่ที่ครบเครื่องกว่า)
           player.innerHTML = `<iframe 
            id="mainFrame" 
            src="${src}" 
            width="100%" 
            height="100%" 
            frameborder="0" 
            scrolling="no" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
            allowfullscreen 
            style="border:none;"></iframe>`;
            
            // เปลี่ยนสีปุ่มเซิร์ฟเวอร์
            document.querySelectorAll('.server-btn').forEach(b => b.classList.remove('active'));
            if(btnEl) btnEl.classList.add('active');
        }
        
const episodes = [
{
        //ศึกจักรรดิ์สวรรค์
    name: "ตอนที่ 53",
    servers: {
        "ตัวเล่นหลัก": "https://drive.google.com/file/d/1WLA15oGRAoqzw5Nq4uoz8EqXJae2eN96/preview",
        "สำรอง 1": "https://ok.ru/videoembed/10812534032904?nochat=1",
        "สำรอง 2": "ลิงก์อื่น..."
    }
},

{
    
    name: "ตอนที่ 54",
    servers: {
        "ตัวเล่นหลัก": "https://drive.google.com/file/d/1T_Ap5Y87MV4CRqjDFuMuJvGHWJP8Hz9r/preview",
        "สำรอง 1": "https://ok.ru/videoembed/10827578280456?nochat=1",
        "สำรอง 2": "ลิงก์อื่น..."
    }
},

{
    name: "ตอนที่ 55",
    servers: {
        "ตัวเล่นหลัก": "https://drive.google.com/file/d/1bpNOccqSriyu_iFRYu-yWkatBM8rP6Kg/preview",
       "สำรอง 1": "https://ok.ru/videoembed/10926210157064?nochat=1",
        "สำรอง 2": "ลิงก์อื่น..."
    }
},


];


