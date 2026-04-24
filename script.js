const timelineData = [
    { year: "2017", title: "Attention Is All You Need", description: "Introduced the transformer architecture (Vaswani et al.)" },
    { year: "2017", title: "Neural Machine Translation", description: "Learning to align and translate using attention mechanisms" },
    { year: "2018", title: "GPT", description: "Improving language understanding using generative pre-training (Radford et al.)" },
    { year: "2020", title: "GPT-3", description: "Language models are few-shot learners (Brown et al.)" },
    { year: "2022", title: "Instruction Tuning", description: "Training models to follow instructions effectively" },
    { year: "2023", title: "Toolformer", description: "Language models can teach themselves to use tools (Schick, Yu)" },
    { year: "2021", title: "LoRA", description: "Efficient adaptation of large language models (Hu, Shen et al.)" }
];

// Sort data chronologically
timelineData.sort((a, b) => a.year - b.year);

const container = document.getElementById("timeline");
const progressBar = document.getElementById("progress-bar");

// Build the UI
timelineData.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    card.innerHTML = `
        <div class="year">${item.year}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    `;
    container.appendChild(card);
});

// Animation on Scroll Logic
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => observer.observe(card));

// Update Progress Bar
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.height = `${scrollPercent}%`;
});