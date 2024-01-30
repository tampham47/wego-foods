import styled from "styled-components";
import { Food } from "../types/Food";
import { Star, Gift, Percent } from "react-feather";

const ScCard = styled.div`
  position: relative;
`;
const ScPromotion = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 40px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  text-align: center;
  border-bottom-right-radius: 12px;
`;
const ScPromotionGift = styled(ScPromotion)`
  background-color: #00b1ff;
`;
const ScPromotionOneOne = styled(ScPromotion)`
  background-color: #ff696f;
`;
const ScPromotionDiscount = styled(ScPromotion)`
  background-color: #8f64ff;
`;
const ScCoverWrapper = styled.div`
  height: 180px;
  position: relative;
  overflow: hidden;
`;
const ScCover = styled.img`
  width: 100%;
  margin-top: 50%;
  transform: translateY(-50%);
`;
const ScBody = styled.div`
  padding: 12px;
`;
const ScTitle = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
`;
const ScInfoList = styled.div`
  display: flex;
`;
const ScBadge = styled.div`
  margin-right: 12px;
  background-color: #f7f8fa;
  border-radius: 4px;
  padding: 2px 10px;
  font-size: 13px;
`;

export const Card = ({ item }: { item: Food }) => {
  return (
    <ScCard>
      {item.promotion === "discount" ? (
        <ScPromotionDiscount>
          <Percent size={14} />
        </ScPromotionDiscount>
      ) : null}
      {item.promotion === "1+1" ? (
        <ScPromotionOneOne>1+1</ScPromotionOneOne>
      ) : null}
      {item.promotion === "gift" ? (
        <ScPromotionGift>
          <Gift size={14} />
        </ScPromotionGift>
      ) : null}

      <ScCoverWrapper>
        <ScCover src={item.imageUrl} />
      </ScCoverWrapper>
      <ScBody>
        <ScTitle>{item.restaurant}</ScTitle>
        <ScInfoList>
          <ScBadge>
            <Star size={13} /> {item.rating.toFixed(1)}
          </ScBadge>
          <ScBadge>
            {item.minCookTime}-{item.maxCookTime} min
          </ScBadge>
        </ScInfoList>
      </ScBody>
    </ScCard>
  );
};
