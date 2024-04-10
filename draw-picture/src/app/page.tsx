"use client";
import Image from "next/image";
import localImage from "../../public/macaron.png";
import styles from "./styles.module.css";
import React, { useRef, Component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Home() {
  return (
    <main className={`${styles.mainContainer} ${styles.textCenter}`}>
      <div className="text-center p-4">
        <div className="flex justify-center">
          <TransformWrapper>
            <TransformComponent>
              <Image src={localImage} alt="マカロン" />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <h1 className="text-2xl font-bold">マカロン</h1>
        <p>
          マカロン（仏: macaron、英:
          macaroon）は、アーモンドパウダー、砂糖、卵白などを主原料とする焼き菓子である。フランスやイタリアなどで伝統的に親しまれており、特にフランスでは色とりどりのマカロンが有名である。一般に円形の二枚の焼き菓子の間にクリームなどのフィリングを挟んで作られるが、素焼きのものや、フィリングを挟まないものもある。
          マカロンの起源はフランスであるとされているが、一説にはイタリアからフランスに伝わったとも言われている。16世紀にイタリアのカトリーヌ・ド・メディシスがフランスに嫁いだ際にもたらされたという説や、9世紀にアラブの世界からヨーロッパに伝わり、イタリアの修道院で作られたという説などがある。フランスでは19世紀以降、パリの高級菓子店ラダレエで広められたことがマカロンの広まりに大きく貢献したとされている。
          マカロンの特徴は、しっとりとした食感と様々なフレーバーである。アーモンドパウダーが主原料のため、しっとりとした食感がありながらも軽やかな味わいが特徴である。フィリングのクリームによって、さまざまな味のバリエーションが楽しめる。
          現代では、フランスを中心に世界中で様々な種類のマカロンが作られており、洋菓子として広く親しまれている。色とりどりのマカロンは、見た目の美しさと共に味わいも楽しむことができ、ギフトやお土産としても人気がある。
          マカロンは一般的に高価な菓子として知られており、素材の高価さや手間のかかる製法などから、高級感のあるスイーツとして扱われることが多い。特にフランスのパティスリーや高級ホテルなどで提供されることが多く、贈り物やおもてなしに選ばれることもある。
          マカロンは、シンプルな味わいからエキゾチックな味まで様々なバリエーションがあり、季節やトレンドに応じて新しいフレーバーが生み出されている。そのため、菓子作りの世界では常に注目され、愛され続けている焼き菓子の一つである。
          以上が、適当な1000文字のマカロンに関する説明文でした。
        </p>
      </div>
    </main>
  );
}
