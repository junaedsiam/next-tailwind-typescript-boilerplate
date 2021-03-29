import React from 'react'

const SampleComponent = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-xl border-2 border-gray-200 border-opacity-50 mx-auto p-8 rounded-lg">
        <h1 className="text-3xl font-light mb-3">
          Tailwind + NextJS broilerplate with Typescript !
        </h1>
        <p className="leading-relaxed text-gray-600 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente magnam fugiat obcaecati
          a vitae? Fuga velit quis laborum itaque accusantium.
        </p>
        <a
          href="#"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 border border-transparent rounded"
        >
          Sample Button
        </a>
      </div>
    </div>
  )
}

export default SampleComponent
