import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHim0hQPHPsrg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=edrBQxdTs-Wyfkb2kY3rPOQvqWeJK4QXpFI3jvF7Yok"
          alt=""
        />
        <div>
          <strong>Carlos Alberto</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
           <br /><br />
           Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências
         </p>
      <footer>
        <p>
          Preço/hora
             <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
           </button>
      </footer>
    </article>
  )
}

export default TeacherItem