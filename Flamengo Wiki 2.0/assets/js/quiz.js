const correctAnswers = {
    q1: '1895',
    q2: 'Maracanã',
    q3: '3',
    q4: 'Zico',
    q5: '1980',
    q6: '37',
    q7: 'Gabigol'
};

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('change', function() {
        const selectedAnswer = card.querySelector('input[type="radio"]:checked');
        const feedback = card.querySelector('.feedback');
        if (selectedAnswer) {
            const isCorrect = selectedAnswer.value === correctAnswers[selectedAnswer.name];
            feedback.textContent = isCorrect ? 'Resposta correta!' : `Resposta errada! A resposta correta é: ${correctAnswers[selectedAnswer.name]}`;
            feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
