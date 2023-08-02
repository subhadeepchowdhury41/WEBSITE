// import React, { useRef, useEffect } from "react";
// import "./page.css";
// import Image from "next/image";
// import logo from "../../../assets/gallery/republic/1.jpg";

// // type Props = {}

// export default function Sidebar({ array }) {
//   const divRef = useRef < HTMLDivElement > null;
//   useEffect(() => {
//     if (divRef.current) {
//       // Calculate 30% of the scrollable height
//       const scrollableHeight = divRef.current.scrollHeight;
//       const scrollToPosition = (30 / 100) * scrollableHeight;

//       // Scroll to the calculated position
//       divRef.current.scrollTop = scrollToPosition;
//     }
//   }, [divRef]);
//   return (
//     <div ref={divRef}>
//       <div className="gallery-side">
//         {arr[0].images.map((index) => {
//           return (
//             <>
//               <div className="gallery-side-card">
//                 <div className={array[index.id]?.active ? "active" : ""}></div>
//                 <div className="gallery-side-card-box">
//                   <a href={index.link}>
//                     <Image
//                       className="gallery-side-image"
//                       src={require(`../../../assets/gallery/${index.url}.jpg`)}
//                       alt=""
//                     />
//                   </a>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import React, { useRef, useEffect } from "react";
import "./page.css";
import Image from "next/image";

const arr = [
  {
    images: [
      {
        url: "ppc/1",
        id: 0,
        link: "/about/gallery/parikshapecharcha2022",
      },
      {
        url: "republic/1",
        id: 1,
        link: "/about/gallery/republicday2022",
      },
      {
        url: "ppc/1",
        id: 2,
        link: "/about/gallery/iiitkalyanionlineevents",
      },
      {
        url: "republic/1",
        id: 3,
        link: "/about/gallery/parikshapecharcha2022",
      },
      {
        url: "ppc/1",
        id: 4,
        link: "/about/gallery/iiitkalyanionlineevents",
      },
      {
        url: "republic/1",
        id: 5,
        link: "/about/gallery/parikshapecharcha2022",
      },
      {
        url: "ppc/1",
        id: 6,
        link: "/about/gallery/iiitkalyanionlineevents",
      },
      {
        url: "republic/1",
        id: 7,
        link: "/about/gallery/parikshapecharcha2022",
      },
    ],
  },
];

export default function Sidebar({ array, scroll }) {
  const divRef = useRef();

  useEffect(() => {
    if (divRef.current) {
      // Calculate 30% of the scrollable height
      const scrollableHeight = divRef.current.scrollHeight;
      const scrollToPosition = (scroll / 100) * scrollableHeight;

      // Scroll to the calculated position
      divRef.current.scrollTop = scrollToPosition;
    }
  }, [divRef]);

  return (
    <div ref={divRef} className="gallery-side">
      {arr[0].images.map((index) => (
        <div className="gallery-side-card" key={index.id}>
          <div className={array[index.id]?.active ? "active" : ""}></div>
          <div className="gallery-side-card-box">
            <a href={index.link}>
              <Image
                className="gallery-side-image"
                src={require(`../../../assets/gallery/${index.url}.jpg`)}
                alt=""
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
