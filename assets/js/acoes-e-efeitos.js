document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const tipo = urlParams.get('tipo');

  const efeitos = {
    inspecaoTecnica: {
    titulo: "Inspeção Técnica",
    html: `
        <h3><strong>Avaliação Profissional e Preventiva para Ambientes Livres de Pragas</strong></h3>
        <p>Na SC Pragas, agora oferecemos um serviço exclusivo e estratégico: a Inspeção Técnica para Controle de Pragas. Voltada para clientes e futuros clientes comerciais, industriais e residenciais, essa inspeção proporciona uma visão detalhada do ambiente quanto aos riscos de infestação, condições propícias ao surgimento de pragas urbanas e ações corretivas e preventivas recomendadas.</p>

        <h4>Por que contratar uma Inspeção Técnica?</h4>
        <p>Antes mesmo da contratação de um serviço de dedetização, é fundamental conhecer o estado atual do ambiente, identificar possíveis focos de infestação e corrigir falhas estruturais ou operacionais que favorecem a presença de pragas como baratas, ratos, formigas, escorpiões e aranhas.</p>
        <ul>
        <li>Diagnóstico completo das vulnerabilidades do local;</li>
        <li>Recomendações técnicas personalizadas e eficazes;</li>
        <li>Plano de ação preventivo e corretivo;</li>
        <li>Relatório técnico assinado por responsável habilitado;</li>
        <li>Orientações para manter o ambiente protegido a longo prazo.</li>
        </ul>

        <h4>Quando é indicada a Inspeção Técnica?</h4>
        <ul>
        <li>Antes da inauguração de um novo empreendimento;</li>
        <li>Durante reformas ou mudanças estruturais;</li>
        <li>Em casos de infestações recorrentes ou inexplicadas;</li>
        <li>Para fins de auditorias, licenciamento ambiental ou vigilância sanitária;</li>
        <li>Sempre que o cliente deseja prevenir, e não apenas combater.</li>
        </ul>

        <h4>Benefícios para sua empresa ou residência</h4>
        <ul>
        <li>Detecção antecipada de problemas;</li>
        <li>Redução de custos com ações corretivas emergenciais;</li>
        <li>Adoção de medidas sustentáveis e seguras;</li>
        <li>Valorização do local e mais segurança para colaboradores e moradores;</li>
        <li>Cumprimento de exigências sanitárias e regulatórias.</li>
        </ul>

        <h4>Quem realiza a inspeção?</h4>
        <p>Nossa equipe é composta por profissionais certificados e experientes, treinados conforme padrões da ISO 9001. Utilizamos checklists técnicos e conhecimento aprofundado em comportamento e biologia de pragas urbanas.</p>

        <h4>Como funciona?</h4>
        <ul>
        <li>Agendamento da visita técnica;</li>
        <li>Inspeção presencial com avaliação minuciosa;</li>
        <li>Relatório técnico completo com fotos, análises e recomendações;</li>
        <li>Entrega de proposta técnica e comercial, caso o cliente deseje seguir com o controle integrado.</li>
        </ul>

        <p><strong>Solicite sua Inspeção Técnica agora:</strong> Não espere que as pragas apareçam para agir. Antecipe-se aos problemas com uma inspeção técnica confiável, segura e eficiente.</p>
        <p><em>SC Pragas – Protegendo ambientes com qualidade e responsabilidade.</em></p>
    `
    },
    controleIntegradoPragas: {
    titulo: "(CIP) Controle Integrado de Pragas Urbanas",
    html: `
        <h3><strong>O que é Controle Integrado de Pragas (CIP)?</strong></h3>
        <p>O Controle Integrado de Pragas consiste no controle eficiente e sustentável de pragas urbanas por meio de ações combinadas que envolvem:</p>
        <ul>
        <li>Controle preventivo;</li>
        <li>Controle corretivo;</li>
        <li>Monitoramento contínuo.</li>
        </ul>
        <p>Essas ações são aplicadas para o controle de animais da fauna sinantrópica nociva — ou seja, espécies que convivem próximas aos ambientes humanos e que podem causar riscos à saúde, transtornos sociais e econômicos.</p>

        <h4>Principais pragas urbanas monitoradas</h4>
        <p>A SC Pragas atua no controle de diversas espécies, entre elas:</p>
        <ul>
        <li><strong>Artrópodes nocivos e importunos:</strong> baratas, formigas, aranhas de importância médica, escorpiões, cupins e outros;</li>
        <li><strong>Roedores sinantrópicos:</strong> ratos e camundongos que podem transmitir doenças;</li>
        <li><strong>Pombos e aves urbanas:</strong> que causam danos e riscos ambientais.</li>
        </ul>

        <h4>Metodologia de Trabalho da SC Pragas</h4>
        <ul>
        <li><strong>Identificação da espécie infestante:</strong> diagnóstico preciso para aplicar o método correto de controle;</li>
        <li><strong>Ações preventivas e corretivas:</strong> medidas específicas para cada tipo de praga, buscando eliminar a infestação e evitar sua reincidência;</li>
        <li><strong>Monitoramento mensal:</strong> acompanhamento periódico dos locais, com participação de pessoa indicada pelo cliente para garantir a eficácia contínua do serviço;</li>
        <li><strong>Conformidade legal e segurança:</strong> todos os procedimentos seguem rigorosamente as normas sanitárias e ambientais vigentes, garantindo que os ambientes tratados estejam livres de riscos de intoxicação ou contaminação.</li>
        </ul>

        <p>A SC Pragas oferece um serviço especializado, eficiente e seguro para manter seus ambientes livres de pragas urbanas, protegendo a saúde e o bem-estar das pessoas.</p>
    `
    },
    eficaciaControlePragas: {
    titulo: "Eficácia do Controle de Pragas",
    html: `
      <h3><strong>Insetos Causadores de Problemas para o Homem</strong></h3>
      <p>As pragas urbanas e rurais que afetam o ser humano e seu ambiente podem ser classificadas de acordo com sua importância e impacto:</p>

      <h4>1. Importância veterinária</h4>
      <p>Atacam animais domésticos, causando incômodo e problemas de saúde. Exemplos:</p>
      <ul>
        <li>Pulga do gato (<em>Ctenocephalides felis felis</em>);</li>
        <li>Piolho da galinha (<em>Manacanthus stramineus</em>);</li>
        <li>Berne (<em>Dermatobia hominis</em>).</li>
      </ul>

      <h4>2. Importância médica</h4>
      <p>Atacam ou competem diretamente com o homem, podendo transmitir doenças. Exemplos:</p>
      <ul>
        <li>Mosquito da dengue (<em>Aedes aegypti</em>);</li>
        <li>Bicho-do-pé (<em>Tunga penetrans</em>);</li>
        <li>Barbeiro (<em>Triatoma</em>, <em>Rhodnius</em> e <em>Panstrongylus</em> – transmissor da Doença de Chagas);</li>
        <li>Piolho da cabeça (<em>Pediculus humanus capitis</em>);</li>
        <li>Barata americana ou de esgoto (<em>Periplaneta americana</em>).</li>
      </ul>

      <h4>3. Importância agrícola ou florestal</h4>
      <p>Comprometem a produtividade de plantas, grãos e madeira. Exemplos:</p>
      <ul>
        <li>Bicudo-do-algodoeiro (<em>Anthonomus grandis</em>);</li>
        <li>Lagarta-da-espiga-do-milho (<em>Helicoverpa zea</em>);</li>
        <li>Mosca-das-frutas (<em>Anastrepha</em> spp.);</li>
        <li>Besourinho-do-trigo (<em>Tribolium castaneum</em>).</li>
      </ul>

      <h4>4. Insetos rasteiros</h4>
      <p>Ácaros, baratas e traças, controlados com produtos químicos específicos, principalmente em ambientes fechados.</p>

      <h3><strong>Principais Técnicas de Controle de Pragas</strong></h3>
      <ul>
        <li><strong>Tratamento de superfície:</strong> aplicação manual e uniforme de calda inseticida em superfícies e rodapés, formando cristais microscópicos que contaminam os insetos e são disseminados pelo ambiente;</li>
        <li><strong>Tratamento localizado:</strong> pulverização direta nos esconderijos dos insetos para eliminação pontual;</li>
        <li><strong>Tratamento de perímetro:</strong> criação de barreira química ao redor da área infestada para impedir entrada de insetos rasteiros;</li>
        <li><strong>Fumigação/expurgo:</strong> aplicação de pastilhas gasosas diretamente nas colônias, eliminando pragas com gases inseticidas;</li>
        <li><strong>Controle de insetos voadores:</strong> saturação do ambiente com microgotículas inseticidas suspensas no ar, atingindo esconderijos de difícil acesso.</li>
      </ul>

      <h3><strong>Barreira Química: Proteção Estrutural</strong></h3>
      <p>A barreira química consiste na aplicação de inseticidas líquidos no solo e fundações para impedir a entrada de insetos subterrâneos, como cupins.</p>
      <p><strong>Produtos utilizados:</strong> piretróides, neonicotinóides e fenilpirazol (como o fipronil).</p>
      <p><strong>Observações importantes:</strong></p>
      <ul>
        <li>Só deve ser aplicada onde não haja risco de contaminação de lençóis freáticos ou corpos d’água;</li>
        <li>Organoclorados foram proibidos devido à alta toxicidade;</li>
        <li>Para cupins, a barreira impede o acesso, mas não elimina colônias aéreas;</li>
        <li>Pode ser repelente (piretróides) ou não repelente (fenilpirazol);</li>
        <li>Iscas são alternativas modernas e ambientalmente mais seguras.</li>
      </ul>

      <h3><strong>Métodos de Aplicação de Inseticidas</strong></h3>
      <ul>
        <li><strong>Polvilhamento:</strong> aplicação de pós secos com ou sem veículo (talco, caulim, bentonita, enxofre);</li>
        <li><strong>Pulverização (aspersão):</strong> aplicação de inseticidas diluídos, geralmente em água, com pulverizadores manuais ou mecanizados;</li>
        <li><strong>Fumigação:</strong> uso de gases inseticidas na forma gasosa, líquida ou sólida, alcançando áreas de difícil acesso.</li>
      </ul>

      <h3><strong>Por que confiar no Controle Profissional da SC Pragas?</strong></h3>
      <p>O controle eficaz exige conhecimento técnico para identificar corretamente a praga, selecionar as técnicas adequadas e utilizar produtos de forma segura. O objetivo é garantir eficiência máxima no combate, preservando a saúde humana, o meio ambiente e reduzindo impactos desnecessários.</p>
    `
  },
    prevencaoCorrecaoPragas: {
    titulo: "Prevenção e Correção",
    html: `
      <h3><strong>Prevenção e Correção no Controle de Pragas Urbanas</strong></h3>
      <h3><strong>O Contexto Urbano e a Sinantropia</strong></h3>
      <p>O avanço da urbanização modificou significativamente os ambientes naturais, favorecendo a aproximação entre populações humanas e espécies animais indesejáveis — fenômeno conhecido como sinantropia.</p>
      <p>Com o crescimento das cidades, espaços naturais foram substituídos por ambientes artificiais e desequilibrados (ambientes antrópicos), onde certas espécies encontraram nas áreas urbanas condições ideais para sobreviver: água, alimento, acesso e abrigo.</p>
      <p>Em grandes centros, especialmente em países em desenvolvimento, fatores como falta de planejamento urbano, uso inadequado do solo e deficiências no manejo de resíduos contribuem para o aumento da presença dessas pragas, gerando riscos à saúde pública e prejuízos econômicos.</p>

      <h3><strong>Controle Integrado de Pragas (CIP)</strong></h3>
      <p>O Controle Integrado de Pragas é um conjunto de ações preventivas e corretivas que visam impedir que pragas e vetores causem danos significativos.</p>
      <p>O objetivo é reduzir ao mínimo o uso de produtos químicos, priorizando métodos seguros e sustentáveis que garantam resultados eficientes nos aspectos higiênico, ecológico e econômico.</p>
      <p>A aplicação do CIP requer conhecimento técnico sobre cada espécie, permitindo a escolha de medidas específicas e eficientes.</p>
      <p>O conceito, amplamente utilizado na agricultura como Manejo Integrado de Pragas (MIP), é adaptado ao contexto urbano seguindo as etapas abaixo:</p>
      <ul>
        <li><strong>Identificação da espécie:</strong> determinar corretamente a praga para acessar informações técnicas e científicas adequadas;</li>
        <li><strong>Compreensão da biologia e comportamento:</strong> avaliar hábitos alimentares, necessidades de temperatura e umidade, habitat e ciclo reprodutivo;</li>
        <li><strong>Determinação do nível de infestação:</strong> analisar fatores que favorecem a proliferação e a intensidade da infestação;</li>
        <li><strong>Avaliação dos métodos de controle:</strong> considerar riscos, benefícios e eficácia dos métodos disponíveis (químicos, biológicos e mecânicos);</li>
        <li><strong>Implementação de táticas seguras e eficazes:</strong> adotar medidas que preservem a saúde das pessoas, animais domésticos e o meio ambiente;</li>
        <li><strong>Avaliação da eficiência:</strong> monitorar o ambiente após as ações, realizando ajustes e reforços quando necessário.</li>
      </ul>

      <h3><strong>Medidas Preventivas Essenciais</strong></h3>
      <p>Para evitar a proliferação de pragas, é necessário reduzir ou eliminar fatores ambientais que lhes favoreçam, como:</p>
      <ul>
        <li><strong>Água:</strong> evitar acúmulo e vazamentos;</li>
        <li><strong>Abrigo:</strong> eliminar entulhos, frestas e esconderijos;</li>
        <li><strong>Alimento:</strong> acondicionar e armazenar de forma segura;</li>
        <li><strong>Acesso:</strong> vedar entradas e pontos de passagem.</li>
      </ul>

      <h3><strong>Responsabilidade Compartilhada</strong></h3>
      <p>O sucesso no controle de pragas urbanas depende da ação conjunta de proprietários, ocupantes e comunidade.</p>
      <p>Cada pessoa deve cuidar do ambiente sob sua responsabilidade, enquanto áreas comuns exigem cooperação coletiva.</p>
      <p>Somente com participação ativa e comprometimento de todos é possível manter os ambientes livres de pragas, garantindo segurança, saúde e qualidade de vida. Conte com a SC Pragas nessa luta.</p>
    `
  },
    monitoramentoControlePragas: {
    titulo: "Monitoramento",
    html: `
      <h3><strong>Monitoramento no Controle Integrado de Pragas</strong></h3>
      <h3><strong>Importância do Monitoramento</strong></h3>
      <p>O monitoramento é uma etapa essencial no Controle Integrado de Pragas (CIP), pois fornece informações precisas sobre a situação real das infestações em estabelecimentos, áreas abertas, terrenos e outros ambientes.</p>
      <p>Essa prática permite:</p>
      <ul>
        <li>Avaliar danos e prejuízos causados;</li>
        <li>Determinar o momento ideal para aplicação de medidas de controle, incluindo inseticidas;</li>
        <li>Tornar o manejo mais eficiente, seguro e sustentável.</li>
      </ul>
      <p>Quando há necessidade de aplicações repetidas de produtos químicos, é fundamental alternar os modos de ação para evitar que os insetos desenvolvam resistência aos princípios ativos.</p>

      <h3><strong>Monitoramento Contínuo</strong></h3>
      <p>O acompanhamento das pragas deve ser rotineiro e permanente, realizado ao longo de todo o ano.</p>
      <p>Essa constância garante:</p>
      <ul>
        <li>Controle contínuo e eficaz;</li>
        <li>Detecção precoce de novos focos;</li>
        <li>Ajustes rápidos nas estratégias de manejo.</li>
      </ul>

      <h3><strong>Importância das Inspeções</strong></h3>
      <p>As inspeções periódicas das pragas, doenças e inimigos naturais fornecem dados confiáveis para decisões estratégicas.</p>
      <p>Além de controlar pragas, esse processo permite preservar inimigos naturais, que atuam como aliados no equilíbrio ambiental e reduzem a necessidade de produtos químicos.</p>

      <h3><strong>O Aliado para um Controle Otimizado</strong></h3>
      <p>O maior aliado no controle integrado é o monitoramento da dinâmica populacional das pragas e de seus inimigos naturais, aliado ao acompanhamento da evolução espacial e temporal das doenças.</p>
      <p>Para ampliar a eficácia das ações, recomenda-se integrar:</p>
      <ul>
        <li><strong>Conhecimento epidemiológico:</strong> entender a relação entre pragas, doenças e ambiente;</li>
        <li><strong>Informações climáticas:</strong> temperatura, umidade e sazonalidade influenciam diretamente no desenvolvimento das pragas.</li>
      </ul>

      <p><em>Contate a SC Pragas para tirar suas dúvidas e ter mais informações sobre nosso Controle Integrado de Pragas.</em></p>
    `
  },
  produtosUtilizados: {
  titulo: "Produtos Utilizados",
  html: `
    <h3><strong>Inseticidas e Raticidas no Controle de Pragas</strong></h3>
    <h4>Definição</h4>
    <p><strong>Inseticidas</strong> – Produtos desinfestantes destinados à aplicação em residências, áreas comuns, instalações, edifícios públicos ou coletivos e outros ambientes, com o objetivo de controlar insetos e animais nocivos à saúde.</p>
    <p><strong>Raticidas</strong> – Produtos desinfestantes com aplicação semelhante, porém voltados ao controle de roedores.</p>

    <h4>Formulações de Produtos Químicos</h4>
    <p>Produtos químicos ativos não são aplicados puros, pois necessitam de formulações que permitam distribuição uniforme e maior eficiência. Solventes, emulsificantes, adjuvantes e outros componentes auxiliam na penetração do ingrediente ativo no alvo.</p>
    <p><strong>Formulação</strong>: método pelo qual o ingrediente ativo é apresentado de forma adequada para aplicação.</p>

    <h4>Principais Formulações</h4>
    <ol>
      <li><strong>Concentrado Emulsionável (CE)</strong> – Líquido homogêneo que, ao ser diluído em água, forma uma emulsão estável. Composição: ingrediente ativo, emulsificantes, solventes orgânicos (podendo ser derivados de petróleo) e estabilizantes ou antiespumantes. Ensaios: estabilidade da emulsão (NBR 13452) e teste de espuma (NBR 13451).</li>
      <li><strong>Suspensão Concentrada (SC)</strong> – Suspensão estável de ingrediente(s) ativo(s) em veículo líquido, diluída em água para aplicação. Ensaios: granulometria via úmida (NBR 13237), espuma e suspensibilidade (NBR 13313).</li>
      <li><strong>Pó Seco (P)</strong> – Pó sólido pronto para aplicação por polvilhamento, com ingrediente ativo impregnado em material adsorvente e diluído com partículas inertes (ex.: talco). Ensaios: mobilidade (NBR 13229) e granulometria via seca (NBR 13828).</li>
      <li><strong>Pó Molhável (PM)</strong> – Pó sólido que, diluído em água, forma suspensão para aplicação. Composição: veículo sólido, ingrediente ativo e adjuvantes. Ensaios: suspensibilidade, espuma, granulometria via úmida e molhabilidade (NBR 13242).</li>
      <li><strong>Isca Granulada</strong> – Grânulos sólidos uniformes, aplicados diretamente para atrair ou serem ingeridos pelo alvo. Ensaio: teor de pó (NBR 13828).</li>
      <li><strong>Suspensão Microencapsulada</strong> – Cápsulas contendo ingrediente ativo suspensas em líquido, liberando o produto lentamente. Ensaios: espuma, suspensibilidade e granulometria úmida.</li>
    </ol>

    <h4>Modos de Ação dos Principais Ingredientes Ativos</h4>
    <ul>
      <li><strong>Organofosforados</strong> – Alteram sinapses do sistema nervoso.</li>
      <li><strong>Carbamatos</strong> – Alteram sinapses do sistema nervoso.</li>
      <li><strong>Neonicotinóides</strong> – Alteram sinapses do sistema nervoso.</li>
      <li><strong>Piretróides</strong> – Afetam o sistema nervoso via axônios.</li>
      <li><strong>Fenilpirazol (Fipronil)</strong> – Afeta o sistema nervoso via axônios e pode inibir produção de energia celular.</li>
      <li><strong>Amidinohidrazonas</strong> – Inibem a produção de energia nas células.</li>
    </ul>

    <h4>Apresentações Comerciais e Características</h4>
    <ul>
      <li><strong>Pó Seco (P)</strong> – Pronto para uso; baixa concentração de ativo; aplicado por polvilhamento.</li>
      <li><strong>Pó Molhável (PM)</strong> – Alta absorção e concentração; diluído em água antes do uso.</li>
      <li><strong>Pó Solúvel (OS)</strong> – Solúvel em água; pode ser sistêmico.</li>
      <li><strong>Granulados</strong> – Grânulos sólidos para aplicação no solo; usados para ativos mais perigosos.</li>
      <li><strong>Concentrado Emulsionável (CE)</strong> – Alta concentração; dissolvido em solvente.</li>
      <li><strong>Emulsão Concentrada (EC/E)</strong> – Deve ser emulsificada; contém estabilizantes e antiespumantes.</li>
      <li><strong>Dispersão Aquosa (Dqr)</strong> – Ingrediente ativo disperso em água; concentrada e diluída antes da aplicação.</li>
      <li><strong>Solução Concentrada</strong> – Produto solúvel em alta concentração; usado em aplicações UBV.</li>
      <li><strong>Aerosóis</strong> – Embalados para pronto uso.</li>
      <li><strong>Gasosos</strong> – Fumigantes de ação respiratória (ex.: DDVP).</li>
      <li><strong>Suspensão Líquida</strong> – Partículas suspensas em água ou emulsão.</li>
      <li><strong>Pasta</strong> – Ingrediente ativo em gel; comum em formicidas e baraticidas.</li>
      <li><strong>Microencapsulada</strong> – Liberação lenta do ingrediente ativo, aumentando a duração da ação.</li>
    </ul>

    <h4>Aditivos e Reforçadores de Eficácia</h4>
    <ul>
      <li><strong>Surfactantes</strong> – Reduzem a tensão superficial, melhorando homogeneização e estabilidade.</li>
      <li><strong>Sinergistas</strong> – Substâncias que aumentam a eficácia toxicológica do produto.</li>
    </ul>

    <p>A SC Pragas possui cursos e treinamentos atualizados para oferecer a solução perfeita.</p>
  `
  }
};

  const tituloEfeitos = document.getElementById('titulo-efeitos');
  const conteudoEfeitos = document.getElementById('conteudo-efeitos');

  if (tipo && efeitos[tipo]) {
    tituloEfeitos.textContent = efeitos[tipo].titulo;
    conteudoEfeitos.innerHTML = efeitos[tipo].html;
  } else {
    tituloEfeitos.textContent = 'Tipo de ação de efeito não encontrada.';
    conteudoEfeitos.innerHTML = '<p>Por favor, selecione uma ação de efeito válida.</p>';
  }
});