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
        //สัประยุทธ์ทะลุฟ้า
    name: "ตอนที่ 180",
    servers: {
        "ตัวเล่นหลัก": "https://drive.google.com/file/d/1WLA15oGRAoqzw5Nq4uoz8EqXJae2eN96/preview",
        "สำรอง 1": "https://ok.ru/videoembed/10774616607240?nochat=1",
        "สำรอง 2": "ลิงก์อื่น..."
    }
},

{
    name: "ตอนที่ 181",
    servers: {
        "ตัวเล่นหลัก": "https://drive.google.com/file/d/1cmMUNWHphpNtZDtJ2YMmHqHShjo9go7j/preview",
       "สำรอง 1": "https://ok.ru/videoembed/10834851662344?nochat=1",
        "สำรอง 2": "ลิงก์อื่น..."
        
    }
},

{
    name: "ตอนที่ 182",
    servers: {
        "ตัวเล่นหลัก": "https://drive.google.com/file/d/1_WRh-d7bFZy-S-xcKfHQjujI5JweLMmj/preview",
       "สำรอง 1": "https://ok.ru/videoembed/10975789451784?nochat=1",
        "สำรอง 2": "ลิงก์อื่น..."

    }
},

{
    name: "ตอนที่ 183",
    servers: {
        "ตัวเล่นหลัก": "",
       "สำรอง 1": "",
        "สำรอง 2": "ลิงก์อื่น..."
    }
},


];


