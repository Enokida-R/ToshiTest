import React, { useState, useEffect } from "react";
import ResultC from './ResultC';
import ResultD from './ResultD';
import ResultDraw from './ResultDraw'; 

function ResultA() {

    const [quizIndex, setQuizIndex] = useState(0);
    const [Cc, setCc] = useState(0);
    const [Dd, setDd] = useState(0);
    const [result, setResult] = useState(null); 
    const quiz=[
        {
            question:'21.どちらかというと？(C:目立ちたがりD:仕切り屋)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        },{
            question:'22.泣いて頼まれたら(C:『いや』とは言えないD:みっともないと思ってしまう)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        },{
            question:'23.クラスで一番才能のある人とは(C:友達になりたいD:ライバルとして認めてもらいたい)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        },{
            question:'24.好きな人に、『自分は惚れられている』と実感できるのは(C:全てが好きと言われる時D:相手の愛情の方が大きいと感じる時)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        },{
            question:'25.どんなプレゼントをあげたい(C:自分があげたいものD:誰もが納得できる価値があるもの)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        },{
            question:'26.『よし、明日から早起きするぞ！』と宣言した。さてどうなる？(C:３日で忘れるD:言った限りは守る)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        },{
            question:'27.恋人とそろそろ危ない感じ。別れるならどうする？(C:別の人を好きになりフェードアウトD:相手が言い出す前に切り出す)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        },{
            question:'28.子供の頃遊ぶ時は(C:気に合う友達を誘って遊んだD:得意な遊ぶに友達を誘った)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        },{
            question:'29.叶えたい夢へのアプローチ方法は(C有言実行:D:実現の可能性が高くなるまで言わない)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        },{
            question:'30.先輩からは、同僚と比べ自分の方が(C:目をかけられると嬉しいD:評価されると嬉しい)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        },{
            question:'31.後輩から、どう思われているとわかったらショック？(C:怖がられ、嫌われているD:バカにされ、みくびられている)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        },{
            question:'32.買い物で迷っている時、有効な店員の一押しの言葉は？(C:『お似合い』『今売れている』D:『最新型』『限定』『お買い得』)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        },{
            question:'32.買い物で迷っている時、有効な店員の一押しの言葉は？(C:『お似合い』『今売れている』D:『最新型』『限定』『お買い得』)',
            answers:[
                'C',
                'c',
                '?',
                'd',
                'D'
            ]
        }];

        useEffect(() => {
            // クイズが終了したかどうかをチェックし、結果に応じてresult状態を更新
            if (quizIndex === quiz.length - 1) {
              if (Cc > Dd) {
                setResult('C');
              } else if (Cc < Dd) {
                setResult('D');
              } else {
                setResult('Draw');
              }
            }
          }, [quizIndex, Cc, Dd, quiz.length]); // 依存配列にAaとBbを追加
        
          const handleAnswerClick = (answer) => {
            // ここでは状態を更新するだけで、結果に基づいてレンダリングするロジックは削除
            if (answer === 'C') {
              setCc(prevCc => prevCc + 2);
            } else if (answer === 'c') {
              setCc(prevCc => prevCc + 1);
            } else if (answer === 'D') {
              setDd(prevDd => prevDd + 2);
            } else if (answer === 'd') {
              setDd(prevDd => prevDd + 1);
            }
        
            // 次の質問へ進む、またはクイズを終了する
            if (quizIndex < quiz.length - 1) {
              setQuizIndex(prevQuizIndex => prevQuizIndex + 1);
            }
          };
        
          // 結果に基づいてコンポーネントをレンダリング
          if (result === 'C') {
            return <ResultC />;
          } else if (result === 'D') {
            return <ResultD />;
          } else if (result === 'Draw') {
            return <ResultDraw />;
          }

    return(
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
    ) 
    
}

export default ResultA;