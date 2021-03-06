import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
     const[{basket,user}, dispatch] = useStateValue();

     const handleAuthentication = () => {
         if (user){
                auth.signOut();
         }
     }

    return (
        <div className='header'> 
          <Link to='/'>
          <img 
                className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''>

            </img>
            
              </Link>  
           
            <div  className='header__optionAddress'>
             
                <LocationOnIcon/>
     
                 <span className= 'headeer__optionLineOne'>Hello </span>

                    <span className= 'headeer__optionLineThree'>Select your Address </span>
             
                 
            </div>
                <div
            
                    className='header__search'> 
                    <input className='header__searchInput' type='text'/>

                    <SearchIcon className= 'header__searchIcon'/> 

                </div> 
               
               <div className="header__nav">

                    <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className= "header__option">
                             <span className= 'headeer__optionLineOne'>Hello {!user? "Guest": user.email} </span>

                             <span className= 'headeer__optionLineTwo'>{user? 'Sign Out':'Sign In'} </span>

                     </div>
                     </Link>  
                     <div className= "header__option">
                            <span className= 'headeer__optionLineOne'>Returns  </span>
                            <span className= 'headeer__optionLineTwo'>& orders </span>
                      </div>
                        <div className= "header__option">
                            <span className= 'headeer__optionLineOne'>Your </span>

                            <span className= 'headeer__optionLineTwo'>Prime </span>

                        </div>  
                            <Link to='/checkout'>
                            <div className= "header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className= 'header__optionLineTwo header__basket'>
                                {basket?.length}
                                </span>
                                </div>  
                              </Link>   
               </div>
               
         </div>
    )
}

export default Header

