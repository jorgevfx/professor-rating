import styled from "styled-components";
import {motion} from "framer-motion";

export const InfoCard = ({icon, title, description}) => {

	const cardVariants = {
		offscreen: {
			y: 300
		},
		onscreen: {
			y: 0,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8
			}
		}
	}

	return (
		<motion.div
			className={'card-container'}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{once: true, amount: 0.8}}
		>
			<motion.div
				variants={cardVariants}
			>
				<Card>
					<IconWrapper>{icon}</IconWrapper>
					<Title>{title}</Title>
					<Description>{description}</Description>
				</Card>
			</motion.div>
		</motion.div>

	)
}

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(28, 28, 30);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  gap: 14px;

  h4, p {
    margin: 0
  }

  @media (min-width: 724px) {
    min-height: 300px;
    max-width: 330px;
  }
`

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Title = styled.h4`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 24px;
  letter-spacing: -0.28px;
  text-align: center;
`

const Description = styled.p`
  font-size: 16px;
  color: #C7C7C7;
  text-align: center;
`