//auto play accordian video

$(function(){
    //Auto play modal video
    $(".video").click(function(){
        var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function(){
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});

//LightBox

$(document).on('click', '[data-toggle="lightbox"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
});


//carousel
// $(function() {
//     'use strict';
    
//       $('.carousel .carousel-item[data-src]').each(function() {
//           var $this = $(this);
  
//           $this.prepend([
//               '<div style="background-image: url(', $this.attr('data-src'), ')"></div>'
//           ].join(''));
//       });
//   });

//Initialize Slick slider
// $('.slider').slick({
//     infinite: true,
//     slideToShow: 1,
//     slideToScroll: 1
// });

//Booking Info Modal

//Get modal element
var modal1 = document.getElementById('simpleModal1');
var modal2 = document.getElementById('simpleModal2');
var modal3 = document.getElementById('simpleModal3');
var modal4 = document.getElementById('simpleModal4');
var modal5 = document.getElementById('simpleModal5');
var modal6 = document.getElementById('simpleModal6');

//Get open modal button
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');
var modalBtn4 = document.getElementById('modalBtn4');
var modalBtn5 = document.getElementById('modalBtn5');
var modalBtn6 = document.getElementById('modalBtn6');

//Get close button
var closeBtn1 = document.getElementsByClassName('closeBtn')[0];
var closeBtn2 = document.getElementsByClassName('closeBtn')[1];
var closeBtn3 = document.getElementsByClassName('closeBtn')[2];
var closeBtn4 = document.getElementsByClassName('closeBtn')[3];
var closeBtn5 = document.getElementsByClassName('closeBtn')[4];
var closeBtn6 = document.getElementsByClassName('closeBtn')[5];

//Listen for open click
modalBtn1.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3);
modalBtn4.addEventListener('click', openModal4);
modalBtn5.addEventListener('click', openModal5);
modalBtn6.addEventListener('click', openModal6);

//Listen for close click
closeBtn1.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);
closeBtn4.addEventListener('click', closeModal4);
closeBtn5.addEventListener('click', closeModal5);
closeBtn6.addEventListener('click', closeModal6);



//OPEN Model after Listening for open Click
function openModal() {
    modal1.style.display = 'block';
}
function openModal2() {
    modal2.style.display = 'block';
}
function openModal3() {
    modal3.style.display = 'block';
}
function openModal4() {
    modal4.style.display = 'block';
}
function openModal5() {
    modal5.style.display = 'block';
}
function openModal6() {
    modal6.style.display = 'block';
}




//CLOSE Model after Listening for close Click
function closeModal() {
    modal1.style.display = 'none';
}
function closeModal2() {
    modal2.style.display = 'none';
}
function closeModal3() {
    modal3.style.display = 'none';
}
function closeModal4() {
    modal4.style.display = 'none';
}
function closeModal5() {
    modal5.style.display = 'none';
}
function closeModal6() {
    modal6.style.display = 'none';
}

//Listen for click outside the element
window.addEventListener('click', clickOutside);

function clickOutside(e) {
    if(e.target == modal1) {    
        modal1.style.display = 'none'
    } 
    if(e.target == modal2) {    
        modal2.style.display = 'none'
    }
    if(e.target == modal3) {    
        modal3.style.display = 'none'
    }
    if(e.target == modal4) {    
        modal4.style.display = 'none'
    } 
    if(e.target == modal5) {    
        modal5.style.display = 'none'
    }
    if(e.target == modal6) {    
        modal6.style.display = 'none'
    }
}

//---------------------FIREBASE DATABASE---------------------//

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCliGWYuGz_t9X_Lkmun7pkHGfUxMwT2jM",
    authDomain: "april-on-2.firebaseapp.com",
    databaseURL: "https://april-on-2.firebaseio.com",
    projectId: "april-on-2",
    storageBucket: "april-on-2.appspot.com",
    messagingSenderId: "252891960256"
  };
  firebase.initializeApp(config);

  //Reference messages collection
  var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e) {
    e.preventDefault();
    
    //get values
    var name = getInputVal('name');
    // var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    //Save Message
    saveMessage(name, email, phone, message);

    //Show Alert
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert after 3 seconds
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
    }, 3000);

    //Clear Form
    document.getElementById('contactForm').reset();
}

//Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        // company: company,
        email: email,
        phone: phone,
        message: message
    });
}
