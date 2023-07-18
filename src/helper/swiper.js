import { Swiper } from "swiper/react";
import { Navigation, Scrollbar} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { nanoid } from "nanoid";
import {
  ButtonDiv,
  ArrowBack,
  ArrowNext,
} from "../styles/profile/manage-icons-style";
import { useState } from "react";



const Swipe = (props) => {
  const nextId = `${"a" + nanoid(3)}`;
  const prevId = `${"b" + nanoid(3)}`;
  const [hidePrev, setHidePrev] = useState(true);

  return (
    <>
      {props.navigation && (
        <>
          <ButtonDiv prev alignCenter justifyCenter hidePrev={hidePrev}>
            <button className={`${prevId} prev`}>
              <ArrowBack />
            </button>
          </ButtonDiv>

          <ButtonDiv next alignCenter justifyCenter>
            <button className={`${nextId} next`}>
              <ArrowNext />
            </button>
          </ButtonDiv>
        </>
      )}

      <Swiper
        spaceBetween={props.spaceBetween}
        slidesPerView={props.slidesPerView}
        slidesPerGroup={props.slidesPerGroup}
        navigation={{ nextEl: `.${nextId}`, prevEl: `.${prevId}` }}
        onNavigationNext={() => {
          setHidePrev(false);
        }}
        loopFillGroupWithBlank={props.loopFillGroupWithBlank}
        modules={[Navigation, Scrollbar]}
        speed={800}
        loop={props.loop}
        allowTouchMove={false}
      >
        {props.children}
      </Swiper>
    </>
  );
};

export default Swipe;
