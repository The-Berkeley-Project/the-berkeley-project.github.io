import { createRoot } from 'react-dom/client';
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function getImageUrl(filename) {
    const lastPart = filename.split("/")[2]
    const imageName = lastPart.split(".")[0]
    const ext = lastPart.split(".")[1]
    return new URL(`../img/gallery-pics/${imageName}.${ext}?preset=small&src`, import.meta.url).href
}

/**
 * @return {{width: number, height: number}}
 * @param {GalleryImage} img
 */
function getImageDims(img) {
    if (img.height && img.width && img.height > 0) {
        return {
            width: img.width,
            height: img.height
        }
    }

    const matches = img.src.match(/-(\d{2,})x(\d{2,})\./)

    if (matches.length === 3) {
        return {
            width: Math.round(matches[1] * 1.15),
            height: matches[2]
        }
    }

    return {
        width: 2000 + Math.random() * 500,
        height: 1500 + Math.random() * 500
    }
}

const _images = imagesToShow.map(_img => ({
    original: _img.original || _img.src,
    src: getImageUrl(_img.src),

    ...getImageDims(_img),

    ...Array.isArray(_img.tags) ? {
        tags: _img.tags.map(tag => {
            if (typeof tag === "string") {
                return {
                    title: tag,
                    value: tag
                }
            }
            return tag
        })
    } : {}
}))

const LazyImage = (props) => {
    return <LazyLoadImage {...props.imageProps}/>
};

function GalleryContainer() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const isPhone = useMediaQuery({
        query: '(max-width: 480px)'
    })

    const [index, setIndex] = useState(-1);
    const [images, setImages] = useState(_images);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index, _) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <>
            <div style={{
                padding: isDesktopOrLaptop ? "25px 50px": isPhone ? 5: 25,
                maxWidth: isDesktopOrLaptop ? 355 * 3 : 700,
                margin: "auto"
            }}>
                <Gallery
                    images={images}
                    onClick={handleClick}
                    enableImageSelection={false}
                    rowHeight={isDesktopOrLaptop ? 200 : isPhone ? 150: 300}
                    margin={isDesktopOrLaptop ? 5 :  isPhone ? 2: 3}
                    thumbnailImageComponent={LazyImage}
                />
            </div>
            {!!currentImage && (
                /* @ts-ignore */
                <Lightbox
                    mainSrc={currentImage.original}
                    imageTitle={currentImage.caption}
                    mainSrcThumbnail={currentImage.src}
                    nextSrc={nextImage.original}
                    nextSrcThumbnail={nextImage.src}
                    prevSrc={prevImage.original}
                    prevSrcThumbnail={prevImage.src}
                    onCloseRequest={handleClose}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </>
    );
}

const domNode = document.getElementById('gallery-root');
const root = createRoot(domNode);
root.render(<GalleryContainer/>);
