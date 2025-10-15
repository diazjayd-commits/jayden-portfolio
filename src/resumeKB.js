const facts = [
{ q: 'name', answer: 'Your name is Jayden Diaz.' },
{ q: 'skills', answer: 'You have skills in Windows 10/11, macOS, Active Directory, Microsoft 365, Intune, ManageEngine, and troubleshooting.' },
{ q: 'languages', answer: 'You speak English fluently and are learning technical scripting languages such as JavaScript and Bash.' },
{ q: 'experience', answer: 'You worked as a UX Desktop Support Technician at Kean University (2024–Present) and a Sales Associate at The Home Depot (2022–2025).' },
{ q: 'school', answer: 'You study at Kean University in Union, New Jersey.' },
{ q: 'courses', answer: 'Relevant courses include IT Data Management, IT Project Management, Web Client Side Programming, and Switches and Routers.' }
];


function toVec(text) {
return text.toLowerCase().split(/\s+/).reduce((m, w) => ((m[w] = (m[w] || 0) + 1), m), {});
}


export default facts.map(f => ({ ...f, vector: toVec(f.answer + ' ' + f.q) }));
