import React from 'react'
import './Research.css'

interface CardContent {
    title: string;
    description: string;
}

const cardData: CardContent[] = [
    {
        title: '📦 블록체인과 머신러닝',
        description: '블록체인은 정보를 안전하게 저장하는 기술이고, 머신러닝은 데이터를 학습해서 똑똑해지는 기술이에요. 둘을 합치면 사기 탐지나 이상행동 탐지에 효과적이에요.',
    },
    {
        title: '📶 IoT 보안에 쓰이는 블록체인',
        description: '스마트 기기(예: 자율주행차, 스마트홈 등)를 보호하기 위해 블록체인을 사용해요. 예를 들어, 해커를 찾아내거나 기기 간 신뢰 점수를 매길 수 있어요.',
    },
    {
        title: '🔍 거래 사기 탐지',
        description: '머신러닝을 사용해서 비정상 거래를 탐지할 수 있어요. 이 연구는 딥러닝(LSTM, Bi-LSTM, CNN-LSTM)을 사용해 높은 정확도로 사기 거래를 잡아내요.',
    },
    {
        title: '👾 피싱 사기 잡기',
        description: '기존 연구는 그래프 분석, KNN, MLP 등을 사용했지만 정확도가 낮았어요. 이번 연구는 여러 모델을 섞는 앙상블(ensemble)을 사용해 거의 100% 가까운 정확도를 얻었어요.',
    },
    {
        title: '🧠 사용된 AI 모델',
        description: 'LSTM은 시간 흐름을 기억하는 모델, Bi-LSTM은 양방향으로 읽는 모델, CNN-LSTM은 패턴과 시간 흐름을 동시에 파악해요. 앙상블로 묶어 성능을 올렸어요.',
    },
    {
        title: '📊 결과 정리',
        description: '앙상블 모델은 99.72% 정확도, 99.86% 정밀도, 재현율, F1 점수를 기록했어요. 이전 연구들보다 훨씬 뛰어난 성능이에요.',
    },
    {
        title: '📌 결론',
        description: '이 연구는 딥러닝을 활용해 블록체인 거래에서 피싱 사기를 탐지하는 새로운 방법을 제안했어요. 앞으로 더 똑똑한 모델과 분산형 구조가 추가될 수 있어요.',
    }
];

const Research0604 = () => {
    return (
        <div className="blog-container">
            <h1 className="blog-title">🔬 블록체인 피싱 탐지 연구 요약</h1>
            <div className="card-grid">
                {cardData.map((card, index) => (
                    <div key={index} className="blog-card">
                        <h2 className="card-title">{card.title}</h2>
                        <p className="card-description">{card.description}</p>
                    </div>
                ))}
            </div>

            <p>원문</p>
            <span>Phishing Detection in Blockchain Transaction Networks Using
                Ensemble Learning, 2023, by Roseline Oluwaseun Ogundokun, Micheal Olaolu Arowolo
                , Robertas Damaševiˇcius, and Sanjay Misra</span>

            <p>원문 요약</p>
            <pre><code>{`
### 2. Literature Review – Teen-Friendly Version

#### 2.1 Blockchain and Machine Learning – A Cool Combo
Blockchain is kind of like a super secure online notebook that keeps records and can’t be easily changed. People use it to store important stuff like data or personal info. But it’s still got problems like being slow, not easy to work with other systems, and needing clear rules. 

Machine Learning (ML), on the other hand, is about teaching computers to learn from past data. When you mix ML with blockchain, it can help detect fraud, weird behavior, and even health issues. For example, ML can help find hackers in the network or spot fake transactions. Together, they’re being used in finance, healthcare, and even 5G networks.

Some systems also let you search on blockchain with keywords and keep a log of who made changes to the data. People are also trying to fix problems with normal cloud storage (like Google Drive) by using blockchain and encryption.

#### 2.2 Blockchain + Internet of Things (IoT)
IoT means smart devices like smartwatches or smart fridges. Some studies use blockchain to keep these devices safe. For example:
- Spotting fake devices using ML.
- Building trust scores for devices in a supply chain.
- Letting smart cars talk to each other securely.

People are using ML to protect smart homes and smart cities too, by detecting attacks like DoS (blocking access), spoofing (pretending to be someone else), or spying.

#### 2.3 Spotting Scam Transactions on Blockchain
Some researchers looked at how to catch scammers in the Bitcoin network using graph math and ML tricks like k-means clustering and support vector machines. They found unusual patterns, but no one was using deep learning to catch phishing scams in real-time.

This study changed that by using a model that works no matter what kind of transaction pattern you have. One of the best tools for this turned out to be LSTM (Long Short-Term Memory), which is great at understanding sequences of actions.

#### 2.4 Catching Phishing Scams in Crypto
Lots of researchers are working on catching bad actors in Ethereum. They use smart tools like:
- KNN, Decision Trees, and XGBoost to spot fake addresses.
- Multilayer Perceptrons (a type of ML) to find scam tokens.
- Graph-based models to analyze suspicious activity.

They train these models on real scam data from websites like Etherscan.io. One of the most successful tools in this paper was an ensemble method (mixing several models) that had nearly perfect accuracy.

---

### 3. How We Did It

#### 3.1 The Dataset
They used an Ethereum dataset from GitHub with about 2,400 addresses. Most were scams. The dataset includes tokens, smart contracts, addresses, and more — all in easy-to-read JSON files.

#### 3.2 The Model
They turned transaction addresses into numbers using word embedding (like turning words into math). Then they used 3 types of models:
- **LSTM**: remembers stuff over time
- **Bi-LSTM**: reads sequences forward and backward
- **CNN-LSTM**: a mix of image and sequence processing

They found Bi-LSTM worked better than GRU, and then combined all models using a technique called ensemble voting to make one strong decision.

#### 3.3 Word Embedding
It’s a way to turn words (or data) into number vectors that computers can understand. Similar things get similar numbers. These vectors were used to teach the neural network.

#### 3.4 The Deep Learning Models
- **LSTM**: Good at learning long sequences like time-series data.
- **Bi-LSTM**: Reads data from both directions to catch more context.
- **CNN-LSTM**: Uses filters to pick out patterns, then processes sequences.

They also used techniques like max pooling (to keep only important info), dropout (to avoid overfitting), and batch normalization (to speed up learning).

#### 3.5 Hyperparameters (Model Settings)
They tested lots of options to find the best settings:
- Best accuracy came with dropout of 0.3, batch size 64, and optimizer = Adam.
- CNN had 16 filters, Bi-LSTM used 3 layers and 64 hidden units.

#### 3.6 Ensemble Voting
Instead of relying on one model, they combined all three. This method is like having a group of people vote on an answer instead of just one person. It’s smarter and more accurate.

#### 3.7 Performance Check
They used scores like accuracy, precision, and recall. The ensemble model beat all others with ~99.86% in almost every metric.

---

### 4. Results and Comparisons

#### 4.1 Implementation
The model was built using Python, Keras, and TensorFlow. They trained it on a Windows laptop. After training for 100 rounds, the model picked the best version automatically.

#### 4.2 Results
The best-performing model was the **ensemble of LSTM, CNN-LSTM, and Bi-LSTM** — it scored:
- Accuracy: 99.72%
- Precision & Recall: 99.86%
- F-score: 99.86%

#### 4.3 Comparing with Other Scam Detectors
Other approaches like:
- **Blacklists**: need constant updating.
- **Heuristics**: use rules but can miss new scams.
- **ML models**: more flexible but need lots of data.
- **Consensus checks**: rely on honest nodes in the network.

Their model combined everything (ensemble style) and got the best performance.

#### 4.4 Beating Past Research
Compared to other methods:
- Their model scored **much higher** on accuracy, recall, and F1 score.
- Previous models missed phishing or had lower accuracy.

---

### 5. Final Thoughts
This study shows that using deep learning (LSTM + CNN + Bi-LSTM) with ensemble learning can seriously improve phishing detection on blockchains. Future work might explore smarter deep learning models or use these in fully decentralized systems for even better security.

Basically: smart models + teamwork = less scam, safer blockchain.
`}</code></pre>


        </div>
    )
}

export default Research0604