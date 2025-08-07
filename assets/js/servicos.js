document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const tipo = urlParams.get('tipo');

  const servicos = {
    desinsetizacao: {
    titulo: 'Desinsetização',
    html: `
        <h3><strong>Desinsetização – Controle completo para um ambiente saudável</strong></h3>
        <p>Nos dias atuais, a desinsetização é parte essencial de um programa integrado de controle de pragas, desenvolvido para minimizar riscos e garantir o atendimento às normas da Vigilância Sanitária e demais órgãos competentes.</p>

        <h4>Programa personalizado para sua necessidade</h4>
        <p>Na SC Pragas, adaptamos o controle de pragas para cada tipo de instalação, oferecendo serviços adicionais que atendem às necessidades específicas do seu ambiente, seja residencial, comercial ou industrial.</p>

        <h4>Por que o controle de pragas é fundamental?</h4>
        <ul>
        <li>Preserva a saúde das pessoas, mantendo ambientes limpos e seguros.</li>
        <li>Atende às exigências legais para funcionamento de empresas.</li>
        <li>Evita danos à reputação do seu negócio.</li>
        <li>Prevê multas e sanções por irregularidades sanitárias.</li>
        </ul>

        <h4>Como funciona o processo?</h4>
        <p>O controle de pragas realizado pela SC Pragas começa com uma análise criteriosa do ambiente físico, das condições de higienização, armazenamento e do fluxo de mercadorias, para identificar pontos vulneráveis à infestação.</p>
        <p>Com base nessa avaliação, aplicamos métodos seguros e eficazes para eliminar e prevenir insetos como baratas, formigas, aranhas, pernilongos, carrapatos e outros vetores que comprometem a saúde e a segurança do ambiente.</p>

        <h4>Conte com a SC Pragas para proteção e tranquilidade</h4>
        <p>Prevenção, eficiência e segurança para o seu ambiente, com atendimento especializado e soluções de alta qualidade.</p>
    `
    },
    desratizacao: {
    titulo: 'Desratização',
    html: `
        <h3><strong>Desratização – Proteção eficaz contra roedores</strong></h3>
        <p>A presença de ratos e camundongos em sua casa ou empresa não só representa um risco à saúde, devido à transmissão de doenças, como também afasta clientes e visitantes, gerando uma imagem negativa do local. Mesmo a simples visão de um roedor causa preocupação imediata.</p>

        <h4>Programa Completo de Prevenção e Eliminação de Roedores</h4>
        <p>Na SC Pragas, oferecemos um programa integrado para controle de ratos, ratazanas, ratos de telhado e camundongos, que atua tanto em ambientes externos quanto internos, garantindo a eliminação e prevenção eficaz desses animais.</p>
        <p>Nosso programa inclui:</p>
        <ul>
        <li>Inspeção completa: identificação dos pontos de acesso e áreas vulneráveis.</li>
        <li>Aplicação de sistemas de ratoeiras e iscas: posicionados estrategicamente nos interiores e exteriores do local.</li>
        <li>Estações de monitoramento discretas: protegendo o ambiente sem chamar atenção.</li>
        <li>Estações sem raticidas: para minimizar o impacto ambiental, garantindo maior segurança.</li>
        <li>Vistoria permanente: acompanhamento contínuo dentro do programa de Controle Integrado de Pragas (CIP).</li>
        </ul>

        <h4>Como funciona o controle de roedores da SC Pragas?</h4>
        <p>Nosso método inicia com uma abordagem externa para interna, eliminando os roedores no seu ponto de entrada e impedindo seu retorno. Além disso, realizamos vistorias frequentes e relatórios técnicos que ajudam a conscientizar o pessoal sobre práticas eficazes de prevenção.</p>

        <h4>Por que escolher a SC Pragas para sua desratização?</h4>
        <ul>
        <li>Técnicos especializados e treinados</li>
        <li>Métodos seguros e eficazes, com foco na redução de riscos à saúde e ao meio ambiente</li>
        <li>Monitoramento contínuo para garantir resultados duradouros</li>
        <li>Relatórios claros para clientes acompanharem a evolução do controle</li>
        </ul>

        <h4>Livre-se dos riscos e promova a saúde do seu ambiente</h4>
        <p>Conte com a SC Pragas para um controle rápido, eficiente e sustentável de roedores.</p>
    `
    },
    descupinizacao: {
    titulo: 'Descupinização',
    html: `
        <h3><strong>Descupinização – Proteção eficaz contra cupins</strong></h3>
        <p>Os cupins podem causar danos graves à estrutura de madeiras em sua casa ou empresa, comprometendo telhados, forros, batentes, móveis e outros componentes de madeira. A SC Pragas oferece tratamentos especializados para eliminar e prevenir infestações de cupins de madeira seca e subterrâneos, protegendo seu patrimônio com técnicas avançadas e seguras.</p>

        <h4>Descupinização de Cupins de Madeira Seca</h4>
        <p>Este tratamento é indicado para madeiramentos como:</p>
        <ul>
        <li>Telhados</li>
        <li>Forros</li>
        <li>Batentes e guarnições</li>
        <li>Gabinetes e armários embutidos</li>
        <li>Rodapés e móveis de madeira</li>
        </ul>
        <p>O processo começa com a limpeza manual detalhada da área a ser tratada. Todos os resíduos são acondicionados em sacos plásticos e removidos após a finalização dos serviços, garantindo limpeza e segurança.</p>
        <p>A aplicação do inseticida é feita por meio de:</p>
        <ul>
        <li>Imersão</li>
        <li>Pincelamento</li>
        <li>Aspersão (pulverização)</li>
        <li>Injeção</li>
        </ul>
        <p>Esses métodos garantem que o produto tenha contato direto e penetre profundamente na madeira, utilizando uma calda inseticida à base de solvente orgânico, eficaz contra cupins de madeira seca.</p>

        <h4>Descupinização de Cupins Subterrâneos</h4>
        <p>Para o controle dos cupins subterrâneos, a SC Pragas realiza o tratamento localizado onde há infestação, aplicando o método de Barreira Química, que consiste em:</p>
        <ul>
        <li>Furação entre o chão e a parede (50 cm de profundidade, com furos a cada 30 cm)</li>
        <li>Injeção de 2 litros de calda cupinicida por ponto, com máquina de alta pressão e ferramentas específicas</li>
        </ul>
        <p>Também pode ser utilizada a Iscagem, com produtos que inibem o crescimento do cupim, com ingredientes ativos registrados na ANVISA para controle das espécies Coptotermes, Reticulitermes e Heterotermes.</p>

        <h4>Monitoramento e Dispositivos de Controle</h4>
        <p>Áreas internas: instalação de dispositivos em pontos onde há presença de cupins subterrâneos. Os dispositivos permanecem até a atividade dos cupins cessar, com monitoramento por até um ano.</p>
        <p>Áreas externas: instalação de dispositivos de solo a cada 6 metros para monitoramento e, quando necessário, substituição pelo dispositivo de controle. Após a eliminação dos cupins, o dispositivo de controle volta a ser monitorado.</p>
        <p>Caso haja reincidência, o processo recomeça para garantir proteção contínua.</p>

        <h4>Por que escolher a SC Pragas para descupinização?</h4>
        <ul>
        <li>Técnicas modernas e eficazes para cupins de madeira seca e subterrâneos</li>
        <li>Produtos seguros, regulamentados pela ANVISA</li>
        <li>Monitoramento contínuo para garantir resultados duradouros</li>
        <li>Equipe especializada e comprometida com a proteção do seu patrimônio</li>
        </ul>

        <h4>Proteja suas estruturas de madeira com a SC Pragas</h4>
    `
    },
    sanitizacaoAmbientes: {
    titulo: 'Sanitização de Ambientes',
    html: `
        <h3><strong>Higienização eficaz para eliminar agentes causadores de doenças e alergias</strong></h3>
        <p>A sanitização de ambientes é um processo essencial de higienização que elimina agentes invisíveis causadores de infecções, alergias e desconfortos respiratórios, como fungos, mofos, bactérias e ácaros. Esse serviço é fundamental para prevenir doenças como gripe, pneumonia, tuberculose, além de combater processos alérgicos como rinite, asma e bronquite.</p>

        <h4>Por que a sanitização é tão importante?</h4>
        <p>Mesmo que um ambiente pareça limpo, ele pode estar contaminado por microrganismos perigosos, invisíveis a olho nu, que afetam a saúde respiratória e o bem-estar das pessoas. Em especial, a sanitização torna-se ainda mais vital nos dias atuais, combatendo vírus perigosos.<br>
        Além de bactérias, ácaros e fungos que causam alergias e outras doenças.</p>

        <h4>Benefícios da Sanitização</h4>
        <ul>
        <li>Eliminação eficaz de vírus, bactérias, fungos e ácaros</li>
        <li>Prevenção de doenças contagiosas e respiratórias</li>
        <li>Melhora da qualidade do ar e do conforto ambiental</li>
        <li>Proteção da saúde de colaboradores, clientes e familiares</li>
        <li>Ambientes mais limpos, seguros e confortáveis</li>
        </ul>

        <h4>Metodologia de Aplicação</h4>
        <p>Nossa sanitização é realizada em ambientes que demandam atenção especial, como:</p>
        <ul>
        <li>Carpetes</li>
        <li>Arquivos mortos e acervos de documentos</li>
        <li>Depósitos e porões</li>
        <li>Móveis, objetos e superfícies em geral</li>
        </ul>
        <p>Utilizamos o processo de nebulização a frio, aplicando um produto sanitizante de amplo espectro, atóxico, incolor, antialérgico e de alta durabilidade. Este produto é devidamente registrado e aprovado pelo Ministério da Saúde, eliminando bactérias gram positivas e negativas, fungos, vírus e ácaros presentes no ar e nas superfícies.</p>

        <h4>Características Técnicas dos Produtos Utilizados</h4>
        <ul>
        <li>Não causam manchas nem odores desagradáveis (tornam-se inodoros após 90 minutos da aplicação)</li>
        <li>São antialérgicos e seguros para contato humano constante</li>
        <li>Totalmente atóxicos e inodoros em no máximo 90 minutos</li>
        <li>Incolores, sem riscos para móveis, paredes, tetos, carpetes, dutos de ar, cadeiras, poltronas, acervos bibliográficos e outros objetos</li>
        <li>Aprovados e regulamentados pela Agência Nacional de Vigilância Sanitária (ANVISA)</li>
        </ul>

        <h4>Proteja sua saúde e bem-estar com a SC Pragas</h4>
        <p>Solicite uma avaliação técnica e deixe seu ambiente mais seguro e saudável.</p>
    `
    },
    armadilhaLuminosa: {
    titulo: 'Armadilha Luminosa',
    html: `
        <h3><strong>Armadilha Luminosa – Controle eficiente e ambientalmente responsável</strong></h3>
        <p>A armadilha luminosa utiliza a atração natural que muitos insetos possuem pela luz ultravioleta (UV) para capturá-los e monitorar sua população, sendo uma solução eficaz para o controle de pragas aladas em diversos ambientes.</p>

        <h4>Como funciona?</h4>
        <p>O aparelho emite radiação luminosa dentro do espectro eletromagnético UV, que atrai insetos como:</p>
        <ul>
        <li>Mariposas</li>
        <li>Percevejos</li>
        <li>Cigarrinhas</li>
        <li>Besouros</li>
        <li>Moscas</li>
        <li>Mosquitos</li>
        <li>Gafanhotos</li>
        <li>Grilos</li>
        </ul>
        <p>Ao serem atraídos, os insetos são aprisionados e eliminados, interrompendo abruptamente seu ciclo de vida no estágio adulto. Essa ação evita a reprodução, pois uma fêmea eliminada pode impedir a geração de centenas de ovos.</p>

        <h4>Benefícios da Armadilha Luminosa</h4>
        <ul>
        <li>Redução da infestação de insetos alados</li>
        <li>Monitoramento preciso das populações de pragas</li>
        <li>Diminuição significativa no uso de inseticidas químicos</li>
        <li>Menor impacto ambiental e maior segurança para pessoas e animais</li>
        <li>Controle populacional que ajuda a manter o nível de pragas abaixo do dano econômico</li>
        </ul>

        <h4>Por que escolher a SC Pragas?</h4>
        <p>Nossa equipe especializada instala e mantém sistemas de armadilhas luminosas adequados para sua necessidade, garantindo um controle eficaz, seguro e sustentável das pragas em seu ambiente.</p>

        <p>Tenha controle total sobre as pragas aladas com a SC Pragas<br>
        Entre em contato e conheça nossas soluções inovadoras para proteger sua casa ou empresa.</p>
    `
    },
    limpezaCaixaAgua: {
    titulo: "Limpeza de Caixa d’Água",
    html: `
        <h3><strong>Limpeza de Caixa d’Água – Saúde e segurança para sua família e empresa</strong></h3>
        <p>A limpeza adequada da caixa d’água é fundamental para garantir a qualidade da água consumida e prevenir a proliferação de micro-organismos nocivos à saúde. A SC Pragas oferece um serviço profissional de higienização e desinfecção, assegurando um ambiente limpo e seguro para o armazenamento da água.</p>

        <h4>Como realizamos a limpeza?</h4>
        <ul>
        <li>Remoção manual e mecânica de resíduos, lodo e objetos estranhos presentes no reservatório, com cuidado especial para caixas de fibra, onde não utilizamos máquinas de alta pressão para evitar danos.</li>
        <li>Limpeza completa das paredes, teto e piso da caixa d’água com escovas umedecidas e panos limpos, removendo todos os vestígios de sujeira e lodo residual.</li>
        <li>Aplicação de saneante à base de hipoclorito (solução com concentração entre 2% e 2,5%), com ação germicida eficaz, por meio de pulverização técnica dirigida para desinfetar todas as superfícies internas da caixa.</li>
        <li>Se necessário, realizamos o transbordo de água limpa entre caixas para evitar desperdícios durante o processo.</li>
        </ul>

        <h4>Benefícios da limpeza profissional</h4>
        <ul>
        <li>Eliminação de bactérias, vírus e outros micro-organismos que podem causar doenças.</li>
        <li>Melhoria da qualidade e do sabor da água consumida.</li>
        <li>Prevenção contra entupimentos e proliferação de larvas de mosquitos e outros vetores.</li>
        <li>Segurança e tranquilidade para sua casa, condomínio ou empresa.</li>
        </ul>

        <p>Conte com a SC Pragas para garantir a limpeza eficiente da sua caixa d’água</p>
    `
    }
};

  const tituloServico = document.getElementById('titulo-servico');
  const conteudoServico = document.getElementById('conteudo-servico');

  if (tipo && servicos[tipo]) {
    tituloServico.textContent = servicos[tipo].titulo;
    conteudoServico.innerHTML = servicos[tipo].html;
  } else {
    tituloServico.textContent = 'Tipo de serviço não encontrado.';
    conteudoServico.innerHTML = '<p>Por favor, selecione um serviço válido.</p>';
  }
});