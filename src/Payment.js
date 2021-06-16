import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Payment() {

    const [{basket, user}, dispatch]= useStateValue();


    return (
        <div className='payment'>.
            <div className='paymentContainer'>

                     {/* payment section : Delivery Address */}
                    
                     <div className='payment__section'>

                         <div className='payment__title'>
                             <h3>Delivery Address</h3>
                         </div>
                         <div className='payment__address'>

                             <p>{user?.email}</p>
                             <p> 123 rue react </p>
                             <p>Montreal Quebec H2K 5T4 </p>

                         </div>

                     </div>
                    
                    {/* Payment sections : review itmes */}
                    
                    <div className='payment__section'>
                         <div className='payment__title'>
                             <h3>Review Items and Delivery</h3>
                         </div>

                        <div className='payment__items'>

                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    />
                                  ))}

                        </div>
                     </div>
                     
                     {/* payment section : payment method */}
                     
                     <div className='payment__section'>
                
                     </div>

            </div>
            
        </div>
    )
}

export default Payment
