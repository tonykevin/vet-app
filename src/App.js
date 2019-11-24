import React, { Component } from 'react'
import { Appointment, PageHead } from './components'

class App extends Component {
  render () {
    return (
      <>
        <PageHead title='Pacientes' />
        <Appointment />
      </>
    )
  }
}
export default App
