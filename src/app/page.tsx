
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl w-full py-20 ">
      <section className="flex gap-4 rounded-3xl bg-slate-100 p-2 ">
        <div className="py-16 w-[380px]">

          <div className="rounded-3xl bg-purple-300 h-fit p-6  relative">
            <h1 className="flex-1 text-7xl font-bold text-purple-600 mb-4 relative z-10 w-fit">React</h1>
            <h3 className="text-xl text-purple-800">Até para uma criança ...</h3>
            <div className="absolute left-3 top-5 w-[75%] h-[86px] rounded-2xl bg-purple-800 z-0"></div>
          </div>
        </div>
        <Image className="rounded-3xl w-full" src={"/initial.jpg"} alt="Bob Esponja mutio loco" width={1280} height={720} />
      </section>

      <section className="mt-10 bg-green-100 p-4 rounded-3xl">
        <h2 className="text-3xl font-bold mb-6 text-green-800">Componentes</h2>
        <p className="text-lg mb-2">
          Há sentenas se não milhares de formas de como se explicar a lógica por trás de um componente,
          mas digamos que você está no inverno com seu fogão a lenha, e um amigo chega e diz: &quot;-O meu chapa tenho umas toras aqui pra você 🤨&quot;,
          mas ai você pensa como, como? Como que eu vou fazer isso? Uma tora não irá caber no meu fogão... Pois bem meu pequeno programador o que você faria ?
          Se pensarmos pelo obvio, seria cortar essas toras em pedaços menores para que possam entrar na entrada do fogão. a quem diga que poderia-se aumentar o tamanho do fogão... &quot;digo nada hein&quot;.
        </p>
        <p className="text-lg mb-2">
          Da forma como foi apresentada antes, quando temos algo muito grande e complexo ou que de certa forma causa causa confusão ou estranhesa, para quem le.
          Sendo assim podemos quebrar, cortar, refatorar ou algum verbo no infinitivo que você consiga encaixar nessa frase👍. Para que a ideia principal seja quebrada em ideias menores que se completam.
        </p>
        <p className="text-lg"> Ta ta ta... Eu sei que eu disse que isso seria até para uma criança, desculpa mas se você nasceu depois de 2004 não entenderá a referência.</p>

        <div className="flex gap-4 mt-6">
          <div className="flex-1 bg-slate-100 rounded-3xl p-3">
            <Image className="w-full rounded-2xl " src={"/exodia.png"} alt="codigo extremamente ruim" width={640} height={360} />
          </div>

          <div className="flex-1 bg-slate-100 h-fit rounded-3xl p-3">
            <Image className="w-full rounded-2xl " src={"/exodiacartas.jpg"} alt="codigo extremamente ruim" width={640} height={360} />
          </div>
        </div>

      </section>


      <section className="mt-10 bg-sky-100 p-4 rounded-3xl">
        <h2 className="text-3xl font-bold mb-6 text-sky-800">Props</h2>
        <p className="text-lg mb-2">
          Agora que sabemos, como a lógica de um componente funciona, podemos ir para o proximo passo, &quot;espero realmente que não seja para se atirar da ponte 😊&quot;.
          As propriedades, para muitos um pesadelo e para outros também, mas prometo depois disso você vai dominar as props like a ninja. As props nada mais são que informações sobre o componente,
          vamos traduzir isso pra uma linguagem mais entendivel.
        </p>
        <div className="flex gap-10 text-lg my-10 justify-center">

          <div className="flex flex-col gap-2 rounded-3xl bg-purple-300 p-2 text-white">

            <h3 className="font-bold rounded-2xl bg-purple-800 p-2 px-6">🎣   Vara de pescar</h3>
            <ul className="bg-purple-600 rounded-2xl px-6 p-2 text-sm" >
              <li> <strong className="font-bold">tipo:</strong> potente</li>
              <li> <strong className="font-bold">tamanho:</strong> medio</li>
              <li> <strong className="font-bold">cor:</strong> marrom</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 rounded-3xl bg-purple-300 p-2 text-white">

            <h3 className="font-bold rounded-2xl bg-purple-800 p-2 px-6">🪄 Vara mágica</h3>
            <ul className="bg-purple-600 rounded-2xl px-6 p-2 text-sm" >
              <li> <strong className="font-bold">tipo:</strong> meia bomba</li>
              <li> <strong className="font-bold">tamanho:</strong> pequeno</li>
              <li> <strong className="font-bold">cor:</strong> caramelo</li>
            </ul>
          </div>


        </div>

        <p className="text-lg mb-6">
          Como visto logo acima temos dois tipos de varas com as mesmas propriedades mas com valores para as mesmas diferentes.
          Agora mostrando um pouco de sintaxe mas não acostuma não viu. As propiedades são acessadas atraves dos parâmetros quando um componente é criado.
          Se caso estiver usando Typescript, terá que declarar qual é o tipos das props sendo passadas para que o intelissense consiga fazer o controle de tipos.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <Image className="rounded-2xl" src={"/code-props.png"} width={500} height={300} alt="f" />
          <Image className="rounded-2xl" src={"/code-props-tsx.png"} width={500} height={300} alt="f" />
        </div>

        <section className="bg-sky-200 p-4 rounded-2xl">

          <h3 className="text-xl font-bold mb-6 text-sky-900">Alguns problemas causados pelas props</h3>
          <p className="text-lg mb-2">Bom eu creio que o prop drilling seja o fator mas porblemático além da recursividade de estados.
            Falando um pouco mais sobre o prop drilling ele acontece quando um componente neto ou de hierquia menor do que neto que precisa de uma
            propriedade onde o avô ou subsequente tem acesso mas muitas vezes, o avô nem precisa dessa propriedade. Falando no mesmo tema é como se seu avô de 90 anos tivesse uma moto de trilha dentro da garagem dele, apenas e exclusivamente para que você possa usar, sendo que ele nem vai usar.</p>
          <div className="flex flex-col gap-4 items-center">
            <Image className="rounded-xl w-full h-full max-w-[700px]" src={'/page.png'} width={1920} height={1080} alt="state" />
            <Image className="rounded-xl w-full h-full max-w-[700px]" src={'/vo.png'} width={1920} height={1080} alt="state" />
            <Image className="rounded-xl w-full h-full max-w-[700px]" src={'/pai.png'} width={1920} height={1080} alt="state" />
            <Image className="rounded-xl w-full h-full max-w-[700px]" src={'/filho.png'} width={1920} height={1080} alt="state" />
          </div>

          <p className="text-lg">Para corrigir esse ponto podemos usar um pattern de construção de componentes chamado <strong className="font-bold">composition</strong>. Que consiste basicamente em fazer componentes que se integram pra ai sim criar um componente que fica independente das heranças de props.</p>
          {/* <GrandFather /> */}

          <div className="flex flex-col gap-4 items-center">
            <Image className="rounded-xl w-full h-full max-w-[700px]" src={'/compostion-page.png'} width={1920} height={1080} alt="state" />
            <Image className="rounded-xl w-full h-full max-w-[700px]" src={'/compostion.png'} width={1920} height={1080} alt="state" />
            <Image className="rounded-xl w-full h-full max-w-[700px]" src={'/composition-vo.png'} width={1920} height={1080} alt="state" />
          </div>
        </section>
      </section>
      <section className="mt-10 bg-purple-100 p-4 rounded-3xl">
        <h2 className="text-3xl font-bold mb-6 text-purple-800">Hooks</h2>

        <p className="text-lg mb-2">
          Os hooks são basicamente abstrações de código que um framework assim como qualquer outro, uns dos mais usados são
          <strong className="font-bold"> useState </strong> e o <strong className="font-bold">useEffect</strong>, essas abstrações
          que o framework trazem são pra simplificar o desenvolvimento ou para implementar feature que são de cargo do próprio.
        </p>

        <section className=" bg-purple-200 p-4 rounded-2xl mb-4">
          <h2 className="text-xl font-bold mb-6 text-purple-900">Use State</h2>
          <p className="text-lg mb-2">
            O state como diz o nome é o estado que certa coisa se encontra, então digamos que temos uma garafa e ela esta em cima da mesa,
            essa garrafa precisa de algum agente pra acontecer uma mudança desse estado, esse agente é o que a gente chama de dispatcher,
            ele altera o estado sempre que é acionado, então se minha mão tocar e derrubar a garrafa vai alterar o estado em que ela esta e assumirá um novo,
            e toda vez que o estado for atualizado o componente é re-renderizado.
          </p>
          <div className="flex justify-center">

            <Image className="rounded-xl w-full max-w-[500px]" src={'/state.png'} width={1920} height={1080} alt="state" />
          </div>
        </section>
        <section className=" bg-purple-200 p-4 rounded-2xl">
          <h2 className="text-xl font-bold mb-6 text-purple-900">Use Effect</h2>
          <p className="text-lg mb-2">
            Ja o useEffect ele tem umas peculiaridades, ele funciona como um controlador de component lifecycle, que basicamente é dizer quando aquele componente tem que redenrizar,
            quando tem que ser destruido, quando que ele vai remontar, lembrando que essa parte de remontar vai set aqui que vamos usar o dispatcher do useState,
            em sua funcionalidade ele tem um array, onde que sempre que algumas das variaveis que forem passadas nesse array ele irá disparar uma função que pode ou não re-renderizar ou destrui-lo.
          </p>
        <div className="flex justify-center">

          <Image className="rounded-xl w-full max-w-[500px]" src={'/effect.png'} width={1920} height={1080} alt="state" />
        </div>
        </section>

      </section>

    </main>
  );
}
