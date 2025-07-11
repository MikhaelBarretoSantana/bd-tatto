// 👨‍🎨 Seção sobre o artista Brian Dantas

import React from "react";

/**
 * Seção About - Informações sobre o artista
 * Layout responsivo com texto e foto
 */
const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__title">O Artista</h2>
            <div className="about__description">
              <p>
                Sou <strong>Brian Datas</strong>, tatuador profissional há quase
                6 anos, mas minha relação com a arte vai muito além das agulhas.{" "}
                <strong>Engenheiro de formação</strong>, encontrei na tatuagem o
                espaço perfeito para unir técnica, precisão e criatividade.
              </p>
              <p>
                Minha especialidade é o <strong>Realismo e Fine Line</strong> —
                estilos que exigem sensibilidade, atenção aos detalhes e um
                olhar apurado para transformar suas ideias em arte permanente.
              </p>
              <p>
                Valorizo profundamente o <strong>atendimento humanizado</strong>
                , o conforto de cada pessoa que passa pela minha cadeira e,
                acima de tudo, a <strong>biossegurança e higiene</strong> em
                todo o processo.
              </p>
              <p>
                Cada tatuagem é feita com cuidado, responsabilidade e respeito
                pela história que está sendo marcada na pele.{" "}
                <em>
                  Mais do que um trabalho, tatuar é uma paixão vivida todos os
                  dias.
                </em>
              </p>
            </div>
          </div>

          <div className="about__image">
            <div className="about__image-wrapper">
              <img
                src="/img/brian-dantas.jpeg"
                alt="Brian Dantas - Tatuador profissional especializado em Realismo e Fine Line"
                className="about__image-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
