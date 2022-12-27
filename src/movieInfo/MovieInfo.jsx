import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./MovieInfo.css";
import {useParams} from "react-router-dom";

const MovieInfo = () => {

  const [data, setData] = useState([])

  const [persons, setPersons] = useState([])

  const {id}= useParams();

    useEffect(() => {

      let fetchData = async () => {
  
        let response = await axios.get(`https://api.tvmaze.com/shows/${id}`)
  
  
  
        console.log(response.data, 'show')
  
        setData(response.data)
  
      }
  
      fetchData()
  
    }, [])
  
  
  
  
    useEffect(() => {
  
      let person = async () => {
  
        let response = await axios.get(`https://api.tvmaze.com/shows/${id}?embed=cast`)
  
        console.log(response.data, 'bvcftgvj');
        setPersons(response.data);
  
      }
  
      person()
  
    }, [])


  return (
    <div className='movie_container'>

      <h1 className='hcolor'>TV Bland</h1>

      <div>

        <div className='detailcard'>

        <img src={data?.image?.medium} className='blendimage' />

        <div className='rate'>

       <p className='number'>{data?.rating?.average / 2}⭐</p>

        </div>

       <div className='summary'>

        <h1 className='movie_name'>{data.name}</h1>

        <p style={{marginBottom:'20px'}} id='text'>{data.summary?.replaceAll("<b>","").replaceAll("</b>","").replaceAll("<p>","").replaceAll("</p>","")}</p>

        </div>

        </div>

        <div className='crew'>

        <h2 id='head2'>Show info</h2>

        <table className='table' id='info'>

          <tbody>

            <tr>

              <td> <p className='para'>Streamed on:- </p></td>

              <td>{data?.network?.name}</td>

            </tr>

            <tr>

              <td> <p className='para'>Schedule:- </p></td>

              <td>{data?.schedule?.days}</td>

            </tr>

            <tr>

              <td> <p className='para'>Status:-</p></td>

              <td>{data?.status}</td>

            </tr>

            <tr>

              <td><p className='para'>Genres:- </p> </td>

              <td> {data?.genres?.join(",")}</td>

            </tr>

          </tbody>

        </table>

        </div>

      </div>

      <div className='starring'>

      <div className='starr'>

        <h2 id='head3'>Starring</h2>

        {persons?._embedded?.cast?.map((item, index) => {

           return (

           <div key={index} className='actors'>

              <img src={item?.person?.image?.medium} className='actor_pic'  />

              <p className='actor_name'>{item?.person?.name}&nbsp;as&nbsp;<strong>{item?.character?.name}</strong></p>

           </div>

           )

        })}

        </div>

       </div>

    </div>
  )
}

export default MovieInfo;
