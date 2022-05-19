import React from 'react'
import {
  Text,
  Container,
  Row,
  Col,
  Spacer,
  Link,
  Card,
  Image,
} from '@nextui-org/react'

import { Navigation } from '../../components/Navigation'
import { CodeBlock } from '../../components/CodeBlock'

const mdViewportUnitsCSS = `
~~~css
.existing-viewport-units {
  height: 100vh;
  width: 100vw;
}

.new-height-viewport-units {
  height: 100dvh;
  height: 100svh;
  height: 100lvh;
  
  /* logical units */
  block-size: 100vb;
  block-size: 100dvb;
  block-size: 100svb;
  block-size: 100lvb;
}

.new-width-viewport-units {
  width: 100dvw;
  width: 100svw;
  width: 100lvw;
  
  /* logical units */
  inline-size: 100vi;
  inline-size: 100dvi;
  inline-size: 100svi;
  inline-size: 100lvi;
}
~~~
`

function ViewportUnits() {
  return (
    <Container>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $purple500 -20%, $pink500 100%',
        }}
        weight="bold"
      >
        Viewport Units
      </Text>

      <Container gap={0} css={{ mb: '$20' }}>
        <Row gap={1}>
          <Text h3 css={{ mb: '$6' }}>
            Code
          </Text>
        </Row>
        <Row gap={1}>
          <Col>
            <Text h5 css={{ mb: '$4' }}>
              CSS
            </Text>
            <CodeBlock>{mdViewportUnitsCSS}</CodeBlock>
          </Col>
          <Col>
            <Text h5 css={{ mb: '$6' }}>
              Visual
            </Text>
            <Card css={{ mw: '100%' }}>
              <Card.Body css={{ py: '$10' }}>
                <Image
                  width={800}
                  height={664}
                  src="/viewport-units.jpeg"
                  alt="Viewport Units"
                  objectFit="cover"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Spacer y={1} />
        <Row gap={1}>
          <Col>
            <Text h3 css={{ mb: '$6' }}>
              Links
            </Text>
            <Text>
              <Link
                href="https://caniuse.com/viewport-unit-variants"
                icon
                target="_blank"
              >
                Browser support - Large, Small, and Dynamic viewport units
              </Link>
            </Text>
            <Text>
              <Link
                href="https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/"
                icon
                target="_blank"
              >
                The Large, Small, and Dynamic Viewports
              </Link>
            </Text>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </Container>
  )
}
export { ViewportUnits }
