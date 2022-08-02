import React from "react";

// import RatingPage from "../components/RatingPage";

import { useNavigate } from "react-router-dom";

import theme from "../lib/theme";

import './Pages.css';

const NavItem = (props) => {
    return (
        <li className="nav-item mb-3" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            cursor: 'pointer'
        }}>
            <i className={props.iconName} style={{fontSize: '1.2rem'}}/>
            <span className="ms-3 flex-grow-1" style={{fontSize: '1.2rem'}}>{props.label}</span>
            {props.badge ? (
                <span className="badge rounded-pill" style={{
                    background: 'linear-gradient(180deg, #6989FE 0%, #3C64F4 100%)'
                }}>{props.badge}</span>
            ) : (
                <i className="bi bi-list" style={{fontSize: '1.4rem', color: '#aaa'}}/>
            )}
        </li>
    );
};


export default function DashboardPage(props) {
    
    const navigate = useNavigate();
    
    const handleRoute = (data) => {
        navigate('/'+data, {
            replace: true
        });
    };

    const [tabIndex, setTabIndex] = React.useState(1);

   
    return (
        <div style={{
            color:"#666"
        }}>
            {/* Header bar */}
            <div
                style={{
                    backgroundColor: theme.gray,
                    padding: '12px 12px',
                    display: 'flex !important',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                className="d-sm-none d-md-flex"
            >
                <div
                    style={{
                        backgroundImage: "url('/logo-text.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        width: 240,
                        height: 40,
                        cursor: 'pointer',
                    }}
                />
                <div className="input-group flex-nowrap ms-5" style={{flex: 1}}>
                    <span className="input-group-text"  style={{backgroundColor:"#fff"}}><i className="bi bi-search"/></span>
                    <input className="form-control" style={{borderLeft: 'none'}} placeholder="Search for stores and people..."/>
                </div>
                <div className="btn-group mx-4" style={{
                    background: '#eee',
                    padding: 3,
                    width:"300px"
                }}>
                    <button className="btn" style={{
                        background: tabIndex === 1 ? '#fff' : 'transparent',
                        border: 'none',
                    }} onClick={() => setTabIndex(1)}>Dashboard</button>
                    <button className="btn" style={{
                        background: tabIndex === 2 ? '#fff' : 'transparent',
                        border: 'none',
                    }} onClick={() => setTabIndex(2)}>Live View</button>
                </div>
                <div className="position-relative">
                    <button className="btn btn-icon" style={{
                        background: '#fff',
                        border: '1px solid #666'
                    }}>
                        <i className="bi bi-bell"></i>
                    </button>
                    <span style={{
                        background: 'linear-gradient(180deg, #6989FE 0%, #3C64F4 100%)'
                    }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                        8
                    </span>
                </div>
                <button className="btn btn-primary ms-4" style={{
                    background: 'linear-gradient(180deg, #6989FE 0%, #3C64F4 100%)'
                }}>
                    <i className="bi bi-chevron-left me-2"></i>
                    Support
                </button>
            </div>
            <div className="d-none d-sm-block d-md-none">
                Only on mobile
            </div>
            {/* Header bar end */}
            {/* Content */}
            {tabIndex === 1 && (
                <div className="p-4 ps-sm-0" style={{background: theme.lightGray}}>
                    <div className="row ms-3">
                        <div className="col-md-3 d-sm-none d-md-block p-3" style={{
                            background: '#fff',
                            borderRadius: 6
                        }}>
                            <h4 className="mb-1 fw-bold">Navigation</h4>
                            <hr className="mt-2" style={{borderColor: '#aaa', borderWidth: 2}} />
                            <div className="px-3">
                                <ul className="nav flex-column">
                                    <NavItem label="Dashboard" iconName="bi bi-house" />
                                    <NavItem label="Stores" iconName="bi bi-cart" badge={5} />
                                    <NavItem label="Person of Interest" iconName="bi bi-person" badge={10} onClick={()=>handleRoute('poi')}/>
                                    <NavItem label="My Reports" iconName="bi bi-file-text" />
                                    <NavItem label="Manage Users" iconName="bi bi-exclamation-triangle" />
                                    <NavItem label="Configuration" iconName="bi bi-gear" />
                                    <li className="nav-item mb-3" style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                    }}>
                                        <img src="/avatar.png" style={{
                                            width: 32,
                                            height: 32
                                        }} className="rounded-pill" />
                                        <div className="d-flex flex-column ms-3 my-3">
                                            <span style={{fontSize: '1rem'}}>Will Walters</span>
                                            <span style={{fontSize: '0.8rem'}}>Administrator</span>
                                        </div>
                                    </li>
                                    <NavItem label="Edit Profile" iconName="bi bi-house" />
                                    <NavItem label="Sign Out" iconName="bi bi-cart" />
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12- ps-4">
                            <div style={{
                                background: '#fff',
                                marginTop: '-1.5rem',
                                marginRight: '-1.5rem',
                                marginBottom: '-1.5rem',
                            }} className="p-4">
                                <div className="border row rounded">
                                    <div className="col-3 p-3">
                                        <h5 className="fw-bold">Most active stores</h5>
                                        <div className="d-flex flex-column mt-4">
                                            <div>
                                                <span className="fw-bold" style={{
                                                    fontSize: '1.4rem', color: '#333'
                                                }}>324</span>
                                                <span style={{
                                                    backgroundColor:'rgba(7, 162, 135, 0.15)',
                                                    borderRadius:"8px",
                                                }} className="ms-3 p-1">14.6% +</span>
                                            </div>
                                            <span>Matches this week</span>
                                        </div>
                                        <ul className="nav flex-column">
                                            <li className="nav-item mt-5 mb-3" style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                            }}>
                                                <span className="custom-dot"></span>
                                                <span className="flex-grow-1">Longridge</span>
                                                <span>43</span>
                                            </li>
                                            <li className="nav-item mb-3" style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                cursor: 'pointer'
                                            }}>
                                                <span className="custom-dot"></span>
                                                <span className="flex-grow-1">Lancaster</span>
                                                <span>34</span>
                                            </li>
                                            <li className="nav-item mb-3" style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                cursor: 'pointer'
                                            }}>
                                                <span className="custom-dot"></span>
                                                <span className="flex-grow-1">knutsford</span>
                                                <span>27</span>
                                            </li>
                                            <li className="nav-item mb-3" style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                cursor: 'pointer'
                                            }}>
                                                <span className="custom-dot"></span>
                                                <span className="flex-grow-1">Hale</span>
                                                <span>12</span>
                                            </li>
                                            <li className="nav-item" style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                cursor: 'pointer'
                                            }}>
                                                <span className="custom-dot"></span>
                                                <span className="flex-grow-1">Other stores</span>
                                                <span>221</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-9">
                                        <img src="/landscape_map.jpg" style={{
                                            width:'100%',
                                            height:'380px',
                                        }}/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-6 ps-0 pe-2">
                                                <div className="rounded border p-3">
                                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                                        <span>Total Matches</span>
                                                        <span className="" style={{
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
                                            </div>
                                            <div className="col-6 ps-2 pe-0">
                                                <div className="rounded p-3" style={{
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
                                        <div className="row mt-3">
                                            <div className="col-12 border p-3 rounded">
                                                <span>Total Incidents</span>
                                                <span className="" style={{
                                                    fontSize:"0.8rem"
                                                }}><i className="bi bi-chevron-down"></i></span>
                                                <div className="mt-2">
                                                    <span className="fw-bold" style={{
                                                        fontSize: '1.4rem', color: '#333'
                                                    }}>256</span>
                                                    <span style={{
                                                        backgroundColor:'rgba(7, 162, 135, 0.15)',
                                                        borderRadius:"8px",
                                                    }} className="ms-3 p-1">14.6% +</span>
                                                </div>
                                                <div className="mt-3" style={{height:"100px"}}>
                                                    chart diagram
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border rounded" style={{
                                            height:"55%"
                                        }}>
                                        </div>  
                                        <div style={{height:"5%" }}></div> 
                                        <div className="border rounded" style={{
                                            height:"40%"
                                        }}>
                                        </div>           
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {tabIndex === 2 && (
                <div>
                    <div
                        style={{
                            backgroundColor: "#fff",
                            padding: '12px 12px',
                            display: 'flex !important',
                            flexDirection: 'row',
                            alignItems: 'center',
                            height:"80px",
                            boxShadow:"initial"
                        }}
                        className="d-sm-none d-md-flex justify-content-between align-items-center"
                    >
                        <h2
                            style={{
                                color:"#666",
                                fontWeight:"bold",
                                cursor: 'pointer',
                                width:"300px"
                            }} className="p-3 mt-2"
                        >Live View</h2>
                        
                        
                        <div className="mx-4 d-flex flex-row" style={{
                            background: '#eee',
                        }}>
                            <div className="input-group">
                                <span className="input-group-text"><i className="bi bi-search" /></span>
                                <input type="text" className="form-control" placeholder="Search name here" style={{
                                    borderLeft: 'none',
                                    backgroundColor: '#e9ecef',
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0
                                }} />
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" style={{
                                    background: '#e9ecef',
                                    borderRadius: 0,
                                    borderLeftWidth: 0,
                                    borderRightWidth: 0,
                                    color: '#666',
                                    borderColor: '#ced4da',
                                }} data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-search me-2"></i>
                                    <span className="me-2">All Stores</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" style={{
                                    background: '#e9ecef',
                                    borderRadius: 0,
                                    color: '#666',
                                    borderLeftWidth: 0,
                                    borderRightWidth: 0,
                                    borderColor: '#ced4da',
                                }} data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-search me-2"></i>
                                    <span className="me-2">All Stores</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" style={{
                                    background: '#e9ecef',
                                    borderRadius: 0,
                                    borderLeftWidth: 0,
                                    color: '#666',
                                    borderColor: '#ced4da',
                                }} data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-search me-2"></i>
                                    <span className="me-2">All Stores</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <button className="btn btn-primary px-4" style={{
                                background: 'linear-gradient(180deg, #6989FE 0%, #3C64F4 100%)',
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                            }}>
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <img src="/portriot_map.jpg" style={{
                                width:'100%',
                                height:'1000px',
                            }}/>
                        </div>
                        <div className="col-9 p-4" style={{backgroundColor:theme.backgroundGray}}>
                            <div className="border rounded" style={{
                                width:"100%",
                                height:"80px"
                            }}>
                                time diagram
                            </div>
                            <h3 className="mt-4" style={{fontWeight:"bold"}}>Live matches</h3>
                            <p>Click on a row to expand</p>
                            <div>
                                <table className="table table-white table-hover">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-file-person"></i></th>
                                            <th scope="col">POI Number</th>
                                            <th scope="col">Date Time</th>
                                            <th scope="col">Store</th>
                                            <th scope="col">Confidence</th>
                                            <th scope="col">Threat Level</th>
                                            <th scope="col">Threat Type</th>
                                        </tr>
                                    </thead>
                                    <tbody  className="mt-5">
                                        <tr onClick={()=>handleRoute('match/analysis')}>
                                            <td><i className="bi bi-file-person"></i></td>
                                            <td scope="col">
                                                <img src="/avatar.png" style={{
                                                    width: 32,
                                                    height: 32
                                                }} className="rounded me-1" />
                                                Name or Number
                                            </td>
                                            <td scope="col">10:01 01-01-21</td>
                                            <td scope="col">Knutsford</td>
                                            <td scope="col">0.2993</td>
                                            <td scope="col"></td>
                                            <td scope="col">
                                                <span style={{color:"#07A287", backgroundColor:"rgba(7, 162, 135, 0.08)", borderRadius:"1em", padding:"1"}}>Knife</span>
                                                <span style={{color:"#F43C3C", backgroundColor:"rgba(255, 75, 110, 0.08)", borderRadius:"1em", padding:"1", marginLeft:"5px"}}>Violent</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="bi bi-file-person"></i></td>
                                            <td scope="col">
                                                <img src="/avatar.png" style={{
                                                    width: 32,
                                                    height: 32
                                                }} className="rounded me-1" />
                                                Name or Number
                                            </td>
                                            <td scope="col">10:01 01-01-21</td>
                                            <td scope="col">Knutsford</td>
                                            <td scope="col">0.2993</td>
                                            <td scope="col"></td>
                                            <td scope="col">
                                                <span style={{color:"#07A287", backgroundColor:"rgba(7, 162, 135, 0.08)", borderRadius:"1em", padding:"1"}}>Knife</span>
                                                <span style={{color:"#F43C3C", backgroundColor:"rgba(255, 75, 110, 0.08)", borderRadius:"1em", padding:"1", marginLeft:"5px"}}>Violent</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="bi bi-file-person"></i></td>
                                            <td scope="col">
                                                <img src="/avatar.png" style={{
                                                    width: 32,
                                                    height: 32
                                                }} className="rounded me-1" />
                                                Name or Number
                                            </td>
                                            <td scope="col">10:01 01-01-21</td>
                                            <td scope="col">Knutsford</td>
                                            <td scope="col">0.2993</td>
                                            <td scope="col"></td>
                                            <td scope="col">
                                                <span style={{color:"#07A287", backgroundColor:"rgba(7, 162, 135, 0.08)", borderRadius:"1em", padding:"1"}}>Knife</span>
                                                <span style={{color:"#F43C3C", backgroundColor:"rgba(255, 75, 110, 0.08)", borderRadius:"1em", padding:"1", marginLeft:"5px"}}>Violent</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="bi bi-file-person"></i></td>
                                            <td scope="col">
                                                <img src="/avatar.png" style={{
                                                    width: 32,
                                                    height: 32
                                                }} className="rounded me-1" />
                                                Name or Number
                                            </td>
                                            <td scope="col">10:01 01-01-21</td>
                                            <td scope="col">Knutsford</td>
                                            <td scope="col">0.2993</td>
                                            <td scope="col"></td>
                                            <td scope="col">
                                                <span style={{color:"#07A287", backgroundColor:"rgba(7, 162, 135, 0.08)", borderRadius:"1em", padding:"1"}}>Knife</span>
                                                <span style={{color:"#F43C3C", backgroundColor:"rgba(255, 75, 110, 0.08)", borderRadius:"1em", padding:"1", marginLeft:"5px"}}>Violent</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="bi bi-file-person"></i></td>
                                            <td scope="col">
                                                <img src="/avatar.png" style={{
                                                    width: 32,
                                                    height: 32
                                                }} className="rounded me-1" />
                                                Name or Number
                                            </td>
                                            <td scope="col">10:01 01-01-21</td>
                                            <td scope="col">Knutsford</td>
                                            <td scope="col">0.2993</td>
                                            <td scope="col"></td>
                                            <td scope="col">
                                                <span style={{color:"#07A287", backgroundColor:"rgba(7, 162, 135, 0.08)", borderRadius:"1em", padding:"1"}}>Knife</span>
                                                <span style={{color:"#F43C3C", backgroundColor:"rgba(255, 75, 110, 0.08)", borderRadius:"1em", padding:"1", marginLeft:"5px"}}>Violent</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="bi bi-file-person"></i></td>
                                            <td scope="col">
                                                <img src="/avatar.png" style={{
                                                    width: 32,
                                                    height: 32
                                                }} className="rounded me-1" />
                                                Name or Number
                                            </td>
                                            <td scope="col">10:01 01-01-21</td>
                                            <td scope="col">Knutsford</td>
                                            <td scope="col">0.2993</td>
                                            <td scope="col"></td>
                                            <td scope="col">
                                                <span style={{color:"#07A287", backgroundColor:"rgba(7, 162, 135, 0.08)", borderRadius:"1em", padding:"1"}}>Knife</span>
                                                <span style={{color:"#F43C3C", backgroundColor:"rgba(255, 75, 110, 0.08)", borderRadius:"1em", padding:"1", marginLeft:"5px"}}>Violent</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="bi bi-file-person"></i></td>
                                            <td scope="col">
                                                <img src="/avatar.png" style={{
                                                    width: 32,
                                                    height: 32
                                                }} className="rounded me-1" />
                                                Name or Number
                                            </td>
                                            <td scope="col">10:01 01-01-21</td>
                                            <td scope="col">Knutsford</td>
                                            <td scope="col">0.2993</td>
                                            <td scope="col"></td>
                                            <td scope="col">
                                                <span style={{color:"#07A287", backgroundColor:"rgba(7, 162, 135, 0.08)", borderRadius:"1em", padding:"1"}}>Knife</span>
                                                <span style={{color:"#F43C3C", backgroundColor:"rgba(255, 75, 110, 0.08)", borderRadius:"1em", padding:"1", marginLeft:"5px"}}>Violent</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="bi bi-file-person"></i></td>
                                            <td scope="col">
                                                <img src="/avatar.png" style={{
                                                    width: 32,
                                                    height: 32
                                                }} className="rounded me-1" />
                                                Name or Number
                                            </td>
                                            <td scope="col">10:01 01-01-21</td>
                                            <td scope="col">Knutsford</td>
                                            <td scope="col">0.2993</td>
                                            <td scope="col"></td>
                                            <td scope="col">
                                                <span style={{color:"#07A287", backgroundColor:"rgba(7, 162, 135, 0.08)", borderRadius:"1em", padding:"1"}}>Knife</span>
                                                <span style={{color:"#F43C3C", backgroundColor:"rgba(255, 75, 110, 0.08)", borderRadius:"1em", padding:"1", marginLeft:"5px"}}>Violent</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="bi bi-file-person"></i></td>
                                            <td scope="col">
                                                <img src="/avatar.png" style={{
                                                    width: 32,
                                                    height: 32
                                                }} className="rounded me-1" />
                                                Name or Number
                                            </td>
                                            <td scope="col">10:01 01-01-21</td>
                                            <td scope="col">Knutsford</td>
                                            <td scope="col">0.2993</td>
                                            <td scope="col"></td>
                                            <td scope="col">
                                                <span style={{color:"#07A287", backgroundColor:"rgba(7, 162, 135, 0.08)", borderRadius:"1em", padding:"1"}}>Knife</span>
                                                <span style={{color:"#F43C3C", backgroundColor:"rgba(255, 75, 110, 0.08)", borderRadius:"1em", padding:"1", marginLeft:"5px"}}>Violent</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="bi bi-file-person"></i></td>
                                            <td scope="col">
                                                <img src="/avatar.png" style={{
                                                    width: 32,
                                                    height: 32
                                                }} className="rounded me-1" />
                                                Name or Number
                                            </td>
                                            <td scope="col">10:01 01-01-21</td>
                                            <td scope="col">Knutsford</td>
                                            <td scope="col">0.2993</td>
                                            <td scope="col"></td>
                                            <td scope="col">
                                                <span style={{color:"#07A287", backgroundColor:"rgba(7, 162, 135, 0.08)", borderRadius:"1em", padding:"1"}}>Knife</span>
                                                <span style={{color:"#F43C3C", backgroundColor:"rgba(255, 75, 110, 0.08)", borderRadius:"1em", padding:"1", marginLeft:"5px"}}>Violent</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="bi bi-file-person"></i></td>
                                            <td scope="col">
                                                <img src="/avatar.png" style={{
                                                    width: 32,
                                                    height: 32
                                                }} className="rounded me-1" />
                                                Name or Number
                                            </td>
                                            <td scope="col">10:01 01-01-21</td>
                                            <td scope="col">Knutsford</td>
                                            <td scope="col">0.2993</td>
                                            <td scope="col"></td>
                                            <td scope="col">
                                                <span style={{color:"#07A287", backgroundColor:"rgba(7, 162, 135, 0.08)", borderRadius:"1em", padding:"1"}}>Knife</span>
                                                <span style={{color:"#F43C3C", backgroundColor:"rgba(255, 75, 110, 0.08)", borderRadius:"1em", padding:"1", marginLeft:"5px"}}>Violent</span></td>
                                        </tr>
                                    </tbody>
                                </table>    
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-sm-block d-md-none">
                        Only on mobile
                    </div>
                </div>
            )}
        </div>
    );
}