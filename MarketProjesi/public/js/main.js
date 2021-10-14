getAdList();

Number.prototype.formatMoney = function (fractionDigits, decimal, separator) {
    fractionDigits = isNaN(fractionDigits = Math.abs(fractionDigits)) ? 2 : fractionDigits;
    decimal = typeof (decimal) === "undefined" ? "." : decimal;
    separator = typeof (separator) === "undefined" ? "," : separator;
    var number = this;
    var neg = number < 0 ? "₺" : "";
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

/*const data = fetch("estateList.json")
.then(response=>response.json())
.then(dat=>{
    for (getir in dat){
        //console.log(dat[getir])
        var gelen = dat[getir]
    }
    for (ilanlar in gelen){
        container.innerHTML += '<a href="ilan_detay/'+ gelen[ilanlar]["id"]+'" id="' + gelen[ilanlar]["id"] + 'onclick="details('+gelen[ilanlar]["id"]+')"><div class="box">' 
        + '<div id="last-ad-date"><p>Kalan Süre: 30 Gün</p></div><img id="image" src="image1" srcset=' + gelen[ilanlar]["img1"]
        + '><h2 class = "price">' + formatMoney(gelen[ilanlar]["price"]) + '</h2><h3 class = "category"><b>' + gelen[ilanlar]["category"]+ '/' + gelen[ilanlar]["subcategory"] 
        + '</b></h3><h4 class = "location"><b>' + gelen[ilanlar]["province"] + ' / ' + gelen[ilanlar]["district"] + ' / ' +  gelen[ilanlar]["neighborhood"] + '</b></h4></div></a>'
    }
})*/

function getAdList(){
    fetch("estateList.json")
    .then(response=>response.json())
    .then(data=>{
        for (item of data.estateList){
            container.innerHTML += '<a href="ilan_detay/'+ item.id +'" id="' + item.id + 'onclick="details('+ item.id +')"><div class="box">' 
        + '<div id="last-ad-date"><p>Kalan Süre: 30 Gün</p></div><img id="image" src="image1" srcset=' + item.img1
        + '><h2 class = "price">' + formatMoney(item.price) + '</h2><h3 class = "category"><b>' + item.category + '/' + item.subcategory
        + '</b></h3><h4 class = "location"><b>' + item.province + ' / ' + item.district + ' / ' +  item.neighborhood + '</b></h4></div></a>'
        }
    })
}

