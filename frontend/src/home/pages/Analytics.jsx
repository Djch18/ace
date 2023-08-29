import { Badge, Col, Container, Navbar, Row } from 'react-bootstrap'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    LineChart,
    Line,
    Legend
} from "recharts";
import AutoSizer from 'react-virtualized-auto-sizer';

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import '../../css/home/HomeGeneralStyles.css'

const Analytics = () => {

    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    return (
        <div className="d-flex">
            <Sidebar currentPage={'analytics'}/>

            <div className='main-content-wrapper'>
                <Header />

                <div className='content-wrapper'>
                    {/* <h2 className='m-0 mt-4'>Analítica</h2> */}

                    <div className='chart-grid-3'>
                        <div className='chart-card border rounded'>
                            <h6 className='m-0'>General</h6>
                            <div className='chart-container'>
                                <AutoSizer>
                                    {({ width, height }) =>
                                        <LineChart
                                            width={width}
                                            height={height}
                                            data={data}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Legend />
                                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    }
                                </AutoSizer>
                            </div>
                        </div>

                        <div className='chart-card border rounded'>
                            <h6>General</h6>
                            <div className='chart-container'>
                                <AutoSizer>
                                    {({ width, height }) =>
                                        <LineChart
                                            width={width}
                                            height={height}
                                            data={data}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Legend />
                                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    }
                                </AutoSizer>
                            </div>
                        </div>

                        <div className='chart-card border rounded'>
                            <h6>General</h6>
                            <div className='chart-container'>
                                <AutoSizer>
                                    {({ width, height }) =>
                                        <LineChart
                                            width={width}
                                            height={height}
                                            data={data}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Legend />
                                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    }
                                </AutoSizer>
                            </div>
                        </div>
                    </div>

                    <div className='chart-grid-2'>
                        <div className='chart-card border rounded'>
                            <h5>General</h5>
                            <div className='chart-container'>
                                <AutoSizer>
                                    {({ width, height }) =>
                                        <LineChart
                                            width={width}
                                            height={height}
                                            data={data}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Legend />
                                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    }
                                </AutoSizer>
                            </div>
                        </div>

                        <div className='chart-card border rounded'>
                            <h5>General</h5>
                            <div className='chart-container'>
                                <AutoSizer>
                                    {({ width, height }) =>
                                        <LineChart
                                            width={width}
                                            height={height}
                                            data={data}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Legend />
                                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    }
                                </AutoSizer>
                            </div>
                        </div>
                    </div>

                    <div className='chart-card border rounded'>
                        <h4>General</h4>
                        <div className='chart-container'>
                            <AutoSizer>
                                {({ width, height }) =>
                                    <LineChart
                                        width={width}
                                        height={height}
                                        data={data}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Legend />
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    </LineChart>
                                }
                            </AutoSizer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics