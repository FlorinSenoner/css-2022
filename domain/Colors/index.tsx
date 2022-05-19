import React, { useEffect, useRef, useState } from 'react'
import {
  Text,
  Container,
  Row,
  Col,
  Card,
  Spacer,
  Link,
  Image,
} from '@nextui-org/react'

import { Navigation } from '../../components/Navigation'
import { CodeBlock } from '../../components/CodeBlock'

import styles from './index.module.scss'

const mdColorCSS = `
~~~css
.color-function {
  /* only display-p3 is supported in Safari */
  --neon-green: color(display-p3 0 1 0);
  --neon-green: color(lab 86.61 -107 102.9);
  --neon-green: color(srgb -0.52 1.019 -0.31);
}

/* test for support */
@media (dynamic-range: high) {  
  --accent: color(display-p3 0 1 0);
}
~~~
`

const mdLabLCHCSS = `
~~~css
.title {
  display: flex;
  justify-content: space-between;
}

.valid {
  display: none;
}

form:has(input[type="checkbox"]:checked) {
  border: 1px solid yellowgreen;
}

form:has(input[type="checkbox"]:checked) .valid {
 display: block;
}

form:not(:has(input[type="checkbox"]:checked)) {
  border: 1px solid firebrick;
}
~~~
`

const mdColorMixColorContrastCSS = `
~~~css
.color-mix-lch {
  /* only supported in safari so far */
  --pink: color-mix(in lch, red 70%, white);

  --brand: #0af;
  --text: color-mix(in lch, var(--brand) 75%, black);
  --display: color-mix(in lch, var(--brand) 90%, black);
}

.color-mix-srgb {
  --brand: #0af;
  --text: color-mix(in srgb, var(--brand) 75%, black);
  --display: color-mix(in srgb, var(--brand) 90%, black);
}

.contrast {
  --bg: black;
  background: var(--bg);
  color: color-contrast(var(--bg) vs lime, deeppink)
}
~~~
`

function Colors() {
  const [color1, setColor1] = useState('')
  const contrastWhite = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (contrastWhite?.current != null) {
      contrastWhite.current.style.setProperty('--bg', color1)
    }
  }, [color1])

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
        CSS Colors
      </Text>

      {/* SECTION 1 */}
      <section>
        <Text
          h2
          css={{
            textGradient: '45deg, $yellow500 -20%, $red500 100%',
          }}
          weight="bold"
        >
          color() & display-p3
        </Text>

        <Container gap={0} css={{ mb: '$20' }}>
          <Row gap={1}>
            <Text h3 css={{ mb: '$6' }}>
              Implementation
            </Text>
          </Row>
          <Row gap={1}>
            <Col>
              <Text h5 css={{ mb: '$4' }}>
                CSS
              </Text>
              <CodeBlock>{mdColorCSS}</CodeBlock>
            </Col>
            <Col>
              <Text h5 css={{ mb: '$6' }}>
                Color Picker - Safari
              </Text>
              <Card css={{ mw: '572px' }}>
                <Card.Body css={{ py: '$10' }}>
                  <Image
                    width={572}
                    height={548}
                    src="/color.png"
                    alt="color function"
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
                  href="https://caniuse.com/css-color-function"
                  icon
                  target="_blank"
                >
                  Browser support - color()
                </Link>
              </Text>
              <Text>
                <Link
                  href="https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/"
                  icon
                  target="_blank"
                >
                  Wide Gamut Color in CSS with Display-P3
                </Link>
              </Text>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section>
        <Text
          h2
          css={{
            textGradient: '45deg, $yellow500 -20%, $red500 100%',
          }}
          weight="bold"
        >
          lch() and lab()
        </Text>
        <Container gap={0} css={{ mb: '$20' }}>
          <Row gap={1}>
            <Text h3 css={{ mb: '$6' }}>
              Code
            </Text>
          </Row>
          <Row gap={1}>
            <Col>
              <Card css={{ mw: '880px' }}>
                <Card.Body css={{ py: '$10' }}>
                  <div className={styles.colorLch}>
                    <div className={styles.wrapper}>
                      <div className={styles.bgYellowHsl1}>
                        <Text style={{ color: '#EEE' }}>hsl(60 100% 0%)</Text>
                      </div>
                      <div className={styles.bgYellowHsl2}>
                        <Text style={{ color: '#EEE' }}>hsl(60 100% 10%)</Text>
                      </div>
                      <div className={styles.bgYellowHsl3}>
                        <Text style={{ color: '#EEE' }}>hsl(60 100% 20%)</Text>
                      </div>
                      <div className={styles.bgYellowHsl4}>
                        <Text style={{ color: '#EEE' }}>hsl(60 100% 30%)</Text>
                      </div>
                      <div className={styles.bgYellowHsl5}>
                        <Text style={{ color: '#EEE' }}>hsl(60 100% 40%)</Text>
                      </div>
                      <div className={styles.bgYellowHsl6}>
                        <Text style={{ color: '#EEE' }}>hsl(60 100% 50%)</Text>
                      </div>
                      <div className={styles.bgYellowHsl7}>
                        <Text style={{ color: '#EEE' }}>hsl(60 100% 60%)</Text>
                      </div>
                      <div className={styles.bgYellowHsl8}>
                        <Text style={{ color: '#EEE' }}>hsl(60 100% 70%)</Text>
                      </div>
                      <div className={styles.bgYellowHsl9}>
                        <Text style={{ color: '#EEE' }}>hsl(60 100% 80%)</Text>
                      </div>
                      <div className={styles.bgYellowHsl10}>
                        <Text style={{ color: '#EEE' }}>hsl(60 100% 90%)</Text>
                      </div>
                      <div className={styles.bgYellowHsl11}>
                        <Text style={{ color: '#EEE' }}>hsl(60 100% 100%)</Text>
                      </div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.bgBlueHsl1}>
                        <Text style={{ color: '#EEE' }}>hsl(240 100% 0%)</Text>
                      </div>
                      <div className={styles.bgBlueHsl2}>
                        <Text style={{ color: '#EEE' }}>hsl(240 100% 10%)</Text>
                      </div>
                      <div className={styles.bgBlueHsl3}>
                        <Text style={{ color: '#EEE' }}>hsl(240 100% 20%)</Text>
                      </div>
                      <div className={styles.bgBlueHsl4}>
                        <Text style={{ color: '#EEE' }}>hsl(240 100% 30%)</Text>
                      </div>
                      <div className={styles.bgBlueHsl5}>
                        <Text style={{ color: '#EEE' }}>hsl(240 100% 40%)</Text>
                      </div>
                      <div className={styles.bgBlueHsl6}>
                        <Text style={{ color: '#EEE' }}>hsl(240 100% 50%)</Text>
                      </div>
                      <div className={styles.bgBlueHsl7}>
                        <Text style={{ color: '#EEE' }}>hsl(240 100% 60%)</Text>
                      </div>
                      <div className={styles.bgBlueHsl8}>
                        <Text style={{ color: '#EEE' }}>hsl(240 100% 70%)</Text>
                      </div>
                      <div className={styles.bgBlueHsl9}>
                        <Text style={{ color: '#EEE' }}>hsl(240 100% 80%)</Text>
                      </div>
                      <div className={styles.bgBlueHsl10}>
                        <Text style={{ color: '#EEE' }}>hsl(240 100% 90%)</Text>
                      </div>
                      <div className={styles.bgBlueHsl11}>
                        <Text style={{ color: '#EEE' }}>
                          hsl(240 100% 100%)
                        </Text>
                      </div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.bgBlueHwb1}>
                        <Text style={{ color: '#EEE' }}>hwb(200 20% 0%)</Text>
                      </div>
                      <div className={styles.bgBlueHwb2}>
                        <Text style={{ color: '#EEE' }}>hwb(200 20% 10%)</Text>
                      </div>
                      <div className={styles.bgBlueHwb3}>
                        <Text style={{ color: '#EEE' }}>hwb(200 20% 20%)</Text>
                      </div>
                      <div className={styles.bgBlueHwb4}>
                        <Text style={{ color: '#EEE' }}>hwb(200 20% 30%)</Text>
                      </div>
                      <div className={styles.bgBlueHwb5}>
                        <Text style={{ color: '#EEE' }}>hwb(200 20% 40%)</Text>
                      </div>
                      <div className={styles.bgBlueHwb6}>
                        <Text style={{ color: '#EEE' }}>hwb(200 20% 50%)</Text>
                      </div>
                      <div className={styles.bgBlueHwb7}>
                        <Text style={{ color: '#EEE' }}>hwb(200 20% 60%)</Text>
                      </div>
                      <div className={styles.bgBlueHwb8}>
                        <Text style={{ color: '#EEE' }}>hwb(200 20% 70%)</Text>
                      </div>
                      <div className={styles.bgBlueHwb9}>
                        <Text style={{ color: '#EEE' }}>hwb(200 20% 80%)</Text>
                      </div>
                      <div className={styles.bgBlueHwb10}>
                        <Text style={{ color: '#EEE' }}>hwb(200 20% 90%)</Text>
                      </div>
                      <div className={styles.bgBlueHwb11}>
                        <Text style={{ color: '#EEE' }}>hwb(200 20% 100%)</Text>
                      </div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.bgPinkLch1}>
                        <Text style={{ color: '#EEE' }}>lch(0% 100 0)</Text>
                      </div>
                      <div className={styles.bgPinkLch2}>
                        <Text style={{ color: '#EEE' }}>lch(10% 100 0)</Text>
                      </div>
                      <div className={styles.bgPinkLch3}>
                        <Text style={{ color: '#EEE' }}>lch(20% 100 0)</Text>
                      </div>
                      <div className={styles.bgPinkLch4}>
                        <Text style={{ color: '#EEE' }}>lch(30% 100 0)</Text>
                      </div>
                      <div className={styles.bgPinkLch5}>
                        <Text style={{ color: '#EEE' }}>lch(40% 100 0)</Text>
                      </div>
                      <div className={styles.bgPinkLch6}>
                        <Text style={{ color: '#EEE' }}>lch(50% 100 0)</Text>
                      </div>
                      <div className={styles.bgPinkLch7}>
                        <Text style={{ color: '#EEE' }}>lch(60% 100 0)</Text>
                      </div>
                      <div className={styles.bgPinkLch8}>
                        <Text style={{ color: '#EEE' }}>lch(70% 100 0)</Text>
                      </div>
                      <div className={styles.bgPinkLch9}>
                        <Text style={{ color: '#EEE' }}>lch(80% 100 0)</Text>
                      </div>
                      <div className={styles.bgPinkLch10}>
                        <Text style={{ color: '#EEE' }}>lch(90% 100 0)</Text>
                      </div>
                      <div className={styles.bgPinkLch11}>
                        <Text style={{ color: '#EEE' }}>lch(100% 100 0)</Text>
                      </div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.bgBlueLch1}>
                        <Text style={{ color: '#EEE' }}>lch(0% 100 256)</Text>
                      </div>
                      <div className={styles.bgBlueLch2}>
                        <Text style={{ color: '#EEE' }}>lch(10% 100 256)</Text>
                      </div>
                      <div className={styles.bgBlueLch3}>
                        <Text style={{ color: '#EEE' }}>lch(20% 100 256)</Text>
                      </div>
                      <div className={styles.bgBlueLch4}>
                        <Text style={{ color: '#EEE' }}>lch(30% 100 256)</Text>
                      </div>
                      <div className={styles.bgBlueLch5}>
                        <Text style={{ color: '#EEE' }}>lch(40% 100 256)</Text>
                      </div>
                      <div className={styles.bgBlueLch6}>
                        <Text style={{ color: '#EEE' }}>lch(50% 100 256)</Text>
                      </div>
                      <div className={styles.bgBlueLch7}>
                        <Text style={{ color: '#EEE' }}>lch(60% 100 256)</Text>
                      </div>
                      <div className={styles.bgBlueLch8}>
                        <Text style={{ color: '#EEE' }}>lch(70% 100 256)</Text>
                      </div>
                      <div className={styles.bgBlueLch9}>
                        <Text style={{ color: '#EEE' }}>lch(80% 100 256)</Text>
                      </div>
                      <div className={styles.bgBlueLch10}>
                        <Text style={{ color: '#EEE' }}>lch(90% 100 256)</Text>
                      </div>
                      <div className={styles.bgBlueLch11}>
                        <Text style={{ color: '#EEE' }}>lch(100% 100 256)</Text>
                      </div>
                    </div>
                  </div>
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
                  href="https://caniuse.com/css-lch-lab"
                  icon
                  target="_blank"
                >
                  Browser support - LCH and Lab color values
                </Link>
              </Text>
              <Text>
                <Link
                  href="https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/"
                  icon
                  target="_blank"
                >
                  LCH colors in CSS: what, why, and how?
                </Link>
              </Text>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 3 */}
      <section>
        <Text
          h2
          css={{
            textGradient: '45deg, $yellow500 -20%, $red500 100%',
          }}
          weight="bold"
        >
          color-mix() and color-contrast()
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
              <CodeBlock>{mdColorMixColorContrastCSS}</CodeBlock>
            </Col>
            <Col>
              <Text h5 css={{ mb: '$6' }}>
                Result
              </Text>
              <Card css={{ mw: '330px' }}>
                <Card.Body css={{ py: '$10' }}>
                  <div className={styles.colorMix}>
                    <Text h3>color-mix()</Text>
                    <Text h5>lch</Text>
                    <p className={styles.hotPinkLch}>
                      mix red and white in lch
                    </p>
                    <p className={styles.textLch}>mix black and white</p>
                    <Text h5>srgb</Text>
                    <p className={styles.hotPinkSrgb}>
                      mix red and white in srgb
                    </p>
                    <p className={styles.textSrgb}>mix black and white</p>
                    <Text h3>color-contrast()</Text>
                  </div>
                  <div className={styles.colorContrast}>
                    <input
                      className="input-color-picker"
                      type="color"
                      data-id="color"
                      name="Colors"
                      value={color1}
                      onChange={(e) => setColor1(e.target.value)}
                    />
                    <p className={styles.contrast} ref={contrastWhite}>
                      dynamic contrasting color
                    </p>
                  </div>
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
                  href="https://caniuse.com/mdn-css_types_color_color-mix"
                  icon
                  target="_blank"
                >
                  Browser support - color-mix()
                </Link>
              </Text>
              <Text>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix"
                  icon
                  target="_blank"
                >
                  mdn - color-mix()
                </Link>
              </Text>
              <Text>
                <Link
                  href="https://caniuse.com/mdn-css_types_color_color-contrast"
                  icon
                  target="_blank"
                >
                  Browser support - color-contrast()
                </Link>
              </Text>
              <Text>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast"
                  icon
                  target="_blank"
                >
                  mdn - color-contrast()
                </Link>
              </Text>
            </Col>
          </Row>
        </Container>
      </section>
      <Navigation />
    </Container>
  )
}

export { Colors }
