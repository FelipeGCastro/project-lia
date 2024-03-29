const shortCatechism = [
  {
    questionNumber: 1,
    question: 'Qual é o fim principal do homem?',
    answer: 'O fim principal do homem é glorificar a Deus, e gozá-lo para sempre.',
    refs: 'Rm 11.36; 1Co 10.31; Sl 73.25-26; Is 43.7; Rm 14.7-8; Ef 1.5-6; Is 60.21; 61.3'
  },
  {
    questionNumber: 2,
    question: 'Que regra deu Deus para nos dirigir na maneira de o glorificar e gozar?',
    answer: 'A Palavra de Deus, que se acha nas Escrituras do Velho e do Novo Testamentos, é a única regra para nos dirigir na maneira de o glorificar e gozar.',
    refs: 'Lc 24.27, 44; 2Pe 3.2, 15-16; 2Tm 3.15-17; Lc 16.29-31; Gl 1.8-9; Jo 15.10-11; Is 8.20; Hb 1:1 comparado com Lc 1.1-4 e Jo 20.30-31'
  },
  {
    questionNumber: 3,
    question: 'Qual é a coisa principal que as Escrituras nos ensinam?',
    answer: 'A coisa principal que as Escrituras nos ensinam é o que o homem deve crer acerca de Deus, o dever que Deus requer do homem.',
    refs: 'Jo 5.39; 20.31; Sl 119.105; Rm 15.4; 1Co 10.11'
  },
  {
    questionNumber: 4,
    question: 'Quem é Deus?',
    answer: 'Deus é espírito, infinito, eterno e imutável em seu ser, sabedoria, poder, santidade, justiça, bondade e verdade.',
    refs: 'Jo 4.24; Ex 3.14; Sl 145.3; 90.2; Tg 1.17; Rm 11.33; Gn 17.1, Ap 4.8; Ex 34.6-7'
  },
  {
    questionNumber: 5,
    question: 'Há mais de um Deus?',
    answer: 'Há só um Deus, o Deus vivo e verdadeiro.',
    refs: 'Dt 6.4; 1Co 8.4; Jr 10.10; Jo 17.3'
  },
  {
    questionNumber: 6,
    question: 'Quantas pessoas há na Divindade?',
    answer: 'Há três pessoas na Divindade: o Pai, o Filho e o Espírito Santo, e estas três são um Deus, da mesma substância, iguais em poder e glória.',
    refs: 'Mt 3.16-17; 28.19; 2Co 13.13; Jo 1.1; 3.18; At 5.3-4; Hb 1.3; Jo 10.30'
  },
  {
    questionNumber: 7,
    question: 'Que são os decretos de Deus?',
    answer: 'Os decretos de Deus são o seu eterno propósito, segundo o conselho da sua vontade, pelo qual, para sua própria glória, Ele predestinou tudo o que acontece.',
    refs: 'Rm 11.36; Ef 1.4-6, 11; At 2.23; 17.26; Jo 21.19; Is 44.28; At 13.48; 1Co 2.7; Ef 3.10-11'
  },
  {
    questionNumber: 8,
    question: 'Como executa Deus os seus decretos?',
    answer: 'Deus executa os seus decretos nas obras da criação e da providência.',
    refs: 'Ap 4.11; Dn 4.35; Is 40.26; 14.26-27; 46.9-11; At 4.24'
  },
  {
    questionNumber: 9,
    question: 'Qual é a obra da criação?',
    answer: 'A obra da criação é aquela pela qual, Deus fez todas as coisas do nada, no espaço de seis dias, e tudo muito bem.',
    refs: 'Gn 1; Hb 11.3; Sl 33.9; Gn 1.31'
  },
  {
    questionNumber: 10,
    question: 'Como criou Deus o homem?',
    answer: 'Deus criou o homem macho e fêmea, conforme a sua própria imagem, em conhecimento, retidão e santidade com domínio sobre as criaturas.',
    refs: 'Gn 1.27-28; Cl 3.10; Ef 4.24; Rm 2.14-15; Sl 86-8'
  },
  {
    questionNumber: 11,
    question: 'Quais são as obras da providência de Deus?',
    answer: 'As obras da providência de Deus são a sua maneira muito santa, sábia e poderosa de preservar e governar todas as suas criaturas, e todas as ações delas.',
    refs: 'Sl 145.17; 104.10-24; Hb 1.3; Mt 10.29-30; Os 2.6'
  },
  {
    questionNumber: 12,
    question: 'Que ato especial de providência exerceu Deus para com o homem no estado em que ele foi criado?',
    answer: 'Quando Deus criou o homem, fez com ele um pacto de vida, com a condição de perfeita obediência: proibindo-lhe comer da árvore da ciência do bem e do mal, sob pena de morte.',
    refs: 'Gl 3.12; Gn 2.17'
  },
  {
    questionNumber: 13,
    question: 'Conservaram-se nossos primeiros pais no estado em que foram criados?',
    answer: 'Nossos primeiros pais, sendo deixados à liberdade da sua própria vontade, caíram do estado em que foram criados, pecando contra Deus.',
    refs: 'Rm 5.12; Gn 3.6'
  },
  {
    questionNumber: 14,
    question: 'Que é pecado?',
    answer: 'Pecado é qualquer falta de conformidade com a lei de Deus, ou qualquer transgressão desta lei.',
    refs: 'Tg 2.10; 4.17; 1Jo 3.4.'
  },
  {
    questionNumber: 15,
    question: 'Qual foi o pecado pelo qual nossos primeiros pais caíram do estado em que foram criados?',
    answer: 'O pecado pelo qual nossos primeiros pais caíram do estado em que foram criados foi o comerem do fruto proibido.',
    refs: 'Gn 3.12-13; Os 6.7'
  },
  {
    questionNumber: 16,
    question: 'Caiu todo o gênero humano pela primeira transgressão de Adão?',
    answer: 'Visto que o pacto foi feito com Adão não só para ele, mas também para sua posteridade, todo gênero humano que dele procede por geração ordinária, pecou nele e caiu com ele na sua primeira transgressão.',
    refs: 'Gn 1.28; At 17.26; 1Co 15.21-22; Rm 5.12-14'
  },
  {
    questionNumber: 17,
    question: 'Qual foi o estado a que a queda reduziu o gênero humano?',
    answer: 'A queda reduziu o gênero humano a um estado de pecado e miséria.',
    refs: 'Rm 5.12'
  },
  {
    questionNumber: 18,
    question: 'Em que consiste o estado de pecado em que o homem caiu?',
    answer: 'O estado de pecado em que o homem caiu consiste na culpa do primeiro pecado de Adão, na falta de retidão original e na corrupção de toda a sua natureza, o que ordinariamente de chama Pecado Original, juntamente com todas as transgressões atuais que procedem dele.',
    refs: 'Rm 5.18-19; Ef 2.1-3; Rm 8.7-8; Sl 51.5'
  },
  {
    questionNumber: 19,
    question: 'Qual é a miséria do estado em que o homem caiu?',
    answer: 'Todo o gênero humano pela sua queda perdeu comunhão com Deus, está debaixo da sua ira e maldição, e assim sujeito a todas as misérias nesta vida, à morte e às penas do Inferno para sempre.',
    refs: 'Gn 3.8, 24; Ef 2.3; Rm 6.23; Mt 25.41-46'
  },
  {
    questionNumber: 20,
    question: 'Deixou Deus todo o gênero humano perecer no estado de pecado e miséria?',
    answer: 'Tendo Deus, unicamente pela sua boa vontade desde toda a eternidade, escolhido alguns para a vida eterna, entrou com eles em um pacto de graça, para os livrar do estado de pecado e miséria, e trazer a um estado de salvação por meio de um Redentor.',
    refs: 'Ef 1.4; Tt 1.2; 3.4-7; Jo 17.6'
  },
  {
    questionNumber: 21,
    question: 'Quem é o Redentor dos escolhidos de Deus?',
    answer: 'O único redentor dos escolhidos de Deus é o Senhor Jesus Cristo que, sendo o eterno Filho de Deus, se fez homem, e assim foi e continua a ser Deus e homem em duas naturezas distintas, e uma só pessoa, para sempre.',
    refs: '1Tm 2.5; Jo 1.14; Rm 9.5; Cl 2.9; Hb 13.8'
  },
  {
    questionNumber: 22,
    question: 'Como Cristo, sendo o Filho de Deus, se fez homem?',
    answer: 'Cristo, o Filho de Deus, fez-se homem tomando um verdadeiro corpo, e uma alma racional, sendo concebido pelo poder do Espirito Santo no ventre da virgem Maria, e nascido dela, mas sem pecado.',
    refs: 'Hb 2.14; Mt 26.38; Lc 2.52; 1.31, 35; Hb 4.15'
  },
  {
    questionNumber: 23,
    question: 'Que funções exerce Cristo como nosso Redentor?',
    answer: 'Cristo, como nosso Redentor, exerce as funções de profeta, sacerdote e rei, tanto no seu estado de humilhação como no de exaltação.',
    refs: 'At 3.22; Hb 5.5-6; Sl 2.6; Jo 1.49'
  },
  {
    questionNumber: 24,
    question: 'Como exerce Cristo as funções de profeta?',
    answer: 'Cristo exerce as funções de profeta, revelando-nos, pela sua Palavra e pelo seu Espírito, a vontade de Deus para a nossa salvação.',
    refs: 'Jo 1.18; Hb 1.1-2; Jo 14.26; 16.13'
  },
  {
    questionNumber: 25,
    question: 'Como exerce Cristo as funções de sacerdote?',
    answer: 'Cristo exerce as funções de sacerdote, oferecendo-se a si mesmo uma vez em sacrifício, para satisfazer a justiça divina, reconciliar-nos com Deus e fazendo contínua intercessão por nós.',
    refs: 'Hb 9.28; Rm 3.24-26; 10.4; Hb 2.17; 7.25; Is 53.12'
  },
  {
    questionNumber: 26,
    question: 'Como exerce Cristo as funções de rei?',
    answer: 'Cristo exerce as funções de rei, sujeitando-nos a si mesmo, governando-nos e protegendo-nos, contendo e subjugando todos os seus e os nossos inimigos.',
    refs: 'Sl 110.3; At 2.36; 18.9-10; Is 9.6-7; 1Co 15.26-27'
  },
  {
    questionNumber: 27,
    question: 'Em que consistiu a humilhação de Cristo?',
    answer: 'A humilhação de Cristo consistiu em Ele nascer, e isso em condição baixa, feito sujeito à lei; em sofrer as misérias desta vida, a ira de Deus e amaldiçoada morte na cruz; em ser sepultado, e permanecer debaixo do poder da morte durante certo tempo.',
    refs: 'Lc 2.7; Fp 2.6-8; Gl 4.4; 3.13; Is 53.3; Mt 27.43; 1Co 15.3-4'
  },
  {
    questionNumber: 28,
    question: 'Em que consiste a exaltação de Cristo?',
    answer: 'A exaltação de Cristo consiste em Ele ressurgir dos mortos no terceiro dia; em subir ao Céu e estar sentado à mão direita de Deus Pai, e em vir para julgar o mundo no último dia.',
    refs: '1Co 15.4; Ef 1.20-21; At 17.31'
  },
  {
    questionNumber: 29,
    question: 'Como nos tornamos participantes da redenção adquirida por Cristo?',
    answer: 'Tornamo-nos participantes da redenção adquirida por Cristo pela eficaz aplicação dela a nós pelo Seu Santo Espírito.',
    refs: 'Jo 1.12; 3.5-6; Tt 3.5-6'
  },
  {
    questionNumber: 30,
    question: 'Como nos aplica o Espírito a redenção adquirida por Cristo?',
    answer: 'O Espírito aplica-nos a redenção adquirida por Cristo, operando em nós a fé, e unindo-nos a Cristo por meio dela em nossa vocação eficaz.',
    refs: 'Gl 2.20; Ef 2.8; 1Co 12.12-13'
  },
  {
    questionNumber: 31,
    question: 'Que é vocação eficaz?',
    answer: 'Vocação eficaz é a obra do Espírito Santo, pela qual, convencendo-nos do nosso pecado, e da nossa miséria, iluminando nossos entendimentos pelo conhecimento de Cristo, e renovando a nossa vontade, nos persuade e habilita a abraçar Jesus Cristo, que nos é oferecido de graça no Evangelho.',
    refs: '1Ts 2.13; At 2.37; 26.18; Ez 36.25-27; 2Tm 1.9; Fp 2.13; Jo 6.37, 44-45'
  },
  {
    questionNumber: 32,
    question: 'Que bênçãos gozam nesta vida aqueles que são eficazmente chamados?',
    answer: 'Aqueles que são eficazmente chamados, gozam, nesta vida, da justificação, adoção e santificação, e das diversas bênçãos que acompanham estas graças ou delas procedem.',
    refs: 'Rm 8.30; Ef 1.5; 1Co 1.30'
  },
  {
    questionNumber: 33,
    question: 'Que é justificação?',
    answer: 'Justificação é um ato da livre graça de Deus, no qual Ele perdoa todos os nossos pecados, e nos aceita como justos diante de Si, somente por causa da justiça de Cristo a nós imputada, e recebida só pela fé.',
    refs: 'Ef 1.7; 2Co 5.21; Rm 4.6; 5.18; Gl 2.16'
  },
  {
    questionNumber: 34,
    question: 'Que é adoção?',
    answer: 'Adoção é um ato de livre graça de Deus, pelo qual somos recebidos no número dos filhos de Deus, e temos direito a todos os seus privilégios.',
    refs: '1Jo 3.1; Jo 1.12; Rm 8.14-17'
  },
  {
    questionNumber: 35,
    question: 'Que é santificação?',
    answer: 'É a obra da livre graça de Deus, pela qual somos renovados em todo o nosso ser, segundo a imagem de Deus, e habilitados a morrer cada vez mais para o pecado e a viver para a retidão.',
    refs: '1Pe 1.2; Ef 4.20-24; Rm 6.6; 12.1-2'
  },
  {
    questionNumber: 36,
    question: 'Quais são as bênçãos que nesta vida acompanham a justificação, adoção e santificação ou delas procedem?',
    answer: 'As bênçãos que nesta vida acompanham a justificação, adoção e santificação, ou delas procedem, são: certeza do amor de Deus, paz de consciência, gozo no Espírito Santo, aumento de graça, e perseverança nela até ao fim.',
    refs: 'Rm 5.1-5; 14.17; Jo 1.16; Fp 1.6; 1Pe 1.5'
  },
  {
    questionNumber: 37,
    question: 'Quais são as bênçãos que os fiéis recebem de Cristo na hora da morte?',
    answer: 'As almas dos fiéis na hora da morte são aperfeiçoadas em santidade, e imediatamente entram na glória; e os corpos que continuam unidos Cristo, descansam na sepultura até a ressurreição.',
    refs: 'Ap 14.13; Lc 23.43; At 7.55, 59; Fp 1.23; 1Ts 4.14; Jo 5.28-29; 14.2-3; Hb 12.22-23'
  },
  {
    questionNumber: 38,
    question: 'Quais são as bênçãos que os fieis recebem de Cristo na ressurreição?',
    answer: 'Na ressurreição, os fieis, sendo ressuscitados em glória, serão publicamente reconhecidos e absolvidos no dia de juízo, e tornados perfeitamente felizes no pleno gozo de Deus por toda a eternidade.',
    refs: '1Co 15.43; Mt 10.32; 25.34; Sl 16.11'
  },
  {
    questionNumber: 39,
    question: 'Qual é o dever que Deus exige do homem?',
    answer: 'O dever que Deus exige do homem é obediência à sua vontade revelada.',
    refs: 'Mq 6.8; Lc 10.27-28; Gn 17.1'
  },
  {
    questionNumber: 40,
    question: 'Que revelou Deus primeiramente ao homem para regra de sua obediência?',
    answer: 'A regra que Deus revelou primeiramente ao homem para sua obediência foi a lei moral.',
    refs: 'Rm 2.14-15'
  },
  {
    questionNumber: 41,
    question: 'Onde está a lei moral resumidamente compreendida?',
    answer: 'A lei moral está resumidamente compreendida nos dez mandamentos.',
    refs: 'Dt 10.4; Mt 19.17-19'
  },
  {
    questionNumber: 42,
    question: 'Em que se resumem os dez mandamentos?',
    answer: 'Os dez mandamentos se resumem em amar ao Senhor nosso Deus de todo o nosso coração, de toda a nossa alma, de todas as nossas forças e de todo o nosso entendimento; e ao nosso próximo como a nós mesmos.',
    refs: 'Mt 22-37-40'
  },
  {
    questionNumber: 43,
    question: 'Qual é o prefácio dos dez mandamentos?',
    answer: 'O prefácio dos dez mandamentos é: "Eu sou o Senhor teu Deus, que te tirei da terra do Egito, da casa da servidão"',
    refs: 'Ex 20.2'
  },
  {
    questionNumber: 44,
    question: 'Que nos ensina o prefácio dos dez mandamentos?',
    answer: 'O prefácio dos dez mandamentos ensina-nos que nós temos obrigação de guardar todos os mandamentos de Deus, por ser Ele o Senhor nosso Deus e Redentor.',
    refs: 'Dt 11.1; 1Pe 1.15-19'
  },
  {
    questionNumber: 45,
    question: 'Qual é o primeiro mandamento?',
    answer: 'O primeiro mandamento é: "Não terás outros deuses além de mim".',
    refs: 'Ex 20.3'
  },
  {
    questionNumber: 46,
    question: 'Que exige o primeiro mandamento?',
    answer: 'O primeiro mandamento exige de nós o conhecer e reconhecer a Deus como o único Deus verdadeiro, e nosso Deus; e como tal adorá-lo.',
    refs: '1Cr 28.9; Dt 26.17; Sl 95.6-7'
  },
  {
    questionNumber: 47,
    question: 'Que proíbe o primeiro mandamento?',
    answer: 'O primeiro mandamento proíbe o negar, ou deixar de adorar ou glorificar ao verdadeiro Deus, como Deus, e nosso Deus; e dar a qualquer outro a adoração e a glória que só a Ele são devidas.',
    refs: 'Sl 14.1; Rm 1.20-21, 25; Sl 8.11'
  },
  {
    questionNumber: 48,
    question: 'Que se nos ensina especialmente pelas palavras "além de mim", no primeiro mandamento?',
    answer: 'As palavras "além de mim", no primeiro mandamento, ensinam-nos que Deus, que vê todas as coisas, toma conhecimento e muito se ofende do pecado de ter-se em seu lugar outro deus.',
    refs: 'Sl 139.1-3; Dt 30.17-18'
  },
  {
    questionNumber: 49,
    question: 'Qual é o segundo mandamento?',
    answer: 'O segundo mandamento é: "Não farás para ti imagem de escultura, nem figura alguma de tudo que há em cima no Céu, e do que há embaixo na terra, nem de coisa alguma que haja nas águas, debaixo da terra. Não as adorarás, nem lhes darás culto; porque eu sou o Senhor teu Deus, o Deus zeloso, que vinga a iniqüidade dos pais nos filhos até à terceira e quarta geração daqueles que me aborrecem; e que usa de misericórdia com milhares daqueles que me amam e que guardam os meus preceitos".',
    refs: 'Ex 20.4-6'
  },
  {
    questionNumber: 50,
    question: 'Que exige o segundo mandamento?',
    answer: 'O segundo mandamento exige que recebamos, observemos e guardemos puros e inteiros todo o culto e ordenanças religiosas que Deus instituiu na sua Palavra.',
    refs: 'Dt 12.32; Mt 28.20; Jo 4.23-24'
  },
  {
    questionNumber: 51,
    question: 'Que proíbe o segundo mandamento?',
    answer: 'O segundo mandamento proíbe o adorar a Deus por meio de imagens, ou de qualquer outra maneira não prescrita na sua Palavra.',
    refs: 'Rm 1.22-23; 2Rs 18.3-4'
  },
  {
    questionNumber: 52,
    question: 'Quais são as razões anexas ao segundo mandamento?',
    answer: 'As razões anexas ao segundo mandamento são a soberania de Deus sobre nós, a sua propriedade em nós em nós, e o zelo que Ele tem pelo seu culto.',
    refs: 'Sl 45.11; 100.3; Ex 34.14; 1Co 10.22'
  },
  {
    questionNumber: 53,
    question: 'Qual é o terceiro mandamento?',
    answer: 'O terceiro mandamento é: "Não tomarás o nome do Senhor teu Deus em vão, porque o Senhor não terá por inocente aquele que tomar em vão o nome do Senhor seu Deus".',
    refs: 'Ex 20.7'
  },
  {
    questionNumber: 54,
    question: 'Que exige o terceiro mandamento?',
    answer: 'O terceiro mandamento exige o santo e reverente uso dos nomes, títulos, atributos, ordenanças, palavras e obras de Deus.',
    refs: 'Sl 29,2; Ap 15.3-4; Ec 5.1; Sl 138.2; 104.24'
  },
  {
    questionNumber: 55,
    question: 'O que proíbe o terceiro mandamento?',
    answer: 'O terceiro mandamento proíbe toda a profanação ou abuso das coisas por meio das quais Deus se faz conhecer.',
    refs: 'Lv 19.12; Mt 5.34-35'
  },
  {
    questionNumber: 56,
    question: 'Qual é a razão anexa ao terceiro mandamento?',
    answer: 'A razão anexa ao terceiro mandamento é que, embora os transgressores deste mandamento escapem do castigo dos homens, o Senhor nosso Deus não os deixará escapar do seu justo juízo.',
    refs: 'Dt 28.58-59'
  },
  {
    questionNumber: 57,
    question: 'Qual é o quarto mandamento?',
    answer: 'O quarto mandamento é: "Lembra-te de santificar o dia do Sábado. Trabalharás seis dias, e farás nele tudo o que tens para fazer. O sétimo dia, porém, é o Sábado do Senhor teu Deus. Não farás nesse dia, obra alguma, nem tu, nem teu filho, nem tua filha, nem o teu servo, nem a tua serva, nem o teu animal, nem o peregrino que vive das tuas portas para dentro. Porque o Senhor fez em seis dias o céu, a terra e o mar, e tudo o que neles há, e descansou no sétimo dia. Por isso o Senhor abençoou o dia sétimo e o santificou".',
    refs: 'Ex 20. 8.11'
  },
  {
    questionNumber: 58,
    question: 'Que exige o quarto mandamento?',
    answer: 'O quarto mandamento exige que consagremos a Deus os tempos determinados em sua Palavra, particularmente um dia inteiro em cada sete, para ser um dia de santo descanso a Ele dedicado.',
    refs: 'Lv 19.30; Dt 5.12'
  },
  {
    questionNumber: 59,
    question: 'Qual dos sete dias designou Deus para esse descanso semanal?',
    answer: 'Desde o princípio do mundo até à ressurreição de Cristo, Deus designou o sétimo dia da semana para o descanso semanal; e desde então o primeiro dia da semana para continuar sempre até ao fim do mundo, que é o Sábado cristão, ou Domingo.',
    refs: 'Gn 2.3; Ex 16.23; At 20.7; 1Co 16.1-2; Ap 1.10'
  },
  {
    questionNumber: 60,
    question: 'De que modo se deve santificar o Domingo?',
    answer: 'Deve-se santificar o Domingo com um santo repouso por todo aquele dia, mesmo das ocupações e recreações temporais que são permitidas nos outros dias; empregando todo o tempo em exercícios públicos e particulares de adoração a Deus, Exceto o tempo preciso para as obras de pura necessidade e misericórdia.',
    refs: 'Lv 23.3; Is 58.13-14; Mt 12.11-12; Mc 2.27-28'
  },
  {
    questionNumber: 61,
    question: 'Que proíbe o quarto mandamento?',
    answer: 'O quarto mandamento proíbe a omissão ou a negligência no cumprimento dos deveres exigidos, e a profanação deste dia por meio de ociosidade ou por fazer aquilo que é em si mesmo pecaminoso, ou por desnecessários pensamentos, palavras, ou obras acerca de nossos negócios e recreações temporais.',
    refs: 'Jr 17.21; Lc 23.56'
  },
  {
    questionNumber: 62,
    question: 'Quais são as razões anexas ao quarto mandamento?',
    answer: 'As razões anexas ao quarto mandamento são: a permissão que Deus nos concede de fazermos uso dos seis dias da semana para os nossos interesses temporais; o reclamar ele para si a propriedade especial do dia sétimo, o seu próprio exemplo, e a benção que ele conferiu ao dia do descanso.',
    refs: 'Ex 31. 15-16; Lv 23.3; Ex 31.17; Gn 2.3'
  },
  {
    questionNumber: 63,
    question: 'Qual é o quinto mandamento?',
    answer: 'O quinto mandamento é: "Honrarás a teu pai e a tua mãe, para teres uma dilatada vida sobre a terra que o Senhor teu Deus te há de dar".',
    refs: 'Ex 20.12'
  },
  {
    questionNumber: 64,
    question: 'Que exige o quinto mandamento?',
    answer: 'O quinto mandamento exige a conservação da honra e o desempenho dos deveres pertencentes a cada um em suas diferentes condições e relações, como superiores, inferiores, ou iguais.',
    refs: 'Ef 6.1-3; Rm 13.1-2; 12.10'
  },
  {
    questionNumber: 65,
    question: 'Que proíbe o quinto mandamento?',
    answer: 'O quinto mandamento proíbe negligenciarmos ou fazermos alguma coisa contra a honra e dever que pertencem a cada um em suas diferentes condições e relações.',
    refs: 'Rm 13.7-8'
  },
  {
    questionNumber: 66,
    question: 'Qual é a razão anexa ao quinto mandamento?',
    answer: 'A razão anexa ao quinto mandamento é uma promessa de longa vida e prosperidade (quanto sirva para glória de Deus e bem do homem) a todos aqueles que guardam este mandamento.',
    refs: 'Ef 6.2-3'
  },
  {
    questionNumber: 67,
    question: 'Qual é o sexto mandamento?',
    answer: 'O sexto mandamento é: "Não matarás".',
    refs: 'Ex 20.13'
  },
  {
    questionNumber: 68,
    question: 'Que exige o sexto mandamento?',
    answer: 'O sexto mandamento exige todos os esforços lícitos para conservar a nossa vida e a dos nossos semelhantes.',
    refs: 'Sl 132.3-4; At 27.33-34; Rm 12.20-21; Lc 10.33-37'
  },
  {
    questionNumber: 69,
    question: 'Que proíbe o sexto mandamento?',
    answer: 'O sexto mandamento proíbe o tirar a nossa própria vida, ou a do nosso próximo injustamente, e tudo aquilo que para isso concorre.',
    refs: 'At 16.28; Gn 9.6; Dt 24.6; Pv 24.11-12; 1Jo 3.15'
  },
  {
    questionNumber: 70,
    question: 'Qual é o sétimo mandamento?',
    answer: 'O sétimo mandamento é: "Não adulterarás"',
    refs: 'Ex 24.14'
  },
  {
    questionNumber: 71,
    question: 'Que exige o sétimo mandamento?',
    answer: 'O sétimo mandamento exige a conservação da nossa própria castidade, e da do nosso próximo, no coração, nas palavras e nos costumes.',
    refs: '1Ts 4.4; Ef 4.29; 5.11-12; 1Pe 3.2'
  },
  {
    questionNumber: 72,
    question: 'Que proíbe o sétimo mandamento?',
    answer: 'O sétimo mandamento proíbe todos os pensamentos, palavras e ações impuras.',
    refs: 'Mt 5.28; Ef 5.3-4'
  },
  {
    questionNumber: 73,
    question: 'Qual é o oitavo mandamento?',
    answer: 'O oitavo mandamento é: "Não furtarás".',
    refs: 'Ex 20.15'
  },
  {
    questionNumber: 74,
    question: 'Que exige o oitavo mandamento?',
    answer: 'O oitavo mandamento exige que procuremos o lícito adiantamento das riquezas e do estado exterior, tanto nosso como do nosso próximo.',
    refs: 'Pv. 27.23; 22.1-14; Fl 2.4; Ex 23.4-6'
  },
  {
    questionNumber: 75,
    question: 'Que proíbe o oitavo mandamento?',
    answer: 'O oitavo mandamento proíbe tudo o que impede ou pode impedir injustamente o adiantamento da riqueza ou do bem-estar, tanto nosso como do nosso próximo.',
    refs: 'Pv 28.19; 1Tm 5.8; Tg 5.1-4'
  },
  {
    questionNumber: 76,
    question: 'Qual é o nono mandamento?',
    answer: 'O nono mandamento é: "Não dirás falso testemunho contra o teu próximo".',
    refs: 'Ex 20.16'
  },
  {
    questionNumber: 77,
    question: 'Que exige o nono mandamento?',
    answer: 'O nono mandamento exige a conservação e promoção da verdade entre os homens, e a manutenção da nossa boa reputação, e a do nosso próximo, especialmente quando somos chamados a dar testemunho.',
    refs: 'Ef 4.25; 1Pe 3.16; At 25.10; 3Jo 12; Pv 14.5, 25; Mt 5.37'
  },
  {
    questionNumber: 78,
    question: 'Que proíbe o nono mandamento?',
    answer: 'O nono mandamento proíbe tudo o que é prejudicial à verdade, ou injurioso, tanto à nossa reputação como à do nosso próximo.',
    refs: 'Cl 3.9; 2Co 8.20-21; Sl 15.3; 12.3'
  },
  {
    questionNumber: 79,
    question: 'Qual é o décimo mandamento?',
    answer: 'O décimo mandamento é : "Não cobiçarás a casa do teu próximo; não desejarás a sua mulher, nem o seu servo, nem a sua serva, nem o seu boi, nem o seu jumento, nem coisa alguma que lhe pertença.',
    refs: 'Ex 20.17'
  },
  {
    questionNumber: 80,
    question: 'Que exige o décimo mandamento?',
    answer: 'O décimo mandamento exige o pleno contentamento com a nossa condição, bem como disposição caridosa para com o nosso próximo e tudo o que lhe pertence.',
    refs: 'Hb 13.5; 1Tm 6.6-10; Lv 19.18; 1Co 13.4-6'
  },
  {
    questionNumber: 81,
    question: 'O que proíbe o décimo mandamento?',
    answer: 'O décimo mandamento proíbe todo o descontentamento com a nossa condição, todo o movimento de inveja ou pesar à vista da prosperidade do nosso próximo e todas as tendências ou afeições desordenadas a alguma coisa que lhe pertence.',
    refs: '1Co 10.10; Gl 5.26; Cl 3.5; 1Tm 6.6-10'
  },
  {
    questionNumber: 82,
    question: 'Será alguém capaz de guardar perfeitamente os mandamentos de Deus?',
    answer: 'Nenhum mero homem, desde a queda de Adão, é capaz, nesta vida, de guardar perfeitamente os mandamentos de Deus, mas diariamente os quebranta por pensamentos, palavras e obras.',
    refs: 'Rm 3.9-10; Tg 3.2'
  },
  {
    questionNumber: 83,
    question: 'São igualmente odiosas todas as transgressões da lei?',
    answer: 'Alguns pecados em si mesmos, e em razão de circunstâncias agravantes, são mais odiosos à vista de Deus do que outros.',
    refs: 'Sl 19.13; Mt 11.24; Lc 12.10; Hb 2.2-3'
  },
  {
    questionNumber: 84,
    question: 'Que merece cada pecado?',
    answer: 'Cada pecado merece a ira e a maldição de Deus, tanto nesta vida como na vindoura.',
    refs: 'Gl 3.10; Tg 2.10; Mt 25.41.'
  },
  {
    questionNumber: 85,
    question: 'Que exige Deus de nós para que possamos escapar a sua ira e maldição em que temos incorrido pelo pecado?',
    answer: 'Para escaparmos à ira e maldição de Deus, em que temos incorrido pelo pecado, Deus exige de nós fé em Jesus Cristo e arrependimento para a vida, com o uso diligente de todos os meios exteriores pelos quais Cristo nos comunica as bênçãos da redenção.',
    refs: 'At 20.21; 2Pe 1.10; Hb 2.3; 1Tm 4.16'
  },
  {
    questionNumber: 86,
    question: 'Que é fé em Jesus Cristo?',
    answer: 'Fé em Jesus Cristo é uma graça salvadora, pela qual o recebemos e confiamos só nEle para a salvação, como Ele nos é oferecido.',
    refs: 'At 16.31; Hb 10.39; Jo 1.12; Fp 3.9; Ap 22.17.'
  },
  {
    questionNumber: 87,
    question: 'Que é arrependimento para a vida?',
    answer: 'Arrependimento para a vida é uma graça salvadora pela qual o pecador, tendo um verdadeiro sentimento do seu pecado e percepção da misericórdia de Deus em Cristo, se enche de tristeza e de horror pelos seus pecados, abandona-os e volta para Deus, inteiramente resolvido a prestar-lhe nova obediência.',
    refs: '2Co 7.10; At 2.37; Lc 1.77-79; Jr 31.18-19; Rm 6.18'
  },
  {
    questionNumber: 88,
    question: 'Quais são os meios exteriores e ordinários pelos quais Cristo nos comunica as bênçãos da redenção?',
    answer: 'Os meios exteriores e ordinários pelos quais Cristo nos comunica as bênçãos da redenção, são as suas ordenanças, especialmente a Palavra, os sacramentos e a oração; as quais todas se tornam eficazes aos eleitos para a salvação.',
    refs: 'At 2.41-42'
  },
  {
    questionNumber: 89,
    question: 'Como se torna a Palavra eficaz para a salvação?',
    answer: 'O Espírito de Deus torna a leitura e especialmente a pregação da Palavra, meios eficazes para convencer e converter os pecadores, para os edificar em santidade e conforto, por meio da fé para a salvação.',
    refs: 'Ne 8.8; At 20.32; Rm 15.4; 2Tm 3.15;'
  },
  {
    questionNumber: 90,
    question: 'Como se deve ler e ouvir a Palavra a fim de que ela se torne eficaz para a salvação?',
    answer: 'Para que a Palavra se torne eficaz para a salvação, devemos ouvi-la com diligência, preparação e oração; recebê-la com fé e amor, guardá-la em nossos corações e praticá-la em nossas vidas.',
    refs: 'Dt 6.6-7; 1Pe 2.1-2; Sl 119.11-18; Rm 1.16; 2Ts 2.10; Tg 1.21-25'
  },
  {
    questionNumber: 91,
    question: 'Como se tornam os sacramentos meios eficazes para a salvação?',
    answer: 'Os sacramentos tornam-se meios eficazes para a salvação, não por alguma virtude que eles ou aqueles que os ministram tenham, mas somente pela bênção de Cristo e pela obra do seu Espírito naqueles que pela fé os recebem.',
    refs: '1Pe 3.21; Rm 2.28-29; 1Co 12.13; 10.16-17'
  },
  {
    questionNumber: 92,
    question: 'Que é um sacramento?',
    answer: 'Um sacramento é uma santa ordenança, instituída por Cristo, na qual, por sinais sensíveis, Cristo e as bênçãos do novo pacto são representadas, seladas e aplicadas aos crentes.',
    refs: 'Mt 26.26-28; 28.19; Rm 4.11'
  },
  {
    questionNumber: 93,
    question: 'Quais são os sacramentos do Novo Testamento?',
    answer: 'Os sacramentos do Novo Testamento são o Batismo e a Ceia do Senhor.',
    refs: 'At 10.47-48; 1Co 11.23-26'
  },
  {
    questionNumber: 94,
    question: 'Que é o Batismo?',
    answer: 'O Batismo é o sacramento no qual o lavar com água em nome do Pai, do Filho e do Espírito Santo significa e sela a nossa união com Cristo, a participação das bênçãos do pacto da graça, e a promessa de pertencermos ao Senhor.',
    refs: ''
  },
  {
    questionNumber: 95,
    question: 'A quem deve ser ministrado o Batismo?',
    answer: 'O Batismo não deve ser ministrado àqueles que estão fora da igreja visível, enquanto não professarem sua fé em Cristo e obediência a Ele; mas os filhos daqueles que são membros da igreja visível devem ser batizados.',
    refs: 'At 18.8; Gn 17.7-14; At 2.38-39; 1Co 7.14.'
  },
  {
    questionNumber: 96,
    question: 'O que é a Ceia do Senhor?',
    answer: 'A Ceia do Senhor é o sacramento no qual, dando-se e recebendo-se pão e vinho, conforme a instituição de Cristo, se anuncia a sua morte, e aqueles que participam dignamente tornam-se, não de uma maneira corporal e carnal, mas pela fé, participantes do seu corpo e do seu sangue, com todas as suas bênçãos para o seu alimento espiritual e crescimento em graça.',
    refs: '1Co 11.23-26; At 3.21; 1Co 10.16'
  },
  {
    questionNumber: 97,
    question: 'Que se exige para participar dignamente da Ceia do Senhor?',
    answer: 'Exige-se daqueles que desejam participar dignamente da Ceia do Senhor que se examine sobre o seu conhecimento em discernir o corpo do Senhor, sobre a sua fé para se alimentarem dele, sobre o seu arrependimento, amor e nova obediência; para não suceder que, vindo indignamente, comam e bebam para si a condenação.',
    refs: '1Co 11.27; 31-32; Rm 6.17-18'
  },
  {
    questionNumber: 98,
    question: 'O que é Oração?',
    answer: 'A Oração é um santo oferecimento dos nossos desejos a Deus, por coisas conformes com a sua vontade, em nome de Cristo, com a confissão dos nossos pecados, e um agradecido reconhecimento das suas misericórdias.',
    refs: 'Sl 10.17; 145.19; 1Jo 5.14; 1.9; Jo 16.23-24; Fp 4.6'
  },
  {
    questionNumber: 99,
    question: 'Qual é a regra que Deus nos deu para nos dirigir em oração?',
    answer: 'Toda palavra de Deus é útil para nos dirigir em oração, mas a regra especial de direção é aquela forma de oração que Cristo ensinou aos seus discípulos, e que geralmente se chama a Oração Dominical.',
    refs: 'Rm 8.26; Sl 119.170; Mt 6.9-13'
  },
  {
    questionNumber: 100,
    question: 'Que nos ensina o prefácio da Oração Dominical?',
    answer: 'O prefácio da Oração Dominical, que é: "Pai nosso que estás no Céu", ensina-nos que nos devemos aproximar de Deus com toda a santa reverência e confiança, como filhos a um pai poderoso e pronto para nos ajudar, e também nos ensina a orar com os outros e por eles.',
    refs: 'Lc 11.13; Rm 8.15; 1Tm 2.1-2'
  },
  {
    questionNumber: 101,
    question: 'Pelo que oramos na primeira petição?',
    answer: 'Na primeira petição que é: "Santificado seja o Teu nome" pedimos que Deus nos habilite a nós e aos outros a glorificá-lo em tudo aquilo em que se dá a conhecer; e que disponha tudo para sua glória.',
    refs: 'Sl 67.1-3; Rm 11.36; Ap 4.11'
  },
  {
    questionNumber: 102,
    question: 'Pelo que oramos na segunda petição?',
    answer: 'Na segunda petição, que é: "Venha o Teu reino", pedimos que o reino de Satanás seja destruído e que o reino da graça seja adiantado; que nós e os outros a ele sejamos guiados e nele guardados, e que cedo venha o reino da glória.',
    refs: 'Sl 68.1; Jo 12.31; Mt 9.37-38; 2Ts 3.1; Rm 10.1; Ap 22.20'
  },
  {
    questionNumber: 103,
    question: 'Pelo que oramos na terceira petição?',
    answer: 'Na terceira petição, que é: "Seja feita Tua vontade, assim na terra como no Céu", pedimos que Deus, pela sua graça, nos torne capazes e desejosos de conhecer a sua vontade, de obedecer e submeter-nos a ela em tudo, como fazem os anjos no Céu.',
    refs: 'Mt 24.39; Fp 1.9-11; Sl 103.20-21'
  },
  {
    questionNumber: 104,
    question: 'Pelo que oramos na quarta petição?',
    answer: 'Na quarta petição, que é: O pão nosso de cada dia nos dá hoje", pedimos que da livre dádiva de Deus recebamos uma porção suficiente das coisas boas desta vida, e gozemos com elas de suas bênçãos.',
    refs: 'Pv 30.8-9; 1Tm 6.6-8; Pv 10.22'
  },
  {
    questionNumber: 105,
    question: 'Pelo que oramos na quinta petição?',
    answer: 'Na quinta petição, que é: "E perdoa-nos as nossas dividas, assim como nós também perdoamos aos nossos devedores", pedimos que Deus, por amor de Cristo, nos perdoe gratuitamente os nossos pecados, o que somos animados a pedir, porque, pela Sua graça somos habilitados a perdoar de coração ao nosso próximo.',
    refs: 'Sl 51.1-2, 7; Mt 18.35'
  },
  {
    questionNumber: 106,
    question: 'Pelo que oramos na sexta petição?',
    answer: 'Na sexta petição, que é: "E não nos deixes cair em tentação", pedimos que Deus nos guarde de sermos tentados a pecar, ou nos preserve e livre, quando formos tentados.',
    refs: 'Mt 26.41; Sl 19.13; Jo 17.15; 1Co 10.13'
  },
  {
    questionNumber: 107,
    question: 'Que nos ensina a conclusão da Oração Dominical?',
    answer: 'A conclusão da Oração Dominical, que é: "Porque Teu é o reino, o poder e a glória, para sempre. Amém", ensina-nos que na Oração devemos confiar somente em Deus, e louvá-lO em nossas orações, atribuindo-Lhe reino, poder e glória. E em testemunho do nosso desejo e certeza de sermos ouvidos, dizemos: Amém.',
    refs: ''
  }
]

export default shortCatechism
