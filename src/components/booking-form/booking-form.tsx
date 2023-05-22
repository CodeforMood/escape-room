import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendBookingDataAction } from '../../store/api-actions';
import { getCurrentQuestData } from '../../store/current-quest-data/selectors';
import { BookingQuestData } from '../../types/booking-quest-data';

type BookingFormProps = {
  bookingQuestData: BookingQuestData;
}

export default function BookingForm ({bookingQuestData}: BookingFormProps) {
  const currentQuestData = useAppSelector(getCurrentQuestData);
  const dispatch = useAppDispatch();
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: false,
    peopleCount: 0,
    placeId: bookingQuestData.id,
  });

  const resetFormData = () => {
    setBookingData({
      date: '',
      time: '',
      contactPerson: '',
      phone: '',
      withChildren: false,
      peopleCount: 0,
      placeId: bookingQuestData.id,
    });
  };

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const{name, value} = evt.target;
    if (name === 'date') {
      setBookingData({
        ...bookingData,
        date: value.split(' ')[0],
        time: value.split(' ')[1],
      });
      return;
    }

    if (name === 'withChildren') {
      setBookingData({
        ...bookingData,
        withChildren: evt.target.checked,
      });
      return;
    }

    if (name === 'peopleCount') {
      setBookingData({
        ...bookingData,
        peopleCount: Number(value),
      });
      return;
    }

    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };

  const submitHandle = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    dispatch(sendBookingDataAction({id: currentQuestData?.id || '', resetFormData, formData: bookingData}));
  };

  return (
    <form className="booking-form" action="#" method="post" onSubmit={submitHandle}>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {bookingQuestData.slots.today.map((slot) =>(
              <label className="custom-radio booking-form__date" key={slot.time}>
                <input type="radio" id={`today${slot.time}`} name="date" required value={`today ${slot.time}`} disabled={!slot.isAvailable} onChange={fieldChangeHandle} /><span className="custom-radio__label">{slot.time}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {bookingQuestData.slots.tomorrow.map((slot) =>(
              <label className="custom-radio booking-form__date" key={slot.time}>
                <input type="radio" id={`tomorrow${slot.time}`} name="date" required value={`tomorrow ${slot.time}`} disabled={!slot.isAvailable} onChange={fieldChangeHandle} /><span className="custom-radio__label">{slot.time}</span>
              </label>
            ))}
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
