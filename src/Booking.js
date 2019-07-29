class Bookings {
    constructor(sampleData) {
        this.sampleData = sampleData;
    }
    showAllUserBookings(id) {
        return this.sampleData.bookings.filter(booking => {
          if (booking.userID === id) {
            return booking;
          }
        })
    }
    calculateEntireBookingsCost(id) {
        let customerBookings = this.sampleData.bookings.filter(booking => booking.userID === id)
        let final = customerBookings.map(booking => {
          return this.sampleData.rooms.find(room => room.number === booking.roomNumber)
        })
          return final.reduce((acc, curr) => {
            return acc += curr.costPerNight
          },0)
    }
    availableRooms(date) {
        let availableOptions =  this.sampleData.bookings.filter(booking => {
          console.log('booking', booking)
          //since our date is already being booked, we need to return all dates BUT that date. (hence the bang operator)
          if (booking.date !== date) {
            return booking.roomNumber
          }
        })
        console.log('available options',availableOptions)
        //to show only the room number map through the array and access the room number.
        let roomNumber = availableOptions.map(booking => booking.roomNumber)
        return roomNumber
    }
    showPopularBookingDates() {
    let popularBookingDates = this.sampleData.bookings.reduce((acc, booking) => {
      if (!acc[booking.date]) {
        acc[booking.date] = 1;
      } else {
        acc[booking.date]++;
      }
      return acc;
    }, {});
    let mostPickedDate = Math.max(...Object.values(popularBookingDates));
    return Object.keys(popularBookingDates).find(date => popularBookingDates[date] === mostPickedDate);
    }
    showRoomOptions(type) {
      return this.sampleData.rooms.filter(room => room.roomType === type)
      console.log('room',room)
    }

}

export default Bookings;