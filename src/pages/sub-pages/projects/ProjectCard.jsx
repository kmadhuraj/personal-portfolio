import React from 'react'

export default function ProjectCard({ title, description, image }) {
  return (
    <div className=''>
      <div className="bg-white  tw-shadow-lg tw-rounded-lg tw-overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="tw-text-xl tw-font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 text-blue-500 tw-font-medium tw-hover:text-blue-700">
          View Project
        </button>
      </div>
    </div>
    </div>
  )
}
