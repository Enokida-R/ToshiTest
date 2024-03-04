import React from "react";

function ResultDrawcd() {
    alert('あなたは2つのタイプのちょうど中間')
    return (
        <>
        <div className="mt-5 shadow-2xl opacity-95 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-lg overflow-hidden p-5 text-gray-800">
                <div className="flex justify-center">
                    <img src="./img/C.webp" alt="" className="rounded h-40 w-auto"/>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">注目型</h3>
                <p className="text-white">情熱、すなわち自分の熱意や「やる気」が何より大事なタイプです。<br />人から注目されたい、認められたい、頼られたいという欲求が基本的に強い。そのため目立ちたがりの甘えん坊、人情もろくておせっかいな人が多い。<br />無視されたり、ないがしろにされるのが、一番辛い。だから自分がのけ者にされたり、かげ口を言われると腹が立ちます。ムードメーカーで、そこにいるだけで、場が華やぐ人が多いのもこのタイプ。面倒見がよく、付き合い上手ですが、身近に不機嫌な人がいると、落ち着かない。会話が途切れないように気を遣うことが多いですし、飲み会などでも参加者が楽しめているかついつい気になってしまいます。<br />認められたいと思うあまり、できもしない頼まれ事を断り切れずに引き受けて、評価を下げることも多いんです。<br />人間的な欠点も多いけど魅力的な人も多い。アイドルになるタイプ、それが注目型です。</p>
        </div>


        <div className="shadow-2xl opacity-95 bg-gradient-to-r from-red-700 to-red-500 rounded-lg overflow-hidden p-5 text-gray-100">
            <div className="flex justify-center">
                <img src="./img/D.webp" alt="" className="rounded h-40 w-auto"/>
            </div>
            <h3 className="text-xl font-bold mb-2">司令型</h3>
            <p className="">勝ちたい！負けたくない！それが司令型の基本的な欲求です。<br />頑張り屋で、常識人のしっかり者。だからこそ先輩・後輩や目上・目下などの上下関係に敏感で礼儀正しく、下級生や後輩が生意気だと腹が立ちます。<br /> 能力の差はもちろんのこと、社会的地位や序列を一番気にするタイプ。仕事も恋愛も家庭もすべてが対決の場です。その勝敗の判定ルールも、はっきりと合理的で理性的。<br />他人への好き嫌いを表に出さず、誰とでも付き合いができる。その上、向上心あふれ、よく働く努力家になるので、有能な人が多いのが司令型の特徴です。<br />でも「冷たく気が許せない」と評価される人も多いはず。そんな孤独に耐える強さや自分に対する厳しさも備えた、まさにリーダーや指導者になるために生まれてきたような人、それが司令型です。</p>
        </div>
        </>
    )
}

export default ResultDrawcd;