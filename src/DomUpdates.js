import $ from 'jquery';

import sampleData from '../src/sampleData';
import hotel from '../src/Hotel';


const domUpdates = {

todaysDate() {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();
    return `${year}/${month}/${day}`;
},
returnUserInfo(searchUser) {
    $('.append-user-on-screen').html(searchUser)
},
showUserBookings(userBookings) {
    userBookings.forEach(userBooking => {
    $('.append-rooms-available-per-date').append(`date: ${userBooking.date} room: ${userBooking.room}`)

    })
},
showAvailableRoomsinBookings(roomsAvailable) {
    $('.box-to-display-booking-info').append(`
    <tr>
     <th>Room #</th>
     <th>Room Type</th>
     <th>Bed Size</th>
     <th>Number of Beds</th>
     <th>Bidet</th>
     <th>Cost per Night</th>
  </tr>`)
roomsAvailable.forEach((room) => { 
$('.box-to-display-booking-info').append(`
<tr>
<td>${room.number}</td>
<td>${room.roomType}</td>
<td>${room.bedSize}</td>
<td>${room.numBeds}</td>
<td>${room.bidet ? 'Yes' : 'No'}</td>
<td>${'$' + room.costPerNight}</td>
<td><button type="button" id="${room.number}">Book</button></td>
</tr>`)
})


}


}


export default domUpdates;