import { Grid, Card, Text } from "@nextui-org/react"
import ImageSlider from "../utils/ImageSlider"
import { Link } from "@nextui-org/react"


const MernCard = () => {

    const mernProject = [
        "/loginMERN.png", 
        "/dashboardMERN.png", 
        "/aboutMERN.png", 
        "/featuresMERN.png", 
        "/productpageMERN.png",
        "/paymentMERN.png",
        "/profilepageMERN.png",
        "/uploadvanMERN.png"
    ]

    return (
        <Grid xs={9} sm={5}>
            <Card>
                    <Card.Body style={{ overflow: "hidden" }}>
                            <ImageSlider 
                                images={mernProject.map(image => image)}
                            />
                    </Card.Body>
                    <Card.Footer>
                        <Text>Link to github: <Link target="_blank" href="https://github.com/rallelind/full-stack-mern">https://github.com/rallelind/full-stack-mern</Link></Text>
                    </Card.Footer>
            </Card>
        </Grid>
    )
}

export default MernCard