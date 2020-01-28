import React, { Component } from 'react'
import {
  AppointmentList,
  AppointmentForm,
  PageHead
} from './components'

class App extends Component {
  state = {
    appointments: []
  }

  createNewAppointment = data => {
    const appointments = [...this.state.appointments, data]
    this.setState({ appointments })
  }

  render () {
    const { appointments } = this.state
    const hasAppointments = appointments.length > 0

    return (
      <>
        <PageHead title='Pacientes' />
        <main className='o-layout o-layout--vsplit2@sm o-wrapper'>
          <div className='c-panel'>
            <AppointmentForm />
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
}
export default App
