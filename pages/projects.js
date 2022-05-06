import EcommerceText from "../components/Projects/EcommerceText"
import EcommerceCard from "../components/Projects/EcommerceCard"
import MernCard from "../components/Projects/MernCard"
import MernText from "../components/Projects/MernText"
import SoMeCard from "../components/Projects/SoMeCard"
import SoMeText from "../components/Projects/SoMeText"
import { mernProject, eCommerceProject, soMeProject } from "../lib/data/data"

import { Grid } from "@nextui-org/react"
import { useMediaQuery } from "../lib/custom-hooks/useMediaQuery"

export async function getStaticProps(context) {

    const mernData = mernProject.map(images => images)
    const eCommerceData = eCommerceProject.map(images => images)
    const soMeProjectData = soMeProject.map(images => images)

    return {
      props: { mernData, eCommerceData, soMeProjectData }
    }
  } 

export default function Projects({ mernData, eCommerceData, soMeProjectData }) {

    const md = useMediaQuery(960)

    return (
        <Grid.Container justify="center">
            {md ?
            <>
                <EcommerceText />
                <EcommerceCard images={eCommerceData} />
                <MernText />
                <MernCard images={mernData} />
                <SoMeText />
                <SoMeCard images={soMeProjectData} />
            </>
            :
            <>
                <EcommerceCard images={eCommerceData} />
                <EcommerceText />
                <MernText />
                <MernCard images={mernData} />
                <SoMeCard images={soMeProjectData} />
                <SoMeText />
            </>
            }
        </Grid.Container>
    )
}

