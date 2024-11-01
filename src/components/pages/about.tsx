/**
 * Page - About page-component
 * @author Jiners Enoheart
 * @published 2024/08/01
 * @modified  2024/08/01
 */

"use client";
import Image from "next/image";

export default function Main() {
  return (
    <div className="page about">
      <div className="flex xs3:flex-col xs2:flex-col xs:flex-col sm:flex-col md:flex-row gap-1em">
        <div className="flex justify-center items-center">
          <Image
            className="no-radius"
            src={require(`@/assets/imgs/logo-01.png`)}
            alt="..."
            width={256}
            height={190}
          />
        </div>

        <div className="flex justify-start flex-col">
          <h1 className="text">
            <b>IWDL</b> is dedicated to becoming a top 100 software company
            within a few years. We are committed to providing comprehensive
            support to individuals, businesses, and countries worldwide through
            innovative software development.
          </h1>
        </div>
      </div>

      <div className="flex xs3:flex-col xs2:flex-col xs:flex-col sm:flex-col md:flex-row gap-1em mt-1em">
        <div className="flex justify-start flex-col flex-grow-100">
          <h1 className="text">
            <b>Our tagline is</b>
          </h1>
          <h2>👍 The better our customer feel, the bigger we get</h2>
          <h2>👍 The more our customers earn, the sooner we succeed</h2>
        </div>

        <div className="flex justify-center items-center flex-grow-1">
          <Image
            className="no-radius"
            src={require(`@/assets/imgs/logo-03.png`)}
            alt="..."
            width={126}
            height={50}
          />
        </div>
      </div>

      <h1 className="text mt-1em text-center">
        If you’re looking to bring your vision to life or seeking returns on
        your investment, feel free to <a href="/contact">contact</a> us!
      </h1>

      <div className="top-border mt-1em">
        <h1 className="text mb-0.5em">
          <b>Founder of IWDL</b>
        </h1>

        <div className="flex xs3:flex-col xs2:flex-col xs:flex-col sm:flex-col md:flex-row gap-1em">
          <div className="flex items-center justify-center">
            <Image
              src={require(`@/assets/imgs/founder.png`)}
              alt="..."
              width={256}
              height={256}
            />
          </div>
          <div>
            <h1 className="text">
              <b>Ronald Haupt</b> (CEO)
            </h1>
            <h1 className="text">
              <b>Degree:</b> M.I.T. (Master of Science in Information
              Technology)
            </h1>
            <h1 className="text">
              <b>Age:</b> 37 (2024)
            </h1>
            <h1 className="text">
              <b>Nationality:</b> U.S. Citizen
            </h1>
            <h1 className="text">
              <b>Experience:</b>
            </h1>
            <h2>
              15 years in the software industry (4 years as Head of Department,
              2 years as Team Leader, 4 years as Senior Engineer)
            </h2>
          </div>
        </div>
      </div>

      <div className="top-border mt-1em">
        <h1 className="text mb-0.5em">
          <b>Our key executives</b>
        </h1>

        <div className="flex flex-wrap justify-center gap-1em">
          <div className="w-full sm:w-1/3 md:w-1/5">
            <div className="flex justify-center">
              <Image
                className="mb-0.5em mt-0.5em"
                src={require(`@/assets/imgs/RonaldHaupt.png`)}
                alt="..."
                width={750}
                height={750}
              />
            </div>
            <h1 className="text text-center">
              <b>Taylor Fuller</b>
            </h1>
            <div className="flex flex-row justify-center items-center gap-0.5em">
              <h1 className=" text-center">CTO</h1>
              <Image
                className="no-radius w-1em h-1em cursor-pointer"
                src={require(`@/assets/imgs/linkedin.png`)}
                alt="..."
                width={64}
                height={64}
                onClick={() =>
                  (location.href = `https://www.linkedin.com/in/taylor-fuller-85b166170/`)
                }
              />
            </div>
            <h1 className="text text-center">
              <b>Nationality:</b>
            </h1>
            <h2 className="text-center"> U.S. Citizen</h2>
          </div>

          <div className="w-full sm:w-1/3 md:w-1/5">
            <div className="flex justify-center">
              <Image
                className="mb-0.5em mt-0.5em"
                src={require(`@/assets/imgs/denys.png`)}
                alt="..."
                width={256}
                height={256}
              />
            </div>
            <h1 className="text text-center">
              <b>Denys Ostroverkh</b>
            </h1>
            <div className="flex flex-row justify-center items-center gap-0.5em">
              <h1 className=" text-center">Lead engineer</h1>
              <Image
                className="no-radius w-1em h-1em cursor-pointer"
                src={require(`@/assets/imgs/linkedin.png`)}
                alt="..."
                width={64}
                height={64}
                onClick={() =>
                  (location.href = `https://www.linkedin.com/in/devsworld-denys/`)
                }
              />
            </div>
            <h1 className="text text-center">
              <b>Nationality:</b>
            </h1>
            <h2 className="text-center"> Ukrainian</h2>
          </div>

          <div className="w-full sm:w-1/3 md:w-1/5">
            <div className="flex justify-center">
              <Image
                className="mb-0.5em mt-0.5em"
                src={require(`@/assets/imgs/AdedayoOnasanya.jpg`)}
                alt="..."
                width={256}
                height={256}
              />
            </div>

            <h1 className="text text-center">
              <b>Adedayo Onasanya</b>
            </h1>
            <div className="flex flex-row justify-center items-center gap-0.5em">
              <h1 className="text-center">Hiring Manager</h1>
              <Image
                className="no-radius w-1em h-1em cursor-pointer"
                src={require(`@/assets/imgs/linkedin.png`)}
                alt="..."
                width={64}
                height={64}
                onClick={() =>
                  (location.href = `https://linkedin.com/in/dayo0629`)
                }
              />
            </div>
            <h1 className="text text-center">
              <b>Nationality:</b>
            </h1>
            <h2 className="text-center"> U.S. Citizen</h2>
          </div>

          <div className="w-full sm:w-1/3 md:w-1/5">
            <div className="flex justify-center">
              <Image
                className="mb-0.5em mt-0.5em"
                src={require(`@/assets/imgs/efantio.png`)}
                alt="..."
                width={256}
                height={256}
              />
            </div>
            <h1 className="text text-center">
              <b>Efan Tyo</b>
            </h1>
            <div className="flex flex-row justify-center items-center gap-0.5em">
              <h1 className="text-center">Design Director</h1>
              <Image
                className="no-radius w-1em h-1em cursor-pointer"
                src={require(`@/assets/imgs/linkedin.png`)}
                alt="..."
                width={64}
                height={64}
                onClick={() =>
                  (location.href = `https://www.linkedin.com/in/efanntyo/`)
                }
              />
            </div>
            <h1 className="text text-center">
              <b>Nationality:</b>
            </h1>
            <h2 className="text-center">Indonesian</h2>
          </div>

          {/*<div className="w-full sm:w-1/3 md:w-1/5">
            <div className="flex justify-center">
              <Image
                className="mb-0.5em mt-0.5em"
                src={require(`@/assets/imgs/Helmut-Castaneda.png`)}
                alt="..."
                width={256}
                height={256}
              />
            </div>
            <h1 className="text text-center">
              <b>Helmut Castaneda</b>
            </h1>
            <div className="flex flex-row justify-center items-center gap-0.5em">
              <h1 className=" text-center">COO</h1>
              <Image
                className="no-radius w-1em h-1em cursor-pointer"
                src={require(`@/assets/imgs/linkedin.png`)}
                alt="..."
                width={64}
                height={64}
                onClick={() =>
                  (location.href = `https://linkedin.com/in/castaneda-helmut-5508131a4`)
                }
              />
            </div>
            <h1 className="text text-center">
              <b>Nationality:</b>
            </h1>
            <h2 className="text-center"> U.S. Citizen</h2>
          </div>*/}
        </div>
      </div>

      <div className="top-border mt-1em">
        <h1 className="text mb-0.5em">
          <b>Our talented staff</b>
        </h1>

        <div className="flex flex-wrap justify-center gap-1em">
          <div className="w-full sm:w-1/3 md:w-1/5">
            <div className="flex justify-center">
              <Image
                className="mb-0.5em mt-0.5em"
                src={require(`@/assets/imgs/Nomura-Hideko.png`)}
                alt="..."
                width={256}
                height={256}
              />
            </div>
            <h1 className="text text-center">
              <b>Nomura Hideko</b>
            </h1>
            <h1 className="text-center">Graphic Designer</h1>
            <h1 className="text-center">U.S. Citizen</h1>
          </div>

          <div className="w-full sm:w-1/3 md:w-1/5">
            <div className="flex justify-center">
              <Image
                className="mb-0.5em mt-0.5em"
                src={require(`@/assets/imgs/Andrii-Pliasunov.png`)}
                alt="..."
                width={256}
                height={256}
              />
            </div>
            <h1 className="text text-center">
              <b>Andrii Pliasunov</b>
            </h1>
            <div className="flex flex-row justify-center items-center gap-0.5em">
              <h1 className="text-center">WEB Engineer</h1>
              {/*<Image
                className="no-radius w-1em h-1em cursor-pointer"
                src={require(`@/assets/imgs/git.png`)}
                alt="..."
                width={64}
                height={64}
                onClick={() =>
                  (location.href = `https://github.com/goodwork0903`)
                }
              />*/}
            </div>
            <h1 className="text-center">Polish</h1>
          </div>

          <div className="w-full sm:w-1/3 md:w-1/5">
            <div className="flex justify-center">
              <Image
                className="mb-0.5em mt-0.5em"
                src={require(`@/assets/imgs/seki-shohei.png`)}
                alt="..."
                width={256}
                height={256}
              />
            </div>
            <h1 className="text text-center">
              <b>Seki Shohei</b>
            </h1>
            <div className="flex flex-row justify-center items-center gap-0.5em">
              <h1 className="text-center">QA</h1>
              {/*<Image
                className="no-radius w-1em h-1em cursor-pointer"
                src={require(`@/assets/imgs/git.png`)}
                alt="..."
                width={64}
                height={64}
                onClick={() =>
                  (location.href = `https://github.com/devsworld36428`)
                }
              />*/}
            </div>
            <h1 className="text-center">Japanese</h1>
          </div>

          <div className="w-full sm:w-1/3 md:w-1/5">
            <div className="flex justify-center">
              <Image
                className="mb-0.5em mt-0.5em"
                src={require(`@/assets/imgs/Serhii-Ivchenko.png`)}
                alt="..."
                width={256}
                height={256}
              />
            </div>

            <h1 className="text text-center">
              <b>Serhii Ivchenko</b>
            </h1>

            <div className="flex flex-row justify-center items-center gap-0.5em">
              <h1 className="text-center">AI Engineer</h1>
              {/*<Image
                className="no-radius w-1em h-1em cursor-pointer"
                src={require(`@/assets/imgs/git.png`)}
                alt="..."
                width={64}
                height={64}
                onClick={() =>
                  (location.href = `https://github.com/topdev19224`)
                }
              />*/}
            </div>
            <h1 className="text-center">Ukrainian</h1>
          </div>
        </div>
      </div>

      <h1 className="text mt-1em">
        We are an international company that values diversity and inclusivity,
        welcoming talented individuals from all backgrounds,{" "}
        <b>regardless of nationality, race, or ethnicity</b>. Our global group
        reflects our commitment to fostering a culture of collaboration and
        innovation.
      </h1>

      <h1 className="text text-center mt-1em">
        If you are interested in, feel free to <a href="/contact">contact</a>{" "}
        us!
      </h1>
    </div>
  );
}
