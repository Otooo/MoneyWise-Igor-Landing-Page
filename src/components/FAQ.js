import React from 'react';

function FAQ() {
  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center">Dúvidas Frequentes</h2>
      <div className="faq-item mt-4">
        <h3 className="text-xl font-semibold">1. O que é o MoneyWise Pro?</h3>
        <p>Descrição sobre o MoneyWise Pro.</p>
      </div>
      <div className="faq-item mt-4">
        <h3 className="text-xl font-semibold">2. É seguro comprar o MoneyWise Pro?</h3>
        <p>Estamos tão confiantes de que você vai adorar o MoneyWise Pro que oferecemos uma garantia de satisfação de 30 dias. Se você não estiver completamente satisfeito, devolvemos seu dinheiro.</p>
      </div>
    </section>
  );
}

export default FAQ;
