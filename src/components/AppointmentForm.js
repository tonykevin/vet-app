import React, { useState } from 'react'
import uuid from 'uuid'
import PropTypes from 'prop-types'

const AppointmentForm = ({ createAppointment }) => {
  const [appointment, setAppointment] = useState({
    animal: '',
    owner: '',
    date: '',
    time: '',
    symptom: ''
  })

  const [error, setError] = useState(false)

  const updateState = ({ target }) => {
    setAppointment({
      ...appointment,
      [target.name]: target.value
    })
  }

  const { animal, date, owner, symptom, time } = appointment

  const appointmentSubmit = e => {
    e.preventDefault()

    // Validate
    if (
      animal.trim() === '' ||
      date.trim() === '' ||
      owner.trim() === '' ||
      symptom.trim() === '' ||
      time.trim() === ''
    ) {
      setError(true)
      return 1
    }

    setError(false)
    appointment.id = uuid()
    createAppointment(appointment)
    setAppointment({
      animal: '',
      owner: '',
      date: '',
      time: '',
      symptom: ''
    })
  }

  return (
    <>
      {
        error
          ? (
            <div className='c-alert c-alert--danger'>
              Todos los campos son requeridos
            </div>
          )
          : null
      }
      <form
        className='o-layout'
        onSubmit={appointmentSubmit}
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
            onChange={updateState}
            placeholder='Nombre del animal'
            type='text'
            value={animal}
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
            onChange={updateState}
            placeholder='Nombre del propietario'
            type='text'
            value={owner}
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
              onChange={updateState}
              type='date'
              value={date}
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
              onChange={updateState}
              type='time'
              value={time}
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
            onChange={updateState}
            placeholder='Describe los síntomas'
            value={symptom}
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

AppointmentForm.propTypes = {
  createAppointment: PropTypes.func.isRequired
}

export default AppointmentForm
