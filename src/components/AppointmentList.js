import React from 'react'
import Appointment from './Appointment'

const AppointmentList = ({ appointments, deleteAppointment }) => (
  <div className='o-layout c-appointment-list'>
    {
      appointments.map(
        ({ animal, date, id, owner, symptom, time }) => (
          <Appointment
            animal={animal}
            date={date}
            deleteAppointment={deleteAppointment}
            id={id}
            key={id}
            owner={owner}
            symptom={symptom}
            time={time}
          />
        )
      )
    }
  </div>
)

export default AppointmentList
