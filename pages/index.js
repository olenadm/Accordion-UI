import Head from "next/head";
import Image from "next/image";

import { getChallenges } from "./api/hello";
import AccordionList from "@/components/AccordionList";
import { useState, useEffect } from "react";

export default function Home(props) {
  const { challenges } = props;

  const tag = challenges.tag;
  const title = challenges.title;
  const [image, setImage] = useState(challenges.items[0].image);

  function handleToggle(imageURL) {
    setImage((oldl) => imageURL);
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Our challenges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="col-sm-6">
        <Image
          src={image}
          alt=""
          width={650}
          height={570}
          className="img-fluid main-img"
          priority={true}
        />
      </div>
      <div className="col-sm-6">
        <div className="float-lg-end accordion-wrapper">
          <div>
            <span>{tag}</span>
            <h1 className="lh-1 mt-3 mb-4">{title}</h1>
          </div>
          <AccordionList items={challenges.items} onToggle={handleToggle} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const challenges = await getChallenges();

  return {
    props: {
      challenges: challenges,
    },
  };
}
