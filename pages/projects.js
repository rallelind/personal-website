import EcommerceText from "../components/Projects/EcommerceText"
import EcommerceCard from "../components/Projects/EcommerceCard"
import MernCard from "../components/Projects/MernCard"
import MernText from "../components/Projects/MernText"
import SoMeCard from "../components/Projects/SoMeCard"
import SoMeText from "../components/Projects/SoMeText"

import { Grid } from "@nextui-org/react"
import { useMediaQuery } from "../lib/custom-hooks/useMediaQuery"

export default function Projects() {

    const md = useMediaQuery(960)

    return (
        <Grid.Container style={{ marginTop: "2%" }} gap={3} justify="center">
            {md ?
            <>
                <EcommerceText />
                <EcommerceCard />
                <MernText />
                <MernCard />
                <SoMeText />
                <SoMeCard />
            </>
            :
            <>
                <EcommerceCard />
                <EcommerceText />
                <MernText />
                <MernCard />
                <SoMeCard />
                <SoMeText />
            </>
            }
        </Grid.Container>
    )
}

