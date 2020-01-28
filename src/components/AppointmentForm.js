import React, { useState } from 'react'

const AppointmentForm = () => {
  const [appointments, setAppointments] = useState({
    animal: '',
    owner: '',
    date: '',
    time: '',
    symptom: ''
  })

  const updateState = ({ target }) => {
    setAppointments({
      ...appointments,
      [target.name]: target.value
    })
  }

  const { animal, date, owner, symptom, time } = appointments

  const appointmentSubmit = e => {
    e.preventDefault()

    alert('enviando...')
  }

  return (
    <>
      <h2 className='o-headline'>Crear cita</h2>
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

export default AppointmentForm
