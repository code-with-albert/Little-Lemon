import { useState } from 'react';
import './BookingForm.css';
function BookingForm() {
    const [date,setDate] = useState();
    const [time,setTime] = useState();
    const [guestNumber,setGuestNumber] = useState();
    const [occasion,setOccasion] = useState();
    const handleSubmit =(e)=>{
        e.preventDefault();

        console.log("Form Submitted!")
    }
return (
    <div id='booking-container' className='flex-column-center'>
        <form id='booking-form' className='flex-column-center' onSubmit={handleSubmit}>
            <h1 id='booking-title'>Book your Reservation Now</h1>
            <div className='flex-row-end'>
                <label htmlFor="res-date">Choose date*</label>
                <input type="date" id="res-date" className='inputs' required={true} value={date || ''} onChange={e => setDate(e.target.value)}/>
            </div>
            <div className='flex-row-end'>
                <label htmlFor="res-time" >Choose time*</label>
                <select id="res-time" className='inputs' required={true} value={time || ''} onChange={ e => setTime(e.target.value)}>
                    <option></option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            </div>
            <div className='flex-row-end'>
                <label htmlFor="guests">Number of guests*</label>
                <input type="number" id="guests" className='inputs' required={true} placeholder="Set Guest Number(max.10)" min="1" max="10"  value={guestNumber || ''} onChange={ e => setGuestNumber(e.target.value)}/>
            </div>
            <div className='flex-row-end'>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" className='inputs' value={occasion} onChange={ e => setOccasion(e.target.value)}>
                <option></option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            </div>
   
            <button disabled={!date || !time || !guestNumber || !occasion} type="submit" className='button'> Make Your reservation</button>
    
        </form>
    </div>
)
}

export default BookingForm;