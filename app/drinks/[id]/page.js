import React from 'react'
import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';


 const getSingleDrink = async(id) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`${url}${id}`)
    if(!response.ok)
    {
        throw new Error('Eror while fetching data');
    }
     return await response.json();

 }

const SingleDrink =  async ({params}) => {
    const drink = await getSingleDrink(params.id) ;
    const title = drink?.drinks[0]?.strDrink;
    const imgSrc = drink?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12 capitalize'>
        back to drinks
      </Link>
      
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div>
  )
}

export default SingleDrink
