import React from 'react'
import styles from "../Components/Women.module.css";
// import { WomenAssets } from './WomenItems';
import { useFilter } from '../Contexts/Filter-context';
import { useCart } from '../Contexts/Cart-Context';
 export const Women = () => {
    const {tempcart}=useFilter();
    const { addItem } = useCart();
  return (
    <>
    <h1 className={`${styles.WomenHead}`}>Women Products</h1>
   <section className={`${styles.WomenProducts}`}>
    {tempcart.map((item)=>{
        const {id,Company,Itemname,url,price,cart}=item;
        return (
            <article key={id} className={`${styles.Product}`}>
               <img src={url} alt={Company}  className={`${styles.Image}`}/>
               <h3 className={`${styles.Company}`}>{Company}</h3>
               <h4 className={`${styles.Item}`}>{Itemname}</h4>
               <p className={`${styles.PriceCart}`}>
                <span className={`${styles.price}`}>RS.{price}  </span>
                <span
                      className={`${styles.cart}`}
                      onClick={() => addItem(item)}
                    >
                      {cart}
                    </span>
                </p>
            </article>
        )
    })}
   </section>
   </>
  )
}

