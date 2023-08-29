import { useEffect, useState } from 'react';

import { Badge, Col, Container, Navbar, Row, Tooltip } from 'react-bootstrap'
import { useResultStore } from '../../hooks/useResultStore';

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    BarChart,
    Bar
} from "recharts";
import AutoSizer from 'react-virtualized-auto-sizer';

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import '../../css/home/HomeGeneralStyles.css'

const HomePage = () => {

    const { countResults, startLoadingHomeCountResults } = useResultStore();

    useEffect(() => {
        startLoadingHomeCountResults();
    }, [])

    const data = [
        {
            "name": "Séptimo",
            "Sanos": countResults.countResultHealthy7 | 0,
            "Vulnerables": countResults.countResultVulnerable7 | 0,
            "En riesgo": countResults.countResultDanger7 | 0,
        },
        {
            "name": "Octavo",
            "Sanos": countResults.countResultHealthy8 | 0,
            "Vulnerables": countResults.countResultVulnerable8 | 0,
            "En riesgo": countResults.countResultDanger8 | 0,
        },
        {
            "name": "Noveno",
            "Sanos": countResults.countResultHealthy9 | 0,
            "Vulnerables": countResults.countResultVulnerable9 | 0,
            "En riesgo": countResults.countResultDanger9 | 0,
        },
        {
            "name": "Décimo",
            "Sanos": countResults.countResultHealthy10 | 0,
            "Vulnerables": countResults.countResultVulnerable10 | 0,
            "En riesgo": countResults.countResultDanger10 | 0,
        },
        {
            "name": "Undécimo",
            "Sanos": countResults.countResultHealthy11 | 0,
            "Vulnerables": countResults.countResultVulnerable11 | 0,
            "En riesgo": countResults.countResultDanger11 | 0,
        },
        {
            "name": "Duodecimo",
            "Sanos": countResults.countResultHealthy12 | 0,
            "Vulnerables": countResults.countResultVulnerable12 | 0,
            "En riesgo": countResults.countResultDanger12 | 0,
        },
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
                                <h4 className='m-0'>{countResults.count}</h4>
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
                                    <h4 className='m-0'>{countResults.resultHealthy}</h4>
                                    <Badge bg="success">{100 * countResults.resultHealthy / countResults.count}%</Badge>
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
                                    <h4 className='m-0'>{countResults.resultVulnerable}</h4>
                                    <Badge bg="warning">{100 * countResults.resultVulnerable / countResults.count}%</Badge>
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
                                    <h4 className='m-0'>{countResults.resultDanger}</h4>
                                    <Badge bg="danger">{100 * countResults.resultDanger / countResults.count}%</Badge>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='chart-card border rounded'>
                        <h4>General</h4>
                        <div className='chart-container'>
                            <AutoSizer>
                                {({ width, height }) =>
                                    <BarChart
                                        width={width}
                                        height={height}
                                        data={data}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="Sanos" fill="#198754" />
                                        <Bar dataKey="Vulnerables" fill="#ffc107" />
                                        <Bar dataKey="En riesgo" fill="#dc3545" />
                                    </BarChart>
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