import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BookingForm () {
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: false,
    peopleCount: 3,
    placeId: '',
  });

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const{name, value} = evt.target;
    if (evt.target.name === 'date'){
      setBookingData({
        ...bookingData,
        date: value.split(' ')[0],
        time: value.split(' ')[1],
      });
    }
    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post">
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            <label className="custom-radio booking-form__date">
              <input type="radio" id="today9h45m" name="date" required value="today 9:45" onChange={fieldChangeHandle} /><span className="custom-radio__label">9:45</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="today15h00m" name="date" required value="today 15:00" onChange={fieldChangeHandle} /><span className="custom-radio__label">15:00</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="today17h30m" name="date" required value="today 17:30" onChange={fieldChangeHandle} /><span className="custom-radio__label">17:30</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="today19h30m" name="date" required value="today 19:30" disabled onChange={fieldChangeHandle}/><span className="custom-radio__label">19:30</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="today21h30m" name="date" required value="today 21:30" onChange={fieldChangeHandle}/><span className="custom-radio__label">21:30</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            <label className="custom-radio booking-form__date">
              <input type="radio" id="tomorrow11h00m" name="date" required value="tomorrow 11:00" onChange={fieldChangeHandle} /><span className="custom-radio__label">11:00</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="tomorrow15h00m" name="date" required value="tomorrow 15:00" disabled onChange={fieldChangeHandle} /><span className="custom-radio__label">15:00</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="tomorrow17h30m" name="date" required value="tomorrow 17:30" disabled onChange={fieldChangeHandle} /><span className="custom-radio__label">17:30</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="tomorrow19h45m" name="date" required value="tomorrow 19:45" onChange={fieldChangeHandle} /><span className="custom-radio__label">19:45</span>
            </label>
            <label className="custom-radio booking-form__date">
              <input type="radio" id="tomorrow21h30m" name="date" required value="tomorrow 21:30" onChange={fieldChangeHandle} /><span className="custom-radio__label">21:30</span>
            </label>
          </div>
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="contactPerson">Ваше имя</label>
          <input type="text" id="name" name="contactPerson" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}" onChange={fieldChangeHandle} />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="phone">Контактный телефон</label>
          <input type="tel" id="tel" name="phone" placeholder="Телефон" required pattern="[0-9]{10,}" onChange={fieldChangeHandle} />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="peopleCount">Количество участников</label>
          <input type="number" id="person" name="peopleCount" placeholder="Количество участников" required onChange={fieldChangeHandle} />
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" name="withChildren" onChange={fieldChangeHandle}/>
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <Link className="link link--active-silver link--underlined" to="#">правилами обработки персональных данных
          </Link>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}
