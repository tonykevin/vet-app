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
          <CreateAppointment
            createNewAppointment={this.createNewAppointment}
          />
          <AppointmentList />
        </main>
      </>
    )
  }
}
export default App
