import MernCard from "../components/Projects/MernCard"
import MernText from "../components/Projects/MernText"
import SoMeCard from "../components/Projects/SoMeCard"
import SoMeText from "../components/Projects/SoMeText"
import { Grid } from "@nextui-org/react"
import { useMediaQuery } from "../lib/custom-hooks/useMediaQuery"

export default function Projects() {

    const md = useMediaQuery(960)

    return (
        <Grid.Container gap={3} justify="center">
            {md ?
            <>
                <MernText />
                <MernCard />
                <SoMeText />
                <SoMeCard />
            </>
            :
            <>
                <MernText />
                <MernCard />
                <SoMeCard />
                <SoMeText />
            </>
            }
        </Grid.Container>
    )
}

