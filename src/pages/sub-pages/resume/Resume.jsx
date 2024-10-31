import React from 'react'

export default function Resume({period,department,institute,para}) {
  return (
    <>
        <div className='tw-flex tw-flex-col tw-mx-auto tw-p-10 tw-box-content tw-w-96 tw-rounded-lg tw-gap-3 tw-bg-stone-400'>
            <h4>{period}</h4>
            <h4>{department} </h4>
            <h6>{institute}</h6>
            <p>{para} </p>

        </div>
    </>
  )
}
