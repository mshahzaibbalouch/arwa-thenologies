// Careers.js
import React from 'react';
import '../css/Careers.css';

function Careers() {
    return (
        <div>
            <div className="container">
                <table className="table ">
                    <thead >
                        <tr >
                            <th className='text-white th-bg' scope="col">Title</th>
                            <th className='text-white th-bg' scope="col">Locations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <a href='#'>
                            <tr>
                                <td>Software Development Engineer in Test</td>
                                <td>
                                    Lahore
                                    <span className="arrow-icon px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                        </svg>
                                    </span>
                                </td>
                            </tr>
                        </a>
                        <tr>
                            <td>Software Development Engineer in Test</td>
                            <td className='align-middle'>
                            Lahore
                                <span className="arrow-icon px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>Row 2, Cell 1</td>
                            <td>
                                Row 2, Cell 2
                                <span className="arrow-icon px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>Row 2, Cell 1</td>
                            <td>
                                Row 2, Cell 2
                                <span className="arrow-icon px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Careers;
