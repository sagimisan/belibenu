import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
const images = [
  "/img/Brit Mila AViv.jpg",
  "/img/compleanno dei 70 anni Elio 2009.jpg",
  "/img/compleanno 70 di Elio.jpg",
  "/img/hanuka.jpg",
  "/img/hanuka2.jpg",
  "/img/Elio e Marina nel brit di Noam.jpg",
  "/img/Elio a Selcum 2002.jpg",
  "/img/nono.jpg",
  "/img/sagiBarMitzva.jpg",
  "/img/elioNYsagi.jpg",
  "/img/ASirmionecolnonno.jpg",
  "/img/Bar Mitzva Saghi.jpg",
  "/img/nonoNnofar.jpg",
  "/img/misan1.jpg",
  "/img/misans.jpg",
  "/img/batMitzvaNofar.jpg",
  "/img/nonoNsagi.jpg",
  "/img/elioNsagi.jpg",
  "/img/elioNnonaNnofar.jpg",
  "/img/nonoNadi.jpg",
  "/img/nonoNnonaNadi.jpg",
  "/img/pariente.jpg",
  "/img/nono2.jpg",
  "/img/elioNmarina.jpg",
  "/img/nonoNnona.jpg",
  "/img/elioNlior.jpg",
  "/img/Elio con Aviv in Nave Hof.jpg",
  "/img/Elio e Marina 2009 compleanno  70 Elio.jpg",
  "/img/Elat 2007.jpg",
  "/img/Elio con Shai nell_ospedale di ricovero qualche mese prima del bar mitzva di yahav.jpg",
  "/img/giocando col computer 2007.jpg",
  "/img/Elio e Marina uscendo dalla sala Pranzo Givat Brenner 1966.jpg",
  "/img/Festa di fine scuole medie Elio.jpg",
  "/img/Diamantina Israel Anna Samy con Elio Misan.jpg",
  "/img/elio.jpg",
  "/img/elio2.jpg",
  "/img/Elio a Givat Grenner 1959.jpg",
  "/img/Diamantina  e Armando Misan.jpg",
  "/img/Diamantina Elio e nonno Sabato Israel.jpg",
  "/img/Diamantina Israel Elio in carrozzina Anna e Sabino.jpg",
  "/img/Diamantina e Elio Misan.jpg"
];
class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoItem: null,
      isOpen: false,
    };
  }

  render() {
    const { photoItem, isOpen } = this.state;
    return (
      <div className="gallery">
        <div className="inner-width">
          <h2>תמונות המשפחה</h2>
        </div>
        <div className="border"></div>
        <div className="pictures">
          {images.map((item) => {
            return (
              <img
                className="img"
                src={item}
                alt=""
                type="button"
                onClick={() => this.setState({ isOpen: true ,photoItem:item})}
              ></img>
            );
          })}
          {isOpen && (
            <Lightbox
              mainSrc={photoItem}
              onCloseRequest={() => this.setState({ isOpen: false })}
            />
          )}
        </div>
      </div>
    );
  }
}

export default GalleryPage;
