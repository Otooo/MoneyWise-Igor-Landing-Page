import React from 'react';

function Offer() {
  return (
    <section className="bg-green-600 text-white p-8 text-center">
      <h2 className="text-3xl font-bold">Oferta exclusiva e disponível apenas aqui...</h2>
      <div className="flex justify-around items-center mt-8">
        <img src="../images/img3.jpg" alt="Image 3" className="w-1/3" />
        <div className="price text-2xl">
          <span className="line-through">de R$ 898,56</span>
          <strong className="block">por R$ 492,00</strong>
        </div>
        <button className="bg-green-800 text-white py-2 px-4">EU QUERO SER PRO</button>
      </div>
    </section>
  );
}

export default Offer;
