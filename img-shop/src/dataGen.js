import React from 'react'
import Faker from 'faker'

const products = [...Array(20)].map(()=>{
    id:Faker.datatype.uuid()
})
console.log(products)

export const dataGen = () => {
  return (
    <>
    </>
  )
}
