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
}  

    
}


export default domUpdates;