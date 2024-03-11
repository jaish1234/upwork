import React from 'react'
import a2 from "../../../../assets/image/devlopment-devloper-img/2.jpeg"
import a7 from "../../../../assets/image/devlopment-devloper-img/7.jpeg";
import a8 from "../../../../assets/image/devlopment-devloper-img/8.jpeg";
import a9 from "../../../../assets/image/devlopment-devloper-img/9.jpeg";
import pinkstar from "../../../../assets/image/devlopment-devloper-img/pink_star.png"
import { Card, CardContent } from '@mui/material';
import "../../Aiservices.css"

function Data_annotation() {
    let hire = [
        {
            render2: <img src={a2} className="rounded-full r_b_img" alt="Not Found" />,
            man_name1: 'Sadam H.',
            dev_type: 'Data Annotator',
            rate1: 'Top Rated',
            dollar_rate1: '$6/hr',
            indian_r1: '4.98/5 (30 jobs)',
            button: 'Image Processing',
            button1: 'Machine Learning'
          },
        {
          render2: <img src={a7} className="rounded-full r_b_img" alt="Not Found" />,
          man_name1: 'Ahmad H.',
          dev_type: 'Data Annotator',
          rate1: 'Top Rated',
          dollar_rate1: '$5/hr',
          indian_r1: '5/5 (5 jobs)',
          button: 'Image Processing',
          button1: 'Data Entry'
        },
        {
          render2: <img src={a8} className="rounded-full r_b_img" alt="Not Found" />,
          man_name1: 'Teddy Q.',
          dev_type: 'Data Annotator',
          rate1: 'Top Rated plus',
          dollar_rate1: '$5/hr',
          indian_r1: '4.81/5 (11 jobs)',
          button: 'Microsoft Office',
          button1: 'Google Docs'
        },
        {
            render2: <img src={a9} className="rounded-full r_b_img" alt="Not Found" />,
            man_name1: 'Saravanan N.',
            dev_type: 'Data Annotator',
            rate1: 'Top Rated',
            dollar_rate1: '$7.5/hr',
            indian_r1: '4.85/5 (12 jobs)',
            button: 'Image Processing',
            button1: 'Data Science'
          },
      ]

  return (
    <>
        <div className='expor_business'>  
          {hire.map((hi) => (
            <Card className='business' sx={{borderRadius:'0.8rem'}}>
              <CardContent>
                <p className='bus_img'>{hi.render2}</p>
                <p className='man_name'>{hi.man_name1}</p>
                <p className='sm'>{hi.dev_type}</p>
                <div className='flex justify-evenly items-center my-3'>
                  <img src={pinkstar} className='w-7 pink_star' alt='Not found' />
                  <p className='sm'>{hi.rate1}</p>
                  <p className='d_rate sm'>{hi.dollar_rate1}</p>
                </div>
                <div className='flex ml-16 mb-5 text-fcolor card_star'>
                  <span class="material-symbols-outlined">star</span>
                  &nbsp;<p>{hi.indian_r1}</p>
                </div>
                <button type='button' className='hi_button'>{hi.button}</button>
                <button type='button' className='hi_button mt-2'>{hi.button1}</button>
                <button className='book_but' type='button'>View Profile</button>
                </CardContent>
            </Card>
          ))}
        </div> 


        {/* responsive 425 screen  */}
        <div className='re_card'>
            {hire.map((b1) => (
              <Card className='mt-7 p-10'>
                <div className='flex items-center'>
                  <p>{b1.render2}</p>
                  <p className='text-5xl ml-14'>{b1.man_name1}</p>
                </div>
                <div className='flex space-x-56 mt-10 items-center px-7'>
                  <p className='text-5xl'>AI Consultant</p>
                  <div className='flex items-center'>
                    <img src={pinkstar} className='w-7 pink_star' alt='Not Found'/>
                    <p className='text-5xl'>{b1.rate1}</p>
                  </div>
                </div>
                <div className='flex items-center mt-14 space-x-56 px-7'>
                  <p className='text-5xl'>{b1.dollar_rate1}</p>
                  <div className='flex items-center text-5xl pown'>
                    <span class="material-symbols-outlined">star</span>
                    <p>{b1.indian_r1}</p>
                  </div>
                </div>
                <button type='button' className='text-5xl bg-tab rounded-full py-5 px-8 mt-10'>{b1.button}</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type='button' className='text-5xl bg-tab rounded-full py-5 px-8'>{b1.button1}</button>
                <button type='button' className='text-7xl border-lime-600 border-2 rounded-full p-5 px-56 mx-32 my-9'>View Profile</button>
              </Card>
            ))}
          </div>
    </>
  )
}

export default Data_annotation