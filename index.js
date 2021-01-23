var colors = ['red','blue','green'];
var gIdx = 0;
window.onload = function() {
    emailjs.init("user_6NsZYaOQzNdbMm0Jmihmg");
    setInterval(animateText,2000);
}

function onClick(token) {
    var templateParams = {	
        name: document.getElementById('_title').value,
        email : document.getElementById('_email').value,
        message : document.getElementById('_context').value,
        'g-recaptcha-response': token 
    }

    emailjs.send('service_h7x70fq', 'template_jdp5144', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response);
        alert('신청완료되었습니다!\n감사합니다!');
        closeDialog();
     }, function(error) {
        console.log('FAILED...', error);
        alert('오류가났습니다!\nyungibin30@gmail.com으로\n알려주시면 감사하겠습니다!');
        closeDialog();
     });
}

function openDialog(){
    var dialog = document.getElementById('overlay');
    dialog.style.display='block';
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'hidden';
    document.getElementById('_title').value = '';
    document.getElementById('_email').value = '';
    document.getElementById('_context').value = '';
}

function closeDialog(){
    var dialog = document.getElementById('overlay');
    dialog.style.display='none';
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = '';
}



function animateText() {
    var title = document.getElementsByClassName('title')[0];
    title.classList.add("js-animate-rot");
    window.setTimeout(removeTextClass, 500);

    var one = document.getElementsByClassName('one')[0];
    var two = document.getElementsByClassName('two')[0];
    var three = document.getElementsByClassName('three')[0];

    addColorClass(gIdx%colors.length,one);
    addColorClass((gIdx+1)%colors.length,two);
    addColorClass((gIdx+2)%colors.length,three);

    gIdx = (gIdx+1)%colors.length;
  }

function removeTextClass(){
    var title = document.getElementsByClassName('title')[0];
    title.classList.remove("js-animate-rot");
}

function addColorClass(idx,eliment){
    var preIdx = idx==0 ? colors.length-1 : idx-1;
    if(eliment.classList.length<2){
        eliment.classList.add(colors[idx]);
    }else{
        eliment.classList.remove(colors[preIdx]);
        eliment.classList.add(colors[idx]);
    }
}