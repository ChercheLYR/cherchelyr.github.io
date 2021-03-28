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
Where $C_{n,m}$ is a constant(If we fix $m$ and $n$). That is $F(x)$ is discontinuous at all points $x=r_n$. 

$(\#)$



&emsp; (b)Consider next
$$
F(x)=\sum_{n=1}^{\infty} 3^{-n}g(x-r_n)
$$
where $g(x)=\sin{\dfrac{1}{x}}$ when $x\neq0$, and $g(0)=0$. Then $F$ is integrable, discontinuous at each $x=r_n$, and fails to be monotonic in any subinterval of $[0,1]$.

Proof: 

&emsp; Note that $g(x)$ is bounded, and the geometric series $\sum 3^{-n}$ is convergence. So $F(x)$ is bounded. 

Next, we discuss the integrability of $F(x)$.  Denote 
$$
\mathcal{U}=\sum_{j=1}^{N}{\left\[\sup_{x_{j-1} \leq x \leq x_j}\left\{\sum_{n=1}^{\infty} 3^{-n}g(x-r_n)\right\}\right\](x_j-x_{j-1})}
$$

$$
\mathcal{L}=\sum_{j=1}^{N}{\left\[\inf_{x_{j-1} \leq x \leq x_j}\left\{\sum_{n=1}^{\infty} 3^{-n}g(x-r_n)\right\}\right\](x_j-x_{j-1})}
$$

Then,
$$
\mathcal{U-L}=\sum_{j=1}^{N}{\omega_j(x)(x_j-x_{j-1})}
$$

$$
\begin{align}
\omega_j(x)&=\sup_{x_1,x_2\in[x_{j-1},x_{j}]}{\left|F(x_1)-F(x_2)\right|}\\
&=\sum_{n=1}^{\infty}{3^{-n}\sup_{x_1,x_2\in[x_{j-1},x_{j}]}}{\left|g(x_1-r_n)-g(x_2-r_n)\right|}
\end{align}
$$

So, we prove that there is at most countable $\omega_j(x) > 0$ as $N\to \infty$. 









&emsp;(c) The original example of Riemann is the function
$$
F(x)=\sum_{n=1}^{\infty} \dfrac{(nx)}{n^2}
$$
where $(x)=x$ for $x \in (-\dfrac{1}{2},\dfrac{1}{2}]$, and $(x)$ is continued to $\mathbb{R}$ by periodicity, that is, $(x+1)=(x)$. It can be shown that $F$ is discontinuous whenever $x=\dfrac{m}{2n}$, where $m,n\in \mathbb{Z}$ with $m$ odd and $n \neq 0$.

Proof: 



### Problem 2

&emsp; Let $D_N$ denote the Dirichlet kernel
$$
D_N(\theta)=\sum_{k=-N}^{N}e^{ik\theta}=\dfrac{\sin\left(N+\dfrac{1}{2} \theta\right)}{\sin\dfrac{\theta}{2}}
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

&emsp; Proof:

&emsp; We calculate $L_N$ straitly:
$$
\begin{align}
  \int_{-\pi }^{\pi }{\left| {{D}_{N}}\left( x \right) \right|dx}&=2\int_{0}^{\pi }{\left| {{D}_{N}}\left( x \right) \right|dx} \\ 
 & =2\int_{0}^{\pi }{\left| \frac{\sin \left( N+\frac{1}{2} \right)x}{\sin \frac{x}{2}} \right|dx} \\ 
 & \ge 4\int_{0}^{N\pi }{\left| \frac{\sin x}{x} \right|dx} + O(1)\\ 
 & =4\sum\limits_{k=0}^{N-1}{\int_{k\pi }^{\left( k+1 \right)\pi }{\left| \frac{\sin x}{x} \right|dx}} + O(1)\\ 
 & \ge 4\sum\limits_{k=1}^{N-1}{2\frac{1}{k+1}} +O(1) \\ 
 & \ge C\log N  
\end{align}
$$
The last inequality is used Euler's formula
$$
\sum_{k=1}^{n}{\dfrac{1}{k}}=\log n + \gamma_n
$$
Where $\gamma_n$ is Euler constant. 

&emsp; A more careful estimate gives
$$
L_N \ge \dfrac{4}{\pi^2} \log N +O(1)
$$


&emsp; (b)Prove the following as consequence: for each $n\geq 1$, there exists a continuous function $f_n$ such that $\left|f_n \right|<1$ and $\left| S_n(f_n)(0)\right| \geq c' \log n$. 









