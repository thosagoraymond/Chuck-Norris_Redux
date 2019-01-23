import React from 'react';
import { Card, CardTitle, CardImgOverlay, CardImg } from 'reactstrap';
import img from '../assets/img/wallpaper.jpg'

 class Joke extends React.Component {

  render() {
    const { joke } = this.props;
 
    return (
      <div style={{paddingTop: '20px'}}>
        <div >
          {
            <Card  inverse className="cat2" >
                <CardImg className="pic" width="100%" src={img} alt="Card image cap" />
                  <CardImgOverlay>
                      <CardTitle  className="text">{joke.value}</CardTitle>
                  </CardImgOverlay>  
            </Card>
          }
        </div>
      </div>
    );
  }
}
export default (Joke);