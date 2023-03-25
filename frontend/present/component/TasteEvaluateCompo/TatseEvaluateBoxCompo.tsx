import { theme } from "@/action/theme";
import FlavorCharacterCompo from "../FlavorCharacterCompo/FlavorCharacterCompo";
import TasteRatingCompo from "../TasteRatingCompo/TasteRatingCompo";
import * as style from "./TatseEvaluateBoxCompo.style";

import SpicyHoverBoxPc from "@/assets/image/HoverInfo/SpicyHoverBoxPCSmall.png";
import SweetHoverBoxPC from "@/assets/image/HoverInfo/SweetHoverBoxPCSmall.png";
import SaltyHoverBoxPC from "@/assets/image/HoverInfo/SaltyHoverBoxPCSmall.png";

import SpicyHoverBoxMobile from "@/assets/image/SpicyHoverBoxMobile.png";
import SweetHoverBoxMobile from "@/assets/image/SweetHoverBoxMobile.png";
import SaltyHoverBoxMobile from "@/assets/image/SaltyHoverBoxMobile.png";

import { useState } from "react";
import { HoverBoxImageType } from "@/types/RecipeFlavor/dummy";
import { FlavorObject } from "@/types/Taste/dummy";
import Image from "next/image";

export default function TasteEvaluateBoxCompo() {
  const hoverBoxValue = {
    spicy: {
      pcImage: SpicyHoverBoxPc,
      mobileImage: SpicyHoverBoxMobile,
      left: 7,
    },
    sweet: {
      pcImage: SweetHoverBoxPC,
      mobileImage: SweetHoverBoxMobile,
      left: 20,
    },
    salty: {
      pcImage: SaltyHoverBoxPC,
      mobileImage: SaltyHoverBoxMobile,
      left: 30,
    },
    oily: {
      pcImage: SaltyHoverBoxPC,
      mobileImage: SaltyHoverBoxMobile,
      left: 30,
    },
  };

  const onActive = (type: string, isLeft: boolean) => {
    setHoverBoxImage(hoverBoxValue[type]);

    if (isLeft) {
      //화면 깜빡임 방지
      setLeftInfoShow(false);
      setLeftInfoShow(true);
      return;
    }
    setRightInfoShow(false);
    setRightInfoShow(true);
  };

  const onInactive = () => {
    setLeftInfoShow(false);
    setRightInfoShow(false);
  };

  const [hoverBoxImage, setHoverBoxImage] = useState<HoverBoxImageType>(
    hoverBoxValue.spicy,
  );
  const [leftInfoShow, setLeftInfoShow] = useState(false);
  const [rightInfoShow, setRightInfoShow] = useState(false);
  const [ratingValues, setRatingValues] = useState<Array<number>>(
    Array(4).fill(0),
  );

  const setRatingValue = (value: number, type: string) => {
    let index = 0;

    switch (type) {
      case "sweet":
        index = 1;
        break;
      case "salty":
        index = 2;
        break;
      case "oily":
        index = 3;
        break;
    }
    const valueList = [...ratingValues];
    valueList[index] = value;
    setRatingValues(valueList);
  };

  const ratingObjList: Array<Array<FlavorObject>> = [
    [
      {
        type: "spicy",
        typeToString: "맵기",
        characterTitle: "매워요",
      },
      {
        type: "sweet",
        typeToString: "달기",
        characterTitle: "달아요",
      },
    ],
    [
      {
        type: "salty",
        typeToString: "짜기",
        characterTitle: "짜요",
      },
      {
        type: "oily",
        typeToString: "기름기",
        characterTitle: "기름져요",
      },
    ],
  ];

  return (
    <style.Container>
      <style.Header>
        <div>맛 평가하기</div>
      </style.Header>
      <style.Body>
        <style.InfoBox>
          {leftInfoShow ? (
            <Image src={hoverBoxImage.pcImage} alt="맛 레벨 기준" />
          ) : null}
        </style.InfoBox>
        <div className="row">
          {ratingObjList[0].map((item, index) => {
            return (
              <style.FlavorWrapper key={item.typeToString}>
                <div>
                  <div className="characterTitle">{item.characterTitle}</div>
                  <FlavorCharacterCompo
                    type={item.type}
                    title={""}
                    value={Math.floor(ratingValues[index])}
                    img={theme.characterImg[item.type]}
                    hoverActive={() => onActive(item.type, true)}
                    hoverInactive={onInactive}
                  />
                </div>
                <style.RatingWrapper>
                  <style.ValueText type={item.type}>
                    이 음식의 {item.typeToString}는&nbsp;
                    <span>{ratingValues[index]}</span>
                    &nbsp;입니다
                  </style.ValueText>
                  <TasteRatingCompo
                    type={item.type}
                    setRatingValue={setRatingValue}
                  />
                </style.RatingWrapper>
              </style.FlavorWrapper>
            );
          })}
        </div>
        <style.InfoBox>
          {rightInfoShow ? (
            <Image src={hoverBoxImage.pcImage} alt="맛 레벨 기준" />
          ) : null}
        </style.InfoBox>
        <div className="row">
          {ratingObjList[1].map((item, index) => {
            return (
              <style.FlavorWrapper key={item.typeToString}>
                <div>
                  <div className="characterTitle">{item.characterTitle}</div>
                  <FlavorCharacterCompo
                    type={item.type}
                    title={""}
                    value={Math.floor(ratingValues[index + 2])}
                    img={theme.characterImg[item.type]}
                    hoverActive={() => onActive(item.type, false)}
                    hoverInactive={onInactive}
                  />
                </div>
                <style.RatingWrapper>
                  <style.ValueText type={item.type}>
                    이 음식의 {item.typeToString}는&nbsp;
                    <span>{ratingValues[index + 2]}</span>
                    &nbsp;입니다
                  </style.ValueText>
                  <TasteRatingCompo
                    type={item.type}
                    setRatingValue={setRatingValue}
                  />
                </style.RatingWrapper>
              </style.FlavorWrapper>
            );
          })}
        </div>
      </style.Body>
    </style.Container>
  );
}
