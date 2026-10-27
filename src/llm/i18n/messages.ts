import type { Locale } from './locale';

export const en = {
    'page.title': 'LLM Visualization',
    'page.home': 'Home',
    'page.language': 'Language',
    'chapter.prefix': 'Chapter: ',
    'chapter.overview': 'Overview',
    'chapter.preliminaries': 'Preliminaries',
    'chapter.embedding': 'Embedding',
    'chapter.layerNorm': 'Layer Norm',
    'chapter.selfAttention': 'Self Attention',
    'chapter.projection': 'Projection',
    'chapter.mlp': 'MLP',
    'chapter.transformer': 'Transformer',
    'chapter.softmax': 'Softmax',
    'chapter.output': 'Output',
    'toc.title': 'Table of Contents',
    'toc.intro': 'Intro',
    'toc.introduction': 'Introduction',
    'toc.components': 'Components',
    'diagram.tokenEmbed': 'tok embed',
    'diagram.positionEmbed': 'pos embed',
    'diagram.layerNorm': 'layer norm',
    'diagram.multiHeadCausal': 'multi-head, causal',
    'diagram.selfAttention': 'self-attention',
    'diagram.feed': 'feed',
    'diagram.forward': 'forward',
    'diagram.linear': 'linear',
    'diagram.transformer': 'transformer i',
    'controls.continue': 'Continue',
    'controls.pause': 'Pause',
    'controls.skip': 'Skip',
    'controls.previousChapter': 'Previous chapter',
    'controls.nextChapter': 'Next chapter',
    'controls.play': 'Play this step',
    'controls.jump': 'Jump to the start of this step',
    'controls.showModel': 'Show the whole model',
    'controls.focusInput': 'Focus on the input',
    'hint.before': 'Press ',
    'hint.space': 'Space',
    'hint.after': ' to continue',
    'webgl.required': 'This application requires a WebGL2 capable browser.',
    'webgl.suggestion': 'Please try the latest version of Chrome or Firefox.',
    'intro.tokenTerm': '_token_',
    'intro.tokenIndexTerm': '_token index_',
    'intro.table.token': 'token',
    'intro.table.index': 'index',
    'intro.cells.processing': 'being processed',
    'intro.cells.weights': 'weights',
    'intro.welcome': `Welcome to the walkthrough of the GPT large language model! Here we'll explore the model _nano-gpt_, with a mere 85,000 parameters.

Its goal is a simple one: take a sequence of six letters: {input}and sort them in alphabetical order, i.e. to "ABBBCC".`,

    'intro.tokenization': `We call each of these letters a {token}, and the set of the model's different tokens make up its _vocabulary_:{vocabulary}

From this table, each token is assigned a number, its {tokenIndex}. And now we can enter this sequence of numbers into the model:{indices}`,

    'intro.embeddings': 'In the 3d view, each green cell represents a number being processed, and each blue cell is a weight. {cells}Each number in the sequence first gets turned into a 48 element vector (a size chosen for this particular model). This is called an _embedding_.',
    'intro.layers': 'The embedding is then passed through the model, going through a series of layers, called transformers, before reaching the bottom.',
    'intro.output': 'So what\'s the output? A prediction of the next token in the sequence. So at the 6th entry, we get probabilities that the next token is going to be \'A\', \'B\', or \'C\'.',
    'intro.repeat': 'In this case, the model is pretty sure it\'s going to be \'A\'. Now, we can feed this prediction back into the top of the model, and repeat the entire process.',
} as const;

export type MessageKey = keyof typeof en;

export const zhCN: Record<MessageKey, string> = {
    'page.title': '大语言模型可视化',
    'page.home': '首页',
    'page.language': '语言',
    'chapter.prefix': '章节：',
    'chapter.overview': '概览',
    'chapter.preliminaries': '基础知识',
    'chapter.embedding': '嵌入',
    'chapter.layerNorm': '层归一化',
    'chapter.selfAttention': '自注意力',
    'chapter.projection': '投影',
    'chapter.mlp': '多层感知机',
    'chapter.transformer': 'Transformer',
    'chapter.softmax': 'Softmax',
    'chapter.output': '输出',
    'toc.title': '目录',
    'toc.intro': '入门',
    'toc.introduction': '简介',
    'toc.components': '模型组件',
    'diagram.tokenEmbed': '词元嵌入',
    'diagram.positionEmbed': '位置嵌入',
    'diagram.layerNorm': '层归一化',
    'diagram.multiHeadCausal': '多头、因果',
    'diagram.selfAttention': '自注意力',
    'diagram.feed': '前馈',
    'diagram.forward': '网络',
    'diagram.linear': '线性层',
    'diagram.transformer': 'Transformer i',
    'controls.continue': '继续',
    'controls.pause': '暂停',
    'controls.skip': '跳过',
    'controls.previousChapter': '上一章',
    'controls.nextChapter': '下一章',
    'controls.play': '播放这一步',
    'controls.jump': '跳到这一步的开头',
    'controls.showModel': '查看整个模型',
    'controls.focusInput': '聚焦输入',
    'hint.before': '按',
    'hint.space': '空格',
    'hint.after': '继续',
    'webgl.required': '此应用需要支持 WebGL2 的浏览器。',
    'webgl.suggestion': '请尝试使用最新版本的 Chrome 或 Firefox。',
    'intro.tokenTerm': '_词元（token）_',
    'intro.tokenIndexTerm': '_词元索引_',
    'intro.table.token': '词元',
    'intro.table.index': '索引',
    'intro.cells.processing': '参与计算的数据',
    'intro.cells.weights': '权重',
    'intro.welcome': `欢迎来到 GPT 大语言模型的交互教程！我们将探索 _nano-gpt_，一个只有约 8.5 万个参数的小模型。

它的任务很简单：接收六个字母组成的序列：{input}然后按字母顺序将它们排列成“ABBBCC”。`,

    'intro.tokenization': `这里每个字母都是一个{token}，模型中所有不同的词元组成了它的_词表（vocabulary）_：{vocabulary}

表中每个词元都对应一个数字，称为{tokenIndex}。这样，我们就能把字母序列转换成数字序列，输入模型：{indices}`,

    'intro.embeddings': '在三维视图中，每个绿色单元代表参与计算的一个数值，每个蓝色单元代表一个权重。{cells}输入序列中的每个数字首先会被转换成一个 48 维向量。48 是这个模型选定的向量长度；这种表示称为_嵌入（embedding）_。',
    'intro.layers': '嵌入向量随后会经过模型中的多层 Transformer，一路传递到模型底部。',
    'intro.output': '模型会输出什么？它会预测序列中的下一个词元。在第六个位置，我们得到下一个词元分别为 A、B、C 的概率。',
    'intro.repeat': '在这个例子中，模型认为下一个词元很可能是 A。我们可以把这个预测结果追加到输入序列中，再从模型顶部开始，重复整个过程。',
};

export const dictionaries: Record<Locale, Record<MessageKey, string>> = { en, 'zh-CN': zhCN };

export function translate(locale: Locale, key: MessageKey): string {
    return dictionaries[locale][key] ?? en[key];
}

/** Keep interactive objects intact, even when a translation reorders its slots. */
export function interpolate<T>(message: string, slots: Record<string, T>) {
    const strings: string[] = [];
    const values: T[] = [];
    let offset = 0;
    for (const match of message.matchAll(/\{([a-zA-Z][a-zA-Z0-9]*)\}/g)) {
        const name = match[1];
        if (!Object.hasOwn(slots, name)) throw new Error(`Missing translation slot: ${name}`);
        strings.push(message.slice(offset, match.index));
        values.push(slots[name]);
        offset = match.index! + match[0].length;
    }
    strings.push(message.slice(offset));
    return { strings, values };
}
