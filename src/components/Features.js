import React from 'react';

function Features() {
  return (
    <section className="bg-gray-100 p-8 text-center">
      <h2 className="text-3xl font-bold">Conheça o MoneyWise Pro</h2>
      <div className="flex flex-wrap justify-around mt-8">
        <div className="feature-item bg-white p-4 m-2 w-1/2 shadow-lg">Consultorias Financeiras Personalizadas</div>
        <div className="feature-item bg-white p-4 m-2 w-1/2 shadow-lg">Ferramentas de Análise Avançadas</div>
        <div className="feature-item bg-white p-4 m-2 w-1/2 shadow-lg">Alertas em Tempo Real</div>
        <div className="feature-item bg-white p-4 m-2 w-1/2 shadow-lg">Comunidade Exclusiva</div>
      </div>
    </section>
  );
}

export default Features;
