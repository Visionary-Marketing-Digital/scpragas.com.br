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