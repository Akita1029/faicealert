import React from "react";

import CalendarComponent from "../components/CalendarComponent";
import FilterEventFeed from "../components/FilterEventFeed";
import MenuPop from "../components/MenuPop";
import NavigationFooter from "../components/NavigationFooter";

import BootstrapTable from 'react-bootstrap-table-next';

import theme from "../lib/theme";

import './Pages.css';



export default function ManageUsersPage(props){

    const [tabIndex, setTabIndex] = React.useState(1);
    const [viewIndex, setViewIndex] = React.useState(1);

    const columns = [{
        dataField: 'name',
        text: 'NAME'
    }, {
        dataField: 'email',
        text: 'EMAIL'
    }, {
        dataField: 'status',
        text: 'STATUS'
    }, {
        dataField: 'role',
        text: 'ROLE'
    }];

    var rows = [];
    for (var i = 0; i < 20; i++) {
        rows.push(<tr>
                <td scope="col">
                    <img src="/avatar.png" style={{
                        width: 32,
                        height: 32
                    }} className="rounded-pill me-2" />
                    Roman Bellic
                </td>
                <td scope="col">person@booths.com</td>
                <td scope="col">On duty</td>
                <td scope="col">Manager</td>
            </tr>);
    }

    return (
        <div style={{color:"#666"}}>
            <div className="row">
                {/* Navigation Bar Start*/}
                <div className="col-3 p-4" style={{
                    backgroundColor:theme.gray,
                }}>
                    <MenuPop />
                    <FilterEventFeed />
                    <NavigationFooter />
                </div>
                {/* Navigation Bar End */}
                <div className="col-9 ps-0">
                    {/* Header Bar Start */}
                    <div className="p-4">
                        <div className="d-flex flex-row justify-content-between mt-3">
                            <h3 className="fw-bold">Users</h3>
                            <div className="input-group flex-nowrap ms-5 w-25">
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
                                    background: tabIndex === 1 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setTabIndex(1)}>All Users</button>
                                <button className="btn" style={{
                                    background: tabIndex === 2 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setTabIndex(2)}>Manage</button>
                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <button className="viewBtnStyle" style={{padding:5, border:"none", borderRadius:8, marginRight:5, background:viewIndex===1? "#eee" : "white"}} onClick={() => setViewIndex(1)}><i className="bi bi-table ms-2 me-2"></i>Table View</button>
                                <button className="viewBtnStyle ms-2 me-2" style={{padding:5, border:"none", borderRadius:8, marginRight:5, background:viewIndex===2? "#eee" : "white"}} onClick={() => setViewIndex(2)}><i className="bi bi-grid ms-2 me-2"></i>Grid View</button>
                            </div>
                        </div>
                    </div>
                    {/* Header Bar End */}
                    <hr className="mt-0"></hr>
                    {/* Content Section Start */}
                    <div className="p-4">
                        {/* Analysis Start*/}
                        {tabIndex === 1 && (
                            <div>
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <div className="d-flex flex-column">
                                        <h3 className="fw-bold">All users</h3>
                                        <span>Click to view or edit</span>
                                    </div>
                                    <button className="btn btn-primary ms-4" style={{
                                        background: 'linear-gradient(180deg, #6989FE 0%, #3C64F4 100%)'
                                    }}>
                                        <i className="bi bi-clipboard me-2"></i>
                                        View Report
                                    </button>
                                </div>
                                <div className="mt-4 ms-4">
                                    <BootstrapTable
                                        keyField="id"
                                        data={ products }
                                        columns={ columns }
                                        bordered={ false }
                                    />
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">NAME<i className="ms-2 bi bi-pencil"></i></th>
                                                <th scope="col">EMAIL<i className="ms-2 bi bi-pencil"></i></th>
                                                <th scope="col">STATUS<i className="ms-2 bi bi-pencil"></i></th>
                                                <th scope="col">ROLE<i className="ms-2 bi bi-pencil"></i></th>
                                            </tr>
                                        </thead>
                                        <tbody  className="mt-5">
                                            {rows}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                        {/* Analysis End */}
                        {/* Manage Start */}
                        {tabIndex === 2 && (
                            <div className="row">
                                <div className="col-8 ps-2">
                                    <div className="d-flex flex-column">
                                        <h3 className="fw-bold">Manage User</h3>
                                        <span>System event log</span>
                                    </div>
                                    <hr></hr>
                                    <div className="mt-3 mb-3">
                                        <div className="d-flex flex-row justify-content-start align-items-center">
                                            <div className="position-relative">
                                                <img src="/avatar.png" style={{
                                                    width: 40,
                                                    height: 40
                                                }} className="rounded-pill" />
                                                <span style={{
                                                    position: 'absolute',
                                                    right: 0,
                                                    bottom: 0,
                                                    width: 13,
                                                    height: 13,
                                                    background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)',
                                                    borderRadius: '50%',
                                                    border: '2px solid white'
                                                }}></span>
                                            </div>
                                            <div className="d-flex flex-column ms-3">
                                                <div className="d-flex flex-row justify-content-start align-items-center">
                                                    <span style={{fontSize: '1rem', fontWeight:"bold"}}>John Smith</span>
                                                    <span style={{
                                                        fontSize: '0.8rem',
                                                        borderRadius:5,
                                                        backgroundColor:"#FCA549",
                                                        color:"white",
                                                        paddingLeft:4,
                                                        paddingRight:4,
                                                        marginLeft:5,
                                                        marginRight:5
                                                    }}>Store security</span>
                                                    <span>August 9th 19:31 PM</span>
                                                </div>
                                                <span>Created a new case file</span>
                                            </div>
                                        </div>
                                        <div className="mt-3 ms-5">
                                            <span style={{
                                                    backgroundColor:"#F1F2F3",
                                                    borderRadius:"15px",
                                            }} className="ps-3 pt-2 pb-2 pe-3">Match #6758</span>             
                                        </div>
                                        <div className="mt-3 ms-5">
                                            <img src="/case_file.png" style={{width:"40%"}} />             
                                        </div>
                                        <hr></hr>
                                    </div>
                                    <div className="mt-3 mb-3">
                                        <div className="d-flex flex-row justify-content-start align-items-center">
                                            <div className="position-relative">
                                                <img src="/avatar.png" style={{
                                                    width: 40,
                                                    height: 40
                                                }} className="rounded-pill" />
                                                <span style={{
                                                    position: 'absolute',
                                                    right: 0,
                                                    bottom: 0,
                                                    width: 13,
                                                    height: 13,
                                                    background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)',
                                                    borderRadius: '50%',
                                                    border: '2px solid white'
                                                }}></span>
                                            </div>
                                            <div className="d-flex flex-column ms-3">
                                                <div className="d-flex flex-row justify-content-start align-items-center">
                                                    <span style={{fontSize: '1rem', fontWeight:"bold"}}>John Smith</span>
                                                    <span style={{
                                                        fontSize: '0.8rem',
                                                        borderRadius:5,
                                                        backgroundColor:"#FCA549",
                                                        color:"white",
                                                        paddingLeft:4,
                                                        paddingRight:4,
                                                        marginLeft:5,
                                                        marginRight:5
                                                    }}>Store security</span>
                                                    <span>August 9th 19:31 PM</span>
                                                </div>
                                                <span>Acknowledged a match</span>
                                            </div>
                                        </div>
                                        <div className="mt-3 ms-5">
                                            <span style={{
                                                    backgroundColor:"#F1F2F3",
                                                    borderRadius:"15px",
                                            }} className="ps-3 pt-2 pb-2 pe-3">Match #6758</span>             
                                        </div>
                                        <div className="mt-3 ms-5">
                                            <img src="/snapshot.png" style={{width:"90%"}} />             
                                        </div>
                                        <hr></hr>
                                    </div>
                                    <div className="mt-3 mb-3">
                                        <div className="d-flex flex-row justify-content-start align-items-center">
                                            <div className="position-relative">
                                                <img src="/avatar.png" style={{
                                                    width: 40,
                                                    height: 40
                                                }} className="rounded-pill" />
                                                <span style={{
                                                    position: 'absolute',
                                                    right: 0,
                                                    bottom: 0,
                                                    width: 13,
                                                    height: 13,
                                                    background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)',
                                                    borderRadius: '50%',
                                                    border: '2px solid white'
                                                }}></span>
                                            </div>
                                            <div className="d-flex flex-column ms-3">
                                                <div className="d-flex flex-row justify-content-start align-items-center">
                                                    <span style={{fontSize: '1rem', fontWeight:"bold"}}>John Smith</span>
                                                    <span style={{
                                                        fontSize: '0.8rem',
                                                        borderRadius:5,
                                                        backgroundColor:"#FCA549",
                                                        color:"white",
                                                        paddingLeft:4,
                                                        paddingRight:4,
                                                        marginLeft:5,
                                                        marginRight:5
                                                    }}>Store security</span>
                                                    <span>August 9th 19:31 PM</span>
                                                </div>
                                                <span>Updated password</span>
                                            </div>
                                        </div>
                                        <div className="mt-3 ms-5">
                                            <span style={{
                                                    backgroundColor:"#F1F2F3",
                                                    borderRadius:"15px",
                                            }} className="ps-3 pt-2 pb-2 pe-3">System Event #6758</span>             
                                        </div>
                                        <hr></hr>
                                    </div>
                                    <div className="mt-3 mb-3">
                                        <div className="d-flex flex-row justify-content-start align-items-center">
                                            <div className="position-relative">
                                                <img src="/avatar.png" style={{
                                                    width: 40,
                                                    height: 40
                                                }} className="rounded-pill" />
                                                <span style={{
                                                    position: 'absolute',
                                                    right: 0,
                                                    bottom: 0,
                                                    width: 13,
                                                    height: 13,
                                                    background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)',
                                                    borderRadius: '50%',
                                                    border: '2px solid white'
                                                }}></span>
                                            </div>
                                            <div className="d-flex flex-column ms-3">
                                                <div className="d-flex flex-row justify-content-start align-items-center">
                                                    <span style={{fontSize: '1rem', fontWeight:"bold"}}>John Smith</span>
                                                    <span style={{
                                                        fontSize: '0.8rem',
                                                        borderRadius:5,
                                                        backgroundColor:"#FCA549",
                                                        color:"white",
                                                        paddingLeft:4,
                                                        paddingRight:4,
                                                        marginLeft:5,
                                                        marginRight:5
                                                    }}>Store security</span>
                                                    <span>August 9th 19:31 PM</span>
                                                </div>
                                                <span>Marked a match as incorrect</span>
                                            </div>
                                        </div>
                                        <div className="mt-3 ms-5">
                                            <span style={{
                                                    backgroundColor:"#F1F2F3",
                                                    borderRadius:"15px",
                                            }} className="ps-3 pt-2 pb-2 pe-3">Match #6758</span>             
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 pe-2">
                                    <div className="border rounded">
                                        <div className="d-flex flex-row justify-content-between align-items-center p-3 pb-0">
                                            <h5 className="fw-bold">Contact Information</h5>
                                            <div className="d-flex flex-row justify-center-start align-itmes-center me-2">
                                                <span className="array-dot"></span>
                                                <span className="array-dot"></span>
                                                <span className="array-dot"></span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex flex-column justify-content-start align-items-center p-3">
                                        <div className="position-relative">
                                                <img src="/avatar.png" style={{
                                                    width: 70,
                                                    height: 70
                                                }} className="rounded-pill" />
                                                <span style={{
                                                    position: 'absolute',
                                                    right: 0,
                                                    bottom: 0,
                                                    width: 13,
                                                    height: 13,
                                                    background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)',
                                                    borderRadius: '50%',
                                                    border: '2px solid white'
                                                }}></span>
                                            </div>
                                            <span style={{fontSize: '1rem', fontWeight:"bold", marginTop:10}}>John Smith</span>
                                            <span style={{fontSize: '0.8rem'}}>Administrator</span>
                                        </div>
                                        <div className="d-flex flex-row mt-2 justify-content-center align-items-center mb-4">
                                            <div className="border rounded pt-2 pb-2 ps-5 pe-5 me-1"><i className="bi bi-telephone" style={{color:"blue"}}></i></div>
                                            <div className="border rounded pt-2 pb-2 ps-5 pe-5 ms-1"><i className="bi bi-envelope-dash" style={{color:"blue"}}></i></div>
                                        </div>
                                        <hr />
                                        <div className="d-flex flex-column ms-4 mb-3 mt-4">
                                            <span>USERNAME</span>
                                            <span className="fw-bold">@johnsmith</span>
                                        </div>
                                        <div className="d-flex flex-column ms-4 mb-3">
                                            <span>MOBILE</span>
                                            <span className="fw-bold">07745 567876</span>
                                        </div>
                                        <div className="d-flex flex-column ms-4 mb-4">
                                            <span>POSITION</span>
                                            <span className="fw-bold">Store Security</span>
                                        </div>
                                        <hr />
                                        <div className="nav-item mb-3 ms-4 me-3 mt-4" style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                        }}>
                                            <i className="bi bi-bell" style={{fontSize: '1.1rem'}}/>
                                            <span className="ms-3 flex-grow-1" style={{fontSize: '1.1rem'}}>Notifications</span>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch"/>
                                            </div>
                                        </div>
                                        <div className="nav-item mb-4 ms-4 me-4" style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                        }}>
                                            <i className="bi bi-star" style={{fontSize: '1.1rem'}}/>
                                            <span className="ms-3 flex-grow-1" style={{fontSize: '1.1rem'}}>Starred</span>
                                            <span className="badge rounded-pill" style={{
                                                background: '#FCA549'
                                            }}>14</span>
                                        </div>
                                        <hr />
                                        <div className="d-flex flex-row justify-content-between align-items-center ms-4 me-3 mt-1">
                                            <span className="fw-bold">Roles</span>
                                            <span style={{color:"blue"}}>Add new <i className="bi bi-plus"></i></span>
                                        </div>
                                        <div className="form-check ms-4 mt-4">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label className="form-check-label" for="flexCheckChecked">
                                                Super admin
                                            </label>
                                        </div>
                                        <div className="form-check ms-4 mt-2 mb-3">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label className="form-check-label" for="flexCheckChecked">
                                                Admin
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Manage End */}
                        {/* Add reports start*/}
                        {tabIndex == 3 && (
                            <div>

                            </div>    
                        )}
                        {/* Add reports End */}
                    </div>
                </div>
            </div>
        </div>
    );
}