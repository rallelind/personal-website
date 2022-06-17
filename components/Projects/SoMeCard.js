import { Grid, Card, Text } from "@nextui-org/react"
import stylesProject from "../../styles/Project.module.css"
import ImageSlider from "../utils/ImageSlider"
import { Link } from "@nextui-org/react"


const SoMeCard = ({ images }) => {

    return (
    <Grid className={stylesProject.secondGridContainer} xs={11} sm={5}>
        <Card>
                <Card.Body style={{ overflow: "hidden" }}>
                    <ImageSlider 
                        images={images}
                    />
                </Card.Body>
                <Card.Footer>
                    <Text>Link to website: <Link target="_blank" href="https://www.wierperia.com">https://www.wierperia.com</Link></Text>
                </Card.Footer>
        </Card>
    </Grid>
    )
}

export default SoMeCard