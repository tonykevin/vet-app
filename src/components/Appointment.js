import React from 'react'
import PropTypes from 'prop-types'

const Appointment = ({
  animal,
  date,
  deleteAppointment,
  id,
  owner,
  symptom,
  time
}) => (
  <div className='o-layout__item c-appointment'>
    <label className='c-appointment__label'>Animal</label>
    <p className='c-appointment__info'>{animal}</p>

    <label className='c-appointment__label'>Propietario</label>
    <p>{owner}</p>

    <label className='c-appointment__label'>Fecha</label>
    <p>{date}</p>

    <label className='c-appointment__label'>Hora</label>
    <p>{time}</p>

    <label className='c-appointment__label'>Síntomas</label>
    <p>{symptom}</p>
    <button
      className='c-btn c-btn--danger'
      onClick={() => deleteAppointment(id)}
    >
      Eliminar &times;
    </button>

  </div>
)

Appointment.propTypes = {
  animal: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
  owner: PropTypes.string.isRequired,
  symptom: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Appointment
