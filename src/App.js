import React, { useState } from 'react'
import {
  AppointmentList,
  AppointmentForm,
  PageHead
} from './components'

function App () {
  const [appointments, setAppointments] = useState([])
  const hasAppointments = appointments.length > 0

  const createAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ])
  }

  return (
    <>
      <PageHead title='Pacientes' />
      <main className='o-layout o-layout--vsplit2@sm o-wrapper'>
        <div className='c-panel'>
          <h2 className='o-headline'>Crear cita</h2>
          <AppointmentForm createAppointment={createAppointment} />
        </div>
        <div className='c-panel'>
          <h2 className='o-headline'>Citas</h2>
          {
            !hasAppointments
              ? <p>No hay citas</p>
              : <AppointmentList appointments={appointments} />
          }
        </div>
      </main>
    </>
  )
}
export default App
