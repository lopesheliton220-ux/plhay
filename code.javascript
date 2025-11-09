     let tabuleiro = ['', '', '', '', '', '', '', '', ''];
     let jogadorAtual = 'X';
     let jogoAtivo = true;

     function iniciarJogo() {
         tabuleiro = ['', '', '', '', '', '', '', '', ''];
         jogadorAtual = 'X';
         jogoAtivo = true;
         renderizarTabuleiro();
     }

     function renderizarTabuleiro() {
         const tabuleiroElement = document.getElementById('tabuleiro');
         tabuleiroElement.innerHTML = '';
         tabuleiro.forEach((celula, index) => {
             const celulaElement = document.createElement('div');
             celulaElement.classList.add('celula');
             celulaElement.textContent = celula;
             celulaElement.addEventListener('click', () => fazerJogada(index));
             tabuleiroElement.appendChild(celulaElement);
         });
     }

     function fazerJogada(index) {
         if (tabuleiro[index] !== '' || !jogoAtivo) return;
         tabuleiro[index] = jogadorAtual;
         verificarVencedor();
         jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
         renderizarTabuleiro();
     }

     function verificarVencedor() {
         const combinacoesVencedoras = [
             [0, 1, 2], [3, 4, 5], [6, 7, 8],
             [0, 3, 6], [1, 4, 7], [2, 5, 8],
             [0, 4, 8], [2, 4, 6]
         ];
         for (let combinacao of combinacoesVencedoras) {
             const [a, b, c] = combinacao;
             if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
                 alert(`Jogador ${tabuleiro[a]} venceu!`);
                 jogoAtivo = false;
                 return;
             }
         }
         if (!tabuleiro.includes('')) {
             alert('Empate!');
             jogoAtivo = false;
         }
     }

     // Iniciar o tabuleiro ao carregar a página
     renderizarTabuleiro();
     