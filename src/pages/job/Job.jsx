import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Job = () => {
    const { title } = useParams();

    const people = useSelector((state) => state.route.jobs[title]);

    if (!people) {
        return <div>Job not found</div>;
    }

    const skillList = people.skills?.map((skill, index) => (
        <li key={index}>{skill}</li>
    ));

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>소개</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>이름 :</th>
                        <td>{people.name}</td>
                    </tr>
                    <tr>
                        <th>기술 :</th>
                        <td>
                            <ul>{skillList}</ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to={"/intro"}>소개페이지로 이동</Link>
        </div>
    );
};

export default Job;
