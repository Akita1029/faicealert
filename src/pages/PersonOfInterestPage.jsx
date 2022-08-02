import React from "react";

import MenuPop from "../components/MenuPop";
// import RatingPage from "../components/RatingPage";

import theme from "../lib/theme";

export default function PersonOfInterest(props){

    const [controlIndex, setControlIndex] = React.useState(1);
    const [dateDetailsIndex, setDateDetailsIndex] = React.useState(1);

    var rows = [];
    for (var i = 0; i < 20; i++) {
        rows.push(<tr>
            <td><i className="bi bi-file-person"></i></td>
            <td scope="col">
                <img src="/avatar.png" style={{
                    width: 32,
                    height: 32
                }} className="rounded me-1" />
                Name or Number
            </td>
            <td scope="col">24</td>
            <td scope="col">10:01 01-01-21</td>
            <td scope="col">0.2993</td>
            <td scope="col"></td>
            <td scope="col">
                <span style={{color:"#07A287", backgroundColor:"rgba(7, 162, 135, 0.08)", borderRadius:"1em", padding:"1"}}>Knife</span>
                <span style={{color:"#F43C3C", backgroundColor:"rgba(255, 75, 110, 0.08)", borderRadius:"1em", padding:"1", marginLeft:"5px"}}>Violent</span></td>
        </tr>);
    }

    return(
        <div style={{color:"#666"}}>
            <div className="row">
                {/* Navigation Bar Start*/}
                <div className="col-3 p-4" style={{
                    backgroundColor:theme.gray,
                }}>
                    <MenuPop />
                    <div className="mt-4">
                        <div className="d-flex flex-row justify-content-start align-itmes-center">
                            <p className="flex-grow-1 ms-3">KEY STORE CONTACTS</p>
                            <div className="d-flex flex-row justify-center-start align-itmes-center mt-2 me-2">
                                <span className="array-dot"></span>
                                <span className="array-dot"></span>
                                <span className="array-dot"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navigation Bar End */}
                <div className="col-9 ps-0">
                    {/* Header Bar Start */}
                    <div className="p-4">
                        <div className="d-flex flex-row justify-content-between mt-3">
                            <h3>Match</h3>
                            <div className="input-group flex-nowrap ms-5" style={{flex: 1}}>
                                <span className="input-group-text"  style={{backgroundColor:"#fff"}}><i className="bi bi-search"/></span>
                                <input className="form-control" style={{borderLeft: 'none'}} placeholder="Search for stores and people..."/>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-4">
                            <div className="btn-group mx-4" style={{
                                background: '#eee',
                                padding: 3,
                                width:"300px"
                            }}>
                                <button className="btn" style={{
                                    background: controlIndex === 1 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setControlIndex(1)}>Analysis</button>
                                <button className="btn" style={{
                                    background: controlIndex === 2 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setControlIndex(2)}>Manage</button>
                                <button className="btn" style={{
                                    background: controlIndex === 3 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setControlIndex(3)}>Add a POI</button>
                            </div>
                            <div className="btn-group mx-4 flex-grow-1" style={{
                                background: '#eee',
                                padding: 3,
                                width:"300px"
                            }}>
                                <button className="btn" style={{
                                    background: dateDetailsIndex === 1 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setDateDetailsIndex(1)}>1d</button>
                                <button className="btn" style={{
                                    background: dateDetailsIndex === 2 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setDateDetailsIndex(2)}>1w</button>
                                <button className="btn" style={{
                                    background: dateDetailsIndex === 3 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setDateDetailsIndex(3)}>1m</button>
                                <button className="btn" style={{
                                    background: dateDetailsIndex === 4 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setDateDetailsIndex(4)}>1y</button>
                                <button className="btn" style={{
                                    background: dateDetailsIndex === 5 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setDateDetailsIndex(5)}>All</button>
                                <button className="btn" style={{
                                    background: dateDetailsIndex === 6 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setDateDetailsIndex(6)}><i className="bi bi-boxes"></i></button>
                            </div>
                        </div>
                    </div>
                    {/* Header Bar End */}
                    <hr className="mt-0"></hr>
                    {/* Content Section Start */}
                    <div className="p-4">
                        {/* Analysis Start*/}
                        {controlIndex === 1 && (
                            <div>
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <div className="d-flex flex-column">
                                        <h3 className="fw-bold">Analysis</h3>
                                        <span>Recent match analysis</span>
                                    </div>
                                    <button className="btn btn-primary ms-4" style={{
                                        background: 'linear-gradient(180deg, #6989FE 0%, #3C64F4 100%)'
                                    }}>
                                        <i className="bi bi-pencil-square me-2"></i>
                                        Create Report
                                    </button>
                                </div>
                                <div className="d-flex flex-row justify-content-between align-items-center mt-3">
                                    <div className="col-4 pe-2">
                                        <div className="d-flex flex-column">
                                            <div className="rounded border p-3">
                                                <div className="d-flex flex-row justify-content-between align-items-center">
                                                    <span>Total Matches</span>
                                                    <span style={{
                                                        fontSize:"0.8rem"
                                                    }}>This week <i className="bi bi-chevron-down"></i></span>
                                                </div>
                                                <div className="mt-2">
                                                    <span className="fw-bold" style={{
                                                        fontSize: '1.4rem', color: '#333'
                                                    }}>324</span>
                                                    <span style={{
                                                        backgroundColor:'rgba(7, 162, 135, 0.15)',
                                                        borderRadius:"8px",
                                                    }} className="ms-3 p-1">14.6% +</span>
                                                </div>
                                                <div className="mt-3" style={{
                                                    fontSize:"0.8rem"}}> There were an extra 
                                                    <span style={{
                                                        fontWeight:"bold", color:"green"}}>56
                                                    </span> this week</div>
                                            </div>
                                            <div className="rounded p-3 mt-2" style={{
                                                background: '#FFF8F1',
                                                border: '1px solid #FCA549',
                                                borderRadius: 8
                                            }}>
                                                <div className="d-flex flex-row justify-content-between align-items-center">
                                                    <span>Lost Revenue</span>
                                                    <span className="" style={{
                                                        fontSize:"0.8rem"
                                                    }}>This month <i className="bi bi-chevron-down"></i></span>
                                                </div>
                                                <div className="mt-2">
                                                    <span className="fw-bold" style={{
                                                        fontSize: '1.4rem', color: '#333'
                                                    }}><i className="bi bi-currency-pound"/>21,893.97</span>
                                                    <span style={{
                                                        backgroundColor:'rgba(244, 60, 60, 0.24)',
                                                        borderRadius:"8px",
                                                    }} className="ms-3 p-1">4.19% +</span>
                                                </div>
                                                <div className="mt-3" style={{
                                                    fontSize:"0.8rem"}}> You lost <span style={{fontWeight:"bold", color:"red"}}><i className="bi bi-currency-pound"/>21,893.97</span> more than last month</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 ps-3 mb-3">
                                        <div className="row mt-3">
                                            <div className="col-12 border p-3 rounded">
                                                <div className="d-flex flex-row justify-content-between align-items-center">
                                                    <span>Total Incidents</span>
                                                    <span style={{
                                                        fontSize:"0.8rem",
                                                        backgroundColor:"#F8F8F8",
                                                        cursor:"pointer"
                                                    }} className="p-2 rounded"><i className="bi bi-box"></i></span>
                                                </div>
                                                <div className="mt-2">
                                                    <span className="fw-bold" style={{
                                                        fontSize: '1.4rem', color: '#333'
                                                    }}>256</span>
                                                    <span style={{
                                                        backgroundColor:'rgba(7, 162, 135, 0.15)',
                                                        borderRadius:"8px",
                                                    }} className="ms-3 p-1">14.6% +</span>
                                                </div>
                                                <div className="mt-3" style={{height:"150px"}}>
                                                    chart diagram
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Analysis End */}
                        {/* Manage Start */}
                        {controlIndex === 2 && (
                            <div>
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <div className="d-flex flex-column">
                                        <h3 className="fw-bold">Manage</h3>
                                        <span>Search all active POIs</span>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <select className="form-select">
                                            <option value="1" selected>Action</option>
                                            <option value="2">First</option>
                                            <option value="3">Second</option>
                                            <option value="4">Third</option>
                                        </select>
                                        <select className="form-select ms-3 me-1">
                                            <option value="1" selected><span className="fw-bold">12</span> times per page</option>
                                            <option value="2"><span className="fw-bold">20</span> times per page</option>
                                            <option value="3"><span className="fw-bold">35</span> times per page</option>
                                            <option value="4"><span className="fw-bold">50</span> times per page</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <table className="table table-white table-hover mt-">
                                        <thead>
                                            <tr>
                                                <th><i className="bi bi-file-person"></i></th>
                                                <th scope="col">POI Name</th>
                                                <th scope="col">Matches</th>
                                                <th scope="col">Enrolled</th>
                                                <th scope="col">Biodotrix</th>
                                                <th scope="col">Threat Level</th>
                                                <th scope="col">Threat Type</th>
                                            </tr>
                                        </thead>
                                        <tbody  className="mt-5">
                                            {rows}
                                        </tbody>
                                    </table>    
                                </div>
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <span>1-12 out of 56 items</span>
                                </div>
                            </div>
                        )}
                        {/* Manage End */}
                        {/* Add POI Start */}
                        {controlIndex == 3 && (
                            <div>
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <div className="d-flex flex-column">
                                        <h3 className="fw-bold">Add new POI</h3>
                                        <span>Add a new POI to the database</span>
                                    </div>
                                </div>
                                <div className="row p-1 mt-3">
                                    <div className="col-6">
                                        <div className="mt-1">
                                            <label for="validationServer03" className="form-label">Reference number</label>
                                            <input type="text" className="form-control is-invalid" required />
                                            <div className="invalid-feedback">
                                            <i className="bi bi-exclamation-triangle ms-1 me-2"></i>Please enter a reference number in the format xxx-xxx-xxx
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Full name if required</label>
                                            <div className="d-flex flex-row justify-content-start align-items-center">
                                                <div className="form-floating mb-3 w-50">
                                                    <input type="text" className="form-control" placeholder="first name"/>
                                                    <label for="floatingInput">First Name</label>
                                                </div>
                                                <div className="form-floating mb-3 ms-3 w-50">
                                                    <input type="text" className="form-control" placeholder="last name"/>
                                                    <label for="floatingInput">Last Name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Select gender</label>
                                            <div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked />
                                                    <label className="form-check-label" for="inlineRadio1">Male</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                                                    <label className="form-check-label" for="inlineRadio2">Female</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="gender" id="unknown" value="unknown" />
                                                    <label className="form-check-label" for="inlineRadio3">Unknown</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Address if known</label>
                                            <div className="d-flex flex-row justify-content-center align-items-center">
                                                <div className="form-floating  flex-grow-1 ">
                                                    <select className="form-select rounded-3">
                                                        <option value="1" selected>Action</option>
                                                        <option value="2">First</option>
                                                        <option value="3">Second</option>
                                                        <option value="4">Third</option>
                                                    </select>
                                                </div>
                                                <div className="form-floating ms-3 flex-grow-1">
                                                    <select className="form-select rounded-3">
                                                        <option value="1" selected>Action</option>
                                                        <option value="2">First</option>
                                                        <option value="3">Second</option>
                                                        <option value="4">Third</option>
                                                    </select>
                                                </div>
                                                <div className="form-floating ms-3 flex-grow-2">
                                                    <input type="text" className="form-control rounded-3" placeholder="Zip Code"/>
                                                    <label for="floatingInput">Zip Code</label>
                                                </div>
                                            </div>
                                            <div className="form-floating mt-1">
                                                <input type="text" className="form-control" placeholder="street"/>
                                                <label>Street</label>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Threat Level</label>

                                        </div>
                                    </div>
                                    <div className="col-6">

                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Add POI End */}
                    </div>
                </div>
            </div>    
        </div>
    );
}