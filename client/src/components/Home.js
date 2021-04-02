import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// import { useParams } from 'react-router';
import { Link, useParams } from 'react-router-dom';
import Time from '../helpers/Time';
import Statistics from './Statistics';
import MySubjects from './MyCourses';

export default function Home() {
  const { date } = useParams();
  const dateToday = date || Time.today();
  return (
    <div className="bg-gray full-screen">
      <div className="bg-white row">
        <div className="home-date">
          <Link to={`/home/${Time.yesterday(dateToday)}`}>
            <FaAngleLeft />
          </Link>
          <div><b>{Time.format(dateToday)}</b></div>
          <Link to={`/home/${Time.tomorrow(dateToday)}`}>
            <FaAngleRight />
          </Link>
        </div>
        <Statistics />
      </div>
      <MySubjects date={dateToday} />
    </div>
  );
}
