function changeImage(deger) { 
    document.getElementById("image").srcset = deger;
}

var modal = document.querySelector("dialog");

function modalopen(e){
    document.getElementById("modal-form").reset();
    modal.showModal();
    e.preventDefault();
}

document.querySelector("#modal-close").onclick = function() {
     modal.close();
     return false;
    }

 document.querySelector("#submitBtn").onclick = function() {
     return false;
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

const link = location.href
const socket = io.connect('http://localhost:8080/xnamespace')
const senderName = document.getElementById('senderName')
const senderSurname = document.getElementById('senderSurname')
const senderEmail = document.getElementById('senderEmail')
const senderPhone = document.getElementById('senderPhone')
const senderDateTime = new Date()
const senderOffer = document.getElementById('senderOffer')
const submitBtn = document.getElementById('submitBtn')
const output = document.getElementById('offer-table-content')

submitBtn.addEventListener('click', () =>{
    if(senderName.value === ""){
        alert('Lütfen Adınızı Giriniz')
    }
    else if(senderSurname.value === ""){
        alert('Lütfen Soyadınızı Giriniz')
    }
    else if(senderEmail.value === ""){
        alert('Lütfen E-Posta Adresinizi Giriniz')
    }
    else if(senderPhone.value === ""){
        alert('Lütfen Telefon Numaranızı Giriniz')
    }
    else if(senderOffer.value === ""){
        alert('Lütfen Teklif Tutarını Giriniz')
    }
    else{
        socket.emit('login', {
            url: location.href,
            senderName: senderName.value,
            senderSurname: senderSurname.value,
            senderEmail: senderEmail.value,
            senderPhone: senderPhone.value,
            senderDateTime: senderDateTime.getDate() + ' ' + myMonths[senderDateTime.getMonth()] + ' ' + senderDateTime.getFullYear(),
            senderOffer: senderOffer.value
        })
    }
})

socket.on('message', data=>{
    output.innerHTML = '<tr><td>' + data.senderName +' '+data.senderSurname +'</td><td>'+ data.senderEmail +'</td><td>'+ data.senderPhone +'</td><td>'+ data.senderDateTime +'</td><td>'+ data.senderOffer +'</td></tr>' + output.innerHTML
    modal.close()
})