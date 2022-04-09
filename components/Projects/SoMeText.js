import { Text, Grid, Spacer } from "@nextui-org/react"
import { SiNextdotjs, SiNodedotjs } from "react-icons/si"
import { GrReactjs } from "react-icons/gr"
import stylesProject from "../../styles/Project.module.css"


const SoMeText = () => {
    return (
        <Grid xs={9} sm={5}>
            <div className={stylesProject.textContainer}>
                <Text
                    h3
                    css={{
                        textGradient: '45deg, $blue500 -20%, $pink500 50%'
                    }}
                >
                    SoMe marketing website
                </Text>
                <Spacer y={1} />
                <Text span>
                    I build a professionel website for a friend who does
                    social media marketing. This was my first freelance job
                    and i build it using next.js and sendgrid to send emails
                    for a serverless contactform. The ui was build with
                    Next.js UI.
                </Text>
                <Spacer y={1} />
                <div>
                        <SiNextdotjs className={stylesProject.icons} size={40} />
                        <GrReactjs className={stylesProject.icons} size={40} />
                        <SiNodedotjs className={stylesProject.icons} size={40} />
                </div>
            </div>
        </Grid>
    )
}

export default SoMeText