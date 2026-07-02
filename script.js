// Falling hearts and flowers animation
function createFallingItem() {
    const items = ['❤️', '💕', '🌹', '🌸', '💖', '🧡', '💗', '✨'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    const fallingItem = document.createElement('div');
    fallingItem.className = 'falling-item';
    fallingItem.textContent = randomItem;
    
    const randomX = Math.random() * window.innerWidth;
    fallingItem.style.left = randomX + 'px';
    fallingItem.style.top = '-50px';
    
    const duration = Math.random() * 3 + 4; // 4-7 seconds
    fallingItem.style.animationDuration = duration + 's';
    
    document.querySelector('.falling-container').appendChild(fallingItem);
    
    setTimeout(() => fallingItem.remove(), duration * 1000);
}

// Create falling items every 300ms
setInterval(createFallingItem, 300);

// Envelope interaction
const envelope = document.getElementById('envelope');
const letterSection = document.getElementById('letterSection');
const quizSection = document.getElementById('quizSection');
const finalMessage = document.getElementById('finalMessage');
const btnNext = document.getElementById('btnNext');
const btnRestart = document.getElementById('btnRestart');
const yesNoButtons = document.getElementById('yesNoButtons');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const noMessage = document.getElementById('noMessage');
const btnTryAgain = document.getElementById('btnTryAgain');
const envelopeSection = document.querySelector('.envelope-section');
const quizForm = document.getElementById('quizForm');

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
        envelope.style.pointerEvents = 'none';
        envelopeSection.querySelector('.envelope-hint').style.display = 'none';
        yesNoButtons.style.display = 'flex';
    }, 600);
});

// YES Button
btnYes.addEventListener('click', () => {
    yesNoButtons.style.display = 'none';
    envelopeSection.style.display = 'none';
    letterSection.style.display = 'block';
});

// NO Button
btnNo.addEventListener('click', () => {
    yesNoButtons.style.display = 'none';
    noMessage.style.display = 'block';
});

// Try Again Button
btnTryAgain.addEventListener('click', () => {
    envelope.classList.remove('open');
    envelope.style.pointerEvents = 'auto';
    noMessage.style.display = 'none';
    envelopeSection.querySelector('.envelope-hint').style.display = 'block';
});

// Go to quiz
btnNext.addEventListener('click', () => {
    letterSection.style.display = 'none';
    quizSection.style.display = 'block';
});

// Quiz submission
quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateScore();
});

// Quiz answers (jawaban yang benar)
const correctAnswers = {
    q1: 'frans',
    q2: '29 maret 2026',
    q3: 'membuat cerita',
    q4: '3 bulan',
    q5: 'diriku'
};

// Calculate score
function calculateScore() {
    let correctCount = 0;

    // Check each answer (case-insensitive, trim whitespace)
    for (let i = 1; i <= 5; i++) {
        const userAnswer = document.getElementById(`q${i}`).value.toLowerCase().trim();
        const correctAnswer = correctAnswers[`q${i}`].toLowerCase().trim();
        
        if (userAnswer === correctAnswer) {
            correctCount++;
        }
    }

    // Calculate score
    let score = 0;
    let message = '';

    if (correctCount === 5) {
        score = 100;
        message = '🤍 Wow! Kamu jawab SEMUA dengan benar! Aku tahu kamu benar-benar kenal aku dan sayang sama aku. Ini adalah score tertinggi! Aku sangat sayang banget sama kamu! 💚';
    } else if (correctCount === 4 || correctCount === 3) {
        score = 85;
        message = '💚 Bagus! Kamu jawab ' + correctCount + ' pertanyaan dengan benar. Kamu memang sayang sama aku. Ada yang kamu lupa, tapi overall kamu masih menggemaskan kok! 💕';
    } else if (correctCount <= 2) {
        score = 65;
        message = '💔 Hmm, kamu hanya jawab ' + correctCount + ' pertanyaan dengan benar. Kayaknya kamu belum terlalu kenal aku atau lagi lupa? Ayoo, kita habiskan lebih banyak waktu bersama jadi kamu lebih kenal aku! 🥺';
    }

    // Show result
    showQuizResult(score, message, correctCount);
}

// Show quiz result
function showQuizResult(score, message, correctCount) {
    quizSection.style.display = 'none';
    finalMessage.style.display = 'block';
    
    document.getElementById('scoreValue').textContent = score;
    
    const scoreMessageDiv = document.getElementById('scoreMessage');
    scoreMessageDiv.innerHTML = `
        <p class="score-text">${message}</p>
        <p class="correct-count">Jawaban Benar: ${correctCount} / 5</p>
    `;

    // Add score class for styling
    const scoreCircle = document.querySelector('.score-circle');
    scoreCircle.className = 'score-circle ';
    if (score === 100) {
        scoreCircle.classList.add('score-perfect');
    } else if (score >= 80) {
        scoreCircle.classList.add('score-good');
    } else {
        scoreCircle.classList.add('score-low');
    }
}

// Restart button
btnRestart.addEventListener('click', () => {
    location.reload();
});
