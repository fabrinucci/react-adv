import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"


export const ShoppingPage = () => {

  const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
  }

  return (
    <div>
      <h3>Shopping Page</h3>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        
        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title title="Carrito de compras" />
          <ProductCard.Buttons />
        </ProductCard>

      </div>
    </div>
  )
}
