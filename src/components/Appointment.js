import React from 'react'

const Appointment = ({
  animal,
  date,
  deleteAppointment,
  id,
  owner,
  symptom,
  time
}) => (
  <div className='o-layout__item c-appointment'>
    <label className='c-appointment__label'>Animal</label>
    <p className='c-appointment__info'>{animal}</p>

    <label className='c-appointment__label'>Propietario</label>
    <p>{owner}</p>

    <label className='c-appointment__label'>Fecha</label>
    <p>{date}</p>

    <label className='c-appointment__label'>Hora</label>
    <p>{time}</p>

    <label className='c-appointment__label'>Síntomas</label>
    <p>{symptom}</p>
    <button
      className='c-btn c-btn--danger'
      onClick={() => deleteAppointment(id)}
    >
      Eliminar &times;
    </button>

  </div>
)

export default Appointment
