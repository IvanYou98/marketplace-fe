import WishListItem from './WishListItem'

const WishList = ({ products }) => {
    return (
        <div>
            {
                products.map(product => (
                    <WishListItem key={product.productId} productId={product.productId} />
                ))
            }
        </div>
    )
}

export default WishList