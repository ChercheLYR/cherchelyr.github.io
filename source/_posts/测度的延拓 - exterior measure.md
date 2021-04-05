---
title: 测度的延拓 - Exterior Measure
date: 2021-04-05 23:50:11
tags:
  - Real Analysis
  - Definition
  - Theorem
categories: Real Analysis
---
&emsp; **首先我们给出一个总的思路：(或者说前提小结，也可以说是摘要)**

&emsp; 我们从集 $X$ 的某些子集所成的环 $\mathscr{R}$, 以及环  $\mathscr{R}$ 上的测度 $\mu$ 出发. 根据环 $\mathscr{R}$ 做集类 $\mathscr{H(R)}$, 它是一个 $\sigma-$环. 然后由测度 $\mu$, 在 $\mathscr{H(R)}$ 上作出由 $\mu$ 引出的外测度 $\mu ^{*}$, $\mu^*$ 是 $\mu$ 的“延拓”, 即对于 $\forall E \in \mathscr{R}$, 有 $\mu^*(E)=\mu(E)$. 外测度  $\mu^*$ 具有测度的一部分性质, 但不一定有可加性, 一般来说只有次可加性. 但是, 我们可以利用 $Caratheodory$ 条件分出了一类集, 即 $\mu^*-$ 可测集的全体 $\left(\mathscr{R}^* \subset \mathscr{H(R)} \right)$, 是一个 $\sigma-$环. 而且, $\mathscr{R}$ 中的元素都是 $\mu^*-$ 可测集. 如果把外测度限制在 $\mathscr{R}^*$ 上, 可列可加性成立, 因此 $\mu^*$ 是 $\mathscr{R}^*$ 上的测度, 而且是完全测度. 



**定义 1：** 设 $\mathscr{R}$ 是集 $X$ 上的环, 我们定义这样的集：
$$
\mathscr{H(R)} = \left\{ E: E \subset \bigcup_{i=1}^{\infty}E_i, E_i \in \mathscr{R} \right\}
$$
显然, $\mathscr{H(R) \supset R}$ 是一个 $\sigma-$环. $\mathscr{H(R)}$ 中的每一个元素都能被 $\mathscr{R}$ 中的可列个元素的并覆盖. 



**定义 2：**  设 $\mu^*$ 是定义在 $\mathscr{H(R)}$ 上的集函数, $\mu^*: \mathscr{H(R) \to R}$ :
$$
\mu^*(E) = \inf \left\{ \sum_{i=1}^{\infty}E_i : E\subset \bigcup_{i=1}^{\infty}E_i, E_i \in \mathscr{R}\right\}
$$
称 $\mu^*$ 为由测度 $\mu$ 诱导出的**外测度**. 



**定义 3：**  $(Carathodory\text{条件})$ 设 $E \in \mathscr{R^*}$ 及 $F \in \mathscr{H(R)}$, 若成立：
$$
\mu^*(F) = \mu^*(F\cap E) + \mu^*(F-E)
$$
则称, 集 $E$ 满足 $Carathodory\text{条件}$. 

 

**定义 4：**  设 $\mu$ 是环 $\mathscr{R}$ 上的测度, $E \in \mathscr{R}$. 如果有 $\mu(E) = 0$ 就称 $E$ 是 **$\mu-$零集**, 简称零集(零测集). 如果 $\mathscr{R}$ 中任何 $\mu-$零集的任何子集都必定属于环 $\mathscr{R}$, 那么称 $\mu$ 是一个**完全测度**.  



**定理 ：**  $\mu^*-$ 可测集的全体 $\mathscr{R^*}$ 是一个 $\sigma-$环, 并且 $\mu^*$ 是 $\mathscr{R^*}$ 上的测度.



有一些很重要的证明技巧, 充分利用下确界的定义, 需要掌握







