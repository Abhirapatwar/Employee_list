import React from "react";
import { useState, useEffect } from "react";
import "../Components/Home.css";

function Home() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [content, setContent] = useState([]);

  function handlesubmit(event) {
    event.preventDefault();
    let items = {
      name: name,
      address: address,
      date: date,
      gender: gender,
      email: email,
      phone: phone,
    };
    setContent([...content, items]);
  }

  function handledelete(){
    setContent([])
  }

  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(content));
    setName("");
    setAddress("");
    setDate("");
    setEmail("");
    setGender("");
    setPhone("");
    console.log(content);
  }, [content]);

  return (
    <>
      <div className="container text-center mt-2">
        <h1>Employee Data</h1>
      </div>
      <div className="container-fluid mt-2">
        <div className="row">
          {/* left container */}
          <div className="col-md-6 box-1 py-3 px-5">
            <div className="row py-5 shadow shadow-lg">
              <div className="container formbox">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      value={address}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Date of Joining
                    </label>
                    <input
                      type="date"
                      value={date}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="example1" className="form-label">
                      Gender
                    </label>
                    <div
                      id="example1"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radio"
                          value="male"
                          id="flexRadioDefault1"
                          //   onChange={(e) => {
                          //     setGender(e.target.value);
                          //   }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radio"
                          value="female"
                          id="flexRadioDefault2"
                          //   onChange={(e) => {
                          //     setGender(e.target.value);
                          //   }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      value={email}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      value={phone}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handlesubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* right container */}
          <div className="col-md-6 box-2 py-3 px-5">
            <div className="row py-5 shadow shadow-lg">
              <div className="container tablepart">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Date</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.map((data, id) => (
                      <tr>
                        <th scope="row">{data.name}</th>
                        <td>{data.address}</td>
                        <td>{data.date}</td>
                        <td>{data.gender}</td>
                        <td>{data.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="container">
                <button className="btn btn-danger px-5" onClick={handledelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
