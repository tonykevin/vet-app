import React, { Component } from 'react'

class Appointment extends Component {
  render () {
    return (
      <div className='o-wrapper'>
        <h2>Crear un nueva cita</h2>
        <form className='o-form'>
          <label
            htmlFor='apptName'
          >
            animal
          </label>
          <input
            id='apptName'
            type='text'
            placeholder='Nombre del animal'
            name='animal'
          />
          <label
            htmlFor='apptOwner'
          >
            propietario
          </label>
          <input
            id='apptOwner'
            type='text'
            placeholder='Nombre del propietario'
            name='owner'
          />
          <label
            htmlFor='apptDate'
          >
            fecha
          </label>
          <input
            id='apptDate'
            type='date'
            name='date'
          />
          <label
            htmlFor='apptHour'
          >
            hora
          </label>
          <input
            id='apptHour'
            type='time'
            name='hour'
          />
          <label
            htmlFor='apptSymptom'
          >
            síntomas
          </label>
          <textarea
            id='apptSymptom'
            name='symptom'
            placeholder='Describe los síntomas'
          />
          <button>Agregar nueva cita</button>
        </form>
      </div>
    )
  }
}

export default Appointment
