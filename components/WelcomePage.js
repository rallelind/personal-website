import Image from "next/image"
import { Grid, Text } from "@nextui-org/react"
import stylesWelcomePage from "../styles/WelcomePage.module.css"

const WelcomePage = () => {
    return (
        <Grid.Container>
            <Grid>
                <Image src="/avatar-picture.JPG" height="500px" width="400px" />
            </Grid>
            <Grid>
                <div className={stylesWelcomePage.typewriter}>
                    <h3>
                        Hi my name is Rasmus and i am a software developer
                    </h3>
                </div>
            </Grid>
        </Grid.Container>
    )
}

export default WelcomePage
