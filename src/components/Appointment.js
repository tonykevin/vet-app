import React from 'react'

const Appointment = () => (
  <div className='o-layout c-appointment'>
    <label className='c-appointment__label'>Animal</label>
    <p className='c-appointment__info'>gato</p>

    <label className='c-appointment__label'>Propietario</label>
    <p>Tony Salamanca</p>

    <label className='c-appointment__label'>Fecha</label>
    <p>18-10-20</p>

    <label className='c-appointment__label'>Hora</label>
    <p>10:00 a.m.</p>

    <label className='c-appointment__label'>Síntomas</label>
    <p>Fractura de la columna.</p>
  </div>
)

export default Appointment
