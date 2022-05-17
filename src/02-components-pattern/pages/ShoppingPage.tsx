import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const product = {
    id: '1',
    img: './coffee-mug.png',
    title: 'Coffee Mug - Card',
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

        <ProductCard 
          product={ product }
          className="bg-dark"  
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" title="Carrito de compras" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        
        <ProductCard 
          product={ product }
          className="bg-dark"  
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard 
          product={ product }
          style={{
            backgroundColor: "#1B1F3B"
          }}
        >
          <ProductImage 
            style={{
              padding: "10px",
              borderRadius: "20px",
              width: "calc( 100% - 20px )",
            }}/>
          <ProductTitle 
            style={{
              color: "white",
              textTransform: "uppercase",
              fontSize: "20px",
              textAlign: "center",
              fontWeight: "600"
            }}
            title="Web Dev Coffee"
          />
          <ProductButtons 
            style={{
              borderColor: "white",
              color: "white",
            }}/>
        </ProductCard>

      </div>
    </div>
  )
}
