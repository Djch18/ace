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

const HomePage = () => {

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
            <Sidebar currentPage={'home'} />

            <div className='main-content-wrapper'>
                <Header />

                <div className='content-wrapper'>
                    <div className='data-items-container'>
                        <div className='data-item border rounded'>
                            <div className='circle bg-primary'>
                                <i className="fas fa-users"></i>
                            </div>
                            <div className='data-content'>
                                <p className='text-muted fw-semibold mb-1'>
                                    Total de Estudiantes
                                </p>
                                <h4 className='m-0'>1300</h4>
                            </div>
                        </div>

                        <div className='data-item border rounded'>
                            <div className='circle bg-success'>
                                <i className="fas fa-check"></i>
                            </div>
                            <div className='data-content'>
                                <p className='text-muted fw-semibold mb-1'>
                                    Estudiantes Sanos
                                </p>
                                <div className='data-numbers'>
                                    <h4 className='m-0'>1190</h4>
                                    <Badge bg="success">91.5%</Badge>
                                </div>
                            </div>
                        </div>

                        <div className='data-item border rounded'>
                            <div className='circle bg-warning'>
                                <i className="fas fa-warning"></i>
                            </div>
                            <div className='data-content'>
                                <p className='text-muted fw-semibold mb-1'>
                                    Estudiantes Vulnerables
                                </p>
                                <div className='data-numbers'>
                                    <h4 className='m-0'>73</h4>
                                    <Badge bg="warning">5.6%</Badge>
                                </div>
                            </div>
                        </div>

                        <div className='data-item border rounded'>
                            <div className='circle bg-danger'>
                                <i className="fas fa-xmark"></i>
                            </div>
                            <div className='data-content'>
                                <p className='text-muted fw-semibold mb-1'>
                                    Estudiantes en Riesgo
                                </p>
                                <div className='data-numbers'>
                                    <h4 className='m-0'>37</h4>
                                    <Badge bg="danger">2.8%</Badge>
                                </div>
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

export default HomePage