const formatInput = document.querySelector('.js-format')

new Cleave('.js-format', {
    phone: true,
    phoneRegionCode: 'BR'
});