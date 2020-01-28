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

  const deleteAppointment = id => {
    const newAppointments = appointments.filter(
      appointment => appointment.id !== id
    )

    setAppointments(newAppointments)
  }

  const title = !hasAppointments ? 'No hay citas' : 'Administra tus citas'

  return (
    <>
      <PageHead title='Pacientes' />
      <main className='o-layout o-layout--vsplit2@sm o-wrapper'>
        <div className='c-panel'>
          <h2 className='o-headline'>Crear cita</h2>
          <AppointmentForm createAppointment={createAppointment} />
        </div>
        <div className='c-panel'>
          <h2 className='o-headline'>{title}</h2>
          {
            !hasAppointments
              ? null
              : (
                <AppointmentList
                  appointments={appointments}
                  deleteAppointment={deleteAppointment}
                />
              )
          }
        </div>
      </main>
    </>
  )
}
export default App
