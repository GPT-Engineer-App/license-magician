import { useState } from "react";
import { FaUser, FaCalendarAlt, FaMapMarkedAlt, FaIdCard, FaDownload } from "react-icons/fa";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
    licenseNumber: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("License generated! Check console for details.");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">LicenseForge</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <div className="input-group">
            <span className="icon">
              <FaUser />
            </span>
            <input type="text" name="name" placeholder="John Doe" className="input input-bordered w-full" onChange={handleChange} />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <div className="input-group">
            <span className="icon">
              <FaCalendarAlt />
            </span>
            <input type="date" name="dob" className="input input-bordered w-full" onChange={handleChange} />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <div className="input-group">
            <span className="icon">
              <FaMapMarkedAlt />
            </span>
            <input type="text" name="address" placeholder="123 Main St, Anytown, USA" className="input input-bordered w-full" onChange={handleChange} />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">License/ID Number</span>
          </label>
          <div className="input-group">
            <span className="icon">
              <FaIdCard />
            </span>
            <input type="text" name="licenseNumber" placeholder="123456789" className="input input-bordered w-full" onChange={handleChange} />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">State</span>
          </label>
          <select name="state" className="select select-bordered w-full" onChange={handleChange}>
            <option disabled selected>
              Select State
            </option>
            {/* States options would be added here */}
          </select>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary flex justify-center items-center gap-2">
            <FaDownload />
            Generate License
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
