import type { Locale } from './locale';

export const en = {
    'page.title': 'LLM Visualization',
    'model.block.tokens': 'Tokens',
    'model.block.tokenEmbed': 'Token Embed',
    'model.block.positionEmbed': 'Position Embed',
    'model.block.inputEmbed': 'Input Embed',
    'model.block.layerNormAggregate': 'LN Agg: μ, σ',
    'model.block.layerNorm': 'Layer Norm',
    'model.block.queryWeights': 'Q Weights',
    'model.block.keyWeights': 'K Weights',
    'model.block.valueWeights': 'V Weights',
    'model.block.qkvWeights': 'QKV Weights',
    'model.block.queryBias': 'Q Bias',
    'model.block.keyBias': 'K Bias',
    'model.block.valueBias': 'V Bias',
    'model.block.queryVectors': 'Q vectors',
    'model.block.keyVectors': 'K vectors',
    'model.block.valueVectors': 'V vectors',
    'model.block.qkvVectors': 'QKV vectors',
    'model.block.attentionMatrix': 'Attention Matrix',
    'model.block.attentionSoftmax': 'Attn Matrix Softmax',
    'model.block.valueOutput': 'V Output',
    'model.block.valueCombined': 'V Output Combined',
    'model.block.projectionWeights': 'Projection Weights',
    'model.block.projectionBias': 'Projection Bias',
    'model.block.attentionOutput': 'Attention Output',
    'model.block.attentionResidual': 'Attention Residual',
    'model.block.mlpWeights': 'MLP Weights',
    'model.block.mlpBias': 'MLP Bias',
    'model.block.mlp': 'MLP',
    'model.block.mlpActivation': 'MLP Activation',
    'model.block.mlpProjectionWeights': 'MLP Projection Weights',
    'model.block.mlpProjectionBias': 'MLP Projection Bias',
    'model.block.mlpResult': 'MLP Result',
    'model.block.mlpResidual': 'MLP Residual',
    'model.block.lmHeadWeights': 'LM Head Weights',
    'model.block.logits': 'Logits',
    'model.block.softmaxAggregate': 'SM Agg',
    'model.block.logitsSoftmax': 'Logits Softmax',
    'model.section.embedding': 'Embedding',
    'model.section.transformer': 'Transformer {index}',
    'model.section.selfAttention': 'Self-attention',
    'model.section.mlp': 'MLP',
    'model.section.projection': 'Projection',
    'model.section.head': 'Head {index}',
    'model.card.parameters': 'n_params = ',
    'model.input': 'Input',
    'model.output': 'Output',
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
    'layerNorm.introduction': `

The  {inputEmbedding} matrix from the previous section is the input to our first Transformer block.

The first step in the Transformer block is to apply _layer normalization_ to this matrix. This is an
operation that normalizes the values in each column of the matrix separately.`,

    'layerNorm.stability': `
Normalization is an important step in the training of deep neural networks, and it helps improve the
stability of the model during training.

We can regard each column separately, so let's focus on the 4th column ({columnIndex}) for now.`,

    'layerNorm.normalization': `
The goal is to make the average value in the column equal to 0 and the standard deviation equal to 1. To do this,
we find both of these quantities ({mean} & {standardDeviation}) for the column and then subtract the average and divide by the standard deviation.`,

    'layerNorm.affine': `
The notation we use here is E[x] for the average and Var[x] for the variance (of the column of length {channels}). The
variance is simply the standard deviation squared. The epsilon term (ε = {epsilon}) is there to prevent division by zero.

We compute and store these values in our aggregation layer since we're applying them to all values in the column.

Finally, once we have the normalized values, we multiply each element in the column by a learned
{weight} and then add a {bias} value, resulting in our {normalized}.`,

    'layerNorm.sequence': `
We run this normalization operation on each column of the {inputEmbedding}, and the result is
the {normalizedEmbedding}, which is ready to be passed into the Self-Attention layer.
`,

    'layerNorm.inputEmbeddingTerm': '_input embedding_',
    'layerNorm.meanTerm': 'mean (μ)',
    'layerNorm.standardDeviationTerm': 'std dev (σ)',
    'layerNorm.weightTerm': 'weight (γ)',
    'layerNorm.biasTerm': 'bias (β)',
    'layerNorm.normalizedValuesTerm': 'normalized values',
    'layerNorm.inputEmbeddingMatrixTerm': 'input embedding matrix',
    'layerNorm.normalizedEmbeddingTerm': 'normalized input embedding',
    'selfAttention.introduction': `
The self-attention layer is perhaps the heart of the Transformer and of GPT. It's the phase where the
columns in our input embedding matrix "talk" to each other. Up until now, and in all other phases,
the columns can be regarded independently.

The self-attention layer is made up of several heads, and we'll focus on one of them for now.`,

    'selfAttention.qkv': `
The first step is to produce three vectors for each of the {columns} columns from the {inputEmbedding}.
These vectors are the Q, K, and V vectors:

{qkvList}

To produce one of these vectors, we perform a matrix-vector multiplication with a bias added. Each
output cell is some linear combination of the input vector. E.g. for the {queries}, this is done with a dot product between
a row of the {queryWeights} and a column of the {inputMatrix}.`,

    'selfAttention.dotProduct': `
The dot product operation, which we'll see a lot of, is quite simple: We pair each element from
the first vector with the corresponding element from the second vector, multiply the pairs together
and then add the results up.`,

    'selfAttention.linearCombination': `

This is a general and simple way of ensuring each output element can be influenced by all the
elements in the input vector (where that influence is determined by the weights). Hence its frequent
appearance in neural networks.

We repeat this operation for each output cell in the Q, K, V vectors:`,

    'selfAttention.lookup': `
What do we do with our Q (query), K (key), and V (value) vectors? The naming
gives us a hint: "key" and "value" are reminiscent of a dictionary in software, with keys mapping to
values. Then "query" is what we use to look up the value.

{softwareAnalogy}

In the case of self-attention, instead of returning a single entry, we return some weighted
combination of the entries. To find that weighting, we take a dot product between a Q vector and each
of the K vectors. We normalize that weighting, before finally using it to multiply with the
corresponding V vector, and then adding them all up.

{attentionAnalogy}

For a more concrete example, let's look at the 6th column ({queryPosition}), from which
we will query from:`,

    'selfAttention.scores': `
The {K, V} entries of our lookup are the 6 columns in the past, and the Q value is the current time.

We first calculate the dot product between the {query} of the current column ({queryPosition}) and the {keys}
of each of the those previous columns. These are then stored in the corresponding row ({rowPosition})
of the {attentionMatrix}.`,

    'selfAttention.causal': `
These dot products are a way of measuring the similarity between the two vectors. If they're very
similar, the dot product will be large. If they're very different, the dot product will be small or
negative.

The idea of only using the query against past keys makes this _causal_ self-attention. That is,
tokens can't "see into the future".

Another element is that after we take the dot product, we divide by sqrt({scaleDimension}), where
{vectorLength} is the length of the Q/K/V vectors. This scaling is done to prevent large values from
dominating the normalization (softmax) in the next step.

We'll mostly skip over the softmax operation (described later); suffice it to say, each row is normalized to sum
to 1.`,

    'selfAttention.valueWeighting': `
Finally, we can produce the output vector for our column ({queryPosition}). We look at the ({rowPosition}) row of the
{attentionMatrix} and for each element, multiply the corresponding {values} of the
other columns element-wise.`,

    'selfAttention.output': `
Then we can add these up to produce the output vector. Thus, the output vector will be dominated by
V vectors from columns that have high scores.

Now we know the process, let's run it for all the columns.`,

    'selfAttention.summary': `
And that's the process for a head of the self-attention layer. So the main goal of self-attention is
that each column wants to find relevant information from other columns and extract their values, and
does so by comparing its _query_ vector to the _keys_ of those other columns. With the added restriction
that it can only look in the past.
`,

    'selfAttention.normalizedInputTerm': 'normalized input embedding matrix',
    'selfAttention.queryVectorsTerm': 'Q vectors',
    'selfAttention.queryWeightTerm': 'Q-weight matrix',
    'selfAttention.inputMatrixTerm': 'input matrix',
    'selfAttention.queryVectorTerm': 'Q vector',
    'selfAttention.keyVectorsTerm': 'K vectors',
    'selfAttention.attentionMatrixTerm': 'attention matrix',
    'selfAttention.normalizedAttentionTerm': 'normalized self-attention matrix',
    'selfAttention.valueVectorTerm': 'V vector',
    'selfAttention.queryLabel': 'Query vector',
    'selfAttention.keyLabel': 'Key vector',
    'selfAttention.valueLabel': 'Value vector',
    'selfAttention.softwareTitle': 'Software analogy',
    'selfAttention.lookupLabel': 'Lookup table:',
    'selfAttention.queryProcessLabel': 'Query Process:',
    'selfAttention.attentionTitle': 'Self Attention',
    'selfAttention.normalizationLabel': 'normalization',
    'projection.stacking': `

After the self-attention process, we have outputs from each of the heads. These outputs are the
appropriately mixed V vectors, influenced by the Q and K vectors.

To combine the {outputVectors} from each head, we simply stack them on top of each other. So, for time
{time}, we go from 3 vectors of length {headSize} to 1 vector of length {channels}.`,

    'projection.linear': `

It's worth noting that in GPT, the length of the vectors within a head ({headSize}) is equal to {channels} / num_heads.
This ensures that when we stack them back together, we get the original length, {originalChannels}.

From here, we perform the projection to get the output of the layer. This is a simple matrix-vector
multiplication on a per-column basis, with a bias added.`,

    'projection.residual': `

Now we have the output of the self-attention layer. Instead of passing this output directly to the
next phase, we add it element-wise to the input embedding. This process, denoted by the green
vertical arrow, is called the _residual connection_ or _residual pathway_.
`,

    'projection.summary': `

Like layer normalization, the residual pathway is important for enabling effective learning in deep
neural networks.

Now with the result of self-attention in hand, we can pass it onto the next section of the transformer:
the feed-forward network.
`,

    'projection.outputVectorsTerm': 'output vectors',
    'mlp.introduction': `

The next half of the transformer block, after the self-attention, is the MLP (multi-layer
perceptron). A bit of a mouthful, but here it's a simple neural network with two layers.

Like with self-attention, we perform a {layerNorm} before the vectors enter the MLP.

In the MLP, we put each of our {channels} length column vectors (independently) through:

1. A {expansion} with a {expansionBias} added, to a vector of length {expandedChannels}.

2. A GELU activation function (element-wise)

3. A {projection} with a {projectionBias} added, back to a vector of length {outputChannels}

Let's track one of those vectors:
`,

    'mlp.expansion': `
We first run through the matrix-vector multiplication with bias added, expanding the vector to length {expandedChannels}. Each token remains a column, with channels running from top to bottom.
`,

    'mlp.activation': `
Next, we apply the GELU activation function to each element of the vector. This is a key part of any neural network, where we introduce some non-linearity into the model. The specific function used, GELU,
looks a lot like a ReLU function (computed as {reluFormula}), but it has a smooth curve rather than a sharp corner.

{activationGraph}

`,

    'mlp.projection': `
We then project the vector back down to length {channels} with another matrix-vector multiplication with bias added.
`,

    'mlp.residual': `
Like in the self-attention + projection section, we add the result of the MLP to its input, element-wise.
`,

    'mlp.sequence': `
We can now repeat this process for all of the columns in the input.`,

    'mlp.summary': `
And that's the MLP completed. We now have the output of the transformer block, which is ready to be passed to the next block.
`,

    'mlp.layerNormTerm': 'layer normalization',
    'mlp.linearTransformationTerm': 'linear transformation',
    'mlp.biasTerm': 'bias',
    'transformer.summary': `

And that's a complete transformer block!

These form the bulk of any GPT model and are repeated a number of times, with the output of one
block feeding into the next, continuing the residual pathway.

As is common in deep learning, it's hard to say exactly what each of these layers is doing, but we
have some general ideas: the earlier layers tend to focus on learning
lower-level features and patterns, while the later layers learn to recognize and understand
higher-level abstractions and relationships. In the context of natural language processing, the
lower layers might learn grammar, syntax, and simple word associations, while the higher layers
might capture more complex semantic relationships, discourse structures, and context-dependent meaning.

`,

    'softmax.explanation': `

The softmax operation is used as part of self-attention, as seen in the previous section, and it
will also appear at the very end of the model.

Its goal is to take a vector and normalize its values so that they sum to 1.0. However, it's not as
simple as dividing by the sum. Instead, each input value is first exponentiated.

  a = exp(x_1)

This has the effect of making all values positive. Once we have a vector of our exponentiated
values, we can then divide each value by the sum of all the values. This will ensure that the sum
of the values is 1.0. Since all the exponentiated values are positive, we know that the resulting
values will be between 0.0 and 1.0, which provides a probability distribution over the original values.

That's it for softmax: simply exponentiate the values and then divide by the sum.

However, there's a slight complication. If any of the input values are quite large, then the
exponentiated values will be very large. We'll end up dividing a large number by a very large number,
and this can cause issues with floating-point arithmetic.

One useful property of the softmax operation is that if we add a constant to all the input values,
the result will be the same. So we can find the largest value in the input vector and subtract it
from all the values. This ensures that the largest value is 0.0, and the softmax remains numerically
stable.

Let's take a look at the softmax operation in the context of the self-attention layer. Our input
vector for each softmax operation is a row of the self-attention matrix (but only up to the diagonal).

Like with layer normalization, we have an intermediate step where we store some aggregation values
to keep the process efficient.

For each row, we store the max value in the row and the sum of the shifted & exponentiated values.
Then, to produce the corresponding output row, we can perform a small set of operations: subtract the
max, exponentiate, and divide by the sum.

What's with the name "softmax"? The "hard" version of this operation, called argmax, simply finds
the maximum value, sets it to 1.0, and assigns 0.0 to all other values. In contrast, the softmax
operation serves as a "softer" version of that. Due to the exponentiation involved in softmax, the
largest value is emphasized and pushed towards 1.0, while still maintaining a probability distribution
over all input values. This allows for a more nuanced representation that captures not only the most
likely option but also the relative likelihood of other options.
`,

    'output.explanation': `

Finally, we come to the end of the model. The output of the final transformer block is passed through
a layer normalization, and then we use a linear transformation (matrix multiplication), this time without a bias.

This final transformation takes each of our column vectors from length C to length nvocab. Hence,
it's effectively producing a score for each word in the vocabulary for each of our columns. These
scores have a special name: logits.

The name "logits" comes from "log-odds," i.e., the logarithm of the odds of each token. "Log" is
used because the softmax we apply next does an exponentiation to convert to "odds" or probabilities.

To convert these scores into nice probabilities, we pass them through a softmax operation. Now, for
each column, we have a probability the model assigns to each word in the vocabulary.

In this particular model, it has effectively learned all the answers to the question of how to sort
three letters, so the probabilities are heavily weighted toward the correct answer.

When we're stepping the model through time, we use the last column's probabilities to determine the
next token to add to the sequence. For example, if we've supplied six tokens into the model, we'll
use the output probabilities of the 6th column.

This column's output is a series of probabilities, and we actually have to pick one of them to use
as the next in the sequence. We do this by "sampling from the distribution." That is, we randomly
choose a token, weighted by its probability. For example, a token with a probability of 0.9 will be
chosen 90% of the time.

There are other options here, however, such as always choosing the token with the highest probability.

We can also control the "smoothness" of the distribution by using a temperature parameter. A higher
temperature will make the distribution more uniform, and a lower temperature will make it more
concentrated on the highest probability tokens.

We do this by dividing the logits (the output of the linear transformation) by the temperature before
applying the softmax. Since the exponentiation in the softmax has a large effect on larger numbers,
making them all closer together will reduce this effect.
`,

} as const;

export type MessageKey = keyof typeof en;

type LowercaseLetter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm'
    | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';
type SlotLetter = LowercaseLetter | Uppercase<LowercaseLetter>;
type SlotCharacter = SlotLetter | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type IsSlotTail<Text extends string> = Text extends '' ? true
    : Text extends `${SlotCharacter}${infer Rest}` ? IsSlotTail<Rest> : false;
type SlotName<Name extends string> = Name extends `${SlotLetter}${infer Rest}`
    ? IsSlotTail<Rest> extends true ? Name : never
    : never;

// Match interpolate's ASCII slot names; notation such as {K, V} remains literal text.
type SlotNames<Text extends string> = Text extends `${string}{${infer Rest}`
    ? (Rest extends `${infer Name}}${string}` ? SlotName<Name> : never) | SlotNames<Rest>
    : never;

/** Require the slots named in the English message; plain messages need no arguments. */
export type MessageArguments<Key extends MessageKey> = [SlotNames<typeof en[Key]>] extends [never]
    ? [slots?: Record<string, never>]
    : [slots: Record<SlotNames<typeof en[Key]>, unknown>];

export const zhCN: Record<MessageKey, string> = {
    'page.title': '大语言模型可视化',
    'model.block.tokens': '词元',
    'model.block.tokenEmbed': '词元嵌入',
    'model.block.positionEmbed': '位置嵌入',
    'model.block.inputEmbed': '输入嵌入',
    'model.block.layerNormAggregate': '层归一化聚合: μ, σ',
    'model.block.layerNorm': '层归一化',
    'model.block.queryWeights': 'Q 权重',
    'model.block.keyWeights': 'K 权重',
    'model.block.valueWeights': 'V 权重',
    'model.block.qkvWeights': 'QKV 权重',
    'model.block.queryBias': 'Q 偏置',
    'model.block.keyBias': 'K 偏置',
    'model.block.valueBias': 'V 偏置',
    'model.block.queryVectors': 'Q 向量',
    'model.block.keyVectors': 'K 向量',
    'model.block.valueVectors': 'V 向量',
    'model.block.qkvVectors': 'QKV 向量',
    'model.block.attentionMatrix': '注意力矩阵',
    'model.block.attentionSoftmax': '注意力矩阵 Softmax',
    'model.block.valueOutput': 'V 输出',
    'model.block.valueCombined': 'V 输出拼接',
    'model.block.projectionWeights': '投影权重',
    'model.block.projectionBias': '投影偏置',
    'model.block.attentionOutput': '注意力输出',
    'model.block.attentionResidual': '注意力残差',
    'model.block.mlpWeights': 'MLP 权重',
    'model.block.mlpBias': 'MLP 偏置',
    'model.block.mlp': 'MLP',
    'model.block.mlpActivation': 'MLP 激活',
    'model.block.mlpProjectionWeights': 'MLP 投影权重',
    'model.block.mlpProjectionBias': 'MLP 投影偏置',
    'model.block.mlpResult': 'MLP 结果',
    'model.block.mlpResidual': 'MLP 残差',
    'model.block.lmHeadWeights': '语言模型头权重',
    'model.block.logits': 'Logits',
    'model.block.softmaxAggregate': 'Softmax 聚合',
    'model.block.logitsSoftmax': 'Logits Softmax',
    'model.section.embedding': '嵌入',
    'model.section.transformer': 'Transformer {index}',
    'model.section.selfAttention': '自注意力',
    'model.section.mlp': 'MLP',
    'model.section.projection': '投影',
    'model.section.head': '注意力头 {index}',
    'model.card.parameters': '参数量 = ',
    'model.input': '输入',
    'model.output': '输出',
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
    'layerNorm.introduction': `上一章得到的{inputEmbedding}矩阵，将作为第一个 Transformer 块的输入。

Transformer 块的第一步，是对这个矩阵进行_层归一化（layer normalization）_：分别对矩阵的每一列进行归一化处理。`,

    'layerNorm.stability': `归一化是训练深度神经网络时的重要步骤，有助于提高模型训练的稳定性。

由于每一列都可以单独处理，我们先关注第 4 列（{columnIndex}）。`,

    'layerNorm.normalization': '这一步的目标，是让这一列的均值变为 0、标准差变为 1。为此，先计算该列的{mean}和{standardDeviation}，再让每个元素减去均值，并除以标准差。',
    'layerNorm.affine': `对于长度为 {channels} 的列向量，我们用 E[x] 表示均值，用 Var[x] 表示_方差（variance）_。方差就是标准差的平方。为了避免除以零，计算时会加入一个很小的 ε（epsilon）项（ε = {epsilon}）。

这些统计量会用于该列的每个元素，因此我们在聚合层中计算并存储它们。

最后，对归一化后的列向量逐元素处理：先乘以对应的{weight}，再加上对应的{bias}，得到{normalized}。权重和偏置都是训练中学到的参数。`,

    'layerNorm.sequence': '对{inputEmbedding}的每一列都进行上述归一化操作，就得到{normalizedEmbedding}。接下来，它将传入_自注意力（Self-Attention）_层。',
    'layerNorm.inputEmbeddingTerm': '_输入嵌入_',
    'layerNorm.meanTerm': '均值（mean，μ）',
    'layerNorm.standardDeviationTerm': '标准差（standard deviation，σ）',
    'layerNorm.weightTerm': '权重（weight，γ）',
    'layerNorm.biasTerm': '偏置（bias，β）',
    'layerNorm.normalizedValuesTerm': '归一化后的数值',
    'layerNorm.inputEmbeddingMatrixTerm': '输入嵌入矩阵',
    'layerNorm.normalizedEmbeddingTerm': '归一化后的输入嵌入',
    'selfAttention.introduction': `自注意力（self-attention）层可以说是 Transformer 和 GPT 的核心。在这里，输入嵌入矩阵中的各列会相互“交流”。在此前的步骤和其他阶段中，各列都可以独立处理。

自注意力层由多个_注意力头（head）_组成，我们先关注其中一个。`,

    'selfAttention.qkv': `首先，为{inputEmbedding}中的每一列（共 {columns} 列）生成三个向量，分别是 Q、K、V：

{qkvList}

生成其中一个向量时，我们先进行矩阵与向量的乘法，再加上偏置。因此，每个输出单元都是输入向量各元素的线性组合，再加上偏置。以{queries}为例：取{queryWeights}中的一行，与{inputMatrix}中的一列做点积。`,

    'selfAttention.dotProduct': '_点积（dot product）_是后面会经常遇到的运算，过程很简单：将两个向量中位置对应的元素分别相乘，再把这些乘积相加。',
    'selfAttention.linearCombination': `这种简单而通用的计算方式，让每个输出元素都能受到输入向量中所有元素的影响；影响的大小由权重决定。因此，它在神经网络中非常常见。

接下来，对 Q、K、V 向量中的每个输出单元重复这一过程：`,

    'selfAttention.lookup': `Q（查询）、K（键）和 V（值）向量有什么用？它们的名称提供了线索：“键”和“值”让人联想到软件中的字典，键对应着值，而“查询”用于查找这些值。

{softwareAnalogy}

在自注意力中，返回的是多个条目的加权组合。为了确定各条目的权重，我们先计算一个 Q 向量与各个 K 向量的点积，再将这些得分归一化。随后，用每个权重乘以对应的 V 向量，最后把结果相加。

{attentionAnalogy}

来看一个具体例子：我们将从第 6 列（{queryPosition}）发起查询。`,

    'selfAttention.scores': `这里，查找表中的 {K, V} 条目来自当前位置及之前的 6 列，Q 则来自当前位置。

首先，计算当前列（{queryPosition}）的{query}与这些列的{keys}之间的点积，再把结果存入{attentionMatrix}中对应的行（{rowPosition}）。`,

    'selfAttention.causal': `点积可以用来衡量两个向量的相似程度：相似时，点积通常较大；差异较大时，点积可能较小，甚至为负数。

查询只能使用当前位置及之前的键，这就是_因果自注意力（causal self-attention）_：词元不能“看到未来”。

另外，点积结果还要除以 sqrt({scaleDimension})，其中 {vectorLength} 是 Q/K/V 向量的长度。这样的缩放可以避免过大的数值主导下一步的 Softmax 归一化。

Softmax 运算将在后面的章节中介绍。这里先记住：它会将每一行的数值归一化，使这一行的和为 1。`,

    'selfAttention.valueWeighting': '现在可以生成当前列（{queryPosition}）的输出向量了。查看{attentionMatrix}中 {rowPosition} 对应的那一行，用这一行中的每个元素分别乘以对应列的{values}中的各个元素。',
    'selfAttention.output': `将这些加权后的向量相加，就得到输出向量。因此，注意力得分较高的列所对应的 V 向量，对输出的影响更大。

了解这个过程后，我们再对所有列执行同样的操作。`,

    'selfAttention.summary': `这就是自注意力层中一个注意力头的计算过程。每一列通过比较自己的_查询向量_与其他列的_键向量_，找到相关信息，并提取对应的值。整个过程还受到因果约束：只能使用当前位置及之前的信息。
`,

    'selfAttention.normalizedInputTerm': '归一化后的输入嵌入矩阵',
    'selfAttention.queryVectorsTerm': 'Q 向量',
    'selfAttention.queryWeightTerm': 'Q 权重矩阵',
    'selfAttention.inputMatrixTerm': '输入矩阵',
    'selfAttention.queryVectorTerm': 'Q 向量',
    'selfAttention.keyVectorsTerm': 'K 向量',
    'selfAttention.attentionMatrixTerm': '注意力矩阵',
    'selfAttention.normalizedAttentionTerm': '归一化后的自注意力矩阵',
    'selfAttention.valueVectorTerm': 'V 向量',
    'selfAttention.queryLabel': '查询向量（Query vector）',
    'selfAttention.keyLabel': '键向量（Key vector）',
    'selfAttention.valueLabel': '值向量（Value vector）',
    'selfAttention.softwareTitle': '软件中的类比',
    'selfAttention.lookupLabel': '查找表：',
    'selfAttention.queryProcessLabel': '查询过程：',
    'selfAttention.attentionTitle': '自注意力',
    'selfAttention.normalizationLabel': '归一化',
    'projection.stacking': `经过自注意力计算，各个注意力头都生成了自己的输出。这些输出由 V 向量加权混合而成，混合权重由 Q 和 K 向量决定。

将各个注意力头的{outputVectors}沿向量长度方向拼接起来，即可合并它们。以时间位置 {time} 为例，3 个长度为 {headSize} 的向量，会拼成 1 个长度为 {channels} 的向量。`,

    'projection.linear': `在 GPT 中，每个注意力头内的向量长度（{headSize}）等于 {channels} / num_heads，其中 num_heads 是注意力头数。因此，把各个头的输出拼接起来后，向量长度就恢复为 {originalChannels}。

接下来进行_投影（projection）_，得到这一层的输出：对每一列进行矩阵与向量的乘法，再加上偏置。`,

    'projection.residual': '现在得到了自注意力层的输出。将它与输入嵌入逐元素相加，再传入下一阶段。图中的绿色竖直箭头表示这一步，称为_残差连接（residual connection）_，也称_残差通路（residual pathway）_。',
    'projection.summary': `与层归一化一样，残差通路有助于深度神经网络进行有效学习。

接下来，将自注意力的计算结果传入 Transformer 的下一部分：_前馈网络（feed-forward network）_。`,

    'projection.outputVectorsTerm': '输出向量',
    'mlp.introduction': `自注意力之后，Transformer 块的后半部分是_多层感知机（multi-layer perceptron，MLP）_。这里的 MLP 是一个包含两个线性层的简单神经网络。

与自注意力部分一样，向量进入 MLP 前，先进行{layerNorm}。

MLP 会独立处理每个长度为 {channels} 的列向量，依次执行：

1. 进行{expansion}并加上{expansionBias}，将向量长度扩展为 {expandedChannels}。

2. 对向量中的每个元素应用 GELU 激活函数。

3. 再进行一次{projection}并加上{projectionBias}，将向量长度恢复为 {outputChannels}。

接下来，跟踪其中一个向量的计算过程：`,

    'mlp.expansion': '首先，进行矩阵与向量的乘法，再加上偏置，把向量长度扩展为 {expandedChannels}。每个 token 始终对应一列，通道从上到下排列。',
    'mlp.activation': `接下来，对向量中的每个元素应用 GELU _激活函数（activation function）_，为模型引入_非线性（non-linearity）_。这是神经网络中的关键环节。这里使用的 GELU 与 ReLU（计算式为 {reluFormula}）形状相似，但 GELU 的曲线平滑，没有 ReLU 那样的尖锐转折。

{activationGraph}`,

    'mlp.projection': '然后，再进行一次矩阵与向量的乘法并加上偏置，将向量长度恢复为 {channels}。',
    'mlp.residual': '与前面的自注意力和投影部分一样，这里也使用残差连接：将 MLP 的输出与本节层归一化之前的输入逐元素相加。',
    'mlp.sequence': '现在，对输入中的所有列重复上述过程。',
    'mlp.summary': '至此，MLP 的计算就完成了。我们得到了这个 Transformer 块的输出，可以将它传入下一个块。',
    'mlp.layerNormTerm': '层归一化',
    'mlp.linearTransformationTerm': '线性变换',
    'mlp.biasTerm': '偏置',
    'transformer.summary': `这就是一个完整的 Transformer 块！

这些块构成了 GPT 模型的主体，并重复堆叠多次。前一个块的输出会传入下一个块，使残差通路贯穿整个堆叠结构。

与深度学习中的许多情况一样，很难准确说明每一层具体在做什么，但我们有一些大致认识：较靠前的层往往侧重于学习基础特征和模式，较靠后的层则学习识别和理解更抽象的概念与关系。在自然语言处理中，较浅的层可能学习语法、句法以及词语之间的简单关联；较深的层则可能捕捉更复杂的语义关系、篇章结构和依赖上下文的含义。`,

    'softmax.explanation': `前面介绍自注意力时，我们已经见过 Softmax 运算；它也会出现在模型的最后阶段。

Softmax 的目标是对向量中的数值进行归一化，使它们的和为 1.0。但它并不是直接把每个输入值除以总和，而是先对每个输入值计算指数函数：

  a = exp(x_1)

指数运算会让所有结果都为正数。接着，将每个指数结果除以所有指数结果的总和，所得数值的和就是 1.0。由于它们都为正，归一化后的值介于 0.0 和 1.0 之间，在输入向量的各个位置上形成一个概率分布。

因此，Softmax 的基本过程就是：先取指数，再除以总和。

不过，还需要处理一个数值问题。如果输入值很大，指数结果就会非常大。用很大的数除以更大的数，可能导致浮点运算出现问题。

Softmax 有一个有用的性质：给所有输入值加上同一个常数，输出结果不变。因此，可以先找出输入向量中的最大值，再让每个元素减去它。这样，处理后的最大值就是 0.0，而 Softmax 的结果保持不变，计算也更加稳定。

回到自注意力层，每次 Softmax 运算的输入是自注意力矩阵中的一行，但只包含对角线及其左侧的元素。

与层归一化类似，这里也会先计算并存储一些聚合值，以提高计算效率。

对每一行，我们保存该行的最大值，以及所有有效元素减去最大值后取指数的总和。之后，计算对应的输出行时，只需对每个有效元素依次执行：减去最大值、取指数、除以这个总和。

为什么叫“Softmax”？可以把只选择最大值的方式看作“硬”版本：先用 argmax 找到最大值所在的位置，再把该位置设为 1.0，其他位置设为 0.0。Softmax 则提供更平滑的分配方式：指数运算会突出较大的输入值，使其获得较高概率，同时保留所有输入位置上的概率分布。这样，结果既能反映哪个选项最有可能，也能保留其他选项的相对可能性。`,

    'output.explanation': `最后来到模型的输出端：最后一个 Transformer 块的输出先经过层归一化，再进行一次线性变换（矩阵乘法），这次不加偏置。

这次变换把每个列向量的长度从 C 变为 nvocab，也就是词表的大小。因此，每一列都会得到词表中每个词元的一个分数。这些分数称为 _logits（未归一化分数）_。

logits 的名称与_对数几率（log-odds）_有关。这里的 logits 指尚未归一化的词元分数；Softmax 会先对这些分数取指数，再归一化为概率。

把这些分数送入 Softmax，就得到概率。对每一列而言，这些概率表示模型认为词表中各个词元作为下一个词元的可能性。

这个演示模型已经学会了对 A、B、C 三种字母组成的序列进行排序，因此输出概率主要集中在正确答案上。

逐步生成序列时，我们根据最后一列的概率选择下一个要追加的词元。例如，输入序列包含 6 个词元时，就使用第 6 列的输出概率。

这一列给出的是一个概率分布，还需要从中选出一个词元作为序列的下一项。我们通过_从分布中采样（sampling from the distribution）_来选择：按各词元的概率进行随机选择。例如，概率为 0.9 的词元，每次采样时有 90% 的机会被选中。

也可以采用其他选择策略，比如每次都选概率最高的词元。

还可以用一个正的_温度（temperature）_参数调节分布的“平滑程度”。温度较高时，分布更加均匀；温度较低时，概率更集中在得分最高的词元上。

具体做法是：在应用 Softmax 之前，先将 logits（线性变换的输出）除以温度。当温度升高时，分数之间的差距会缩小，指数运算对较大分数的强调作用也会减弱。`,

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
