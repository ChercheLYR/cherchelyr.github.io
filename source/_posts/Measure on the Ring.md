---
title: Measure on the Ring
date: 2021-04-01 22:25:11
tags:
  - Real Analysis
  - Definition
  - Theorem
categories: Real Analysis
---

**Definition 1**:

Let $X$ is a fixed set(or a Basic Space), and denote $\mathcal{E} := \left\{ E:E\subset X \right\}$. Call $\mathcal{E}$ is a **set class** on $X$. 



**Definition 2:**

Let $\mathcal{E}$ is a set class on $X$, and if its elements satisfy:

$\forall E_1,E_2 \in \mathcal{E}$, have $E_1 \cup E_2 \in \mathcal{E}$ and $E_1-E_2 \in \mathcal{E}$, then we called $\mathcal{E}$ is a **Ring** on $X$ and denote: $\mathcal{R}$. 

In particular, if we have $X \in \mathcal{R}$, we called $\mathcal{R}$ is a $\sigma-$**Ring** on $X$. 



**Definition 3:**

Let $\mathcal{E}$ is a set class on $X$, and define the mapping from  $\mathcal{E}$  to $X$: 
$$
\mu : \mathcal{E}\to \mathbb{R}
$$
then, called $\mu$ is **set function** on $\mathcal{E}$. 



**Definition 4:**

Let $\mathcal{R}$ is a Ring on $X$, and we define the set function $\mu : \mathcal{R}\to \mathbb{R}$, and satisfied:

i>. $\mu (\varnothing) = 0$ 

ii>. (Non-negative) $\forall E \in \mathcal{R}$, has $\mu (E) \ge 0$

iii>.(Additivity) $E_n \in \mathcal{R}$, $n=1,2,...$, and $\forall E_i \cap E_j=\varnothing (i \ne j)$, have:
$$
\mu \left(\bigcup_{n=1}^{\infty}E_n \right) =\sum_{n=1}^{\infty}\mu(E_n)
$$
then, we called $\mu$ is a **measure** on $\mathcal{R}$. 

**Theorem**

If  $\mathcal{R}$ is a Ring on $X$, and $\mu$ is a **measure** on $\mathcal{R}$, then it has:

&emsp; i>. (Limited additivity) If $E_1,E_2,...,E_n \in \mathcal{R}$, and $\forall E_i \cap E_j=\varnothing (i \ne j)$,have:
$$
\mu \left(\bigcup_{i=1}^{n}E_n \right) =\sum_{i=1}^{n}\mu(E_n)
$$
&emsp; ii>. (Monotonicity) If $E_1,E_2 \in \mathcal{R}$, and $E_1\subset E_2$, then 
$$
\mu(E_1) \le \mu(E_2)
$$
&emsp; iii>. (Reducibility) If $E_1,E_2 \in \mathcal{R}$, $E_1\subset E_2$, and $\mu(E_1) \le \infty$, then
$$
\mu(E_2-E_1)=\mu(E_2)-\mu(E_1)
$$
&emsp; iv>. (Secondary additivity) If $E_n,E \in \mathcal{R}$, $n=1,2,...$, and $E\subset \bigcup_{n=1}^{\infty}E_n$, then
$$
\mu(E) \le \sum_{n=1}^{\infty}\mu(E_n)
$$
&emsp; v>. If $E_n \in \mathcal{R}$, $ n=1,2,...$, $E_1\subset E_2\subset \cdot \cdot \cdot ,$ and $\bigcup_{n=1}^{\infty}E_n \in \mathcal{R}$, then
$$
\mu \left(\bigcup_{n=1}^{\infty}E_n \right) =\lim_{n\to \infty}\mu(E_n)
$$
&emsp; vi>. If $E_n \in \mathcal{R}$, $ n=1,2,...$, $E_1\supset E_2\supset \cdot \cdot \cdot ,$ $\bigcap_{n=1}^{\infty}E_n \in \mathcal{R}$, and $\exists E_n$ such that $\mu(E_m) < \infty$, then
$$
\mu \left(\bigcap_{n=1}^{\infty}E_n \right) =\lim_{n\to \infty}\mu(E_n)
$$
In addition, if $\mathcal{R}$ is a $\sigma \text{-Ring}$, we have:

&emsp; vii>. If $E_n \in \mathcal{R}$, $ n=1,2,...$, then 
$$
\mu\left(\lim\inf_{n}E_n\right) \le \lim\inf_{n}\mu(E_n)
$$
&emsp; viii>. If $E_n \in \mathcal{R}$, $ n=1,2,...$, and $\exists k \in \mathbb{N}$, such that $\bigcup_{n=k}^{\infty}E_n < \infty$, then
$$
\mu\left(\lim\sup_{n}E_n\right) \ge \lim\sup_{n}\mu(E_n)
$$
&emsp; ix>. If $E_n \in \mathcal{R}$, $ n=1,2,...$, $\lim E_n$ exists and $\exists k \in \mathbb{N}$ such that $\bigcup_{n=k}^{\infty}E_n < \infty$, then
$$
\mu\left(\lim_{n\to \infty}E_n\right) = \lim_{n\to \infty}\mu(E_n)
$$
&emsp; x. If $E_n \in \mathcal{R}$, $ n=1,2,...$, and $\exists k \in \mathbb{N}$ such that $\sum_{n=k}^{\infty}\mu(E_n) < \infty$, then
$$
\mu\left(\lim\sup_{n}E_n\right) = 0
$$
