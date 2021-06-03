import Image from "next/image";
import SocialIcons from "../components/socialIcons";
import { SocialIconList1, SocialIconList2 } from "../constants/socialIcons";
import AppComp from "../components/appscomp";
const Home = () => {
  return (
    <>
      <div className="bg-ashDark min-h-screen m-0 page-body">
        <div className="flex overflow-hidden min-h-screen flex-col">
          <div className="bg-topherobackground relative overflow-hidden profile-bkg-hero bg-cover bg-no-repeat">
            <div
              className="bg-ashDark left-0 bottom-auto top absolute right-0 h-full lg:block none"
              style={{
                top: "345px",
                transform: "skew(-7deg,0deg) rotate(-6.5deg)",
              }}
            ></div>
          </div>
          <div
            className="py-0 relative mx-auto"
            style={{ maxWidth: "1500px", width: "90%", color: "#fff" }}
          >
            <div className="text-white relative flex w-full max-w-5xl mx-auto pb-6 lg:bg-themeblack bg-transparent rounded-sm flex-col lg:-mt-56 mt-0 ">
              <div
                className="relative flex pb-6 justify-center"
                style={{ marginTop: "-60px" }}
              >
                <div
                  className="flex overflow-hidden items-end rounded-full lg:h-52 h-40"
                  style={{
                    boxShadow: "0 8px 40px 0 rgb(0 0 0 / 21%)",
                  }}
                >
                  <img
                    src="https://cdn.solo.to/user/a/5f7d66f3481fc9_71708607.jpg"
                    className="lg:h-full h-40"
                  />
                </div>
              </div>
              <div className="flex max-w-xs mx-auto mb-1 flex-col items-center">
                <div className="flex relative">
                  <h1 className="mt-0 mb-4 font-medium text-3xl leading-7 text-center">
                    A S H E R
                  </h1>
                </div>
                <div className="flex mb-4 text-base font-light text-gray-200 -ml-1 justify-center items-center">
                  <img
                    src="https://cdn.solo.to/images/map-pin.svg"
                    className="w-5 h-5 mr-2 inline-block max-w-full"
                  />
                  <div className="text-center">California</div>
                </div>
                <p className="mb-5 text-center">
                  WA Artist Based in California
                </p>
              </div>
              <div className="flex w-full mb-5 px-6 items-center justify-center md:flex-nowrap flex-wrap">
                <div className="flex md:mb-0 mb-2">
                  {SocialIconList1.map((value, key) => {
                    return (
                      <SocialIcons
                        image={value.image}
                        link={value.link}
                        key={key}
                      />
                    );
                  })}
                </div>
                <div className="flex md:mb-0 mb-2">
                  {SocialIconList2.map((value, key) => {
                    return (
                      <SocialIcons
                        image={value.image}
                        link={value.link}
                        key={key}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="py-11 relative flex-1">
            <div
              className="mx-auto flex-col items-center justify-center"
              style={{ width: "90%", maxWidth: "1500px" }}
            >
              <div className="flex w-full max-w-5xl mx-auto flex-row justify-between items-start flex-wrap">
                <div className="flex w-full mb-5 flex-col items-end">
                  <a
                    href="https://soundcloud.app.goo.gl/eT3z88NnBy3DDZkH7"
                    style={{
                      width: "99%",
                      backgroundColor: "#333",
                      paddingLeft: "70px",
                    }}
                    className="text-white text-base no-underline hover:outline-none flex h-20 justify-between items-center relative"
                  >
                    <div
                      className="absolute -left-2.5 flex justify-center items-center border-2 border-none"
                      style={{
                        width: "60px",
                        height: "60px",
                        boxShadow: "0 14px 30px -5px rgb(0 0 0 / 13%)",
                      }}
                    >
                      <div
                        className="absolute rounded opacity-80 middle-style"
                        style={{ backgroundColor: "rgba(248, 100, 14, 0.85)" }}
                      ></div>
                      <img
                        src="https://cdn.solo.to/images/link/soundcloud.svg"
                        className="relative rounded-sm inline-block max-w-full"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <div className="mb-1/2">NEW TUNE</div>
                      <div className="whitespace-nowrap overflow-ellipsis overflow-hidden max-w-full text-gray-300">
                        soundcloud.app.goo.gl/eT3z88NnBy3DDZkH7
                      </div>
                    </div>
                    <div
                      className="flex h-full pr-6 pl-2.5 items-center"
                      style={{
                        transition: "transform .3s ease",
                        flex: "0 0 auto",
                      }}
                    >
                      <img
                        src="https://cdn.solo.to/images/link-button-arrow.svg"
                        className="h-3 inline-block max-w-full"
                      />
                    </div>
                  </a>
                </div>
                <AppComp
                  heading="Stop Asian Hate"
                  boxShadow="0 8px 14px -4px rgb(0 185 100 / 65%)"
                  image="https://cdn.solo.to/images/link/gofundme.svg"
                  href="https://gofundme.com/AAPI"
                  text="gofundme.com/AAPI"
                  backCol="rgba(0,185,100,0.85)"
                />
                <AppComp
                  heading="A S H E R"
                  boxShadow="0 8px 14px -4px rgb(54 115 253 / 65%)"
                  image="https://cdn.solo.to/images/link/icon.svg"
                  href="https://a-s-h-e-r.com/"
                  bgCol="#3673FC"
                  bgNeeded={true}
                  backCol="rgba(54,115,253,0.85)"
                />
                <AppComp
                  heading="Buy 𝗔 𝗦 𝗛 𝗘 𝗥 a coffee"
                  boxShadow="0 8px 14px -4px rgb(194 168 0 / 65%)"
                  image="https://cdn.solo.to/images/link/buymeacoffee.svg"
                  href="https://buymeacoffee.com/theasher"
                  backCol="rgba(194,168,0,0.85)"
                />
                <AppComp
                  heading="𝗔 𝗦 𝗛 𝗘 𝗥 on Darkroom"
                  boxShadow="0 8px 14px -4px rgb(54 115 253 / 65%)"
                  image="https://cdn.solo.to/images/link/icon.svg"
                  href="https://asher.darkroom.tech/"
                  bgCol="#3673FC"
                  bgNeeded={true}
                  backCol="rgba(54,115,253,0.85)"
                />
                <AppComp
                  heading="𝗔 𝗦 𝗛 𝗘 𝗥 on Spoon"
                  boxShadow="0 8px 14px -4px rgb(170 170 170 / 65%)"
                  image="https://cdn.solo.to/images/link/google.svg"
                  href="https://u8kv3.app.goo.gl/ML4g9"
                  text="gofundme.com/AAPI"
                  backCol="rgba(255,255,255,0.85)"
                />
                <AppComp
                  heading="𝗔 𝗦 𝗛 𝗘 𝗥 on LÜM "
                  boxShadow="0 8px 14px -4px rgb(179 57 198 / 65%)"
                  image="https://cdn.solo.to/images/link/lum.svg"
                  href="https://gofundme.com/AAPI"
                  text="https://lum.fm/profile/125945"
                  backCol="rgba(179, 57, 198,0.85)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
