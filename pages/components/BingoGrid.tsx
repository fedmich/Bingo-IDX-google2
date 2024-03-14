// components/BingoGrid.tsx

import React from 'react';

interface BingoGridProps {
  numbers: Record<string, number[]>;
}

const BingoGrid: React.FC<BingoGridProps> = ({ numbers }) => {
  const rows: string[] = ['B', 'I', 'N', 'G', 'O'];
  const cols: number[] = [1, 2, 3, 4, 5];

  return (
    <table>
      <thead>
        <tr>
          {rows.map((row) => (
            <th key={row}>{row}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cols.map((col) => (
          <tr key={col}>
            {rows.map((row) => (
              <td key={`${row}-${col}`}>{numbers[row][col - 1]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BingoGrid;
