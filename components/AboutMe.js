import { Grid } from "@nextui-org/react"
import HobbiesCards from "./HobbiesCards"
import AboutText from "./AboutText"
import styleCards from "../styles/Cards.module.css"

const AboutMe = () => {
    return (
        <Grid.Container className={styleCards.gridContainer} gap={2} justify="center">
                <AboutText />
                <HobbiesCards />
        </Grid.Container>
    )
}

export default AboutMe
