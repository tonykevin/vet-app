import React from 'react'
import Appointment from './Appointment'

const AppointmentList = () => (
  <div className='o-layout c-appointment-list'>
    <Appointment
      animal='gato'
      owner='Tony Salamanca'
      date='20-10-01'
      time='07:10'
      symptom='Fractura de columna.'
    />
  </div>
)

export default AppointmentList
