import React from react;

export const Carousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    {/* <img class="d-block w-100" src="..." alt="First slide"> */}
                </div>
                <div className="carousel-item">
                    {/* <img class="d-block w-100" src="..." alt="Second slide"> */}
                </div>
                <div className="carousel-item">
                    {/* <img class="d-block w-100" src="..." alt="Third slide"> */}
                </div>
            </div>
        </div>
    )
}
