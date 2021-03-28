---
title: Two problems of Chapter 2
date: 2021-03-28 12:03:01
tags:
  - Basic Propertoes of Fourier Series
  - Dirichlet kernel
categories: Fourier Analysis
---

# Fourier Analysis

### Problem 1

&emsp; One can construct Riemann integrable functions on $[0,1]$ that have a dense set of discontinuities as follows.

&emsp;(a) Let $f(x)=0$, when $x<0$, and $f(x)=1$ if $x\geq0$. Choose a countable dense sequence $\{r_n\}$ in $[0,1]$. Then, show that function
$$
F(x)=\sum_{n=1}^{\infty} \dfrac{1}{n^2} f(x-r_n)
$$
is integrable and has discontinuities at all points of the sequence $\{r_n\}$

Proof:

&emsp;Step one: Note that $F(x)$ is monotonic and bounded for the definition of $f$,and $F(x) \leq$ Euler's series, so that it has countable discontinuities at most.  Hence, $F(x)$ is integrable on $[0,1]$. 

&emsp; Step two: We consider that $F(r_n)$. $\{r_n\}$ is dense in $[0,1]$ means $\forall \varepsilon >0,$ $ x \in [0,1]$, $\exists n \in \mathbb{N}$ such that $|x-r_n|<\varepsilon$. Or $\forall x_1,x_2 \in [0,1]$, $\exists n \in \mathbb{N}$ such that $r_n$ is between $x_1$ and $x_2$. Fixed $x_2 = r_n$, $n=1,2,3,...$ and consider that:
$$
|F(x)-F(r_n)|
$$
$\forall \delta > 0$, when $|x-r_n| < \delta$, we can find $r_m$ is between $x$ and $r_n$. Due to $F(x)$ is monotonic, we have 
$$
|F(x)-F(r_n)|>|F(r_m)-F(r_n)|=\left |\sum_{k=1}^{\infty} \dfrac{1}{k^2}[f(r_n-r_k)-f(r_m-r_k)]\right | =C_{n,m}>0
$$
$C_{n,m}$ is a constant(If we fixed $m$ and $n$). That is $F(x)$ is discontinuous at all points $x=r_n$. 

$(\#)$



&emsp; (b)Consider next
$$
F(x)=\sum_{n=1}^{\infty} 3^{-n}g(x-r_n)
$$
where $g(x)=\sin{\dfrac{1}{x}}$ when $x\neq0$, and $g(0)=0$. Then $F$ is integrable, discontinuous at each $x=r_n$, and fails to be monotonic in any subinterval of $[0,1]$.

Proof: 

&emsp; Note that $g(x)$ is bounded, and the geometric series $\sum 3^{-n}$ is convergence. So $F(x)$ is bounded. 





&emsp;(c) The original example of Riemann is the function
$$
F(x)=\sum_{n=1}^{\infty} \dfrac{(nx)}{n^2}
$$
where $(x)=x$ for $x \in (-\dfrac{1}{2},\dfrac{1}{2}]$, and $(x)$ is continued to $\mathbb{R}$ by periodicity, that is, $(x+1)=(x)$. It can be shown that $F$ is discontinuous whenever $x=\dfrac{m}{2n}$, where $m,n\in \mathbb{Z}$ with $m$ odd and $n \neq 0$.

Proof: 



### Problem 2

&emsp; Let $D_N$ denote the Dirichlet kernel
$$
D_N(\theta)=\sum_{k=-N}^{N}e^{ik\theta}=\dfrac{\sin(\dfrac{N+1}{2} \theta)}{\sin\dfrac{\theta}{2}}
$$


and define
$$
L_N=\dfrac{1}{2\pi}\int_{-\pi}^{\pi}\left|D_N(\theta)\right|d\theta
$$
&emsp; (a)Prove that 
$$
L_N \geq c\log N
$$
for some constant $c>0$. 

&emsp; (b)Prove the following as consequence: for each $n\geq 1$, there exists a continuous function $f_n$ such that $\left|f_n \right|<1$ and $\left| S_n(f_n)(0)\right| \geq c' \log n$. 


