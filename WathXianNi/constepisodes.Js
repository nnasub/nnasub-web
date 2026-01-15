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
    //ฝืนลิขิตฟ้า
    name: "ตอนที่ 122",
    servers: {
        "ตัวเล่นหลัก": "",
       "สำรอง 1": "https://ok.ru/videoembed/10775133424136?nochat=1",
        "สำรอง 2": "ลิงก์อื่น..."
    }
},
{
    
    name: "ตอนที่ 123",
    servers: {
        "ตัวเล่นหลัก": "https://drive.google.com/file/d/1L09cMv-8kY9Q1VKC7Y0z_T_euSh24CDV/preview",
       "สำรอง 1": "https://ok.ru/videoembed/10848228346376?nochat=1",
        "สำรอง 2": "ลิงก์อื่น..."
    }
},
{
    name: "ตอนที่ 124",
    servers: {
        "ตัวเล่นหลัก": "",
       "สำรอง 1": "",
        "สำรอง 2": "ลิงก์อื่น..."
    }
},


];
