import { Grid, Card, Text } from '@nextui-org/react';
import { useState } from 'react'
import stylesCards from "../../styles/Cards.module.css"
import { BsCodeSlash } from "react-icons/bs"
import Modal from '../utils/Modal';


const Cards = () => {

    const [firstModal, setFirstModal] = useState(false)
    const [secondModal, setSecondModal] = useState(false)
    const [thirdModal, setThirdModal] = useState(false);
    

    const MockItem = ({text, onClick}) => {
        return (
            <Card 
                clickable 
                hoverable 
                onClick={onClick}
                color="gradient" css={{ h: '$50' }}
            >
              <Text h6 size={15} color="white" css={{ mt: 0 }}>
                {text}
                  </Text>
                  <Card.Footer className={stylesCards.images}>
                    <BsCodeSlash size={100}/>
                  </Card.Footer>
            </Card>
        );
    }

    return (
      <div className={stylesCards.gridContainer}>
          <Grid.Container gap={2} justify="center">
          <Grid xs={10} sm={4} md={4} lg={4}>
              <MockItem 
                text="Click to view code snippet from a full stack MERN project"
                onClick={() => setFirstModal(true)}
              />
            <Modal 
                open={firstModal}
                onClose={() => setFirstModal(false)}
                image={"/full-stack-snippet.png"}
            />
          </Grid>
          <Grid xs={10} sm={4} md={4} lg={4}>
              <MockItem 
                onClick={() => setSecondModal(true)}
                text="Click to view a code snippet from website i build for a customer" 
              />
            <Modal 
                open={secondModal}
                onClose={() => setSecondModal(false)}
                image={"/send-email-snippet.png"}
            />
          </Grid>
          <Grid xs={10} sm={4} md={4} lg={4}>
              <MockItem 
                onClick={() => setThirdModal(true)}
                text="Click here to view a code snippet from this very project" 
              />
            <Modal 
                open={thirdModal}
                onClose={() => setThirdModal(false)}
                image={"/personal-website-snippet.png"}
            />
          </Grid>
          </Grid.Container>
      </div>
    )
}

export default Cards