import { Grid } from "@nextui-org/react"
import HobbiesCards from "./HobbiesCards"
import AboutText from "./AboutText"
import styleCards from "../../styles/Cards.module.css"
import TechnolgiesCards from "./TechnolgiesCards"

const AboutMe = () => {
    return (
        <Grid.Container className={styleCards.gridContainer} gap={2} justify="center">
                <TechnolgiesCards />
                <AboutText />
                <HobbiesCards />
        </Grid.Container>
    )
}

export default AboutMe
