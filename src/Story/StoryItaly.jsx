import React from "react";
import "../styles.scss";
import { withRouter } from "react-router-dom";

function StoryItaly(props) {
  const { history } = props;

  const hebrow = () => {
    history.push("/StoryHebrow");
  };
  const over =()=>{
    document.getElementById('hebrowLink').style.color="black"
  }
const out=()=>{
  document.getElementById('hebrowLink').style.color="blue"
}
  return (
    <div className="story storyItaly">
      <label className="label">
        Elio Misan
        <span id="hebrowLink" onMouseOut={out} onMouseOver={over} onClick={hebrow} className="italy">
          (לעברית לחץ כאן)
        </span>
      </label>
      <p className="pfather">
        <p>
          Elio Misan nasce il 09 settembre 1939 a Trieste dall’unione tra
          Diamantina Israel e Armando Misan, sposati nella domenica 6 novembre
          1938.
        </p>
        <p>
          Diamantina, Tini per gli amici, è nata a Trieste il 16 agosto 1913. I
          suoi genitori erano Sabatino Israel e Sarina Romano residenti in via
          Ponte,1.
        </p>
        <p>
          Armando è nato a Corfù il 29 gennaio 1909. I suoi genitori erano Elia
          e Stametta Misan residenti in via Capitali 23.
        </p>
        <p>Armando e Diamantina abitavano nel ghetto in via Beccaria 13.</p>
        <p>
          Nel 1943 la famiglia Israel, con la giovane coppia e il figlio Elio
          sono scappati da Trieste. Hanno lasciato la casa senza prendere
          niente. Lasciavano la casa con la tavola apparecchiata per non
          insospettire i vicini e hanno preso il treno per Firenze. Arrivati a
          Firenze le donne e i bambini hanno trovato accoglienza in un convento
          di suore del Carmine. Gli uomini non potevano rimanere perché non
          erano ammessi.
        </p>
        <p>
          Il giorno 26 novembre 1943 ci fu una retata da parte degli italiani
          fascisti e tedeschi. Elio è stato salvato da una suora che lo ha messo
          sotto la sua gonna per nasconderlo.{" "}
        </p>
        <p>
          Elio è stato trasferito dalla suore al orfanatrofio a Montecatini.{" "}
        </p>
        <p>
          Dopo la guerra il nonno Sabatino Israel, accompagnato dall’autista
          Arie dalla Brigata Ebraica, è andato a prendere il nipote Elio dal
          orfanatrofio. Ha dovuto alzare la voce e prenderlo con la forza perché
          all’orfanotrofio non lo volevano lasciare andare.
        </p>
        <p>
          Nonno Sabato e la nonna Sarina si sono salvati e prendevano cura di
          quello che è rimasto dalla famiglia. Sarina è morta dopo la guerra ed
          è stata sepolta al cimitero ebraico a Firenze.{" "}
        </p>
        <p>
          Dopo la guerra i militari americani hanno aiutato le famiglie ed era
          buon periodo. La famiglia di Armando e Elio sono entrati ad abitare in
          un palazzo in piazza delle Beccherie.{" "}
        </p>
        <p>
          Tornati a Trieste Armando, il cognato Sami ed il fratello hanno deciso
          di fare l’Alià ed andare in Israele. Sabato non voleva lasciare Elio
          ha deciso di andare con loro. Son arrivati in Israele il mese di
          maggio 1952.
        </p>
        <p>
          Nonno Sabato è morto in un incidente pochi anni dopo il suo arrivo in
          Israele.
        </p>
        <p>
          In Israele Armando ed Elio vanno a vivere al Kibutz Givat Brenner dove
          c'erano varie famiglie d'italiani.
        </p>
        <p>
          Nel kibutz Elio studia e lavora fino che viene chiamato a fare il
          servizio militare nei 1957 finendo il servizio dopo 2 anni e 5 mesi
          col grado di sergrnte ed entrando a fare parte della riserva militare
          per altri 27 anni
        </p>
        <p>
          Nel mese di Marzo 1966 conosce Marina e si sposano il 20-6 dello
          stesso anno
        </p>
        <p>Il 9-2-68 nasce il primo figlio Shai,</p>
        <p>Il 18'2'69 nasce Eran</p>
        <p>
          Il 3-5-70 Elio e Marina lasciano il kibutz e vanno a vivere a Carmiel.
        </p>
        <p>Il 2-8-71 nasce Adi</p>
        <p>Il 23-6-77 nasce l'ultima figlia Oral.</p>
        <p>
          Dal 1971 lavora a Tzaiclon costruendo e aggiustando pezzi d'aerei
          militari.
        </p>
        <p>
          L'azienda è parte delaa Tasia Avirit di lud dove va a fare vari corsi
          di specializazione.
        </p>
      </p>
    </div>
  );
}
export default withRouter(StoryItaly);
