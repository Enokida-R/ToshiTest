import { useState, useEffect } from 'react'
import './App.css'
import ResultA from './ResultA';
import ResultB from './ResultB';
import ResultDraw from './ResultDraw'; 
import { Result } from 'postcss';


alert('30問からなる心理テストです。「Ａ」か「Ｂ」を選び、できるだけ両端に◯をつけてください。「どちらかといえばＡ」なら「ａ」、「どちらかといえばＢ」なら「ｂ」を、どうしても分からない場合のみ「？」を選択してください。');

function App() {

  

  const [quizIndex, setQuizIndex] = useState(0);
  const [Aa, setAa] = useState(0);
  const [Bb, setBb] = useState(0);
  const [result, setResult] = useState(null);
  const quiz=[
    {
        question:'1.新しいクラスや職場になったら、自分から入ろうとするグループは？ (A:多人数で楽しそうなグループ B:気の合いそうな人がいるグループ)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'2.気に入らないプレゼントをもらった時、どう思う？ (A:気に入らなくても気持ちが嬉しい B:ありがたいけど、内心は喜べない)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'3.信頼していた人に裏切られた (A:理由をみんなに相談する B:理由を本人から聞き出す)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'4.パーティーなどの集まりでは (A:みんなでわいわい遊びたい B:静かにじっくり語り合いたい)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'5.親友の欠点に対しては (A:言わずに許すのが本当の友達 B:指摘してあげるのが本当の友達)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'6.若い頃のあなたは、初対面の人に対しては (A:緊張して喋りまくった B:話題が見つからず、気まずくなった)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'7.せっかくの大型連休に予定がない。ずっと一人で過ごすのは (A:なんだか取り残されているようで不安 B:大好き！ストレスにならない)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'8.新歓やコンパンの後のカラオケ。選曲の基準は (A:他のメンバーがどんな曲を選ぶか B:自分の好きな曲、向いている曲)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'9.あえて選ぶなら、親友はどっち (A:今飲んだり相談したりできる人 B:様々な思い出を共有している人)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'10.友達や恋人のセンスが、他の人とかけ離れているとき (A:もちろん気になる B:全く気ならない)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'11.気になる人ができた。どっちを考える (A:相手が自分に気があるか B:自分が相手にどれくらい惚れているか)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'12.子供の頃ケンカしたり叱られたりすると (A:駄々をこね、人前で多なき B:目立たない場所で泣いたり、拗ねたり)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'13.グループ内でもめごと。あなたはどっち (A:早く解決して欲しいから多数派につく B:よく考えて結論を出す)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'14.思わぬ臨時収入が入った。金額がちょうど同じなら (A:自己投資に使いたい B:前から欲しかったものを買いたい)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'15.同性から旅行に誘われた。一番にきになるのは (A:参加メンバー B:どこへ行くか)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'16.予定外に空き時間ができた。そこへ親しくない人からのパティーの誘い (A:これも自己投資だと思って、出かける B:自分のための時間に使う)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'17.昔は他人からどう見られることが多かった (A:人見知りしない B:人見知りする)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'18.クラスや職場で仲間同士を強調する熱いタイプに対して (A:ノって話を合わせてあげる B:逆らわないが、どうも苦手)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'19.合格率の低い資格に合格した。まず友達に話すことは (A:どんなに受かるのが大変な資格か B:資格を使ってなにをしたいか)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
        question:'20.子供の頃の嫌な思い出は (A:叱られたり嫌われたりしたこと B:間違えたりできなかったこと)',
        answers:[
            'A',
            'a',
            '?',
            'b',
            'B'
        ]
    },{
      question:'20.子供の頃の嫌な思い出は(A:叱られたり嫌われたりしたことB:間違えたりできなかったこと)',
      answers:[
          'A',
          'a',
          '?',
          'b',
          'B'
      ]
  }];
  


  useEffect(() => {
    // クイズが終了したかどうかをチェックし、結果に応じてresult状態を更新
    if (quizIndex === quiz.length - 1) {
      if (Aa > Bb) {
        setResult('A');
      } else if (Aa < Bb) {
        setResult('B');
      } else {
        setResult('Draw');
      }
    }
  }, [quizIndex, Aa, Bb, quiz.length]); // 依存配列にAaとBbを追加

  const handleAnswerClick = (answer) => {
    if (answer === 'A') {
      setAa(prevAa => prevAa + 2);
    } else if (answer === 'a') {
      setAa(prevAa => prevAa + 1);
    } else if (answer === 'B') {
      setBb(prevBb => prevBb + 2);
    } else if (answer === 'b') {
      setBb(prevBb => prevBb + 1);
    }

    console.log(`Aa=${Aa}`);
    console.log(`Bb=${Bb}`);

    // 次の質問へ進む、またはクイズを終了する
    if (quizIndex < quiz.length - 1) {
      setQuizIndex(prevQuizIndex => prevQuizIndex + 1);
    }
  };

  // 結果に基づいてコンポーネントをレンダリング
  if (result === 'A') {
    return <ResultA />;
  } else if (result === 'B') {
    return <ResultB />;
  } else if (result === 'Draw') {
    return <ResultDraw />;
  }

  return (
   <>
      <div className="max-w-4xl mx-auto my-10">
        <div className='shadow-2xl text-lg font-semibold mb-6 p-4 bg-white-900 text-gray-800 rounded-lg'>
            {quiz[quizIndex].question}
        </div>

        <div className="flex justify-between items-center flex-wrap">
            {quiz[quizIndex].answers.map((answer, index) => (
                <button 
                    key={index}
                    className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm transition-colors duration-150' 
                    onClick={() => handleAnswerClick(answer)}>
                    {answer}
                </button>
            ))}
        </div>
      </div>


   </>
  );
}

export default App
