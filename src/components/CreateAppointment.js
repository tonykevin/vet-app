import React, { Component } from 'react'
import uuid from 'uuid'

const initialState = {
  appointment: {
    animal: '',
    owner: '',
    date: '',
    time: '',
    symptom: ''
  },
  error: false
}

class CreateAppointment extends Component {
  state = { ...initialState }

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

    const { animal, owner, date, time, symptom } = this.state.appointment

    // Validate info
    if (animal === '' || owner === '' || date === '' || time === '' || symptom === '') {
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

    this.setState({
      ...initialState
    })
  }

  render () {
    const { error } = this.state

    return (
      <>
        {
          error
            ? <div className='c-alert c-alert--danger'>Todos los campos son requeridos</div>
            : null
        }
        <form
          className='o-layout'
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
                htmlFor='apptTime'
              >
                hora
              </label>
              <input
                className='o-input-form'
                id='apptTime'
                name='time'
                onChange={this.handleChange}
                type='time'
                value={this.state.appointment.time}
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
          <button
            className='o-layout__item--end c-btn c-btn--primary'
          >
            Agregar nueva cita
          </button>
        </form>
      </>
    )
  }
}

export default CreateAppointment