import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';

export default function Subscribe() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Intro />
        <section>
          <div className="container max-w-full mx-auto py-24 px-6">
            <h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
              Subscription
            </h1>
            <p className="text-center text-lg text-gray-700 mt-2 px-6">
              For access to paid content get yourself an amazing subscription
            </p>
            <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded" />

            <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
              <div className="relative block flex flex-col md:flex-row items-center">
                <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                  <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                    <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                      <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                        Monthly
                      </h1>
                      <h2 className="text-sm text-gray-500 text-center pb-6">
                        <span className="text-3xl">€30</span> /mo
                      </h2>
                      Get yourself access with a Monthly subscription.
                    </div>

                    <div className="flex flex-wrap mt-3 px-6" />
                    <div className="block flex items-center p-8  uppercase">
                      <button
                        className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      Quarterly
                    </h1>
                    <h2 className="text-sm text-gray-500 text-center pb-6">
                      <span className="text-3xl">€70</span> /3mo
                    </h2>
                    Get yourself access with a Quarterly subscription.
                  </div>
                  <div className="flex pl-12 justify-start sm:justify-start mt-3" />

                  <div className="block flex items-center p-8  uppercase">
                    <button
                      className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                    >
                      Select
                    </button>
                  </div>
                </div>
                <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                  <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                    <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                      <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                        Yearly
                      </h1>
                      <h2 className="text-sm text-gray-500 text-center pb-6">
                        <span className="text-3xl">€200</span> /ye
                      </h2>
                      Get yourself access with a Year subscription.
                    </div>
                    <div className="flex flex-wrap mt-3 px-6" />

                    <div className="block flex items-center p-8  uppercase">
                      <button
                        className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();
