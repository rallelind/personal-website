import { Grid, Text, Spacer } from "@nextui-org/react"
import { GrStripe, GrReactjs } from "react-icons/gr"
import { SiExpress, SiMongodb, SiNodedotjs, SiBootstrap } from "react-icons/si"
import stylesProject from "../../styles/Project.module.css"

const MernText = () => {
    return (
        <Grid xs={9} sm={5}>
            <div className={stylesProject.textContainer}>
                <Text
                    h3
                    css={{
                        textGradient: '45deg, $blue500 -20%, $pink500 50%'
                    }}
                >
                    Full-Stack MERN project
                </Text>
                <Spacer y={1} />
                <Text span>
                    I build a project where a user can rent out their van with the MERN stack.
                    This is a project with multiple moving parts like payments with stripe,
                    user authentication, CRUD operations and much more. 
                </Text>
                <Spacer y={1} />
                <div>
                        <GrStripe className={stylesProject.icons} size={40}/>
                        <GrReactjs className={stylesProject.icons} size={40} />
                        <SiMongodb className={stylesProject.icons} size={40} />
                        <SiExpress className={stylesProject.icons} size={40} />
                        <SiNodedotjs className={stylesProject.icons} size={40} />
                        <SiBootstrap className={stylesProject.icons} size={40} />
                </div>
            </div>
        </Grid>
    )
}

export default MernText