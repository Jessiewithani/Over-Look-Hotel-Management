class Booking {
    constructor(sampleData) {
        // this.userID = userID;
        // this.date = date;
        // this.roomNumber = roomNumber;
        this.sampleData = sampleData;
    }
    showAllBookings(id) {
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
}

export default Booking;