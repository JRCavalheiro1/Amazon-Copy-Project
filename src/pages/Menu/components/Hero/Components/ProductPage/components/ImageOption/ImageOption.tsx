import { ImageOptionStyle } from "./style" 

type imageOptionProps = {
    imageIndex?: string;
}
export const ImageOption = ({imageIndex} : imageOptionProps) => {
    return (
           <ImageOptionStyle>
                    <img className="img-mini" src={imageIndex}/>
            </ImageOptionStyle>
    )
}