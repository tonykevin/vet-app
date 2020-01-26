import React from 'react'

const Appointment = ({ animal, owner, date, time, symptom }) => (
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
  </div>
)

export default Appointment
