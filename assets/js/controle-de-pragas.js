document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const tipo = urlParams.get('tipo');

  const pragas = {
    controleEscorpiao: {
    titulo: 'Controle de Escorpiões',
    html: `
        <img src="assets/img/servico-2.png" alt="Controle da Dengue" class="img-fluid float-end ms-3 mb-3">
        <h4>Informações gerais</h4>
        <p>Os escorpiões amarelos podem viver até 4 anos e têm uma reprodução curiosa chamada partenogênese, onde as fêmeas podem gerar até 17 filhotes sem a necessidade de um parceiro. Após o nascimento, os filhotes ficam até 20 dias no dorso da mãe e atingem a fase adulta com cerca de 1 ano. O tempo de gestação varia conforme temperatura, espécie e alimentação, podendo durar de 2 meses a 2 anos.</p>

        <p>Eles preferem ambientes úmidos e escuros, como fendas, sob pedras, cascas de árvores e buracos no solo, onde encontram proteção e descanso. Uma característica curiosa é que os escorpiões brilham sob luz ultravioleta (luz negra).</p>

        <p>São predadores noturnos, capturando presas com suas pinças e imobilizando-as com o veneno do ferrão. Seus predadores naturais incluem aves, répteis, algumas aranhas e formigas. Embora sejam noturnos, em áreas de alta infestação cerca de 10% podem estar ativos durante o dia.</p>

        <p>Os escorpiões podem sobreviver até um ano sem se alimentar e passam cerca de 90% do tempo em repouso.</p>

        <h4>Riscos dos escorpiões para o homem</h4>
        <p>Os acidentes com escorpiões, conhecidos como escorpionismos, acontecem quando há conflito entre humanos e esses animais, seja em áreas urbanas ou rurais. Por isso, o controle eficaz é essencial para a segurança das pessoas.</p>

        <h4>Nosso sistema de controle de escorpiões</h4>
        <p>A SC Pragas oferece um sistema completo de controle que também combate outras pragas, especialmente em locais de difícil acesso, terrenos baldios, áreas com entulhos, lixo orgânico acumulado, pilhas de madeira e materiais descartados que favorecem a proliferação desses animais.</p>

        <p>Utilizamos aplicadores capazes de lançar o produto em grandes volumes e a distâncias consideráveis, atingindo escorpiões escondidos onde não é possível mover os entulhos e resíduos, eliminando assim seus esconderijos e áreas de reprodução.</p>

        <h4>Medidas preventivas e controle integrado</h4>
        <h5>Controle Mecânico</h5>
        <ul>
        <li>Orientação para remoção de acúmulos de matéria orgânica ou inerte em ambientes internos e externos.</li>
        <li>Vistorias técnicas para identificar pontos de acesso e recomendação para bloqueios, como:</li>
        <ul>
            <li>Substituição de grelhas comuns por grelhas teladas ou fechamentos especiais anti escorpião.</li>
            <li>Vedação de frestas, rachaduras, caixas de inspeção e tubulações que possam servir de acesso para os escorpiões.</li>
        </ul>
        </ul>

        <h5>Controle Químico</h5>
        <ul>
        <li>Pulverização com inseticidas microencapsulados, não desalojantes, indicados para controle de escorpiões.</li>
        <li>Aplicação em câmaras fechadas como caixas de inspeção de esgoto, água pluvial, telefonia, canaletas elétricas e galerias, identificadas previamente como possíveis locais de proliferação.</li>
        </ul>

        <h4>Por que escolher a SC Pragas para o controle de escorpiões?</h4>
        <ul>
        <li>Técnicos especializados com ampla experiência.</li>
        <li>Equipamentos e produtos de alta qualidade e eficácia.</li>
        <li>Atendimento personalizado para identificar e tratar áreas específicas.</li>
        <li>Compromisso com a segurança e o bem-estar de nossos clientes.</li>
        </ul>

        <p><strong>Entre em contato e proteja seu ambiente contra os riscos dos escorpiões!</strong></p>
    `
    },
    controleDengue: {
    titulo: 'Controle da Dengue',
    html: `
        <img src="assets/img/servico-3.png" alt="Controle do Mosquito da Dengue" class="img-fluid float-end ms-3 mb-3">
        <h3><strong>Controle Profissional do Mosquito da Dengue: Espécies Vetoras, Biologia, Prevenção e Dedetização</strong></h3>
        <h4>Introdução</h4>
        <p>A dengue é uma arbovirose de alta incidência no Brasil, transmitida por mosquitos do gênero Aedes, principalmente o Aedes aegypti. Trata-se de um problema de saúde pública, com potencial para causar epidemias sazonais, exigindo protocolos rigorosos de prevenção e controle. A SC Pragas, empresa certificada, apresenta um panorama técnico sobre as espécies vetoras, sua biologia, hábitos e os protocolos mais eficazes de dedetização.</p>

        <h4>Principais Espécies de Mosquitos Vetores da Dengue no Brasil</h4>
        <h5>1. Aedes aegypti</h5>
        <ul>
        <li><strong>Distribuição:</strong> Predominante em áreas urbanas de todas as regiões do Brasil.</li>
        <li><strong>Características:</strong> Mosquito de coloração preta com listras brancas nas pernas e tórax. Mede cerca de 5 mm.</li>
        <li><strong>Biologia:</strong> Fêmeas colocam até 500 ovos durante a vida. O ciclo completo (ovo → adulto) pode ocorrer em 7 a 10 dias em ambientes quentes.</li>
        <li><strong>Hábito:</strong> Pica principalmente durante o dia (manhã e fim da tarde). Usa água parada limpa como criadouro (vasos, caixas d’água, pneus, calhas, ralos).</li>
        </ul>

        <h5>2. Aedes albopictus (Mosquito-tigre-asiático)</h5>
        <ul>
        <li><strong>Distribuição:</strong> Presente em regiões urbanas e rurais. Menor importância que o A. aegypti, mas pode transmitir dengue, zika e chikungunya.</li>
        <li><strong>Características:</strong> Corpo com padrão zebrado, maior rusticidade.</li>
        <li><strong>Biologia:</strong> Adapta-se melhor a ambientes silvestres e pode usar criadouros naturais (ocos de árvore, bromélias).</li>
        <li><strong>Hábito:</strong> Atividade diurna e maior resistência a variações ambientais.</li>
        </ul>

        <h4>Biologia e Ciclo de Vida</h4>
        <p><strong>Ovo → Larva → Pupa → Adulto:</strong> ciclo completo em 7 a 10 dias em temperatura ideal (~28 °C).</p>
        <p><strong>Fêmeas hematófagas:</strong> alimentam-se de sangue para maturação dos ovos.</p>
        <p><strong>Ovos resistentes à dessecação:</strong> podem sobreviver por até 1 ano em ambiente seco.</p>

        <h4>Comportamento e Hábitos</h4>
        <ul>
        <li><strong>Diurnos:</strong> Pica predominantemente durante o dia.</li>
        <li><strong>Crípticos:</strong> Preferem locais abrigados e sombreados.</li>
        <li><strong>Domésticos:</strong> Grande afinidade com ambientes urbanos e intra e peridomiciliares.</li>
        </ul>

        <h4>Estratégias de Prevenção</h4>
        <ul>
        <li>Eliminação de criadouros: Tampar caixas d’água, limpar calhas, remover recipientes que acumulam água.</li>
        <li>Inspeção rotineira: Monitoramento semanal em áreas críticas.</li>
        <li>Aplicação de larvicidas biológicos (como Bacillus thuringiensis israelensis).</li>
        <li>Campanhas educativas: Conscientização da população é fundamental.</li>
        </ul>

        <h4>Protocolo Técnico de Dedetização Contra Mosquitos da Dengue</h4>
        <p>O controle químico deve ser feito por empresas habilitadas e com foco em segurança, eficácia e sustentabilidade, conforme exigências da ANVISA.</p>
        <h5>1. Diagnóstico Ambiental e Monitoramento</h5>
        <ul>
        <li>Levantamento de criadouros.</li>
        <li>Uso de ovitrampas e armadilhas gravitacionais para mapeamento.</li>
        </ul>
        <h5>2. Controle Larval</h5>
        <ul>
        <li>Aplicação de larvicidas biológicos e químicos.</li>
        <li>Foco em ralos, caixas d’água e locais com água acumulada.</li>
        </ul>
        <h5>3. Nebulização Espaço-Área</h5>
        <ul>
        <li>Aplicação de inseticidas adulticidas por nebulização térmica ou fria (ULV).</li>
        <li>Intervenção geralmente feita em 2 ciclos com intervalo de 7 a 10 dias.</li>
        </ul>
        <h5>4. Barreiras químicas e pulverização residual</h5>
        <ul>
        <li>Aplicação em muros, vegetação, alpendres e beirais com piretróides microencapsulados.</li>
        </ul>

        <h4>Conclusão</h4>
        <p>O controle do mosquito da dengue exige uma abordagem integrada, envolvendo eliminação de criadouros, tratamentos químicos estratégicos, e educação comunitária. A SC Pragas, com experiência e total conformidade com as normas, oferece soluções eficazes e ambientalmente responsáveis para o combate a vetores de arboviroses urbanas.</p>
    `
    }
  };

  const tituloPraga = document.getElementById('titulo-praga');
  const conteudoPraga = document.getElementById('conteudo-praga');

  if (tipo && pragas[tipo]) {
    tituloPraga.textContent = pragas[tipo].titulo;
    conteudoPraga.innerHTML = pragas[tipo].html;
  } else {
    tituloPraga.textContent = 'Tipo de praga não encontrado.';
    conteudoPraga.innerHTML = '<p>Por favor, selecione uma praga válida.</p>';
  }
});