import React from 'react'
import a10 from "../../../../assets/image/devlopment-devloper-img/10.jpeg"
import a11 from "../../../../assets/image/devlopment-devloper-img/11.jpeg";
import a3 from "../../../../assets/image/devlopment-devloper-img/3.jpeg";
import a7 from "../../../../assets/image/devlopment-devloper-img/7.jpeg";
import pinkstar from "../../../../assets/image/devlopment-devloper-img/pink_star.png"
import { Card, CardContent } from '@mui/material';
import "../../Aiservices.css"

function Genrate_art() {
    let hire = [
        {
            render2: <img src={a3} className="rounded-full r_b_img" alt="Not Found" />,
            man_name1: 'Valentyn S.',
            dev_type: 'AI Art Creator',
            rate1: 'Top Rated',
            dollar_rate1: '$40/hr',
            indian_r1: '4.93/5 (6 jobs)',
            button: 'AI-Generative Art',
            button1: 'Stable Diffusion'
        },
        {
          render2: <img src={a10} className="rounded-full r_b_img" alt="Not Found" />,
          man_name1: 'Gabriel M.',
          dev_type: 'AI Art Creator',
          rate1: 'Top Rated Plus',
          dollar_rate1: '$70/hr',
          indian_r1: '5/5 (19 jobs)',
          button: 'Stable Diffusion',
          button1: 'Large Language Model'
        },
        {
          render2: <img src={a11} className="rounded-full r_b_img" alt="Not Found" />,
          man_name1: 'Gunjan B.',
          dev_type: 'AI Art Creator',
          rate1: 'Top Rated Plus',
          dollar_rate1: '$165/hr',
          indian_r1: '4.8/5 (2 jobs)',
          button: 'Generative AI',
          button1: 'NLP Tokenization'
        },
        {
          render2: <img src={a7} className="rounded-full r_b_img" alt="Not Found" />,
          man_name1: 'Vasyl S.',
          dev_type: 'AI Art Creator',
          rate1: 'Top Rated',
          dollar_rate1: '$100/hr',
          indian_r1: '4.98/5 (3 jobs)',
          button: 'Deep Learning',
          button1: 'Natural Language Processing'
        }
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

export default Genrate_art