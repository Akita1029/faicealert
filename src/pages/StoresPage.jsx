import React from "react";

import MenuPop from "../components/MenuPop";
import CalendarComponent from "../components/CalendarComponent";
import KeyStoreContacts from "../components/KeyStoreContacts";

import theme from "../lib/theme";

import './Pages.css';
import StoreInfoCard from "../components/StoreInfoCard";
import CameraGroup from "../components/CameraGroup";
import NavigationFooter from "../components/NavigationFooter";




export default function StoresPage(props){

    const [controlIndex, setControlIndex] = React.useState(1);
    const [dateDetailsIndex, setDateDetailsIndex] = React.useState(1);
    const [viewIndex, setViewIndex] = React.useState(1);
    const [storeStructureNavIndex, setStoreStructureNavIndex] = React.useState(0);
    const [overviewOrBrowser, setOverviewOrBrowser] = React.useState(1);

    return (
        <div style={{color:"#666"}}>
            <div className="row">
                {/* Navigation Bar Start*/}
                <div className="col-3 p-4" style={{
                    backgroundColor:theme.gray,
                }}>
                    <MenuPop />
                    {controlIndex===1 && (
                        <CalendarComponent />
                    )}
                    {controlIndex===2 && (
                        <CalendarComponent />
                    )}
                    {controlIndex===3 && (
                        <div>

                            <div className="mt-3 rounded p-3 ms-2" style={{backgroundColor:"rgba(255, 255, 255, 0.64)"}}>
                                <div className="d-flex flex-row justify-content-start align-items-center">
                                    <img src="/store_avatar.png" style={{width:40, height:40}}/>
                                    <div className="d-flex flex-column ms-3">
                                        <span style={{fontWeight:"bold", fontSize:"0.8rem"}}>Store systems status</span>
                                        <span style={{fontSize:"0.8rem", marginTop:"3px"}}>Last updated 1 minute ago</span>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <span style={{fontSize:"1.1rem", color:"#4E73F8"}}>FAICEALERT</span>
                                    <span className="ms-1">server</span>
                                    <span className="ms-2"><i className="bi bi-star-fill"></i></span>
                                    <span className="ms-2">Online</span>
                                </div>
                                <div className="mt-1 d-flex flex-row justiy-content-start align-items-center">
                                    <span style={{
                                        fontSize:"1.2rem", 
                                        backgroundColor:"rgba(78, 115, 248, 0.2)",
                                        padding:4,
                                        borderRadius:"5px"
                                    }}>-Router online</span>
                                    <span style={{ 
                                        backgroundColor:"rgba(7, 162, 135, 0.08)",
                                        padding:4,
                                        marginLeft:10,
                                        borderRadius:"5px"
                                    }}>-UPS offline</span>
                                </div>
                                <div className="mt-2 d-flex flex-column justify-center-start" style={{
                                        fontSize:"0.8rem"}}>
                                    <span>Lorem ipsum dolor sit amet,</span>
                                    <span>consecteur adipiscing edit Aliquam</span>
                                    <span>sit amet veneatis sapien.</span>
                                </div>
                            </div>
                            <KeyStoreContacts />
                        </div>
                    )}
                    <NavigationFooter />
                </div>
                {/* Navigation Bar End */}
                <div className="col-9 ps-0">
                    {/* Header Bar Start */}
                    <div className="p-4">
                        <div className="d-flex flex-row justify-content-between mt-3">
                            <h3 className="fw-bold">Stores</h3>
                            <div className="input-group flex-nowrap ms-5 w-25">
                                <span className="input-group-text"  style={{backgroundColor:"#fff"}}><i className="bi bi-search"/></span>
                                <input className="form-control" style={{borderLeft: 'none'}} placeholder="Type something to search..."/>
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
                                }} onClick={() => setControlIndex(3)}>Second</button>
                            </div>
                            {controlIndex ===1 && (
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
                            )}
                            {controlIndex ===2 && (
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <button className="viewBtnStyle" style={{padding:5, border:"none", borderRadius:8, marginRight:5, background:viewIndex===1? "#eee" : "white"}} onClick={() => setViewIndex(1)}><i className="bi bi-list-ul ms-2 me-2"></i>Manage</button>
                                    <button className="viewBtnStyle ms-2 me-2" style={{padding:5, border:"none", borderRadius:8, marginRight:5, background:viewIndex===2? "#eee" : "white"}} onClick={() => setViewIndex(2)}><i className="bi bi-plus-lg ms-2 me-2"></i>Add New</button>
                                </div>
                            )}
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
                        {controlIndex === 2 && (
                            <div>
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <div className="d-flex flex-column">
                                        <h3 className="fw-bold">Manage</h3>
                                        <span>Manage your stores</span>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <select className="form-select ms-3 me-1">
                                            <option value="1" selected><span className="fw-bold">12</span> times per page</option>
                                            <option value="2"><span className="fw-bold">20</span> times per page</option>
                                            <option value="3"><span className="fw-bold">35</span> times per page</option>
                                            <option value="4"><span className="fw-bold">50</span> times per page</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex flex-row row-cols-4 justify-content-start align-items-center">
                                    <StoreInfoCard />
                                    <StoreInfoCard />
                                    <StoreInfoCard />
                                    <StoreInfoCard />
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
                                        <h3 className="fw-bold">Knutsford</h3>
                                        <span>Stanley Road, Knutsford, Cheshire, WA16 OBS</span>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <button className="btn btn-primary ms-4" style={{
                                            background: 'linear-gradient(180deg, #6989FE 0%, #3C64F4 100%)'
                                        }}>
                                            <i className="bi bi-gear me-2"></i>
                                            Configure
                                        </button>
                                        { overviewOrBrowser===1 && (
                                            <button className="btn btn-primary ms-4" style={{
                                                background: 'linear-gradient(180deg, #6989FE 0%, #3C64F4 100%)'
                                            }} onClick={() => setOverviewOrBrowser(2)}>
                                                <i className="bi bi-cart me-2"></i>
                                                Store Overview
                                                <i className="bi bi-chevron-down ms-4"></i>
                                            </button>
                                        )}
                                        { overviewOrBrowser===2 && (
                                            <button className="btn btn-primary ms-4" style={{
                                                background: 'linear-gradient(180deg, #6989FE 0%, #3C64F4 100%)'
                                            }} onClick={() => setOverviewOrBrowser(1)}>
                                                <i className="bi bi-camera-video me-2"></i>
                                                Camera Browser
                                                <i className="bi bi-chevron-down ms-4"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                                {overviewOrBrowser===1 && (
                                    <div>
                                        <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
                                            <div className="col ps-0 pe-2">
                                                <div className="rounded border p-3">
                                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                                        <span>Total Matches</span>
                                                        <span className="" style={{
                                                            fontSize:"0.8rem"
                                                        }}>This week <i className="bi bi-chevron-down"></i></span>
                                                    </div>
                                                    <div className="mt-4">
                                                        <span className="fw-bold" style={{
                                                            fontSize: '1.4rem', color: '#333'
                                                        }}>42<i className="bi bi-caret-down-fill ms-1"></i></span>
                                                        <span className="ms-3" style={{fontSize:15, color:"green"}}>+15%</span>
                                                    </div>
                                                    <div style={{
                                                        fontSize:"0.8rem"}}> Matches this week
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col ps-2 pe-2">
                                                <div className="rounded border p-3">
                                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                                        <span>Lost Revenue</span>
                                                        <span className="" style={{
                                                            fontSize:"0.8rem"
                                                        }}>This week <i className="bi bi-chevron-down"></i></span>
                                                    </div>
                                                    <div className="mt-2">
                                                        <span className="fw-bold" style={{
                                                            fontSize: '1.4rem', color: '#333'
                                                        }}><i className="bi bi-currency-pound"/>893.97</span>
                                                        <span style={{
                                                            backgroundColor:'rgba(244, 60, 60, 0.24)',
                                                            borderRadius:"8px",
                                                        }} className="ms-3 p-1">14.6% +</span>
                                                    </div>
                                                    <div className="mt-3" style={{
                                                        fontSize:"0.8rem"}}> You lost <span style={{fontWeight:"bold", color:"red"}}><i className="bi bi-currency-pound"/>256.13</span> more than last week</div>
                                                </div>
                                            </div>
                                            <div className="col ps-2 pe-0">
                                                <div className="rounded p-3 border">
                                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                                        <span>Camera Online</span>
                                                    </div>
                                                    <div className="mt-2">
                                                        <span className="fw-bold" style={{
                                                            fontSize: '1.4rem', color: '#333'
                                                        }}>23</span>
                                                    </div>
                                                    <div className="mt-2">
                                                        <span style={{
                                                            backgroundColor:'rgba(244, 60, 60, 0.24)',
                                                            borderRadius:"8px",
                                                            padding:5,
                                                            color:"red"
                                                        }}>3 offline</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 ms-0 me-0 p-2 rounded border row">
                                            <div className="col-8 mt-3">
                                                <nav className="navbar navbar-expand-lg">
                                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                        <li className="nav-item">
                                                            <a className="store_structure_nav" onClick={() => setStoreStructureNavIndex(0)}>Ground</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="store_structure_nav" onClick={() => setStoreStructureNavIndex(1)}>1st floor</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="store_structure_nav" onClick={() => setStoreStructureNavIndex(2)}>2st floor</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="store_structure_nav" onClick={() => setStoreStructureNavIndex(3)}>3st floor</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="store_structure_nav" onClick={() => setStoreStructureNavIndex(4)}>4st floor</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                                <div className="mt-4">
                                                    <img src="/store_structure.png" style={{
                                                        width:"100%"
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="col-4 mt-4 ps-5 pe-5">
                                                <h5 className="fw-bold">Camera status</h5>
                                                <hr></hr>
                                                <div className="d-flex flex-row justify-content-start align-items-center">
                                                    <i className="bi bi-camera-video ms-2 me-3"></i>
                                                    <div className="d-flex flex-column flex-grow-1">
                                                        <span>Entrance 1</span>
                                                        <span style={{fontSize:"0.7em"}}>3 cameras</span>
                                                    </div>
                                                    <span className="badge rounded-pill" style={{
                                                        background: 'linear-gradient(180deg, #FE6969 0%, #F43C3C 100%)'
                                                    }}>2</span>
                                                </div>
                                                <hr></hr>
                                                <div className="d-flex flex-row justify-content-start align-items-center">
                                                    <i className="bi bi-camera-video ms-2 me-3"></i>
                                                    <div className="d-flex flex-column flex-grow-1">
                                                        <span>Entrance 2</span>
                                                        <span style={{fontSize:"0.7em"}}>4 cameras</span>
                                                    </div>
                                                    <span className="badge rounded-pill" style={{
                                                        background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)'
                                                    }}>2</span>
                                                </div>
                                                <hr></hr>
                                                <div className="d-flex flex-row justify-content-start align-items-center">
                                                    <i className="bi bi-camera-video ms-2 me-3"></i>
                                                    <div className="d-flex flex-column flex-grow-1">
                                                        <span>Emergency Exit</span>
                                                        <span style={{fontSize:"0.7em"}}>3 cameras</span>
                                                    </div>
                                                    <span className="badge rounded-pill" style={{
                                                        background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)'
                                                    }}>2</span>
                                                </div>
                                                <hr></hr>
                                                <div className="d-flex flex-row justify-content-start align-items-center">
                                                    <i className="bi bi-camera-video ms-2 me-3"></i>
                                                    <div className="d-flex flex-column flex-grow-1">
                                                        <span>Good Entrance</span>
                                                        <span style={{fontSize:"0.7em"}}>6 cameras</span>
                                                    </div>
                                                    <span className="badge rounded-pill" style={{
                                                        background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)'
                                                    }}>2</span>
                                                </div>
                                                <hr></hr>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {overviewOrBrowser===2 && (
                                    <div className="mt-4">
                                        <CameraGroup />
                                        <CameraGroup />
                                        <CameraGroup />
                                    </div>
                                )}
                            </div>    
                        )}
                        {/* Add POI End */}
                    </div>
                </div>
            </div>
        </div>
    );
}