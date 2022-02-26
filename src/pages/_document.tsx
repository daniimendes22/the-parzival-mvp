import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6 {  margin: 0;  padding: 0;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}',
            }}
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-gray-black);\n    background-color: var(--dl-color-gray-white);\n    \n  }\n\n  \n',
            }}
          ></style>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<script src=\'https://unpkg.com/@teleporthq/teleport-custom-scripts\'></script>\n<script>\n      window.onload = () => {\n        const runAllScripts = () => {\n          initializeAllSliders();\n        };\n\n        const listenForUrlChanges = () => {\n          let url = location.href;\n          document.body.addEventListener(\n            "click",\n            () => {\n              requestAnimationFrame(() => {\n                if (url !== location.href) {\n                  runAllScripts();\n                  url = location.href;\n                }\n              });\n            },\n            true\n          );\n        };\n\n        const initializeAllSliders = () => {\n          const allSliders = document.querySelectorAll(\'[data-type="slider"]\');\n          allSliders.forEach((carrousel) => {\n            initializeSlider(carrousel);\n          });\n        };\n\n        const initializeSlider = (carrousel) => {\n          let currentSlide = 0;\n\n          const slides = carrousel.querySelectorAll(\'[data-type="slide"]\');\n          const nextSlideBtns = carrousel.querySelectorAll(\n            \'[data-action="nextSlide"]\'\n          );\n          const previousSlideBtns = carrousel.querySelectorAll(\n            \'[data-action="previousSlide"]\'\n          );\n\n          const changeSlide = (slideIndex, action) => {\n            currentSlide = slideIndex;\n\n            switch (action) {\n              case "next":\n                slideIndex === slides.length - 1\n                  ? (currentSlide = 0)\n                  : currentSlide++;\n                break;\n              case "previous":\n                slideIndex === 0\n                  ? (currentSlide = slides.length - 1)\n                  : currentSlide--;\n            }\n\n            carrousel.style.transform = `translateX(${-100 * currentSlide}%)`;\n          };\n\n          previousSlideBtns.forEach((btn) => {\n            btn.addEventListener("click", () =>\n              changeSlide(currentSlide, "previous")\n            );\n          });\n\n          nextSlideBtns.forEach((btn) => {\n            btn.addEventListener("click", () =>\n              changeSlide(currentSlide, "next")\n            );\n          });\n        };\n\n        runAllScripts();\n      };\n    </script>',
            }}
          ></div>
        </body>
      </Html>
    )
  }
}

export default CustomDocument
