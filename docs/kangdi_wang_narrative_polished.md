# Kangdi Wang — Polished Website Narrative & Copy Guide

> **Status:** Production-Ready & De-AI'd (2026-08-31)  
> **Target Audience:** Academic peers, hiring committees, industrial researchers, and open-source contributors.  
> **Core Tone:** Confident, matter-of-fact, technically precise, free of marketing jargon and AI clichés.

---

## 1. Core Identity & Hero Copy

### 1.1 Primary Positioning

- **Name:** Kangdi Wang (王康地 / DDDPG / Lertoon Wang)
- **Title:** Independent Audio AI Researcher & Builder
- **Research Pillars:** Neural Audio Representations · Music Generation · Multimodal Audio
- **Tagline:** Building generative audio systems grounded in perceptual representations and signal processing.
- **Canonical Website:** [https://dddpg.github.io](https://dddpg.github.io)
- **Primary Contact:** [wangkangdi21@gmail.com](mailto:wangkangdi21@gmail.com)



### 1.2 Links & Handles

- **Personal GitHub:** [github.com/DDDPG](https://github.com/DDDPG) (Personal research code, engineering tools, experimental repos)
- **Research Lab:** [github.com/Eps-Acoustic-Revolution-Lab](https://github.com/Eps-Acoustic-Revolution-Lab) (Open research initiative for audio & music AI)
- **Google Scholar:** [Scholar Profile (2M2od3sAAAAJ)](https://scholar.google.com/citations?user=2M2od3sAAAAJ)

---



## 2. Biography & About Me



### 2.1 Short Version (Homepage / Hero / Social Bio)

> I am **Kangdi Wang**, an independent Audio AI researcher and builder. My work focuses on **neural audio representations, generative music modeling, and high-fidelity sound synthesis**.
>
> I design audio architectures that bridge mathematical optimization with human auditory perception. My research spans perceptually grounded neural autoencoders (εar-VAE, ear-VAE2), semantic music tokenization (Duo-Tok), industrial music foundation models (Qwen-Music), and multimodal video dubbing (CineDub).
>
> Through **Epsilon Acoustic Revolution Lab (εar-LAB)**, I develop open-source neural audio models and research tools for the audio AI community.



### 2.2 Long Version (About / Research Page)

> I am **Kangdi Wang**, an independent Audio AI researcher and systems builder. My research focuses on how neural networks can represent, reconstruct, and generate complex sound and music.
>
> Traditional audio processing often optimizes waveform or spectral losses that correlate poorly with human auditory judgment. My work investigates perceptually informed inductive biases and frequency-domain representations—integrating psychoacoustic weighting, complex STFT phase modeling, and source-aware tokenization into generative architectures.
>
> Across the audio generation stack, my recent work includes:
>
> - **Perceptual Audio Reconstruction:** Developed **εar-VAE** (arXiv:2509.14912) and **ear-VAE2** (arXiv:2608.19843), establishing frequency-aware, complex-spectral autoencoders for 44.1kHz stereo music representation.
> - **Semantic Tokenization & Generation:** Contributed the core idea to **Duo-Tok** (arXiv:2511.20224) for source-aware vocal–accompaniment tokenization, and co-developed **Qwen-Music** (arXiv:2607.11699), a unified large-scale music generation system.
> - **Multimodal Audio Synthesis:** Co-first-authored **CineDub** (ACM Multimedia 2026), scaling video dubbing to multi-speaker dialogues with synchronized speech and ambient sound effects.
>
> My engineering foundation originates in robotics, control systems, and digital signal processing. Prior to focusing on neural audio representations, I conducted research in speech synthesis and speech acoustic modeling, alongside hands-on practice in digital audio engineering.
>
> Beyond publications, I maintain **Epsilon Acoustic Revolution Lab (εar-LAB)** to release production-grade open-source models, audio analysis tools, and research artifacts for the broader community.

---



## 3. Research Philosophy

```markdown
Standard waveform and spectral objectives often penalize imperceptible phase shifts while overlooking structural psychoacoustic phenomena. 

My research explores perceptually grounded representations and frequency-domain inductive biases. By incorporating psychoacoustic weighting (K-weighting), complex-spectral phase modeling, and source-aware tokenization into generative audio architectures, I build systems that reconstruct and synthesize sound with true perceptual fidelity.
```

---



## 4. Selected Research (Standardized 5-Paper Portfolio)

Each project is structured as: **Metadata → Problem → Approach → Outcome/Impact**.

### 1. Back to Ear: Perceptually Driven High Fidelity Music Reconstruction (εar-VAE)

- **Role:** First Author
- **Status / Link:** arXiv:2509.14912 · [Code (GitHub)](https://github.com/DDDPG/EAR_VAE)
- **Problem:** Existing neural audio autoencoders optimize mathematical loss surfaces that do not align with human auditory perception and stereo spatial perception.
- **Approach:** Introduced psychoacoustically informed K-weighting loss functions, phase-aware spectral supervision, and stereo-consistent reconstruction objectives into a continuous latent autoencoder.
- **Impact:** Achieves state-of-the-art 44.1kHz stereo music reconstruction with a compact continuous latent space, providing a strong perceptual foundation for downstream generative models.

---



### 2. Fourier is Frontier: Frequency-Aware Autoencoding for High-Fidelity Music Reconstruction (ear-VAE2)

- **Role:** First Author
- **Status / Link:** arXiv:2608.19843
- **Problem:** 1D temporal convolutions struggle to capture explicit harmonic relationships, frequency-dependent phase structures, and cross-channel stereo correlation.
- **Approach:** Formulated autoencoding directly in the 2D complex STFT domain, introducing Spec-SnakeBeta frequency modeling and a Duplex-Aware Refiner for joint magnitude, phase, and stereo modeling.
- **Impact:** Demonstrates that explicit frequency-axis modeling in the complex spectral domain significantly outperforms purely temporal backbones in high-fidelity music representation.

---



### 3. Qwen-Music: Large-Scale Unified Music Generation

- **Role:** Second Author
- **Status / Link:** arXiv:2607.11699 (Technical Report)
- **Overview:** Large-scale unified foundation model for conditional music generation.
- **Contribution:** Co-designed the full-stack architecture encompassing semantic music tokenization, autoregressive language modeling over discrete tokens, and neural audio rendering for text-to-music and cover-song synthesis.
- **Impact:** Powers high-quality end-to-end vocal and instrumental music generation at industrial scale.

---



### 4. CineDub: Scaling End-to-End Video Dubbing to Multi-Speaker Dialogues with Coherent Sound Effects

- **Role:** Co-First Author
- **Venue / Link:** ACM Multimedia 2026 · [Project Page](https://cinedub2026.github.io/)
- **Problem:** Existing video dubbing pipelines rely on cascaded TTS, translation, and Foley retrieval, causing severe audio-visual desynchronization and acoustic mismatch.
- **Approach:** Designed an end-to-end multimodal diffusion framework that conditions on video frames and dialogue transcripts to jointly generate expressive multi-speaker speech and synchronized ambient sound effects.
- **Impact:** Establishes a unified paradigm for movie-scale multimodal audio-visual generation.

---



### 5. DUO-TOK: Dual-Track Semantic Music Tokenizer for Vocal-Accompaniment Generation

- **Role:** Co-author (Contributed Core Research Idea)
- **Status / Link:** arXiv:2511.20224
- **Problem:** Monolithic music tokenizers entangle vocal melodies and instrumental accompaniment, limiting controllability in downstream generative models.
- **Approach:** Proposed a source-aware dual-codebook architecture that factorizes musical audio into independent vocal and accompaniment semantic token streams with latent diffusion decoding.
- **Impact:** Enables fine-grained structural control and source-separated generation in large-scale autoregressive music systems.

---



## 5. Background & Trajectory Bridge

```markdown
### Technical Foundation & Trajectory

My research trajectory stems from a progression across systems engineering, signal processing, and machine learning:

1. **Robotics & Systems Engineering:** Built a core foundation in control systems, dynamic modeling, mathematics, and digital signal processing.
2. **Speech & Audio Processing:** Researched speech synthesis and acoustic modeling, investigating acoustic feature extraction and waveform generation.
3. **Audio Engineering Practice:** Developed practical expertise in professional DAW workflows (REAPER), acoustic analysis, and DSP algorithms.
4. **Neural Audio & Generative AI:** Synthesized these disciplines into neural audio representation learning—progressing from perceptual autoencoders (εar-VAE series) to large-scale generative music models (Qwen-Music) and multimodal audio synthesis (CineDub).
```

---



## 6. Open Source & Engineering Identity



### 6.1 Organization Matrix

- **DDDPG (Personal Builder):**  
Houses personal research prototypes, production tools, and DSP utilities.  
*Key Projects:* `EAR_VAE` (PyTorch implementation of perceptual autoencoder), `EAR-Audio-Preview` (VS Code audio spectrogram analysis & preview extension), `ReaperDoc` (knowledge base and parser for REAPER `.RPP` project structures).
- **Epsilon Acoustic Revolution Lab / εar-LAB (Research Initiative):**  
An open research initiative exploring neural representations, psychoacoustic inductive biases, and generative models for sound and music.

---



## 7. Technical Skills & Competencies

Organized by functional competence rather than flat tool listing:

- **Deep Generative Modeling:** Latent Diffusion Models, Autoregressive Transformers, Neural Autoencoders (VAE/GAN), Representation Learning, Discrete Vector Quantization (SimVQ, RVQ).
- **Audio Signal Processing & Perception:** Complex STFT & Phase Modeling, Psychoacoustic Weighting (K-weighting, Bark/Mel scales), Neural Audio Codecs, Speech & Singing Synthesis, Music Information Retrieval (MIR).
- **Engineering & Systems:** Python, PyTorch, C++, CUDA, TypeScript, Linux, Git, Docker, FFmpeg, librosa, REAPER API.

