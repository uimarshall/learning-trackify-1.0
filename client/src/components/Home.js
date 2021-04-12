import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// import { useParams } from 'react-router';
import { Link, useParams } from 'react-router-dom';
import Time from '../helpers/Time';
import Statistics from './Statistics';
import MySubjects from './MyCourses';
import '../assets/css/Home.css';

export default function Home() {
  const { date } = useParams();
  const dateToday = date || Time.today();
  return (
    <div className="bg-gray full-screen">
      <div className="mx-auto row">
        <div className="col-12 d-flex justify-content-around mt-2">
          <Link to={`/home/${Time.yesterday(dateToday)}`}>
            <FaAngleLeft />
          </Link>
          <div className="text-muted"><b>{Time.format(dateToday)}</b></div>
          <Link to={`/home/${Time.tomorrow(dateToday)}`}>
            <FaAngleRight />
          </Link>
        </div>
        <div className="col-12">
            <Statistics />
        </div>
      
        <div className="col-12">
           <MySubjects date={dateToday} />
        </div>
       
      </div>
     
    </div>
  );
}
