import React from 'react'
import Appointment from './Appointment'

const AppointmentList = ({ appointments }) => (
  <div className='o-layout c-appointment-list'>
    {
      appointments.map(
        ({ animal, date, id, owner, symptom, time }) => (
          <Appointment
            key={id}
            animal={animal}
            owner={owner}
            date={date}
            time={time}
            symptom={symptom}
          />
        )
      )
    }
  </div>
)

export default AppointmentList
