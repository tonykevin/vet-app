import React from 'react'
import imagotype from '../images/brand/vet-imagotype.svg'

const PageHeader = ({ title }) => (
  <header className='c-page-head'>
    <div className='o-wrapper--page-head'>
      <img
        alt='Vet imagotype'
        className='c-page-head__imagotype'
        src={imagotype}
      />
      <h1 className='c-page-head__title u-h3'>{title}</h1>
    </div>
  </header>
)

export default PageHeader
