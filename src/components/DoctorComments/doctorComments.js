import React from 'react';
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";

const DoctorComments = (props) => {
    return(
        <div className="ui comments mb-4">
            <h3 className="ui dividing header">Comentarios destacados</h3>
            <div className="comment text-justify pr-4">
                <div className="avatar"><img alt="" src="" /></div>
                <div className="content">
                <Link className="author">Agustina Torres</Link>
                <div className="metadata"><div>Hoy a las 5:42PM</div></div>
                <div className="text"><p>Si tenía alguna duda de la efectividad de hacer terapia online, fue empezar con Pablo y darme cuenta de que lo importante no es tanto el «cómo» sino el «quien» está frente a ti.
                                        Cuando un profesional disfruta con su trabajo eso se nota, y a esto se añade como es el como persona: empático, alegre, cercano, asertivo..</p></div>
                <div className="actions"><Link className="">Contestar</Link></div>
                </div>
            </div>
            <div className="comment comment text-justify pr-4">
                <div className="avatar"><img alt="" src="" /></div>
                <div className="content">
                    <Link className="author">Isabel Rivera</Link>
                    <div className="metadata"><div>Ayer a las 12:30AM</div></div>
                    <div className="text"><p>Mi valoración es muy positiva, yo empecé la terapia con un montón de ansiedad y ahora me encuentro bien. Isabel es una gran profesional, desde su cercanía te hace sentirte cómodo y poder ir avanzando en la resolución de distintos aspectos o dificultades. La recomiendo 100%.</p></div>
                    <div className="actions"><Link className="">Contestar</Link></div>
                </div>
            </div>
        </div>
    )
}

export default DoctorComments;