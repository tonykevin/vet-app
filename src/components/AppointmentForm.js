import React from 'react'

const AppointmentForm = () => {
  return (
    <>
      <h2 className='o-headline'>Crear cita</h2>
      <form
        className='o-layout'
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
            placeholder='Nombre del animal'
            type='text'
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
            placeholder='Nombre del propietario'
            type='text'
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
              type='date'
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
              type='time'
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
            placeholder='Describe los síntomas'
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
