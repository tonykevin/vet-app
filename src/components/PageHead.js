import React from 'react'
import imagotype from '../images/brand/vet-imagotype.svg'

const PageHeader = () => (
  <header className='c-page-head'>
    <img
      alt='Vet imagotype'
      className='c-page-head__imagotype'
      src={imagotype}
    />
  </header>
)

export default PageHeader
