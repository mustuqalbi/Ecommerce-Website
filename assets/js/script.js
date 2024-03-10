'use strict';
// ========== Modal Section Start ==========
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overly]');


const modalCloseFunc = function () { modal.classList.add('closed') }


modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

// ========== Modal Section End ==========


// ========== Notification Section Start ==========
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
});
// ========== Notification Section End ==========


// =========== Header Section Start =========== 
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overly = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
    const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
        overly.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
        overly.classList.add('active');
    });

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overly.addEventListener('click', mobileMenuCloseFunc);
}


const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');
for (let i = 0; i < accordionBtn.length; i++)
{
    accordionBtn[i].addEventListener('click', function () {
        const clickedBtn = this.nextElementSibling.classList.contains('active');
        for (let i= 0; i < accordion.length; i++)
        {
            if (clickedBtn) break;

            if(accordion[i].classList.contains('active'))
            {
                accordion[i].classList.remove('active');
                accordionBtn[i].classList.remove('active');
            }
        }

        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');
    });
}
// =========== Header Section End =========== 