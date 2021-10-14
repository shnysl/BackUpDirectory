Number.prototype.formatMoney = function (fractionDigits, decimal, separator) {
    fractionDigits = isNaN(fractionDigits = Math.abs(fractionDigits)) ? 2 : fractionDigits;
    decimal = typeof (decimal) === "undefined" ? "." : decimal;
    separator = typeof (separator) === "undefined" ? "," : separator;
    var number = this;
    var neg = number < 0 ? "-" : "";
    var wholePart = parseInt(number = Math.abs(+number || 0).toFixed(fractionDigits)) + "";
    var separtorIndex = (separtorIndex = wholePart.length) > 3 ? separtorIndex % 3 : 0;  
    return neg +
    (separtorIndex ? wholePart.substr(0, separtorIndex) + separator : "") +
    wholePart.substr(separtorIndex).replace(/(\d{3})(?=\d)/g, "$1" + separator) +
    (fractionDigits ? decimal + Math.abs(number - wholePart).toFixed(fractionDigits).slice(2) : "") + ("₺");
    };
    function formatMoney (raw) {
        return Number(raw).formatMoney(0, ',', '.');
    }
var myMonths = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık"
]

function dateset(e){
    const date = new Date(e)
    return date.getDate() + ' ' + myMonths[date.getMonth()] + ' ' + date.getFullYear()
}

function booltranslate(e){
    const a = new Boolean(e)
    if(e){
        return 'Evet'
    }
    else{
        return 'Hayır'
    }
}
var fs = require('fs')
module.exports.index = function(req, res){
    var a = parseInt(req.params.id)
        fs.readFile("../MarketProjesi/public/estateList.json", (err, data) =>{
            var data = JSON.parse(data);
            for (item of data.estateList){
                ilan = data.estateList[a-1]
            }
            res.send('<!DOCTYPE html><html lang="tr">'+'<head>'+
            '<meta charset="UTF-8">'+
            '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
            '<link rel="preconnect" href="https://fonts.googleapis.com">'+
            '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'+
            '<link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Condensed&family=Mulish:wght@900&display=swap" rel="stylesheet">'+
            '<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.2/socket.io.js" integrity="sha512-iZIBSs+gDyTH0ZhUem9eQ1t4DcEn2B9lHxfRMeGQhyNdSUz+rb+5A3ummX6DQTOIs1XK0gOteOg/LPtSo9VJ+w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>'+
            '<link href="/css/adDetail.css" rel="stylesheet" type="text/css"/>'+
            '<title>Ana Sayfa</title>'+
        '</head>'+
        '<body>'+
            '<div class="header">'+
                '<div id="navbar">'+
                    '<div class="box1"><a href="/">GABORAS </a></div>'+
                    '<div class="box2"><a href="/">Piyasa </a></div>'+
                    '<div class="box3"><a href="/">İhaleler </a></div>'+
                    '<div class="box4"><a href="/">Yerel Ağ </a></div>'+
                    '<div class="box5"><a href="/">Varlık Yönetimi </a></div>'+
                    '<div class="box6"><a href="/">Giriş Yap / Kaydol</a></div>'+
                '</div>'+
            '</div>'+
            '<div class="section">'+
                '<div class="header2">'+
                    '<div id="box1">'+
                        '<div id="box11">'+
                            '<div id="box111"><li><a href="/">Vitrin</a></li></div>'+
                            '<div id="box112"><li><a href="/">Konut</a></li></div>'+
                            '<div id="box113"><li><a href="/">Satılık</a></li></div>'+
                            '<div id="box114"><li><a href="/">Satılık Villa</a></li></div>'+  
                        '</div>'+
                        '<div id="box12"><p>' + ilan["neighborhood"] + '  ' + ilan["type"] + '  ' + ilan["subcategory"] + '</p></div>'+
                    '</div>'+
                    '<div id="box2">'+
                       '<a href="/" id="modalOpen" onclick="modalopen(event)">'+
                            '<div id="box21">'+
                                'Teklif Gönder'+
                            '</div>'+
                        '</a>'+
                    '</div>'+
                    '<div class="mainbox">'+
                        '<div id="mainbox1">'+
                            '<div id="mainbox11">'+
                                '<div id="mainbox111">'+
                                    '<div id="mainbox1111"><b>'+ formatMoney(ilan["price"]) +'</b></div>'+
                                    '<div id="mainbox1112"><b>'+ ilan["province"] +' / '+ ilan["district"] +' / '+ ilan["neighborhood"] +'  / '+ ilan["block"] +' - '+ ilan["parcel"] +'</b></div>'+
                                '</div>'+
                                '<div id="mainbox112">'+
                                    '<table id="fl-table">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th>İlan Tarihi</th>'+
                                                '<td>'+ dateset(ilan["postDate"]) + '</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Emlak Tipi.</th>'+
                                                '<td>'+ ilan["subcategory"] +'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>M² (Bürüt)</th>'+
                                                '<td>'+ ilan["grossArea"] +'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>M² (Net)</th>'+
                                                '<td>'+ ilan["netArea"] +'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                               '<th>Oda Sayısı</th>'+
                                                '<td>'+ ilan["room"] +'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Bina Yaşı</th>'+
                                                '<td>'+ ilan["constructionYear"] +'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Kat Sayısı</th>'+
                                                '<td>'+ ilan["totalFloor"] +'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Isıtma</th>'+
                                                '<td>'+ ilan["heating"] +'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Banyo Sayısı</th>'+
                                                '<td>'+ ilan["bathroom"] +'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Eşyalı</th>'+
                                                '<td>'+ booltranslate(ilan["furnished"]) +'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Kullanım Durumu</th>'+
                                                '<td>'+  booltranslate(ilan["usageStatus"]) +'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Site İçerisinde</th>'+
                                                '<td>'+  booltranslate(ilan["inSite"]) +'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Aidat (TL)</th>'+
                                                '<td>'+ ilan["dues"] +'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Krediye Uygun</th>'+
                                                '<td>'+  booltranslate(ilan["creditEligibility"]) +'</td>'+
                                            '</tr>'+
                                    '</thead>'+
                                    '<tbody id = "adList"><tbody>'+
                            '</table>'+
                                '</div>'+
                            '</div>'+  
                            '<div id="mainbox12">'+
                                '<div id="mainbox121">'+
                                   '<img id="image" src="image1" srcset="'+ ilan["img1"]+ '">'+
                                '</div>'+
                                '<div id="mainbox122">'+
                                    '<div><img id="image" src="image1" srcset="'+ ilan["img1"] +'" onclick="changeImage(\''+ ilan["img1"] +'\')"></div>'+
                                    '<div><img id="image" src="image1" srcset="'+ ilan["img2"] +'" onclick="changeImage(\''+ ilan["img2"] +'\')"></div>'+
                                    '<div><img id="image" src="image1" srcset="'+ ilan["img3"] +'" onclick="changeImage(\''+ ilan["img3"] +'\')"></div>'+
                                    '<div><img id="image" src="image1" srcset="'+ ilan["img4"] +'" onclick="changeImage(\''+ ilan["img4"] +'\')"></div>'+
                                    '<div><img id="image" src="image1" srcset="'+ ilan["img5"] +'" onclick="changeImage(\''+ ilan["img5"] +'\')"></div>'+
                                    '<div><img id="image" src="image1" srcset="'+ ilan["img1"] +'" onclick="changeImage(\''+ ilan["img1"] +'\')"></div>'+
                                    '<div><img id="image" src="image1" srcset="'+ ilan["img2"] +'" onclick="changeImage(\''+ ilan["img2"] +'\')"></div>'+
                                    '<div><img id="image" src="image1" srcset="'+ ilan["img3"] +'" onclick="changeImage(\''+ ilan["img3"] +'\')"></div>'+
                                    '<div><img id="image" src="image1" srcset="'+ ilan["img4"] +'" onclick="changeImage(\''+ ilan["img4"] +'\')"></div>'+
                                    '<div><img id="image" src="image1" srcset="'+ ilan["img5"] +'" onclick="changeImage(\''+ ilan["img5"] +'\')"></div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div id="mainbox2">'+
                            '<a href="" ><div id="mainbox21">TEKLİFLER</div></a>'+
                            '<a href=""><div id="mainbox22">KONUM</div></a>'+
                        '</div>'+
                        '<div id="mainbox3">'+
                            '<table id="offer-table" cellspacing="0">'+
                                '<thead>'+
                                    '<tr id="offer-table-header">'+
                                        '<th>Gönderen</th>'+
                                        '<th>Email</th>'+
                                        '<th>Telefon</th>'+
                                        '<th>Teklif Tarihi</th>'+
                                        '<th>Gelen Teklif Tutarı</th>'+
                                    '</tr>'+
                                '</thead>'+
                                '<tbody id="offer-table-content">'+
                                '</tbody>'+
                            '</table>'+                       
                        '</div>'+
                    '</div>'+
            '</div>'+
            '<div class="aside"> </div>'+
            '<div class="footer"></div>'+            
                '</div>'+
            '</div>'+
            '<dialog id="modal">'+
                '<form id="modal-form">'+
                    '<div id="modal-main-box">'+
                        '<div id= "modal-box1">'+
                            '<div id="modal-header"><p>İletişim Bilgileri<p></div>'+
                            '<div id="modal-close-box"><button id="modal-close"> X </div>'+
                        '</div>'+
                        '<div id="modal-box2">'+
                            '<div id="modal-name-box"><input type="text" id="senderName" placeholder="Ad" autocomplete="off" required="required"></div>'+
                            '<div id="modal-surname-box"><input type="text" id="senderSurname" placeholder="Soyad" required="required" autocomplete="off"></div>'+
                        '</div>'+
                        '<div id="modal-box3">'+
                            '<div id="modal-email-box"><input type="email" id="senderEmail" required="required" autocomplete="off" placeholder="Eposta Adresi" ></div>'+
                            '<div id="modal-phone-box"><input type="number" id="senderPhone" placeholder="Cep Telefonu" required="required" autocomplete="off"></div>'+
                        '</div>'+
                        '<div id="modal-box4">'+
                            '<div id="modal-offer-box"><input type="number" id="senderOffer" placeholder="Telif Tutarı" required="required" autocomplete="off"></div>'+
                        '</div>'+
                        '<div id="modal-box5">'+
                            '<div id="modal-save-box"><input type="submit" id="submitBtn" value="Kaydet"></input></div>'+
                        '</div>'+
                    '</div>'+
                    '</form>'+
                    '</dialog>'+
            '<script src="/js/ilanDetay.js"></script>'+
        '</body>'+
        '</html>');
        res.end();
    })
}