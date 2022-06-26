let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    // loginForm.classList.remove('active');
    // searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    // loginForm.classList.remove('active');
    // searchForm.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn')

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun')

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

};


var swiper = new Swiper(".review-slider",{
    loop:true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay:5500,
        dusableOnInteraction: false,
    }, 
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });


//   AT LEAST ONE CHECKBOX MUST BE TICKED

(function() {
    const form = document.querySelector('.check-boxes');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'Seleccionar una casilla.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }

    init();
})();