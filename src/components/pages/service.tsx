/**
 * Page - Service page-component
 * @author Jiners Enoheart
 * @published 2024/07/25
 * @modified  2024/07/31
 */

"use client";
import Image from "next/image";

export default function Main() {
  return (
    <div className="page service">
      <div className="mb-1em flex justify-center">
        <Image
          src={require(`@/assets/imgs/team-01.png`)}
          alt="..."
          width={1007}
          height={385}
        />
      </div>

      <div
        className="flex justify-center items-center gap-1em
    xs3:flex-col xs2:flex-col xs:flex-row"
      >
        <div className="flex-col">
          <h1 className="text">
            <b>
              <i>
                <u>IWDL</u>
              </i>
            </b>{" "}
            offers services in various software fields, including
          </h1>

          <div className="fields">
            <h2>Integrating AI functionalities into diverse apps</h2>
            <h2>Building full-stack web services</h2>
            <h2>Creating 2D/3D games for education</h2>
            <h2>Launching smart contracts / blockchain solutions</h2>
            <h2>Developing a variety of mobile apps</h2>
            <h2>Releasing various desktop apps</h2>
            <div>and more</div>
          </div>
        </div>

        <div className="fields-logo">
          <Image
            src={require(`@/assets/imgs/ai.png`)}
            alt="..."
            width={150}
            height={150}
          />

          <Image
            src={require(`@/assets/imgs/web.png`)}
            alt="..."
            width={150}
            height={150}
          />

          <Image
            src={require(`@/assets/imgs/game.png`)}
            alt="..."
            width={150}
            height={150}
          />

          <Image
            src={require(`@/assets/imgs/blockchain.png`)}
            alt="..."
            width={150}
            height={150}
          />

          <Image
            src={require(`@/assets/imgs/mobile.png`)}
            alt="..."
            width={150}
            height={150}
          />

          <Image
            src={require(`@/assets/imgs/desktop.png`)}
            alt="..."
            width={150}
            height={150}
          />
        </div>
      </div>

      <h1 className="text mt-1em mb-1em">
        <b>Our Technical Expertise:</b>
      </h1>

      <div className="icon-pad language">
        <Image
          className="no-radius"
          src={require(`@/assets/icons/c++.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/cshap.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/js.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/ts.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/python.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/go.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/rust.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/solidity.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/dart.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/php.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/swift.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/html5.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/css3.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/sass.png`)}
          alt="..."
          width={64}
          height={64}
        />
      </div>

      <div>
        C++, C#, JavaScript, Typescript, Python, Go/GoLang, Rust, Solidity,
        Dart, PHP, Swift, HTML5, CSS3, SASS
      </div>

      <div className="icon-pad frameworks mt-1em">
        <Image
          className="no-radius"
          src={require(`@/assets/icons/react.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/next.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/react-native.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/vue.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/nuxt.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/svelte.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/gpt.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/tensorflow.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/pytorch.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/keras.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/opencv.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/gemini.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/llama.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/openzeppelin.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/ethereum.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/solana.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/node.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/express.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/nest.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/koa.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/django.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/flask.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/flutter.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/ror.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/electron.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/web3.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/ethers.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/laravel.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/tailwind.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/.net.png`)}
          alt="..."
          width={64}
          height={64}
        />
      </div>

      <div>
        React, Next, React Native, Vue, Nuxt, Svelte, GPT 3/4, TensorFlow,
        PyTorch, Keras, OpenCV, Gemini, LLaMA, OpenZeppelin, Ethereum, Solana,
        NodeJS, ExpressJS, NestJS, KOA, Django, Flask, Ruby on Rails, Electron,
        Web3, EthersJS, Laravel, Tailwind CSS, .Net
      </div>

      <div className="icon-pad environment mt-1em">
        <Image
          className="no-radius"
          src={require(`@/assets/icons/aws.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/godaddy.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/twilio.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/google-cloud.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/firebase.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/google-app-script.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/social-media.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/devops.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/wordpress.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/woocommerce.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/shopify.png`)}
          alt="..."
          width={64}
          height={64}
        />

        <Image
          className="no-radius"
          src={require(`@/assets/icons/stripe.png`)}
          alt="..."
          width={64}
          height={64}
        />
      </div>

      <div>
        AWS, GoDaddy, Twilio, Google cloud, Firebase, Google App Script, Social
        Media, DevOps, WordPress, WooCommerce, Shopify, Stripe
      </div>

      <h1 className="text mt-1em flex justify-center top-border">
        If you are interested in us, feel free to&nbsp;
        <a href="/contact">contact</a>&nbsp;us!
      </h1>

      <div className="mb-1em mt-1em flex justify-center">
        <Image
          src={require(`@/assets/imgs/meeting-01.png`)}
          alt="..."
          width={676}
          height={433}
        />
      </div>

      <h1>
        We are open 24 / 7 to international customers, talents, and investors
        from around the world, and we are working to expand our offices to every
        country.
      </h1>
    </div>
  );
}
