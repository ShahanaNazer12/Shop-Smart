import { Carousel, Image } from "react-bootstrap";
import pic from "../assets/carousalpic/images.jpeg"

function HomeCarousal() {
  
    return(
      

        <Carousel>
      <Carousel.Item>

  <Image className="w-100 " style={{height:"500px"}} src="https://thumbs.dreamstime.com/b/shopping-cart-loaded-packages-set-against-rainy-cityscape-glowing-bokeh-lights-night-creating-moody-cinematic-391882156.jpg?w=992"/>
  {/* <Image className="w-100" src={pic}/> */}
  

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

      <Image className="w-100 "style={{height:"500px"}} src="https://c1.wallpaperflare.com/preview/952/204/976/shopping-cart-shopping-purchasing-candy.jpg"/>
      {/* <Image className="w-100" src="/carousalpic/pic2.jpg"/> */}
       
        
      

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<Image className="w-100 "style={{height:"500px"}} src="https://thumbs.dreamstime.com/b/miniature-shopping-cart-wet-city-street-night-close-up-placed-illuminated-colorful-bokeh-lights-symbolizing-urban-367771976.jpg?w=992"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    )

}
export default HomeCarousal;