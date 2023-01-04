import React from "react";

import CalendarComponent from "../components/CalendarComponent";
import MenuPop from "../components/MenuPop";
import NavigationFooter from "../components/NavigationFooter";

import theme from "../lib/theme";

import './Pages.css';



export default function ReportPage(props){

    const [tabIndex, setTabIndex] = React.useState(1);
    const [viewIndex, setViewIndex] = React.useState(1);

    return (
        <div style={{color:"#666"}}>
            <div className="row">
                {/* Navigation Bar Start*/}
                <div className="col-3 p-4" style={{
                    backgroundColor:theme.gray,
                }}>
                    <MenuPop />
                    <CalendarComponent />
                    <NavigationFooter />
                </div>
                {/* Navigation Bar End */}
                <div className="col-9 ps-0">
                    {/* Header Bar Start */}
                    <div className="p-4">
                        <div className="d-flex flex-row justify-content-between mt-3">
                            <h3 className="fw-bold">Reports</h3>
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
                                }} onClick={() => setTabIndex(1)}>Analysis</button>
                                <button className="btn" style={{
                                    background: tabIndex === 2 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setTabIndex(2)}>Manage</button>
                                <button className="btn" style={{
                                    background: tabIndex === 3 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setTabIndex(3)}>Second</button>
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
                                        <h3 className="fw-bold">Latest reports</h3>
                                        <span>Analysis of overall store acctivity</span>
                                    </div>
                                    <button className="btn btn-primary ms-4" style={{
                                        background: 'linear-gradient(180deg, #6989FE 0%, #3C64F4 100%)'
                                    }}>
                                        <i className="bi bi-clipboard me-2"></i>
                                        View Report
                                    </button>
                                </div>
                                <div className="mt-3">
                                    
                                </div>
                            </div>
                        )}
                        {/* Analysis End */}
                        {/* Manage Start */}
                        {tabIndex === 2 && (
                            <div>

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