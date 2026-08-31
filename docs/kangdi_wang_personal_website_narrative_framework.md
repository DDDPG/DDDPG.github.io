# Kangdi Wang — Personal Website Narrative & Writing Framework

> 用途：记录个人 GitHub.io / 学术主页的完整叙述策略、写作逻辑与信息组织方法。
>
> 本文档不是个人资料库本身，而是“应该如何讲述 Kangdi Wang”的独立方法文档。未来无论更换网页设计、增加论文、更新工作经历，均可依据本框架持续维护。

---

# 0. 总体原则

个人主页的目标不是把履历完整搬到网页上，而是让一个第一次访问网站的人在短时间内形成一个稳定、准确、具有辨识度的印象：

> **Kangdi Wang is building a research programme around how machines represent, generate, and perceive sound.**

因此，整个网站的叙事重点不是：

> “我做过很多 AI、音频和工程项目。”

而应该是：

> “我长期围绕‘机器如何理解、表示、生成声音’这一问题开展研究，并逐步从音频处理推进到神经音频表示、音乐生成和多模态音频生成。”

---

# 1. 第一步：先确定“这个人是谁”

## 1.1 不从履历开始，而从身份开始

最常见的问题是主页一上来写：

- 学校
- 学位
- 实习
- 公司
- 奖项
- 技术栈

这种写法会把主页变成 CV 的 HTML 版本。

正确顺序应该是：

> **Identity → Research Focus → Representative Work → Background**

也就是说，先回答：

> “Kangdi Wang 是谁？”

再回答：

> “他在研究什么？”

最后才回答：

> “他为什么会走到这里？”

---

## 1.2 身份标签要具有“窄而准”的特点

不使用过于宽泛的：

> AI Researcher

也不只使用：

> Music Technology Researcher

更适合的第一层身份是：

> **Independent Audio AI Researcher & Builder**

原因：

- `Independent` 与 `Audio AI` 明确研究定位与领域；
- `Researcher` 建立学术研究身份；
- `Builder` 强调不仅做论文，也主导系统构建与开源项目生态（εar-LAB / DDDPG）。

然后用第二层关键词限定研究方向：

> **Neural Audio Representations · Music Generation · Multimodal Audio**

这样可以在两行内完成个人定位。

---

# 2. 第二步：找到一个贯穿整个主页的核心命题

个人主页如果只有项目列表，会缺少“为什么这些项目属于同一个人”的解释。

因此需要一句能够贯穿所有工作的核心命题：

> **Building AI systems that understand, represent, and create sound.**

这句话的作用不是介绍具体论文，而是建立“总主题”。

之后所有研究内容都能被映射进去：

- Understand → audio analysis / multimodal audio
- Represent → neural codecs / autoencoders / tokenizers
- Create → music generation / synthesis
- Reconstruct → high-fidelity audio reconstruction

---

# 3. 第三步：从零散项目中抽出“研究主线”

## 3.1 不按项目堆砌，而要建立纵向研究链

你的经历表面上看包含：

- TTS
- DSP
- Audio Engineering
- Audio Autoencoder
- Music Tokenizer
- Music Generation
- Video Dubbing
- Multimodal Generation
- Audio Software

如果直接全部罗列，很容易让访问者觉得方向发散。

因此需要重新组织为一个“研究演化路径”：

> **Audio Processing**
>
> ↓
>
> **Perceptual Reconstruction**
>
> ↓
>
> **Neural Audio Representation**
>
> ↓
>
> **Semantic Music Tokenization**
>
> ↓
>
> **Music Generation**
>
> ↓
>
> **Multimodal Audio Generation**

这一条链条是整个个人主页最重要的结构之一。

---

## 3.2 用“研究问题变化”而不是“年份变化”描述成长

不要只写：

> 2024 → 项目 A  
> 2025 → 项目 B  
> 2026 → 项目 C

更好的写法是：

> **How do we reconstruct sound faithfully?**
>
> ↓
>
> **How should sound be represented?**
>
> ↓
>
> **How can semantic music representations be learned?**
>
> ↓
>
> **How can large models generate music?**
>
> ↓
>
> **How can audio generation become multimodal?**

这样访问者会看到“问题逐渐扩大”的过程。

---

# 4. 第四步：找到个人研究的“Signature Topic”

一个好的个人主页不能只有领域标签，还应该让访问者记住一个与你绑定的具体研究主题。

目前最适合作为个人 signature 的是：

> **Perceptual + Frequency-Aware Neural Audio Representation**

原因是它可以把多个作品串起来：

- εar-VAE：perceptual reconstruction
- ear-VAE2：frequency-aware complex-spectral representation
- Duo-Tok：semantic representation
- Qwen-Music：representation → generation

因此：

> **Neural Audio Representation**

可以作为你的“中间核心层”。

它比单纯写：

> Music AI

更有研究辨识度。

---

# 5. 第五步：建立“研究作品金字塔”

不是所有项目都应该以同样的权重展示。

推荐采用四层结构。

## 5.1 第一层：个人核心研究

应该放：

- Back to Ear / εar-VAE
- Fourier is Frontier / ear-VAE2

理由：

它们最能建立你的个人研究 signature。

---

## 5.2 第二层：大规模产业研究

代表：

- Qwen-Music

它的作用不是证明“你也做过音乐生成”，而是证明：

> 你不仅能做独立研究，也参与过大规模工业级 Audio AI / Music AI 系统。

---

## 5.3 第三层：跨模态研究

代表：

- CineDub

作用是证明研究边界：

> 从纯 audio → audio-visual / multimodal generation。

---

## 5.4 第四层：协作型研究

代表：

- DUO-TOK

它用于补充：

- music tokenization
- semantic representation
- vocal–accompaniment modeling

同时正式表述必须严格遵守论文作者顺序。

---

# 6. 第六步：为每一篇论文统一写作结构

每个项目不应该写成长段论文摘要。

推荐固定成四层：

### Layer A — Title

论文正式标题。

### Layer B — Role

例如：

- First Author
- Co-First Author
- Second Author
- Co-author

### Layer C — One-line Research Description

回答：

> “这项工作到底解决了什么问题？”

例如：

> A perceptually driven neural audio autoencoder for high-fidelity music reconstruction.

### Layer D — Core Concepts

只保留 3–6 个关键概念，例如：

- Phase-aware loss
- K-weighting
- Stereo supervision
- Complex STFT
- Frequency-aware modeling

这样可以避免网页变成论文摘要数据库。

---

# 7. 第七步：让“个人贡献”与“论文正式信息”分开

这一点尤其重要。

个人主页有两种信息：

### Objective / Verifiable Information

例如：

- Author order
- Conference
- Paper title
- arXiv
- Project page

这些必须和公开论文一致。

### Personal Contribution Narrative

例如：

> contributed a core research idea

这种可以体现个人贡献，但不能用它改变正式作者身份。

因此：

> DUO-TOK：Co-author + contributed core research idea

是合理写法。

而：

> First author of DUO-TOK

是不应该使用的。

---

# 8. 第八步：把“研究经历”与“工程经历”统一起来

单纯学术主页通常容易产生一个问题：

> “只会发 paper，不会做东西。”

而你的 GitHub 项目提供了另一个维度。

因此需要刻意建立：

> **Researcher + Engineer + Builder**

的个人形象。

---

# 9. 第九步：重新解释 GitHub 的价值

GitHub 不应该只是一个 social link。

两个 GitHub 身份要分工。

## 9.1 DDDPG

定位：

> **Personal research, engineering projects, experiments, and open-source tools.**

代表：

- EAR_VAE
- EAR-Audio-Preview
- ReaperDoc
- Experimental repositories
- Personal tools

它表达：

> “我自己做什么。”

---

## 9.2 εar-LAB

定位：

> **An open research initiative exploring the future of AI for audio and music.**

它表达：

> “我的研究生态希望往哪里发展。”

于是：

> `DDDPG` = **Personal Builder Identity**

> `εar-LAB` = **Research Identity / Research Initiative**

这两个账号不是重复，而是互补。

---

# 10. 第十步：把教育背景放到“解释路径”中

教育经历不应该成为首页的主角。

尤其是：

> Robotics → Audio AI

如果没有解释，读者可能觉得方向跳跃。

因此需要一个简单的 bridge：

> My path into Audio AI began with a combination of robotics, speech synthesis, digital signal processing, and practical audio engineering.

然后再连接到：

> neural audio representations → generative audio → music AI

这样：

> Robotics

不再是“与研究不相关的本科专业”，而成为：

> Engineering foundation

的一部分。

---

# 11. 第十一步：把早期经历写成“Why Audio AI”

早期经历的作用不是证明你现在多强，而是回答：

> “为什么你会研究 Audio AI？”

可以形成：

> **Robotics → Speech Synthesis → Audio Engineering → Neural Audio → Music Generation**

这种路径。

这会让现在的研究方向具有“连续性”。

---

# 12. 第十二步：把产业经历写成“规模与落地能力”

产业经历不需要详细复述工作职责。

更好的信息是：

> **Industrial AI Research · Large-Scale Music Generation · Audio Foundation Models**

它应该回答：

> “这个研究方向是否能进入真实的大规模系统？”

Qwen-Music 正好承担这一作用。

---

# 13. 第十三步：把 CineDub 放在“研究边界拓展”的位置

CineDub 不只是另一篇 paper。

它可以承担一个很强的叙事作用：

> **From Audio Models to Multimodal Audio-Visual Generation**

这表示研究开始从：

> “声音本身怎么建模”

走向：

> “声音如何与视觉、语言、人物和场景联合建模”。

因此它适合作为研究主线向外扩展的节点。

---

# 14. 第十四步：把 εar-VAE / ear-VAE2 作为品牌核心

在所有项目中，最适合形成个人品牌的是：

> **εar-VAE → ear-VAE2**

原因不是它们一定是“最重要的论文”，而是它们具有较强的连续性：

### εar-VAE

核心理念：

> perceptual audio reconstruction

### ear-VAE2

核心理念：

> frequency-aware complex-spectral representation

因此能够形成：

> **Back to Ear → Fourier is Frontier**

这种连续研究路线。

---

# 15. 第十五步：建立“Research Philosophy”

当个人主页中已经有：

- paper
- project
- GitHub
- industry

之后，还应该有一小段回答：

> “你为什么这样研究？”

最合适的核心思想是：

> **What matters is not only what a model can optimize, but what a listener can actually perceive.**

它能把：

- psychoacoustics
- perceptual loss
- audio representation
- reconstruction
- generative audio

统一起来。

这会明显提高主页的“研究者人格”。

---

# 16. 第十六步：写作上坚持“研究问题优先”

每个项目都应优先回答：

> **Problem → Idea → Impact**

而不是：

> Model Name → 30 个技术名词 → Benchmark Numbers

推荐模板：

> **Problem:** What limitation exists?
>
> **Idea:** What new representation / architecture / objective is introduced?
>
> **Impact:** Why does this matter for audio generation or perception?

例如：

> Existing audio autoencoders optimize numerical reconstruction but may not align well with human perception.
>
> We introduce perceptually informed spectral and phase supervision.
>
> This improves high-fidelity reconstruction and provides a better representation for downstream generative modeling.

---

# 17. 第十七步：控制专业术语密度

主页不是论文。

因此：

### 用于一级标题的词

- Audio AI
- Music Generation
- Neural Audio Representation
- Generative Audio
- Multimodal Audio

### 用于项目页的词

- STFT
- Phase
- K-weighting
- Diffusion
- Tokenization
- Latent Representation

### 不适合在首页堆积

- 所有 loss
- 所有 benchmark
- 所有 framework
- 所有 library
- 所有 hyperparameters

原则：

> **首页讲思想，Research 页面讲方法，Paper 页面讲细节。**

---

# 18. 第十八步：Skill Section 不要变成简历技能墙

技术能力应该按“研究功能”组织，而不是：

> Python / C++ / PyTorch / Git / Docker / ...

更好的结构：

### Machine Learning

PyTorch · Transformers · Diffusion · Autoencoders · Representation Learning

### Audio / Speech

DSP · STFT · Neural Codecs · Music Tokenization · TTS · Singing Synthesis · ASR

### Engineering

Python · C++ · CUDA · TypeScript · Linux · Docker

### Audio Software

librosa · SpeechBrain · madmom · FFmpeg · REAPER

最终要让读者看到的不是“软件很多”，而是：

> **DSP + ML + Audio Engineering**

这才是能力结构。

---

# 19. 第十九步：页面信息的视觉权重应与个人定位一致

推荐页面权重：

### Tier 1

**Name + Audio AI Researcher & Builder**

### Tier 2

**Research Focus**

### Tier 3

**Selected Research**

### Tier 4

**Open Source / εar-LAB**

### Tier 5

**Experience / Education**

也就是说：

> 研究身份 > 研究作品 > 开源能力 > 履历背景

而不是：

> 学校 > 公司 > 实习 > 技术栈 > 最后才看到论文。

---

# 20. 第二十步：主页应该形成“三层阅读路径”

访问者可能只有不同程度的时间。

## 10 秒阅读

只应该看到：

> Kangdi Wang  
> Audio AI Researcher & Builder  
> Music Generation · Neural Audio Representation · Generative Audio

---

## 30 秒阅读

应该看到：

> 你研究什么

+ 

> 你最重要的几个项目

---

## 2 分钟阅读

应该能理解：

> 你的完整研究路线

> 你的产业经历

> 你的开源生态

> 你的研究哲学

---

# 21. 第二十一步：把 Homepage 和 CV 的职责分开

## CV

负责：

> **完整、准确、可核验**

包括：

- Education
- Experience
- Publications
- Awards
- Skills

## Personal Website

负责：

> **理解、定位、记忆**

重点：

- Research identity
- Research narrative
- Selected work
- Open-source ecosystem
- Philosophy

所以网页不应该变成 CV 的复制品。

---

# 22. 第二十二步：个人网站最终应该形成一条“因果叙事”

完整逻辑应该是：

### 1. Who

> Kangdi Wang  
> Audio AI Researcher & Builder

### 2. What

> Music Generation  
> Neural Audio Representation  
> Generative Audio

### 3. Why

> Building AI systems that understand, represent, and create sound.

### 4. Research Question

> How can machines represent and generate sound while preserving what humans actually perceive?

### 5. Signature

> Perceptual + Frequency-Aware Neural Audio Representation

### 6. Evidence

> εar-VAE / ear-VAE2 / DUO-TOK / Qwen-Music / CineDub

### 7. Ecosystem

> DDDPG + εar-LAB

### 8. Background

> Robotics → Speech / DSP → Audio AI

最终形成：

> **Person → Question → Research → Projects → Ecosystem → Background**

---

# 23. 第二十三步：最终英文表达的风格

整体语气应该：

- 学术
- 克制
- 技术性强
- 直接
- 少宣传式形容词
- 避免“passionate / innovative / revolutionary”等空泛词
- 更多使用“researches / develops / investigates / builds”

例如不写：

> I am a passionate and innovative AI researcher revolutionizing the future of music.

而写：

> I research Audio AI, with a focus on music generation, neural audio representation, and high-fidelity audio synthesis.

---

# 24. 第二十四步：避免“过度包装”

个人主页必须确保：

> **Publicly verifiable fact > personal interpretation > marketing language**

因此：

### 可以说

> First Author

如果论文确实如此。

### 可以说

> Co-First Author

如果论文如此标注。

### 可以说

> Contributed a core research idea

如果这是准确的个人贡献描述。

### 不应该说

> Led the entire project

除非有明确依据。

### 不应该说

> Founder of a research institute

如果 εar-LAB 的实际组织性质不支持这种表述。

---

# 25. 第二十五步：研究主页的“中心句”

整个网站最终可以压缩成一个逻辑：

> **I study how machines represent, generate, and perceive sound.**

然后：

> **I work on neural audio representations, music generation, and multimodal audio systems.**

然后：

> **I build systems that connect machine learning with signal processing and auditory perception.**

这三句共同构成个人主页的“核心语言系统”。

---

# 26. 第二十六步：未来新增论文的归类规则

以后出现新论文，不要简单追加到列表末尾。

先判断它属于哪一个层级：

### A. Representation

- Codec
- Autoencoder
- Tokenizer
- Latent Representation

### B. Generation

- Music Generation
- Audio Generation
- Synthesis

### C. Perception

- Psychoacoustics
- Perceptual Loss
- Quality Modeling

### D. Multimodal

- Audio-Visual
- Video Dubbing
- Speech + Sound Effects

然后再决定它应该承担：

> Core Identity / Supporting Evidence / New Research Frontier

中的哪一个角色。

---

# 27. 第二十七步：主页更新机制

未来更新时，优先更新以下内容：

1. **Research Identity**
2. **Selected Research**
3. **New Publications**
4. **Open-source Projects**
5. **Current Affiliation**
6. **Dynamic Metrics**

其中：

> Research Identity

不应因为每增加一篇论文就改变。

只有当研究方向真正发生结构性变化时才调整。

---

# 28. 最终完整叙事链

个人主页最终应该让访问者沿着下面这条路径理解你：

> **Kangdi Wang**
>
> ↓
>
> **Independent Audio AI Researcher & Builder**
>
> ↓
>
> **Neural Audio Representations + Music Generation + Multimodal Audio**
>
> ↓
>
> **Perceptual Audio Reconstruction**
>
> ↓
>
> **Frequency-Aware Neural Audio Representation**
>
> ↓
>
> **Music Tokenization & Generation**
>
> ↓
>
> **Multimodal Audio Generation**
>
> ↓
>
> **εar-VAE → DUO-TOK → Qwen-Music → CineDub → ear-VAE2**
>
> ↓
>
> **DDDPG + εar-LAB**
>
> ↓
>
> **Robotics / Systems Engineering + DSP + Practical Audio Engineering**

---

# 29. 最终写作模板

以后为新的个人主页内容撰写任何 section，都可以先问四个问题：

### Q1. 这是在回答“我是谁”吗？

如果不是，不要放进 Hero。

### Q2. 这是在回答“我研究什么”吗？

如果不是，不要占用 Research 首页核心位置。

### Q3. 这是在提供“证据”吗？

论文、项目、代码、实验、开源成果都属于证据。

### Q4. 这是在解释“为什么这些东西属于同一个人”吗？

如果是，它就是 Narrative。

---

# 30. Canonical Narrative

最终建议固定使用以下叙述作为整个网站的底层框架：

> **Kangdi Wang is an independent Audio AI researcher and builder focusing on neural audio representations, generative music modeling, and high-fidelity sound synthesis.**
>
> **His research investigates how neural networks can represent, reconstruct, and synthesize complex sound while aligning optimization objectives with human auditory perception.**
>
> **His work spans perceptual audio autoencoders (εar-VAE, ear-VAE2), semantic music tokenization (Duo-Tok), industrial music foundation models (Qwen-Music), and multimodal video dubbing (CineDub).**
>
> **Through open research and software development (DDDPG / εar-LAB), he builds generative audio systems grounded in signal processing and auditory perception.**

这四句话分别回答：

> **Who → Why → What → How**

也是整个个人主页最核心的叙事结构。
