import Image from "next/image";
import { Inter } from "next/font/google";
import BingoGrid from './components/BingoGrid';

const inter = Inter({ subsets: ["latin"] });

/// export default function Home() {

const generateNumbers = (): Record<string, number[]> => {
  const rows: string[] = ['B', 'I', 'N', 'G', 'O'];
  const cols: number[] = [1, 2, 3, 4, 5];
  const numbers: Record<string, number[]> = {};
  for (let i = 0; i < rows.length; i++) {
    numbers[rows[i]] = [];
    let min = i * 15 + 1;
    let max = (i + 1) * 15;
    while (numbers[rows[i]].length < cols.length) {
      let num = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers[rows[i]].push(num);
    }
  }
  return numbers;
};


const Home: React.FC<{ numbers: Record<string, number[]> }> = ({ numbers }) => {
  return (
    <div>
      <h1>Welcome to Bingo!</h1>
      <BingoGrid numbers={numbers} />
    </div>
  );
};

export async function getServerSideProps() {
  const numbers = generateNumbers();
  return { props: { numbers } };
}


export default Home;