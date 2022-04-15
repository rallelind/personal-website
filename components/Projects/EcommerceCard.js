import { Grid, Card, Text } from "@nextui-org/react"
import ImageSlider from "../utils/ImageSlider"
import { Link } from "@nextui-org/react"


const EcommerceCard = () => {

    const eCommerceProject = [
        "/e-commerce/landingpage.png", 
        "/e-commerce/profile-info.png", 
        "/e-commerce/upload-product.png", 
        "/e-commerce/upload-product2.png",
        "/e-commerce/preview-product.png", 
        "/e-commerce/your-products.png",
    ]

    return (
        <Grid xs={9} sm={5}>
            <Card>
                    <Card.Body style={{ overflow: "hidden" }}>
                            <ImageSlider 
                                images={eCommerceProject.map(image => image)}
                            />
                    </Card.Body>
                    <Card.Footer>
                        <Text>Link to github: <Link target="_blank" href="https://github.com/rallelind/e-commerce">https://github.com/rallelind/e-commerce</Link></Text>
                    </Card.Footer>
            </Card>
        </Grid>
    )
}

export default EcommerceCard
