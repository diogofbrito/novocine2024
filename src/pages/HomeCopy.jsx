import React from 'react';
import { BackgroundHomeCopy } from '../components/BackgroundHomeCopy';
import { ContentBlock } from '../components/ContentBlock';

export function HomeCopy() {
	return (
		<div className='relative'>
			<BackgroundHomeCopy />
			
		

			<div className=' pb-20 '>
				<ContentBlock bgColor='bg-[#FD6CB4]' text='text-white'>
					<div className='flex'>
						<div className='flex flex-col w-1/2 '>
							<h1 className='text-9xl font-["Cine-Display"] '>ALBUFEIRA</h1>
							<p className='text-base'>
								um filme de <strong>António Macedo</strong>
								<br />
								1968 &bull; Portugal &bull; 28min
							</p>
						</div>
						<div className='w-1/2 text-xl leading-tight flex items-center font-regular '>
							<div>
								<div className=' pb-2 font-oblique'>sínopse</div>

								<p>
									Curta-metragem dos anos 1960, uma produção de Francisco de Castro, Albufeira é um filme de cariz promocional do turismo na cidade algarvia (tal como Lisboa, Jardim da Europa),
									mostrando, contudo, a marca autoral e experimental de António Macedo, um dos fundadores do Cinema Novo português, sempre atreito a fugir aos cânones de produção.
								</p>
							</div>
						</div>
					</div>
				</ContentBlock>

				<ContentBlock bgColor='bg-white' text='text-black'>
					<div className='flex justify-center '>
						<div className='w-2/3 font-regular'>
							<div className=' pb-2 font-oblique'>texto de joao</div>
							<p>
								O mar tem uma presença de relevo no cinema de António de Macedo, do mesmo modo que as encomendas às quais respondeu, produzindo anúncios que inventavam um modo de comunicação distinto,
								que fazem de ALBUFEIRA uma singular abordagem social, política e cultural muito para lá do cinema enquanto mecanismo de expressão. Produzido por Francisco de Castro, o filme é uma
								resposta à entidade responsável pela promoção turística da região, e a resposta de António de Macedo não podia ser mais desarmante e desassombrada. O filme simula a visita de uma
								jornalista inglesa, acompanhada de duas amigas, responsável pela produção de uma reportagem sobre as singularidades do Algarve e, em particular, Albufeira, lugar mágico e encantatório
								para a comunidade britânica que, então, começava a instalar-se. O filme é um exercício de observação e denúncia derrisória de um país que se pretendia aberto, mas se definia a partir
								do estereótipo cultural, muito em particular, no contraste exposto entre as figuras livres das três amigas, e as representações femininas, sujeitas a um empobrecimento cultural,
								estético e social, de certo modo distante do que eram as (poucas) conquistas sociais conseguidas pelas mulheres em Portugal no final da década de 1960. Talvez não fosse essa a intenção
								explícita do realizador mas, a esta distância, ALBUFEIRA surge como um importante documento sobre a condição da mulher portuguesa, no rude oposto da figura feminina liberal e livre que
								as três inglesas representam. O mar, escreve-se acima, tem, de facto, uma presença no percurso de António de Macedo. A PROMESSA (1972), a partir da peça de Bernardo Santareno, é
								exemplo maior dessa relação, e mais ainda da opressão a que as mulheres eram sujeitas. Mas antes disso, com VERÃO COINCIDENTE, outra encomenda institucional, no caso para a Central de
								Cervejas, e onde ao poema de Maria Teresa Horta, lido por Carmen Dolores, se justapõem imagens de trabalho, de praia, de lazer, de força e de vidas regidas pelo tempo solar. São
								formas, bastante eficazes, de desmontar uma ideia de naturalidade na identidade nacional e através da qual – tal como, mais tarde, na sua única encenação para teatro, O MARINHEIRO
								(Teatro Nacional D. Maria II, 1983) – o mar haverá de ser hipótese de reflexão profunda sobre a ilusão de um coletivo. Em ALBUFEIRA, esse coletivo é comentado com escárnio e malícia,
								numa montagem sinuosa que, aliada à composição musical e ao discurso, se oferece, com evidente deleite, à denúncia do paradoxo e do ridículo. Os intensos planos aéreos, as íntimas
								sequências de festa e de luxo, a exposição de um Algarve fabricado, que esconde a miséria social atrás das danças tradicionais, que promete a harmonia antes do caos urbanístico, que
								afasta a falha para sublinhar a virtude de um país de servidores, é campo vasto de intervenção fílmica, sempre do lado das protagonistas. É um filme feito a partir de um olhar livre,
								que liberta, ao mesmo tempo, o espetador da visão imposta por uma política de espírito redentora, porque observa, no alibi do olhar estrangeiro, a razão do erro, da perda e do limite
								de um Portugal todo ele ficcionado. ALBUFEIRA é, em suma, um filme essencial para revelar como o cinema inventou formas de se colocar entre a verdade e a perceção. E, ainda, fingir que
								estava a vender o Algarve. Veríamos os erros conscientemente premonitórios, poucos ano depois. O filme foi digitalizado pela Cinemateca Portuguesa – Museu do Cinema, no âmbito do
								projeto FILMar, com o apoio do Mecanismo Financeiro Europeu EEAGrants 2020-2024. A estreia da nova cópia digital decorreu a 28 de abril 2022, na sessão de abertura do 19º festival
								IndieLisboa.
							</p>
						</div>
					</div>
				</ContentBlock>

				<ContentBlock bgColor='bg-[#FD6CB4]' text='text-white'>
					<div className='flex justify-center '>
						<div className='w-2/3 '>
							<div className='text-center pb-2 font-oblique'>creditos</div>

							<div className='flex flex-col gap-2 p-2'>
								<div className='flex  justify-center gap-4'>
									<div className='w-1/2 text-right font-bold'>realização, argumento e montagem</div>
									<div className='w-1/2 font-regular'>ANTÓNIO DE MACEDOANTÓNIO DE MACEDOANTÓNIO DE MACEDOANTÓNIO DE MACEDOANTÓNIO DE MACEDOANTÓNIO DE MACEDO</div>
								</div>
								<div className='flex  justify-center gap-4'>
									<div className='w-1/2  text-right font-bold'>fotografia</div>
									<div className='w-1/2 font-regular'>ELSO ROQUE</div>
								</div>
								<div className='flex justify-center gap-4'>
									<div className='w-1/2 text-right font-bold'>som</div>
									<div className='w-1/2 font-regular'>ALEXANDRE GONÇALVES</div>
								</div>
								<div className='flex  justify-center gap-4'>
									<div className='w-1/2  text-right font-bold'>produção</div>
									<div className='w-1/2 font-regular'>FRANCISCO DE CASTRO</div>
								</div>
							</div>
						</div>
					</div>
				</ContentBlock>
			</div>
		</div>
	);
}
