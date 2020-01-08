import React, { Component } from 'react'
import { Appointment, PageHead } from './components'

class App extends Component {
  state = {
    appointments: []
  }

  createNewAppointment = data => {
    const appointments =[...this.state.appointments, data]
    this.setState({ appointments })
  }

  render () {
    return (
      <>
        <PageHead title='Pacientes' />
        <main className='o-wrapper'>
          <Appointment
            createNewAppointment={this.createNewAppointment}
          />
        </main>
      </>
    )
  }
}
export default App
