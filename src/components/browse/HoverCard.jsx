import { ContentHover, HoverImage, PlayIcon, DownArrow, Title } from "../../styles/browseStyle/listStyle";
import { Flex, Rating, Adult, NonAdult } from "../../styles/globalStyles";
import Trailer from "../../helper/trailerButton";
import { IMG_PATH } from "../../constants/apiConstants";
import { useNavigate } from "react-router";
import Buttons from "../../helper/buttons";
import useWindowDimensions from "../../hooks/useWindowDimension-hook";

const HoverCard = ({ data, param, type }) => {
    const navigate = useNavigate()
    const { width } = useWindowDimensions();


    let imageWidth
    if (width > 900 && width < 1200) {
        imageWidth = 160;
    }
    if (width >= 1200 && width < 1300) {
        imageWidth = 180;
    }
    if (width >= 1300 && width < 1400) {
        imageWidth = 190;
    }
    if (width >= 1400 && width < 1500) {
        imageWidth = 200;
    }
    if (width >= 1500 && width < 1600) {
        imageWidth = 210;
    }
    if (width >= 1600 && width < 1700) {
        imageWidth = 230;
    }
    if (width >= 1700 && width < 1800) {
        imageWidth = 250;
    }
    if (width >= 1800 && width < 1900) {
        imageWidth = 270;
    }
    if (width >= 1900 && width < 2000) {
        imageWidth = 290;
    }
    if (width >= 2000 && width < 2100) {
        imageWidth = 300;
    }
    if (width >= 2100 && width < 2200) {
        imageWidth = 310;
    }
    if (width >= 2200 && width < 2300) {
        imageWidth = 330;
    }
    if (width >= 2300 && width < 2400) {
        imageWidth = 340;
    }
    if (width >= 2400 && width < 2500) {
        imageWidth = 355;
    }
    if (width >= 2500 && width < 2600) {
        imageWidth = 370;
    }
    if (width >= 2600 && width < 2700) {
        imageWidth = 385;
    }

    return <>
        {data && <ContentHover
            style={{ minWidth: `${imageWidth + 120}px`, maxWidth: `${imageWidth + 120}px` }}
            transform={'translateX(-17%)'}
            >
            
            <Trailer id={data.id}>
                <HoverImage
                    src={`${IMG_PATH}/${data.backdrop_path}`}
                />
            </Trailer>
            <div>
                <Title>{data.title || data.name}</Title>
                <Flex spaceBetween padding="1rem 1rem">
                    <Flex gap="0.5rem">
                        <Trailer id={data.id}>
                            <PlayIcon />
                        </Trailer>
                        <Buttons type={type} item={data} />
                    </Flex>
                    <DownArrow
                        onClick={() => {
                            navigate({
                                search: `?q=${param}&${type}=${data.id}`
                            })
                        }}
                    />
                </Flex>
                <Flex gap="1rem" padding="0 1rem 1rem 1rem" alignCenter>
                    <Rating>{`Rating ${data.vote_average.toFixed(1)}`}</Rating>
                    {false ? (
                        <Adult>A</Adult>
                    ) : (
                        <NonAdult>U/A 16+</NonAdult>
                    )}
                </Flex>
            </div>
        </ContentHover>}
    </>

}

export default HoverCard
