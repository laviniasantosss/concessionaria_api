import { useEffect, useState } from 'react';

export default function veiculolist({ onSelect }) {
  const [veiculo, setVeiculo] = useState([]);

  useEffect(() => {
    fetch('https://api.concessionaria.com/veiculos')
      .then(res => res.json())
      .then(data => setVeiculo(data));
  }, []);

  return (
    <div>
      <h2>Veículos Disponíveis</h2>
      <ul>
        {veiculo.map(veiculo => (
          <li key={veiculo.id} onClick={() => onSelect(veiculo)}>
            {veiculo.marca} - {veiculo.modelo}
          </li>
        ))}
      </ul>
    </div>
  );
}