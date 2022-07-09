import React from "react"
import styled from "@emotion/styled"
import { Element } from 'react-scroll'
import ScrollReveal from 'scrollreveal'

import { Container, Section, theme, media } from '../styles'
import Image from './image'

const Title = styled.h2`
  color: ${theme.colors.dark};
  margin-bottom: 25px;
`;

const Copy = styled.h5`
  color: ${theme.colors.dark};
  font-size: 22px;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    color: ${theme.colors.mayerPurple};
    text-decoration: underline;
  }


  ${media.medium} {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  width: 100%;
`


class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = { submitted: false };
  }


  componentDidMount = () => {
    ScrollReveal().reveal(this.refs.connect, theme.scrollRevealConfig)
    ScrollReveal().reveal(this.refs.image, theme.scrollRevealConfig)
  }

  encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  handleSubmission = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "Contact Form", ...data })
    })
      .then(() => this.setState({submitted: true}))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Section bgColor={theme.colors.light} id="contact">
        <Element name="Achievements" />
        <Container>
          <FlexRow>
            <div ref="connect">
              <Title>Certifications.</Title>
              <Copy>1. Blockchain Specialization from University at Buffalo <a href="https://www.coursera.org/account/accomplishments/specialization/5R6UNUZH7NA2">Certificate</a></Copy>
              <Copy>2. Blockchain Revolution Specialization from INSEAD <a href="https://www.coursera.org/account/accomplishments/specialization/TPU37Q4495DK">Certificate</a></Copy>
              <Copy>3. CS120: Bitcoin for Developers I from Saylor Academy <a href="https://certificates.saylor.org/54352851-8689-491b-bcf3-54f2e4042eca#gs.5vane9">Certificate</a></Copy>
              <Copy>4. IBM Blockchain Foundation Developer from IBM <a href="https://courses.cognitiveclass.ai/certificates/0dcbcb1c08da4632bd61d3817212cfaf">Certificate</a></Copy>
              <Copy>5. Blockchain Essentials from IBM <a href="https://courses.cognitiveclass.ai/certificates/1866dbdf298d47598bf9cebe80998ed6">Certificate</a></Copy>
              <br></br>
              <Title>Achievements</Title>
              <Copy>- I got 1st in Python workshop conducted in IIT Hyderabad</Copy>
              <Copy>- Our team has won Restart India Hackathon in Matic Network Prize</Copy>
              <Copy>- We were in Top 3 in Streamr Data Challenge.</Copy>
            </div>
            
          </FlexRow>
          <br></br>
        <Title>Contact</Title>
        <Copy>If you want to know more about me or my work, or if you would just like to say hello, send me a message through naganithinsydney@gmail.com. I'd love to hear from you.</Copy>
        </Container>
      </Section>
    )
  }
}

export default Contact

