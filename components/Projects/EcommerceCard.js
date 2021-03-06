import { Grid, Card, Text } from "@nextui-org/react"
import ImageSlider from "../utils/ImageSlider"
import { Link } from "@nextui-org/react"


const EcommerceCard = ({ images }) => {

    return (
        <Grid xs={11} sm={5}>
                <Card style={{ marginBottom: "5%" }}>
                    <Card.Body style={{ overflow: "hidden" }}>
                            <ImageSlider 
                                images={images}
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
