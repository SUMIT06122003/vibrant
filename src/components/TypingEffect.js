import React from "react";
import Typed from "typed.js";

export default function TypingEffect() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "International Freight Forwarding",
        "Custom Brokerage",
        "Transportation",
        "Warehousing & Global Shipping",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return <span ref={el} style={{ color: "#ffb400", fontWeight: "bold" }} />;
}
