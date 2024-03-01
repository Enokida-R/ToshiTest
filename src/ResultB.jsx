import React, { useState, useEffect } from "react";
import ResultE from './ResultE';
import ResultF from './ResultF';
import ResultDraw from './ResultDraw'

function ResultB() {
    const [quizIndex, setQuizIndex] = useState(0);
    const [Ee, setEe] = useState(0);
    const [Ff, setFf] = useState(0);
    const [result, setResult] = useState(null); 
    const quiz=[
        {
            question:'21.どちらかというと？(E:話すより聞く方が好きF:聞くのも好きだけそ、熱く語るのも好き)',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        },{
            question:'22.恋人とはどんな関係が理想(E:一緒にいて落ち着く関係F:お互いの全てをわかりあう関係)',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        },{
            question:'23.趣味にハマることある？(E:特に何かに熱中できないF:熱く語りたい趣味がいくつある',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        },{
            question:'24.クラスの人気者や中心人物をどう思う？(E:自分とは関係ない人F:なんとなく憧れてしまう)',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        },{
            question:'25.こういう『性格テスト』をどう思う？(E:鵜呑みにはしないが興味はあるF:人間はタイプ分けなどできないはず)',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        },{
            question:'26.自分のこと好きか(E:そんなことは考えないF:時々、すごくイヤになる)',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        },{
            question:'27.好きな人ができた。さてどうなる？(E:なぜ好きか、どこが好きか考えるF:自分の気持ちが止まらなくなる)',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        },{
            question:'28.小さい子供の頃、ものすごく好きなおもちゃやグッズなどがあった(E:特になかったF:手放せず、無いと泣いたりした)',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        },{
            question:'29.買い物で買う・買わないの基準は(E:必要、無難、効率、手頃F:好き、自分らしい、かっこいい)',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        },{
            question:'30.あなたの説明、わからないと言われる時の理由は？(E:合っているけど身も蓋も無いF:長くてまどろっこしい)',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        },{
            question:'31.ノルマ、締切などの言葉を聞くと思い浮かべるイメージは？(E:調整、段取り、工夫、計画F:管理、数学、賞罰、成果)',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        },{
            question:'32.あなたがすごくイヤだと感じるのは、どっち？(E:指示ミスで仕事が無駄になることF:間違っていると思うことを強制されることo』)',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        },{
            question:'32.あなたがすごくイヤだと感じるのは、どっち？(E:指示ミスで仕事が無駄になることF:間違っていると思うことを強制されることo』)',
            answers:[
                'E',
                'e',
                '?',
                'f',
                'F'
            ]
        }];

        useEffect(() => {
            // クイズが終了したかどうかをチェックし、結果に応じてresult状態を更新
            if (quizIndex === quiz.length - 1) {
              if (Ee > Ff) {
                setResult('E');
              } else if (Ee < Ff) {
                setResult('F');
              } else {
                setResult('Draw');
              }
            }
          }, [quizIndex, Ee, Ff, quiz.length]); // 依存配列にAaとBbを追加
        
          const handleAnswerClick = (answer) => {
            // ここでは状態を更新するだけで、結果に基づいてレンダリングするロジックは削除
            if (answer === 'E') {
              setEe(prevEe => prevEe + 2);
            } else if (answer === 'e') {
              setEe(prevEe => prevEe + 1);
            } else if (answer === 'F') {
              setFf(prevFf => prevFf + 2);
            } else if (answer === 'f') {
              setFf(prevFf => prevFf + 1);
            }
        
            // 次の質問へ進む、またはクイズを終了する
            if (quizIndex < quiz.length - 1) {
              setQuizIndex(prevQuizIndex => prevQuizIndex + 1);
            }
          };
        
          // 結果に基づいてコンポーネントをレンダリング
          if (result === 'E') {
            return <ResultE />;
          } else if (result === 'F') {
            return <ResultF />;
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

export default ResultB;