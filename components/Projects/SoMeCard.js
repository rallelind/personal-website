import { Grid, Card, Text } from "@nextui-org/react"
import stylesProject from "../../styles/Project.module.css"
import ImageSlider from "../ImageSlider"
import { Link } from "@nextui-org/react"


const SoMeCard = () => {

    const soMeProject = [
        "/landingpageSOME.png",
        "/landingpage2SOME.png",
        "/aboutSOME.png",
        "/contactSOME.png"
    ]

    return (
    <Grid className={stylesProject.secondGridContainer} xs={9} sm={5}>
        <Card>
                <Card.Body style={{ overflow: "hidden" }}>
                    <ImageSlider 
                        images={soMeProject.map(images => images)}
                    />
                </Card.Body>
                <Card.Footer>
                    <Text>Link to github: <Link href="https://github.com/rallelind/some-marketing-website">https://github.com/rallelind/some-marketing-website</Link></Text>
                </Card.Footer>
        </Card>
    </Grid>
    )
}

export default SoMeCard