import { LlmPage } from '@/src/llm/LlmPage';

export const metadata = {
  alternates: { canonical: 'https://chudonghao.cn/llm/' },
  description: '大语言模型可视化中文版，通过 3D 动画与分步讲解，呈现大语言模型的工作原理。',
};

export default function Page() {
    return <LlmPage />;
}
