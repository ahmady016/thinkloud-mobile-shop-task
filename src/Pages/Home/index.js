import React from 'react'

import SearchForm from './SearchForm'
import MobilesList from './MobilesList'
import MobileInfo from './MobileInfo'
import YearsChart from './YearsChart'
import BrandsChart from './BrandsChart'

import Grid from '@material-ui/core/Grid'

function Home() {
  return (
    <Grid container spacing={3}>
      <Grid item md={8} xs={12}>
        <SearchForm />
        <MobilesList />
        <MobileInfo />
      </Grid>
      <Grid item md={4} xs={12}>
        <YearsChart />
        <BrandsChart />
      </Grid>
    </Grid>
  )
}

export default Home
