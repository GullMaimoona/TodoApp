import React from 'react'

function Input() {
  return (
    <div className="flex gap-2">

      <input
        type="text"
        placeholder="Enter task ..."
        className="flex-1 border p-2 rounded-lg outline-none"
      />

      <button className="bg-blue-500 text-white px-4 rounded-lg">
        Add
      </button>

    </div>
  );
}

export default Input