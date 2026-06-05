import React from 'react'
import { FiEdit, FiTrash2 } from "react-icons/fi"; 

function Item(props) {
 return (
    <div className="flex items-center justify-between bg-white shadow-sm p-3 rounded-lg hover:bg-gray-50 transition">

      {/* */}
      <div className="flex items-center gap-2">
        <input type="checkbox" checked={props.isCompleted} />
        <span className="text-gray-700">{props.title}</span>
        <small className="text-gray-500">{props.createdAt.toLocaleDateString()}</small>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 text-gray-600">
        <button className="hover:text-indigo-500 text-lg">
          <FiEdit />
        </button>

        <button className="hover:text-red-500 text-lg">
          <FiTrash2 />
        </button>
      </div>

    </div>
  );
}

export default Item