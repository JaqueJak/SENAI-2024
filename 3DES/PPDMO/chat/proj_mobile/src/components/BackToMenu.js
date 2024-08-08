import React from 'react';

const BackToMenuButton = ({ onBack }) => {
  return (
    <button onClick={onBack} className="back-to-menu-button">
      Voltar ao Menu
    </button>
  );
};

export default BackToMenuButton;
