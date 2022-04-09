import React from 'react'
import { Text } from '@nextui-org/react'

const AboutText = () => {
    return (
        <div>
                <Text 
                    h3
                    css={{
                        textGradient: '45deg, $blue500 -20%, $pink500 50%'
                    }}
                >
                    About Me</Text>
                <Text>
                    I am a 22 year old software developer based in Copenhagen currently i am working as a
                    full stack node.js developer. I am a college dropout and a self taught developer.
                    I studied for 2 semesters but found that i was learning way faster on my own.
                    Being as passioned as i am with developing i decided to dropout to pursue a job
                    where i could learn to develop in a production environment. I though the return
                    from building software in the real world was much higher than an education could
                    ever offer me, which was the factor that led me to dropout. Ever since i have been
                    on this journey, and i am loving it.
                </Text>
        </div>
    )
}

export default AboutText
