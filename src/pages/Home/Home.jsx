import Header from '../../components/UI/header/header'
import Button from '../../components/UI/button_Home/buttonHome'
import { Link } from 'react-router-dom'
import Fox from '../../components/UI/Fox/Fox'
import { useState } from 'react'
import classes from '../../box.module.scss'


const Home = () => {
  const [Foxy, setFox] = useState('none')
  const [visibilityFox, setvisibilityFox] = useState(false)

  if(!window){
    setvisibilityFox(false)
  }

  const handleVisibilityFroggy = () =>{
    setvisibilityFox(true)
    setFox(visibilityFox ? 'none': '')
  }

  return (

    <div className={classes.background}>
      <div className={classes.box}>
        <div className={classes.box__page}>
        <Link to='/' onClick={handleVisibilityFroggy}>
          <Header/>
        </Link>
          <Link to='/menu'><Button/></Link>
        </div>
        <div className={classes.box__shadow}></div>
      </div>
      <Fox display={Foxy}/>
    </div>
  );
}

export default Home