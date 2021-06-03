const SocialIcons = ({ link, image }) => {
  return (
    <a
      href={link}
      className="border-gray-400 mt-o mx-2 p-0 border border-solid rounded-full transition w-11 h-11 max-w-full inline-block"
    >
      <img
        className="text-ashDark rounded-full inline-block max-w-full"
        src={image}
        style={{ filter: "invert(1)" }}
      />
    </a>
  );
};
export default SocialIcons;
