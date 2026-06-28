"use client";

export default function NewsTicker() {

const news=[
"🔥 Mbappé scores a stunning hat-trick.",
"🇲🇦 Hakimi named African Player of the Week.",
"🏆 Champions League draw announced.",
"🇸🇦 Saudi Pro League transfer window opens.",
"🇯🇵 J-League attendance reaches record levels."
]

return(

<div className="overflow-hidden bg-green-500 text-black font-bold py-3">

<div className="animate-[ticker_40s_linear_infinite] whitespace-nowrap">

{news.map((n,i)=>(

<span key={i} className="mx-16">{n}</span>

))}

</div>

</div>

)

}