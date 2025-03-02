/**
 * Page - Portfolio page-component
 * @author Soft Voyager
 * @published 2024/07/31
 * @modified  2024/07/31
 */
"use client";
import Image from "next/image";

export default function Main() {
  return (
    <div className="page portfolio">
      <h1 className="text mb-1em">
        With various payment solutions, we can{" "}
        <b>accept orders from any country</b> and{" "}
        <b>collaborate with people of all nationalities</b>.
      </h1>

      <div className="mb-1em">
        <Image
          src={require(`@/assets/imgs/team-02.png`)}
          alt="..."
          width={1280}
          height={390}
        />
      </div>

      <h1 className="text">
        <b>
          <u>
            <i>IWDL</i>
          </u>
        </b>{" "}
        has successfully completed several projects and secured significant
        orders to date.
      </h1>

      <div className="mt-1em gap-1em flex xs3:flex-col xs2:flex-col xs:flex-col sm:flex-row top-border">
        <div className="flex justify-center items-center">
          <Image
            src={require(`@/assets/imgs/cairsplan.png`)}
            alt="..."
            width={1100}
            height={2700}
          />
        </div>

        <div className="flex justify-center flex-col">
          <h1 className="text">
            <b>
              <i>CAIRS PLAN</i>
            </b>
          </h1>
          <h1 className="text">
            <b>End of Participation</b>: September 29, 2024
          </h1>
          <h1 className="text">
            <b>URL</b>: <a href="https://cairsplan.com/">Click here</a>
          </h1>

          <h1 className="text-justify text">
            Our Asian team has contributed to brighter futures by supporting healthcare services that bring better vision to all. Let us give special recognition to the brilliance of <b>Dr. David Gunn</b> and <b>Dr. Brendan Cronin</b>, whose expertise and innovative thinking led to the development of this remarkable platform. Thanks to their vision, CAIRSPlan.com now enables surgeons worldwide to plan Corneal Allogenic Intrastromal Ring Segments (CAIRS) surgeries with precision and ease.
          </h1>

          <h1 className="text-justify text">
            And we sincerely hope you will kodos our talented developers, who have worked tirelessly to enhance this service, making it even more user-friendly and effective. Their expertise in <b>WebGL</b> and <b>Computer Vision</b> played a vital role in refining the design and experimental environment of this service.
          </h1>
        </div>
      </div>

      <div className="mt-1em gap-1em flex xs3:flex-col xs2:flex-col xs:flex-col sm:flex-row top-border">
        <div className="flex justify-center flex-col">
          <h1 className="text">
            <b>
              <i>THOR Chain</i>
            </b>
          </h1>
          <h1 className="text">
            <b>End of Participation</b>: August 22, 2024
          </h1>
          <h1 className="text">
            <b>URL</b>: <a href="https://www.thorchain.com/">Click here</a>
          </h1>

          <h1 className="text-justify text">
            Two members of our Eastern European team were deeply involved in the
            successful update of the Thorchain.com website to accommodate the
            scheduled network upgrade for its native token, RUNE. Over the
            course of 2 months, these skilled professionals contributed their
            expertise, ensuring that all aspects of the upgrade were
            meticulously planned and implemented. Their efforts culminated in
            the successful completion of the project on August 22, 2024.
          </h1>

          <h1 className="text-justify text">
            The successful delivery of this project underscores exceptional
            capabilities of IWDL in harnessing blockchain technologies,
            including <b>DeFi</b> and <b>DEX</b> platforms. Proficiency of our
            company extends from foundational <b>infrastructure</b> development
            to the intricate nuances of <b>smart contract</b> implementation.
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={require(`@/assets/imgs/thorchain.png`)}
            alt="..."
            width={960}
            height={2061}
          />
        </div>
      </div>

      <div className="mt-1em gap-1em flex xs3:flex-col xs2:flex-col xs:flex-col sm:flex-row top-border">
        <div className="flex justify-center items-center">
          <Image
            src={require(`@/assets/imgs/muah-ai.png`)}
            alt="..."
            width={1050}
            height={2890}
          />
        </div>

        <div className="flex justify-center flex-col">
          <h1 className="text">
            <b>
              <i>Muah AI</i>
            </b>
          </h1>
          <h1 className="text">
            <b>End of Participation</b>: August 10, 2024
          </h1>
          <h1 className="text">
            <b>URL</b>: <a href="https://muah.ai/">Click here</a>
          </h1>

          <h1 className="text-justify text">
            Our company had the privilege of upgrading the renowned
            communication app,{" "}
            <b>
              <u>
                <i>Muah AI</i>
              </u>
            </b>
            , which was spearheaded by a distinguished team including{" "}
            <b>Mark</b>, <b>Dr. Diana</b>, and <b>Ashley</b> — each a notable
            figure in their respective fields of entrepreneurship, research, and
            marketing. This project allowed us to enhance an application that
            provides a rich and engaging experience for social interactions
            through various AI-driven virtual personas.
          </h1>

          <h1 className="text-justify text">
            Through our work on{" "}
            <b>
              <u>
                <i>Muah AI</i>
              </u>
            </b>
            , we gained invaluable and professional experience in implementing
            advanced AI functionalities, further solidifying our capabilities in
            this domain. Additionally, our expertise in full-stack web, mobile,
            and desktop application development has significantly advanced. This
            journey has strengthened our position as a leading professional
            software solutions company, demonstrating our commitment to
            excellence and innovation in the industry.
          </h1>
        </div>
      </div>

      <div className="mt-1em gap-1em flex xs3:flex-col xs2:flex-col xs:flex-col sm:flex-row top-border">
        <div className="flex justify-center flex-col">
          <h1 className="text">
            <b>
              <i>Ultra MTS</i>
            </b>
          </h1>
          <h1 className="text">
            <b>Published</b>: August 05, 2024
          </h1>
          <h1 className="text">
            <b>URL</b>: <a href="https://u-mts.com/">Click here</a>
          </h1>

          <h2 className="text-justify">
            We recently had the privilege of developing and deploying the
            introduction and advertising web service for Ultra MTS. Our team was
            particularly drawn to Personal Rapid Transit (PRT) system of Ultra
            MTS due to its innovative approach to urban transportation. The
            commitment of this system to zero on-site emissions aligns perfectly
            with our vision of supporting a cleaner environment. Additionally,
            the AI-driven safety features ensure a secure and seamless travel
            experience, while the accessibility features of the system
            demonstrate a thoughtful design for passengers with disabilities.
          </h2>
          <h2 className="text-justify">
            Our decision to launch this service was driven not only by its
            cost-effectiveness but also by the profound benefits it offers to
            both individuals and the planet. By leveraging our expertise in
            full-stack web development, we crafted a platform that effectively
            communicates these advantages, ensuring that pioneering technology
            of Ultra MTS is showcased in a way that resonates with a broad
            audience.
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={require(`@/assets/imgs/ultra-mts.png`)}
            alt="..."
            width={1043}
            height={2616}
          />
        </div>
      </div>

      <div className="mt-1em gap-1em flex xs3:flex-col xs2:flex-col xs:flex-col sm:flex-row top-border">
        <div className="flex justify-center items-center">
          <Image
            src={require(`@/assets/imgs/AutiFill-01.png`)}
            alt="..."
            width={512}
            height={1274}
          />
        </div>

        <div className="flex justify-center flex-col">
          <h1 className="text">
            <b>
              <i>Auti Fill</i>
            </b>
          </h1>
          <h1 className="text">
            <b>Published</b>: On going
          </h1>
          <h1 className="text">
            <b>URL</b>:{" "}
            <a href="https://reimbursement-eight.vercel.app">Click here</a>
          </h1>
          <h2 className="text-justify">
            This service automates the analysis of financial document photos by
            extracting key information, calculating daily or weekly sums, and
            generating formatted outputs. It leverages advanced technologies
            including Machine Learning (ML), Natural Language Processing (NLP),
            Optical Character Recognition (OCR), and full-stack web development.
          </h2>
        </div>
      </div>

      {/*<div className="mt-1em gap-1em flex xs3:flex-col xs2:flex-col xs:flex-col sm:flex-row top-border">
        <div className="flex justify-center flex-col">
          <h1 className="text">
            <b>
              <i>Maya IQ</i>
            </b>
          </h1>
          <h1 className="text">
            <b>Published</b>: On going
          </h1>
          <h1 className="text">
            <b>URL</b>: <a href="http://45.137.155.124:3000/">Click here</a>
          </h1>

          <h2 className="text-justify">
            This service is to support individuals, companies, and enterprises
            by providing cutting-edge and actionable business insights through a
            continuously evolving AI engine. The AI updates daily, ensuring that
            users have access to the most current and relevant information.
            Additionally, the platform offers a secure and reliable environment
            for conducting transactions, with every agreement protected by legal
            commitments to ensure trust and credibility.
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={require(`@/assets/imgs/MayaIQ-01.png`)}
            alt="..."
            width={686}
            height={1400}
          />
        </div>
      </div>*/}

      <div className="mt-1em gap-1em flex xs3:flex-col xs2:flex-col xs:flex-col sm:flex-row top-border">
        <div className="flex justify-center flex-col">
          <h1 className="text">
            <b>
              <i>Smarter SWAP</i>
            </b>
          </h1>
          <h1 className="text">
            <b>Published</b>: On going
          </h1>
          <h1 className="text">
            <b>URL</b>: <a href="http://94.131.101.169:3000/">Click here</a>
          </h1>

          <h2 className="text-justify">
            Smarter Swap is an advanced software solution that allows users to
            seamlessly replace faces in photos and videos. Developed using a
            combination of OpenCV, TensorFlow, and Keras, and programmed in both
            C++ and Python, Smarter Swap empowers users to creatively reimagine
            themselves in any environment, scenario, or fantasy.
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={require(`@/assets/imgs/smartswap.png`)}
            alt="..."
            width={600}
            height={770}
          />
        </div>
      </div>

      <div className="mt-1em gap-1em flex xs3:flex-col xs2:flex-col xs:flex-col sm:flex-row top-border">
        <div className="flex justify-center items-center">
          <Image
            src={require(`@/assets/imgs/aff-01.png`)}
            alt="..."
            width={620}
            height={400}
          />
        </div>

        <div className="flex justify-center flex-col">
          <h1 className="text">
            <b>
              <i>Assistant For Freelancer</i>
            </b>{" "}
            (AFF)
          </h1>
          <h1 className="text">
            <b>Published</b>: July 20, 2024
          </h1>
          <h1 className="text">
            <b>URL</b>: Private
          </h1>

          <h2 className="text-justify">
            This service supports freelancers and teams in collaborating,
            sharing ideas and skills, and tracking progress on a daily, weekly,
            monthly, quarterly, yearly, and entirely basis, both individually
            and as a group.
          </h2>
        </div>
      </div>

      <div className="mt-1em gap-1em flex xs3:flex-col xs2:flex-col xs:flex-col sm:flex-row top-border">
        <div className="flex justify-center flex-col">
          <h1 className="text">
            <b>
              <i>Empire Farm</i>
            </b>{" "}
            (AFF)
          </h1>
          <h1 className="text">
            <b>Published</b>: August 11, 2024
          </h1>
          <h1 className="text">
            <b>URL</b>: Private
          </h1>

          <h1 className="text-justify text">
            Have you ever wanted to grow richer and richer through hard work
            like a farmer? No need to sweat, only passion is needed as a
            smartphone user if we go together. Our company has already paved the
            way to live like this. Our 2D mobile game will give you that
            opportunity. But do not forget the hard work of our developers who
            burned the midnight oil to make it happen.
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={require(`@/assets/imgs/empire-farm.png`)}
            alt="..."
            width={620}
            height={400}
          />
        </div>
      </div>

      <h1 className="text mt-1em top-border">
        <b>
          <u>
            <i>IWDL</i>
          </u>
        </b>{" "}
        is continually expanding its assets, including software resources,
        business partnerships, and successful services, with the goal of
        becoming a top 100 software company within a few years. If you are
        interested in joining us on this journey, feel free to{" "}
        <a href="/contact">contact</a> us. Your contributions to software
        development will be rewarded with both good reputation and revenue.
      </h1>
    </div>
  );
}
