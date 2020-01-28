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
    <p>
      <label className='c-appointment__label'>animal</label> {animal}
    </p>
    <p>
      <label className='c-appointment__label'>propietario</label> {owner}
    </p>
    <p>
      <label className='c-appointment__label'>fecha</label> {date}
    </p>
    <p>
      <label className='c-appointment__label'>hora</label> {time}
    </p>
    <p>
      <label className='c-appointment__label'>síntomas</label> {symptom}
    </p>
    <button
      className='o-layout__item--end c-btn c-btn--danger'
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
