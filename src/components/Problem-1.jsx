import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [dataset, setDataset] = useState([]);
  const [product, setProduct] = useState([]);
 

  const handleClick = (val) => {
    
    if (val != "All") {
      const matchProduct = dataset.filter((pd) => pd.status == val);
      setProduct(matchProduct);
    } else {
      setProduct(dataset);
    }
  };
  const handleSubmit = () => {
    event.preventDefault();
    const data = { name: name, status: status };
    const newArray = [...dataset, data];

    setDataset(newArray);
    setProduct(newArray);

    
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form className="row gy-2 gx-3 align-items-center mb-4">
            <div className="col-auto">
              <input
                onChange={(event) => setName(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                onChange={(event) => setStatus(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("All")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("Active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("Completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {product.length != 0 &&
                product.map((data) => (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
