import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Badge, Button, Col, Container, Form, Navbar, Row, Stack, Table } from 'react-bootstrap'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Bar, BarChart } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

import AutoSizer from 'react-virtualized-auto-sizer';

import { useStudentStore } from '../../hooks/useStudentStore';

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import '../../css/home/HomeGeneralStyles.css'

const RADIAN = Math.PI / 180;
const data_3 = [
    { name: 'A', value: 90, color: '#198754' },
    { name: 'B', value: 45, color: '#ffc107' },
    { name: 'C', value: 45, color: '#dc3545' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;

const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
        total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
        <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
        <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
    ];
};

const Student = () => {

    const location = useLocation();
    const student = location.state

    const { result, startLoadingStudentResult, } = useStudentStore();

    const value = (180 * result.score) / 100;

    const data_1 = [
        {
            "name": "Animo",
            "Estudiante": result.last_month_mood,
        },
        {
            "name": "Ansiedad",
            "Estudiante": result.anxiety,
        },
        {
            "name": "Autoestima",
            "Estudiante": result.self_esteem,
        },
        {
            "name": "Conducta",
            "Estudiante": result.behavioral_interest_changes,
        },
        {
            "name": "Depresión",
            "Estudiante": result.depression,
        },
        {
            "name": "Socialización",
            "Estudiante": result.social_relationships,
        },
    ]

    const data_2 = [
        {
            subject: 'Depresión',
            A: result.depression,
            B: 50,
            fullMark: 100,
        },
        {
            subject: 'Ansiedad',
            A: result.anxiety,
            B: 50,
            fullMark: 100,
        },
        {
            subject: 'Animo',
            A: result.last_month_mood,
            B: 50,
            fullMark: 100,
        },
        {
            subject: 'Conducta',
            A: result.behavioral_interest_changes,
            B: 50,
            fullMark: 100,
        },
        {
            subject: 'Socialización',
            A: result.social_relationships,
            B: 50,
            fullMark: 100,
        },
        {
            subject: 'Autoestima',
            A: result.self_esteem,
            B: 50,
            fullMark: 100,
        },
    ];


    useEffect(() => {
        startLoadingStudentResult(student.email);
    }, [])

    console.log(result)

    return (
        <div className="d-flex">
            <Sidebar currentPage={'students'} />

            <div className='main-content-wrapper'>
                <Header />

                <div className='content-wrapper'>
                    <div className='card-container border rounded'>
                        <h4 className='m-0'>Información General</h4>
                        <hr className='m-0' />

                        <div className='d-flex flex-column' style={{ gap: 12 }}>
                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Correo del estudiante: </h6>
                                <p className='m-0'>{student.email}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Sección: </h6>
                                <p className='m-0'>{student.grade}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Fecha de nacimiento: </h6>
                                <p className='m-0'>{student.birthday}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Sexo: </h6>
                                <p className='m-0'>{student.gender}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Canton de domicilio: </h6>
                                <p className='m-0'>{student.email}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Puntaje: </h6>
                                <p className='m-0'>{result.score}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Canton de domicilio: </h6>
                                <p className='m-0'>
                                    {
                                        result.state === 'HEALTHY' ? 'saludable'
                                            : result.state === 'VULNERABLE' ? 'vulnerable'
                                                : 'en peligro'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container border rounded'>
                        <h4 className='m-0'>Relaciones Familiares</h4>
                        <hr className='m-0' />

                        <div className='d-flex flex-column' style={{ gap: 12 }}>
                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Estado laboral: </h6>
                                <p className='m-0'>{result.employment_status}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Tipo de familia: </h6>
                                <p className='m-0'>{result.family_type}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Sección: </h6>
                                <p className='m-0'>{result.quality_relationships}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Fecha de nacimiento: </h6>
                                <p className='m-0'>{result.couple === '1' ? 'si' : 'no'}</p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container border rounded'>
                        <h4 className='m-0'>Desempeño Académico</h4>
                        <hr className='m-0' />

                        <div className='d-flex flex-column' style={{ gap: 12 }}>
                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Promedio académico: </h6>
                                <p className='m-0'>{result.average}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Materia desafiante: </h6>
                                <p className='m-0'>{result.more_difficult_subject}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Tiene adecuación:</h6>
                                <p className='m-0'>{result.adequacy === '1' ? 'si' : 'no'}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Técnica de aprendizaje: </h6>
                                <p className='m-0'>{result.learning_technique}</p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container border rounded'>
                        <h4 className='m-0'>Información Medica</h4>
                        <hr className='m-0' />

                        <div className='d-flex flex-column' style={{ gap: 12 }}>
                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Tiempo de comer favorito: </h6>
                                <p className='m-0'>{result.favorite_meal_time}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Peso: </h6>
                                <p className='m-0'>{result.weight}kg</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Altura: </h6>
                                <p className='m-0'>{result.height}cm</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Veces que come al dia: </h6>
                                <p className='m-0'>{result.eat_times_day}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Toma medicamentos:</h6>
                                <p className='m-0'>{result.take_medications === '1' ? 'si' : 'no'}</p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container border rounded'>
                        <h4 className='m-0'>Recomendaciones</h4>
                        <hr className='m-0' />

                        <div className='d-flex flex-column' style={{ gap: 12 }}>
                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Actividad extracurricular: </h6>
                                <p className='m-0'>{result.extracurricular_activity}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Comentario para mejorar:</h6>
                                <p className='m-0'>{result.comment_for_improvement}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Materias a mejorar: </h6>
                                <p className='m-0'>{result.subjects_to_improve}</p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container border rounded'>
                        <h4 className='m-0'>Puntaje por Area Evaluada</h4>
                        <hr className='m-0' />

                        <div className='d-flex flex-column' style={{ gap: 12 }}>
                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Autoestima: </h6>
                                <p className='m-0'>{result.self_esteem}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Relaciones sociales:</h6>
                                <p className='m-0'>{result.social_relationships}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Ansiedad: </h6>
                                <p className='m-0'>{result.anxiety}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Depresión: </h6>
                                <p className='m-0'>{result.depression}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Cambios de conducta: </h6>
                                <p className='m-0'>{result.behavioral_interest_changes}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Estado de animo: </h6>
                                <p className='m-0'>{result.last_month_mood}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Satisfacción (educación): </h6>
                                <p className='m-0'>{result.education}</p>
                            </div>

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                <h6 className='m-0' style={{ minWidth: 196 }}>Religiosidad: </h6>
                                <p className='m-0'>{result.religion}</p>
                            </div>
                        </div>
                    </div>

                    <div className='chart-grid-3'>
                        <div className='chart-card border rounded'>
                            <h6 className='m-0'>Puntajes</h6>
                            <div className='chart-container'>
                                <AutoSizer>
                                    {({ width, height }) =>
                                        <BarChart
                                            width={width}
                                            height={height}
                                            data={data_1}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="Estudiante" fill="#8884d8" />
                                        </BarChart>
                                    }
                                </AutoSizer>

                            </div>
                        </div>

                        <div className='chart-card border rounded'>
                            <h6>Estudiante vs Normal</h6>
                            <div className='chart-container'>
                                <AutoSizer>
                                    {({ width, height }) =>
                                        <RadarChart
                                            outerRadius={90}
                                            width={width}
                                            height={height}
                                            data={data_2}
                                        >
                                            <PolarGrid />
                                            <PolarAngleAxis dataKey="subject" />
                                            <PolarRadiusAxis angle={30} domain={[0, 150]} />
                                            <Radar name="Estudiante" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                            <Radar name="Normal" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                                            <Legend />
                                        </RadarChart>
                                    }
                                </AutoSizer>
                            </div>
                        </div>

                        <div className='chart-card border rounded'>
                            <h6>Puntaje Total del Estudiante</h6>
                            <div className='chart-container'>
                                <AutoSizer>
                                    {({ width, height }) =>
                                        <PieChart
                                            width={width}
                                            height={height}
                                        >
                                            <Pie
                                                dataKey="value"
                                                startAngle={180}
                                                endAngle={0}
                                                data={data_3}
                                                cx={cx}
                                                cy={cy}
                                                innerRadius={iR}
                                                outerRadius={oR}
                                                fill="#8884d8"
                                                stroke="none"
                                            >
                                                {data_3.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                            {needle(value, data_3, cx, cy, iR, oR, '#d0d000')}
                                        </PieChart>
                                    }
                                </AutoSizer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student