import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Left from '../Homepage/components/Left'
import Right from '../Homepage/components/Right'
import Homepage from '../Homepage/Homepage'
import Profile from '../Profile/Profile'
import Search from '../Search/Search'

const Authenticated = () => {
  return (
    <div className="grid grid-cols-12  md:gap-5 max-w-6xl m-auto w-full text-white p-2">

        <Left/>

        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/profile/:id" component={Profile}/>
            <Route exact path="/search" component={Search}/>
        </Switch>

        <Right/>
    
    </div>
  )
}

export default Authenticated