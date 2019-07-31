import sampleData from '../src/sampleData';

import $ from 'jquery';

import Customer from '../src/Customers';
import Hotel from '../src/Hotel';
import Booking from '../src/Booking';
import RoomService from '../src/RoomService';

let customer;
let hotel;
let booking;
let roomService;

hotel = new Hotel(sampleData);
customer = new Customer(sampleData);
booking = new Booking(sampleData);
roomService = new RoomService(sampleData);


// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// var customerData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(response => {
//     return response.json()
// });
// var roomData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => {
//     return response.json()
// });
// var bookingData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => {
//     return response.json()
// });
// var roomServiceData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices').then(response => {
//     return response.json()
// });
// var allDataCombined = {'users': [], 'rooms': [], 'bookings': [], 'roomServices': []}

// Promise.all([customerData, roomData, bookingData, roomServiceData])
//     .then(function(values) {
//         allDataCombined['customerData'] = values[0];
//         allDataCombined['roomData'] = values[1];
//         allDataCombined['bookingData'] = values[2];
//         allDataCombined['roomServiceData'] = values[3];
//         return allDataCombined;
//     })

// var hotel = new Hotel(allDataCombined);
// var customer = new Customer(allDataCombined);
// var booking = new Booking(allDataCombined);
// var roomService = new RoomServices(allDataCombined);

// An example of how you import jQuery into a JS file if you use jQuery in that file

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import domUpdates from '../src/DomUpdates';

//// console.log('This is the JavaScript entry file - your code begins here.');
$('.main-content-section').hide();
$('.rooms-content-section').hide();
$('.customers-content-section').hide();
$('.orders-content-section').hide();

$(document).ready(() => {

//*****************EVENT LISTENERS********************


let currentDate = domUpdates.todaysDate();

$('#main-tab').on('click', function() {
    $('.main-content-section').show();
    $('#main-tab').css( "background-color", "gainsboro" )
    $('#main-tab').css( "color", "black" );
        $('.rooms-content-section').hide();
        $('.customers-content-section').hide();
        $('.orders-content-section').hide();
        $('.splash-page').hide();
        $('.append-info-total-rooms-available').html(hotel.availableRooms(currentDate));
        $('.append-percent-occupied').html(booking.percentageOfRoomsUnAvailable(currentDate));
        $('.append-info-total-revenue').html(hotel.totalRevenueForEverythang(currentDate));
        $('.show-current-date').html(hotel.displayCurrentDate()).show();
    })
    $('#customer-tab').on('click', function() {
        $('.customers-content-section').show();
        $('#customer-tab').css( "background-color", "lightgrey" )
        $('#customer-tab').css( "color", "black" )
        $('#main-tab').css("background-color", "rgba(33,33,33,1)")
        $('#main-tab').css("color", "white")
        $('.orders-content-section').hide();
        $('.main-content-section').hide();
        $('.rooms-content-section').hide();
        $('.splash-page').hide();
    })
    $('#rooms-tab').on('click', function() {
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
        $('.rooms-content-section').hide();
        $('.splash-page').hide();
    })
$('#search-customer-button').on('click', function(e) {
    e.preventDefault();
    let searchUser = $('#search-customer-input').val();
    customer.displayUserInfo(searchUser);
    console.log('uh huh',domUpdates.returnUserInfo(searchUser));
    let userBookings = customer.showAllUserBookingsByName(searchUser);
    domUpdates.showUserBookings(userBookings);
})
$('#create-customer-button').on('click', function(e) {
    e.preventDefault();
    let newUser = $('#create-customer-input').val();
    console.log('excuse me', hotel.createNewUser(newUser))
})
$('#find-rooms-button').on('click', function(e) {
    e.preventDefault();
    let searchDate = $('#search-booking-date').val();
    let roomsAvailable = hotel.showAvailableRooms(searchDate);
    domUpdates.showAvailableRoomsinBookings(roomsAvailable);

})


    
    
    

























})




