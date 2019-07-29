// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// let customerData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(response => {
//     return response.json()
// });
// let roomData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => {
//     return response.json()
// });
// let bookingData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => {
//     return response.json()
// });
// let roomServiceData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices').then(response => {
//     return response.json()
// });

// var hotel;
// let combinedData = {'customerData': {}, 'roomData': {}, 'bookingData': {}, 'roomServiceData': {}}

// Promise.all([customerData, roomData, bookingData, roomServiceData]).then((values) => {
//     combinedData['customerData'] = values[0].users;
//     combinedData['roomData'] = values[1].rooms;
//     combinedData['bookingData'] = values[2].bookings;
//     combinedData['roomServiceData'] = values[3].roomServices;
//     hotel = new Hotel(combinedData)
//     console.log(hotel)
//     return combinedData;
// }).catch(error => console.log(`Error in promises ${error}`));
// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// import domUpdates from './DomUpdates'
// import Hotel from './Hotel';

// console.log('This is the JavaScript entry file - your code begins here.');

    $('.main-content-section').hide();
    $('.rooms-content-section').hide();
    $('.customers-content-section').hide();
    $('.orders-content-section').hide();

$('#main-tab').on('click', function() {
    $('.main-content-section').show();
    $('#main-tab').css( "background-color", "gainsboro" )
    $('#main-tab').css( "color", "black" )
    // $('.rooms-content').hide();
    $('.rooms-content-section').hide();
    $('.customers-content-section').hide();
    $('.orders-content-section').hide();
    $('.splash-page').hide();
})

$('#customer-tab').on('click', function() {
    $('.customers-content-section').show();
    $('#customer-tab').css( "background-color", "lightgrey" )
    $('#customer-tab').css( "color", "black" )
    $('#main-tab').css("background-color", "rgba(33,33,33,1)")
    $('#main-tab').css("color", "white")
    $('.orders-content-section').hide();
    $('.main-content-section').hide();
    // $('.rooms-content').hide();
    $('.rooms-content-section').hide();
    $('.splash-page').hide();
})

$('#rooms-tab').on('click', function() {
    // $('.rooms-content').show();
    $('.customers-content-section').hide();
    $('.orders-content-section').hide();
    $('.main-content-section').hide();
    $('.rooms-content-section').show();
    $('.splash-page').hide();
})

$('#orders-tab').on('click', function() {
    $('.customers-content-section').hide();
    $('.orders-content-section').show();
    $('.main-content-section').hide();
    // $('.rooms-content').hide();
    $('.rooms-content-section').hide();
    $('.splash-page').hide();
})
