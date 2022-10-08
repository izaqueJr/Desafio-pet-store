import './global.css'

interface ProductProps {
    productTitle: string;
    productPrice: number;
    productImage: string;
    productURL: string;
    litPrice: number|null;
    installmentsNumber: number|null;
    installmentValue: number|null;
}

export default function Product({ 
    productTitle, 
    litPrice, 
    productPrice,
    installmentsNumber,
    installmentValue,
    productImage,
    productURL
    } : ProductProps) {

    return(
        <a className='product' href={productURL}>
            <img src={productImage} alt={productTitle} className='product-image' />
            <h3 className='product-title'>
                {productTitle}
            </h3>
            <div className='product-values'>  
                <div className='product-price-container'>

                    {
                        litPrice &&
                        <span className='product-list-price'>
                            R$ {litPrice/100}
                        </span>
                    }

                    <span className='product-price'>
                        R${productPrice/100}
                    </span>

                </div>

                {
                    installmentsNumber && installmentValue &&
                    <span className='product-installments'>
                        {installmentsNumber}x de R${installmentValue/100}
                    </span>
                }
           
            </div>
        </a>
    )
}