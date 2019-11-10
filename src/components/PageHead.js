import React from 'react'
import imagotype from '../images/brand/vet-imagotype.svg'

const PageHeader = () => (
  <header className='c-page-head'>
    <div className='o-wrapper--page-head'>
      <img
        alt='Vet imagotype'
        className='c-page-head__imagotype'
        src={imagotype}
      />
    </div>
  </header>
)

export default PageHeader
