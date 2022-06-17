import { Grid, Text, Spacer } from "@nextui-org/react"
import { GrStripe, GrReactjs } from "react-icons/gr"
import { SiPrisma, SiPostgresql, SiNextdotjs, SiTypescript } from "react-icons/si"
import stylesProject from "../../styles/Project.module.css"
import { Link } from "@nextui-org/react"

const EcommerceText = () => {
    return (
        <Grid xs={9} sm={5}>
            <div className={stylesProject.textContainer}>
                <Text
                    h3
                    css={{
                        textGradient: '45deg, $blue500 -20%, $pink500 50%'
                    }}
                >
                    Full-Stack Next.js Project
                </Text>
                <Spacer y={1} />
                <Text span>
                    I build a project which has a lot of similarities to the
                    MERN project i build. However, i wanted to try building something
                    like it with another tech stack and found working with Next.js 
                    and postgres to be a much better choice and more enjoyable to work with.
                    <Text>Link to deployed project: <Link target="_blank" href="https://rasmus-lind-e-commerce.vercel.app">https://rasmus-lind-e-commerce.vercel.app</Link></Text>

                </Text>
                <Spacer y={1} />
                <div>
                        <SiPrisma className={stylesProject.icons} size={40}/>
                        <SiPostgresql className={stylesProject.icons} size={40} />
                        <SiNextdotjs className={stylesProject.icons} size={40} />
                        <SiTypescript className={stylesProject.icons} size={40} />
                </div>
            </div>
        </Grid>
    )
}

export default EcommerceText