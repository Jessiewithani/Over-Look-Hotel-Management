class Bookings {
    constructor(sampleData) {
        this.sampleData = sampleData;
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
    percentageOfRoomsUnAvailable(date) {
        let percentageOfAvailableRooms = this.sampleData.bookings.filter(booking => booking.date === date);
        return Number((percentageOfAvailableRooms.length / this.sampleData.bookings.length) * 100).toFixed(2)
        
    }

}

export default Bookings;