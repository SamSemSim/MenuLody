const express = require('express');


const app = express();

// app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     async function init(){
//         try {
//             if(req.session.user){
//                 const user =await User.findByPk(req.session.user.id);
//                 res.locals.user = user;
//             }
//             res.locals.isAuthenticated = req.session.isLoggedIn;
//             res.locals.csrfToken = req.csrfToken();
//             next();
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     init();
// });
app.get("/" , (req,res,next) => {
    console.log("connected to react");
    next();
});

app.listen(8080);



//     Products table güncellenecek ve 1 ana table altında 3(duruma göre artabilir) farklı table çevrilicek,
// add product post methodu controller ve routes eklenecek,
// categories çekerken filtreleme ile çekme eklenecek,
// productsları favorilere ekleme olacak,
// user giriş yaptıktan sonra altında user ayarları menüsü ve ayarlar eklenecek,
// productslara yorum yapma ve yıldız verme eklenecek,

//   
//data yazdırırken html olarak yazmlarını sağlama eklenecek

// kullanıcı forgot password kısmı 
// kullanıcı myproducts kısmı 
// kullanıcı myproducts edit kkısmı 
// kullanıcı myproducts delete kısmı
// kullanıcı myproducts addcar addmotorcycle kısmı
// kullanıcı myproducts addcar addmotorcycle backend kısmı
// foto yükleme image kullanrak file kısmı 
// home page düzenlenecek 
// products detail kısmı eklenecek 
// products add favorite backend kısmı 
// products add favorite frontend kısmı
// products categories kısmı düzenle