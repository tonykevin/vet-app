import React, { Component } from 'react'
import uuid from 'uuid'

class Appointment extends Component {
  state = {
    appointment: {
      animal: '',
      owner: '',
      date: '',
      hour: '',
      symptom: ''
    },
    error: false
  }

  // Update the state with input data
  handleChange = e => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [e.target.name]: e.target.value
      }
    })
  }

  // Send form
  handleSubmit = e => {
    e.preventDefault()

    const { animal, owner, date, hour, symptom } = this.state.appointment

    // Validate info
    if (animal === '' || owner === '' || date === '' || hour === '' || symptom === '') {
      this.setState({
        error: true
      })

      return 1
    }

    // create an object with new appointment
    const newAppointment = { ...this.state.appointment }
    newAppointment.id = uuid()

    // Add a new appointment to app state
    this.props.createNewAppointment(newAppointment)
  }

  render () {
    const { error } = this.state

    return (
      <div className='c-appointment'>
        <h2 className='c-appointment__title'>Crear una nueva cita</h2>
        {
          error
            ? <div className='c-alert c-alert--danger'>Todos los campos son requeridos</div>
            : null
        }
        <form
          className='o-layout c-appointment__form'
          onSubmit={this.handleSubmit}
        >
          <div className='o-layout__item o-layout__item--form'>
            <label
              htmlFor='apptName'
            >
              animal
            </label>
            <input
              className='o-input-form'
              id='apptName'
              name='animal'
              onChange={this.handleChange}
              placeholder='Nombre del animal'
              type='text'
              value={this.state.appointment.animal}
            />
          </div>
          <div className='o-layout__item o-layout__item--form'>
            <label
              htmlFor='apptOwner'
            >
              propietario
            </label>
            <input
              className='o-input-form'
              id='apptOwner'
              name='owner'
              onChange={this.handleChange}
              placeholder='Nombre del propietario'
              type='text'
              value={this.state.appointment.owner}
            />
          </div>
          <div className='o-layout__item o-layout__item--vsplit2'>
            <div className='o-layout__item o-layout__item--form'>
              <label
                htmlFor='apptDate'
              >
                fecha
              </label>
              <input
                className='o-input-form'
                id='apptDate'
                name='date'
                onChange={this.handleChange}
                type='date'
                value={this.state.appointment.date}
              />
            </div>
            <div className='o-layout__item o-layout__item--form'>
              <label
                htmlFor='apptHour'
              >
                hora
              </label>
              <input
                className='o-input-form'
                id='apptHour'
                name='hour'
                onChange={this.handleChange}
                type='time'
                value={this.state.appointment.hour}
              />
            </div>
          </div>
          <div className='o-layout__item o-layout__item--form'>
            <label
              htmlFor='apptSymptom'
            >
              síntomas
            </label>
            <textarea
              className='o-input-form c-appointment__textarea'
              id='apptSymptom'
              name='symptom'
              onChange={this.handleChange}
              placeholder='Describe los síntomas'
              value={this.state.appointment.symptom}
            />
          </div>
          <button className='o-layout__item--end c-btn c-btn--primary'>Agregar nueva cita</button>
        </form>
      </div>
    )
  }
}

export default Appointment
