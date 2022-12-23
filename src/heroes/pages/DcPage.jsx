import React from 'react'
import { HeroList } from '../../auth/components/HeroList';

export const DcPage = () => {
  return (
    <>
      <h1>Comics</h1>
      <hr />
      <HeroList publisher='DC Comics' />
    </>
  )
}
