import React, { Component } from 'react'

class Appointment extends Component {
  render () {
    return (
      <div className='o-wrapper'>
        <h2>Crear un nueva cita</h2>
        <form>
          <label
            htmlFor='apptName'
          >
            animal
          </label>
          <input
            className='o-input-form'
            id='apptName'
            name='animal'
            placeholder='Nombre del animal'
            type='text'
          />
          <label
            htmlFor='apptOwner'
          >
            propietario
          </label>
          <input
            className='o-input-form'
            id='apptOwner'
            name='owner'
            placeholder='Nombre del propietario'
            type='text'
          />
          <label
            htmlFor='apptDate'
          >
            fecha
          </label>
          <input
            className='o-input-form'
            id='apptDate'
            name='date'
            type='date'
          />
          <label
            htmlFor='apptHour'
          >
            hora
          </label>
          <input
            className='o-input-form'
            id='apptHour'
            name='hour'
            type='time'
          />
          <label
            htmlFor='apptSymptom'
          >
            síntomas
          </label>
          <textarea
            className='o-input-form c-appt-form__textarea'
            id='apptSymptom'
            name='symptom'
            placeholder='Describe los síntomas'
          />
          <button className='c-btn c-btn--primary'>Agregar nueva cita</button>
        </form>
      </div>
    )
  }
}

export default Appointment
