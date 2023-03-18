import Image from "next/image";
import Link from "next/link";

const AIKaigi = () => {
  return (
    <div>
      <div>
        <div>
          <div>AIカイギ</div>
          <div>お題を投げると、2人のAIがそれぞれ賛成と反対に分かれて会議してくれます。賛成役のAIはポジくんで、反対役はネガちゃんです。2022年冬に公開されたばかりの世界最先端の自然言語処理AIを使っているため、どんな難しいお題でも柔軟に対応してくれます。「今日の帰り道でアイスを食べたほうがいい？」みたいな身近な話題から、「防衛費の増額は増税でまかなうべきか」といった専門的な話題まで何でも答えることができます。もちろん、あなたも2人のAIと一緒に議論に参加できます。いますぐダウンロードして、2人のAIと会議をしてみましょう！</div>
          <div>
            <div>
              <Image src="/images/aikaigi/ios1.png" width={200} height={200} alt="" />
              <Image src="/images/aikaigi/ios2.png" width={200} height={200} alt="" />
              <Image src="/images/aikaigi/ios3.png" width={200} height={200} alt="" />
            </div>
          </div>
          <div>プライバシーポリシー</div>
          <div>
            <Link href={"/aikaigi/privacypolicy"}>プライバシーポリシー</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIKaigi;
