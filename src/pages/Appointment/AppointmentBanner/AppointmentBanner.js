import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({setSelectedDate, selectedDate}) => {
  return (
    <header style={{background: `url(${bg})`, backgroundSize: 'cover'  }} className='p-10'>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16">
          <img
            src={chair}
            alt='dentists chair'
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect= {setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
