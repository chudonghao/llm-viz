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
    'prelim.body': `
Before we delve into the algorithm's intricacies, let's take a brief step back.

This guide focuses on _inference_, not training, and as such is only a small part of the entire machine-learning process.
In our case, the model's weights have been pre-trained, and we use the inference process to generate output. This runs directly in your browser.

The model showcased here is part of the GPT (generative pre-trained transformer) family, which can be described as a "context-based token predictor".
OpenAI introduced this family in 2018, with notable members such as GPT-2, GPT-3, and GPT-3.5 Turbo, the latter being the foundation of the widely-used ChatGPT.
It might also be related to GPT-4, but specific details remain unknown.

This guide was inspired by the {minGpt} GitHub project, a minimal GPT implementation in {pytorch}
created by {andrej}.
His YouTube series {zeroToHero} and the minGPT project have been invaluable resources in the creation of this
guide. The toy model featured here is based on one found within the minGPT project.

Alright, let's get started!
`,

    'embedding.introduction': `
We saw previously how the tokens are mapped to a sequence of integers using a simple lookup table.
These integers, the {tokenIndices}, are the first and only time we see integers in the model.
From here on out, we're using floats (decimal numbers).

Let's take a look at how the 4th token (index 3) is used to generate the 4th column vector of our {inputEmbedding}.`,

    'embedding.tokenEmbedding': `
We use the token index (in this case {token} = {tokenIndex}) to select the 2nd column of the {tokenEmbedding} on the left.
Note we're using 0-based indexing here, so the first column is at index 0.

This produces a column vector of size {channels}, which we describe as the token embedding.
    `,

    'embedding.positionEmbedding': `
And since we're looking at our token {token} in the 4th _position_ (t = {position}), we'll take the 4th column of the {positionEmbedding}.

This also produces a column vector of size {channels}, which we describe as the position embedding.
    `,

    'embedding.addition': `
Note that both of these position and token embeddings are learned during training (indicated by their blue color).

Now that we have these two column vectors, we simply add them together to produce another column vector of size {channels}.
`,

    'embedding.sequence': `
We now run this same process for all of the tokens in the input sequence, creating a set of vectors which incorporate both the token values and their positions.

`,

    'embedding.dimensions': `
Feel free to hover over individual cells on the {inputEmbedding} matrix to see the computations and their sources.

We see that running this process for all the tokens in the input sequence produces a matrix of size {timeSymbol} x {channelSymbol}.
The {timeSymbol} stands for {timeTerm}, i.e., you can think of tokens later in the sequence as later in time.
The {channelSymbol} stands for {channelTerm}, but is also referred to as "feature" or "dimension" or "embedding size". This length, {channelSymbol},
is one of the several "hyperparameters" of the model, and is chosen by the designer to in a tradeoff between model size and performance.

This matrix, which we'll refer to as the {inputEmbedding} is now ready to be passed down through the model.
This collection of {timeColumns} columns each of length {channelLength} will become a familiar sight throughout this guide.
`,

    'embedding.tokenIndicesTerm': '_token indices_',
    'embedding.inputEmbeddingTerm': '_input embedding_',
    'embedding.tokenEmbeddingTerm': '_token embedding matrix_',
    'embedding.positionEmbeddingTerm': '_position embedding matrix_',
    'embedding.timeTerm': '_time_',
    'embedding.channelTerm': '_channel_',
} as const;

export type MessageKey = keyof typeof en;

type SlotNames<Text extends string> = Text extends `${string}{${infer Name}}${infer Rest}`
    ? Name | SlotNames<Rest>
    : never;

/** Require the slots named in the English message; plain messages need no arguments. */
export type MessageArguments<Key extends MessageKey> = [SlotNames<typeof en[Key]>] extends [never]
    ? [slots?: Record<string, never>]
    : [slots: Record<SlotNames<typeof en[Key]>, unknown>];

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
    'prelim.body': `在深入算法细节之前，先了解一些背景。

本教程重点讲解_推理（inference）_，而不是训练，因此只涉及机器学习全流程的一部分。这里使用的模型权重已经训练好，我们通过推理过程生成输出。整个过程直接在你的浏览器中运行。

本教程展示的模型属于 GPT（生成式预训练 Transformer）家族，可以理解为“根据上下文预测词元的模型”。OpenAI 于 2018 年推出这一模型家族，成员包括 GPT-2、GPT-3 和 GPT-3.5 Turbo。原文写作时，广泛使用的 ChatGPT 基于 GPT-3.5 Turbo；原文也提到 GPT-4 可能与这一架构有关，但当时具体细节尚不明确。

本教程的灵感来自 GitHub 上的 {minGpt} 项目。这是 {andrej} 使用 {pytorch} 编写的精简版 GPT 实现。他在 YouTube 上的系列课程 {zeroToHero} 和 minGPT 项目，为本教程的制作提供了重要参考。这里演示的小模型也源自 minGPT 项目中的一个示例。

现在开始吧！`,

    'embedding.introduction': `前面我们已经看到，词元通过一个简单的查找表映射成整数序列。这些整数就是{tokenIndices}；这是模型中第一次、也是唯一一次使用整数。后续计算使用浮点数（带小数的数值）。

接下来看看第 4 个词元（索引为 3）如何生成{inputEmbedding}（input embedding）的第 4 列向量。`,

    'embedding.tokenEmbedding': `我们用词元索引（这里 {token} = {tokenIndex}）选取左侧{tokenEmbedding}的第 2 列。这里的索引从 0 开始，所以第 1 列的索引是 0。

这样得到一个长度为 {channels} 的列向量，称为_词元嵌入（token embedding）_。`,

    'embedding.positionEmbedding': `由于我们查看的词元 {token} 位于第 4 个_位置_（t = {position}），因此要取{positionEmbedding}的第 4 列。

这样同样得到一个长度为 {channels} 的列向量，称为_位置嵌入（position embedding）_。`,

    'embedding.addition': `词元嵌入和位置嵌入都是在训练过程中学习得到的，图中用蓝色表示。

现在把这两个列向量逐项相加，就得到另一个长度为 {channels} 的列向量。`,

    'embedding.sequence': '对输入序列中的每个词元重复这一过程，就得到一组同时包含词元信息和位置信息的向量。',
    'embedding.dimensions': `你可以把鼠标移到{inputEmbedding}矩阵的任意单元上，查看它的计算过程以及数值来源。

对输入序列中的所有词元完成这一过程后，我们会得到大小为 {timeSymbol} × {channelSymbol} 的矩阵。{timeSymbol} 表示{timeTerm}：可以把序列中位置靠后的词元理解为时间上更晚出现的词元。{channelSymbol} 表示{channelTerm}，也称为“特征”“维度”或“嵌入维数”。这个长度 {channelSymbol} 是模型的一个_超参数（hyperparameter）_，由模型设计者权衡模型规模与效果后选定。

这个矩阵称为{inputEmbedding}，接下来就可以沿着模型向下传递。在后续教程中，我们会经常看到这种由 {timeColumns} 个列向量组成、每个列向量长度为 {channelLength} 的结构。`,

    'embedding.tokenIndicesTerm': '_词元索引_',
    'embedding.inputEmbeddingTerm': '_输入嵌入_',
    'embedding.tokenEmbeddingTerm': '_词元嵌入矩阵_',
    'embedding.positionEmbeddingTerm': '_位置嵌入矩阵_',
    'embedding.timeTerm': '_时间（time）_',
    'embedding.channelTerm': '_通道（channel）_',
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
