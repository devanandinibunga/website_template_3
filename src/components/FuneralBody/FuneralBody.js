import React from 'react'
import { funeralcontext,funeralNewsData,funeralObituariesData,funeralPlansData,funeralServicesData } from '../FuneralDataContext/FuneralDataContext'
import { CoverPage } from '../CoverPage/CoverPage'
import { FuneralHome } from '../FuneralHome/FuneralHome'
import { FuneralNews } from '../FuneralNews/FuneralNews'
import { FuneralObituaries } from '../FuneralObituaries/FuneralObituaries'
import { FuneralPlans } from '../FuneralPlans/FuneralPlans'
import { FuneralServices } from '../FuneralServices/FuneralServices'
import { ViewPlan } from '../ViewPlan/ViewPlan'

export const FuneralBody = () => {
  return (
    <>
       <CoverPage/> 
       <funeralcontext.Provider value={{funeralNewsData,funeralObituariesData,funeralPlansData,funeralServicesData}}>
          <FuneralPlans/>
          <FuneralServices/>
          <FuneralHome/>
          <ViewPlan/>
          <FuneralObituaries/>
          <FuneralNews/>
       </funeralcontext.Provider>
    </>
    )
}
