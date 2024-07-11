import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleButton = () => {
    if (name.trim() !== "") {
      setNames([...names, name]);
      setName("");
    }
  };

  const handleDelete = (index) => {
    const updatedNames = names.filter((_, i) => i !== index);
    setNames(updatedNames);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={handleChange}
        className="border border-black p-1"
      />
      <button
        id="submit"
        className="bg-black text-white border border-black w-20 p-1 ml-1"
        onClick={handleButton}
      >
        Click
      </button>
      <table className="mt-4 border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black p-2">Serial Number</th>
            <th className="border border-black p-2">Name</th>
            <th className="border border-black p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => (
            <tr key={index}>
              <td className="border border-black p-2">{index + 1}</td>
              <td className="border border-black p-2">{name}</td>
              <td className="border border-black p-2">
                <button
                  className="bg-red-500 text-white p-1"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
