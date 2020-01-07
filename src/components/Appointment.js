import React, { Component } from 'react'

class Appointment extends Component {
  render () {
    return (
      <div className='c-appointment'>
        <h2 className='c-appointment__title'>Crear una nueva cita</h2>
        <form className='o-layout c-appointment__form'>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <label
              htmlFor='apptSymptom'
            >
              síntomas
            </label>
            <textarea
              className='o-input-form c-appointment__textarea'
              id='apptSymptom'
              name='symptom'
              placeholder='Describe los síntomas'
            />
          </div>
          <button className='o-layout__item--end c-btn c-btn--primary'>Agregar nueva cita</button>
        </form>
      </div>
    )
  }
}

export default Appointment
