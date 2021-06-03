const AppComp = ({
  image,
  heading,
  text,
  boxShadow,
  href,
  backCol,
  bgNeeded,
  bgCol,
}) => {
  return (
    <div className="flex mb-5 flex-col items-end resp-div-profile">
      <a
        href={href}
        style={{
          width: "98%",
          backgroundColor: "#333",
          paddingLeft: "70px",
        }}
        className="text-white text-base no-underline hover:outline-none flex h-20  justify-between items-center relative"
      >
        <div
          className="absolute -left-2.5 flex justify-center items-center border-2 border-none"
          style={{
            width: "60px",
            height: "60px",
            boxShadow: boxShadow,
          }}
        >
          <div
            className="absolute rounded opacity-80 middle-style"
            style={{ backgroundColor: backCol }}
          ></div>
          {bgNeeded && (
            <div
              class="absolute left-0 right-0 top-0 bottom-0 border-2 border-none"
              style={{ backgroundColor: bgCol }}
            ></div>
          )}
          <img
            src={image}
            className="relative rounded-sm inline-block max-w-full"
          />
        </div>
        <div className="overflow-hidden">
          <div className="mb-1/2">{heading}</div>
          <div className="whitespace-nowrap overflow-ellipsis overflow-hidden max-w-full text-gray-300">
            {text}
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
  );
};
export default AppComp;
