import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";

// FlagIcon component to render a flag image or a FontAwesome icon
const FlagIcon = ({ flagSrc, altText }) => {
  if (flagSrc) {
    return (
      <Image
        src={flagSrc}
        alt={altText || "Country flag"}
        width={24}
        height={16}
        className="inline-block"
      />
    );
  } else {
    return <FontAwesomeIcon icon={faEarth} className="inline-block w-6 h-4" />;
  }
};

export default FlagIcon;
