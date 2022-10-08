import './global.css'
import Product from './Product';

interface ShelfProps {
    title: string;
    collection: any;
}

export default function Shelf({title, collection} : ShelfProps) {
   
    return(
        <section className="shelf-container">
            <div className="shelf-title">
                <h2>{title}</h2>
            </div>
            <div className="shelf-products">
                {
                    collection.map((item:any) => {
                        return(
                            <Product 
                                productTitle={item.productTitle}
                                productImage={item.productImage}
                                productURL= {item.productURL}
                                productPrice={item.productPrice}
                                litPrice={item.litPrice}
                                installmentsNumber={item.installmentsNumber}
                                installmentValue={item.installmentValue}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}