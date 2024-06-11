import React from 'react';

function Hero() {
  return (
    <section className="bg-green-700 text-white p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Descubra o Próximo Nível com o MoneyWise Pro!</h1>
        <p className="mt-4">Parabéns por investir no seu futuro financeiro com o MoneyWise! Agora, queremos apresentar uma oportunidade exclusiva para você dar o próximo passo rumo à liberdade financeira.</p>
        <div className="flex justify-around items-center mt-8">
          <img src="../images/img1.jpg" alt="Image 1" className="w-1/3" />
          <div className="play-button bg-green-600 text-white p-4 rounded-full cursor-pointer">Aperte o Play</div>
          <img src="../images/img2.jpg" alt="Image 2" className="w-1/3" />
        </div>
        <button className="bg-green-600 text-white py-2 px-4 mt-8">EU QUERO SER PRO</button>
      </div>
    </section>
  );
}

export default Hero;
