import React, { Component } from 'react'
import {
  AppointmentList,
  CreateAppointment,
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
    return (
      <>
        <PageHead title='Pacientes' />
        <main className='o-layout o-layout--vsplit2@sm o-wrapper'>
          <div className='c-panel'>
            <h2 className='o-headline'>Crear una nueva cita</h2>
            <CreateAppointment
              createNewAppointment={this.createNewAppointment}
            />
          </div>
          <div className='c-panel'>
            <h2 className='o-headline'>Citas</h2>
            <AppointmentList />
          </div>
        </main>
      </>
    )
  }
}
export default App
