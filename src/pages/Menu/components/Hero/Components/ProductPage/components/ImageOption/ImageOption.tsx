import { ImageOptionStyle } from "./style" 

type imageOptionProps = {
    imageIndex?: string;
    handleChangeImage?: ()=> void;
}
export const ImageOption = ({imageIndex, handleChangeImage} : imageOptionProps) => {
    return (
           <ImageOptionStyle>
                    <img 
                        className="img-mini" 
                        src={imageIndex}
                        onMouseEnter={handleChangeImage}
                        />
            </ImageOptionStyle>
    )
}