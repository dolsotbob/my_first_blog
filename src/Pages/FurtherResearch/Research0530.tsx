import react from 'react'
           
type CardData = {
  title: string;
  content: string[];
};

const cards: CardData[] = [
  {
    title: "🧠 What is Consensus?",
    content: [
      "A method for blockchain participants to agree on valid transactions.",
      "It keeps the blockchain trustworthy.",
    ],
  },
  {
    title: "📊 Where is Consensus Used Most?",
    content: [
      "42% used in cryptocurrencies.",
      "26% have no specific use case.",
      "Common: DApps, IoT, Cloud.",
      "Rare: Smart Grid, Localization.",
    ],
  },
  {
    title: "🏆 Top 3 Consensus Types",
    content: [
      "PCE: Decentralized, high energy use.",
      "BCE: Fast & secure, used in business.",
      "PA: Energy efficient, still evolving.",
    ],
  },
  {
    title: "🔍 Why Different Types?",
    content: [
      "BCE: For secure, fast business apps.",
      "PCE: For open, anonymous networks.",
      "PA: For games & light apps.",
    ],
  },
  {
    title: "🚀 The Future of Consensus",
    content: [
      "Projects like Hyperledger are expanding.",
      "CHA (Cross Hybrid) types will grow.",
      "Flexible consensus is in demand.",
    ],
  },
  {
    title: "📚 Final Summary",
    content: [
      "130 consensus algorithms studied.",
      "Grouped into 8 main types.",
      "Most used: PCE, BCE, PA.",
      "Future: adaptable & efficient systems.",
    ],
  },
];

const Research0530 = () => {
    return (
        <div className='BlogDaily'>
            <h3>Consensus</h3>
            <h4>Summary on </h4>
            <ul><li>A Comprehensive Review of Blockchain Consensus Mechanisms by BAHAREH LASHKARI1, PETR MUSILEK1,2(Senior Member, IEEE), 2021</li></ul>


    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-4">{card.title}</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {card.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    </div>
    )
}

export default Research0530